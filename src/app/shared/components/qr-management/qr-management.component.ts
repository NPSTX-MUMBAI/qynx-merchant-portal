import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NpstImage } from '../../utils/images';
import { log } from 'console';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-qr-management',
  templateUrl: './qr-management.component.html',
  styleUrl: './qr-management.component.scss',
})
export class QRManagementComponent implements OnInit {
  @ViewChild('templateRef') templateRef!: TemplateRef<any>;
  header = [
    { label: 'Created On', code: 'uploadedOn' },
    { label: 'Merchant Name', code: 'merchanName' },
    { label: 'VPA', code: 'vpa' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Branch', code: 'branch' },
    { label: 'Assigned Device', code: 'status' },
    { label: 'Status', code: 'status' },
    {
      label: 'Action',
      code: 'action',
      listOfAction: [
        { label: 'View', action: 'viewQr' },
        { label: 'Download', action: 'download' },
        { label: 'Disable', action: 'disable' },
      ],
    },
  ];

  disableQrHeader = [
    { label: 'Created On', code: 'uploadedOn' },
    { label: 'Merchant Name', code: 'merchanName' },
    { label: 'VPA', code: 'vpa' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Branch', code: 'branch' },
    { label: 'Assigned Device', code: 'status' },
    { label: 'Status', code: 'status' },
    {
      label: 'Action',
      code: 'action',
      listOfAction: [{ label: 'Enable', action: 'enable' }],
    },
  ];

  tableConfig = {
    title: true,
    footer: true,
    export: true,
    filter: true,
  };

  qrTemplate = NpstImage.qrTemplate;
  dataList: any[] = [];
  disableQrRemark: FormGroup;
  qrDetails: any;

  isVisible: boolean = false;
  constructor(
    private modal: NzModalService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.disableQrRemark = this.fb.group({
      remark: ['', Validators.required],
    });
    this.dataList = this.generateData();
  }

  viewQr(data: any) {
    console.log('vieQR', data);
    this.isVisible = true;
    this.qrDetails = data;
  }

  download(data: any) {
    console.log('download', data);
  }

  disable(data) {
    this.showConfirm(data);
    // this.dataList = this.dataList.filter((x) => x.accountNo != data.accountNo);
  }
  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {}

  functionHandler(action, data) {
    if (typeof this[action] === 'function') {
      this[action](data); // Dynamically call the function based on the action name
    }
  }

  generateData() {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        merchanName: ` NPST Merchant ${i * 2}`,
        vpa: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        ifsc: `SBIN${Math.floor(Math.random() * 40000)}`,
        mobileNo: `916373722${i}`,
        accountNo: `${Math.floor(Math.random() * 9000000009)}`,
        mcc: `${Math.floor(Math.random() * 1000)}`,
        branch: `Mumbai ${Math.floor(Math.random() * 1000)} `,
        uploadedOn: `${new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() *
              (new Date(2024, 11, 31).getTime() -
                new Date(2020, 0, 1).getTime())
        )}`,
        status: 'YES',
        expand: false,
      });
    }
    return data;
  }
  showConfirm(data): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to Disable these QR?</i>',
      nzContent: this.templateRef,
      nzOnOk: () => {
        return new Promise((resolve, reject) => {
          if (this.disableQrRemark.valid) {
            this.disableQr(data); // Proceed if the form is valid
            resolve(true); // Close the modal
          } else {
            Object.values(this.disableQrRemark.controls).forEach((control) => {
              if (control.invalid) {
                control.markAsDirty();
                control.updateValueAndValidity({ onlySelf: true });
              }
            });
            reject(false);
          }
        });
      },
      nzOkText: 'Submit',
      nzCentered: true,
    });
  }

  disableQr(data) {
    if (this.disableQrRemark.valid) {
      this.dataList = this.dataList.filter(
        (x) => x.accountNo != data.accountNo
      );
      this.message.create('success', 'QR Disable Succesfully!');
    } else {
      Object.values(this.disableQrRemark.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
