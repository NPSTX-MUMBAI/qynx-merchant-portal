import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NpstImage } from '../../utils/images';

@Component({
  selector: 'app-approve-qr-request',
  templateUrl: './approve-qr-request.component.html',
  styleUrl: './approve-qr-request.component.scss',
})
export class ApproveQRRequestComponent {
  header = [
    { label: 'checkBox', code: 'checkbox' },
    { label: 'Created On', code: 'uploadedOn' },
    { label: 'Merchant Name', code: 'merchanName' },
    { label: 'VPA', code: 'vpa' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Branch', code: 'branch' },
    { label: 'Assigned Device', code: 'status' },
  ];

  tableConfig = {
    title: true,
    footer: true,
    export: true,
    filter: true,
    footerButton: true,
  };

  qrTemplate = NpstImage.qrTemplate;
  dataList: any[] = [];

  qrDetails: any;

  isVisible: boolean = false;
  constructor(private modal: NzModalService) {}

  ngOnInit(): void {
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
    for (let i = 1; i <= 10; i++) {
      data.push({
        merchanName: `NPST Merchant ${i * 2}`,
        vpa: `${i}2`,
        address: `New York {i}`,
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
      nzTitle: '<i>Do you Want to Disable these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOnOk: () => this.removeDevice(data),
      nzCentered: true,
    });
  }

  removeDevice(data) {
    this.dataList = this.dataList.filter((x) => x.accountNo != data.accountNo);
  }
}
