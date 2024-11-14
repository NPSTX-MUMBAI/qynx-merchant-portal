import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-soundbox-details',
  templateUrl: './soundbox-details.component.html',
  styleUrl: './soundbox-details.component.scss',
})
export class SoundboxDetailsComponent implements OnInit {
  @ViewChild('templateRef') templateRef!: TemplateRef<any>;
  header = [
    { label: 'Merchant Name', code: 'merchanName' },
    { label: 'VPA', code: 'vpa' },
    { label: 'Device ID', code: 'deviceId' },
    { label: 'Branch', code: 'branch' },
    { label: 'SIM Provider', code: 'simProvider' },
    { label: 'SIM Number', code: 'simNumber' },
    { label: 'Delivery Status', code: 'deviceStatus' },
    { label: 'Delivery date', code: 'uploadedOn' },
    {
      label: 'Action',
      code: 'action',
      listOfAction: [
        { label: 'Initiate Delink', action: 'showConfirm' },
        { label: 'Initiate Return', action: 'initiateReturn' },
      ],
    },
  ];

  tableConfig = {
    title: true,
    footer: true,
    filter: true,
    export: true,
    footerButton: false,
  };
  dataList: any;
  remarkForm: FormGroup;

  constructor(
    private modal: NzModalService,
    private fb: FormBuilder,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    this.remarkForm = this.fb.group({
      remark: ['', Validators.required],
    });
    this.dataList = this.generateData();
  }

  generateData() {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        merchanName: `NPST Merchant ${i * 2}`,
        vpa: `${i}2`,
        simProvider: `Mumbai ${i}`,
        checked: false,
        simNumber: `916373722${i}`,
        deviceId: `${Math.floor(Math.random() * 9000000009)}`,
        branch: `Mumbai. ${Math.floor(Math.random() * 1000)}`,
        uploadedOn: `${new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() *
              (new Date(2024, 11, 31).getTime() -
                new Date(2020, 0, 1).getTime())
        )}`,
        deviceStatus: 'failed',
        expand: false,
      });
    }
    return data;
  }

  functionHandler(action, data) {
    if (typeof this[action] === 'function') {
      this[action](data); // Dynamically call the function based on the action name
    }
  }

  initiateReturn(data) {
    console.log(data);
  }

  showConfirm(data): void {
    this.modal.confirm({
      nzTitle: '<i>Do you Want to Delink the Device?</i>',
      nzContent: this.templateRef,
      nzOnOk: () => {
        return new Promise((resolve, reject) => {
          if (this.remarkForm.valid) {
            this.initiateDelink(data); // Proceed if the form is valid
            resolve(true); // Close the modal
          } else {
            Object.values(this.remarkForm.controls).forEach((control) => {
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

  initiateDelink(data) {
    if (this.remarkForm.valid) {
      this.dataList = this.dataList.filter((x) => x.deviceId != data.deviceId);
      this.message.create('success', 'Device Delink Succesfully!');
    } else {
      Object.values(this.remarkForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
