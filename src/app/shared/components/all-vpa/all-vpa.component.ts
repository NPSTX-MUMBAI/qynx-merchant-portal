import { Component, OnInit } from '@angular/core';
import { vpaCsvEnum } from '../../enums/vpa.header.enum'


@Component({
  selector: 'app-all-vpa',
  templateUrl: './all-vpa.component.html',
  styleUrl: './all-vpa.component.scss',
})
export class AllVpaComponent implements OnInit {
  isVisible: boolean;
  header = [
    { label: 'Merchant Name', code: 'merchanName' },
    { label: 'VPA', code: 'vpa' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Account Number', code: 'accountNo' },
    { label: 'IFSC Code', code: 'ifsc' },
    { label: 'Branch', code: 'branch' },
    { label: 'Merchant Address', code: 'address' },
    { label: 'MCC', code: 'mcc' },
    { label: 'Uploaded On', code: 'uploadedOn' },
    { label: 'Status', code: 'status' },
  ];

  approveRequestApprove = [
    { label: 'checkBox', code: 'checkbox' },
    { label: 'File Name', code: 'address' },
    { label: 'Uploaded On', code: 'uploadedOn' },
    { label: 'VPA ID', code: 'vpa' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Merchant Name', code: 'merchantName' },
    { label: 'Branch', code: 'branch' },
  ];

  fileHistoryHeader = [
    { label: 'File Name', code: 'fileName' },
    { label: 'Uploaded On', code: 'uploadedOn' },
    { label: 'Total Count', code: 'totalCount' },
    { label: 'Success Count', code: 'successCount' },
    { label: 'Failed Count', code: 'fileCount' },
    {
      label: 'Action',
      code: 'action',
      listOfAction: [{ label: 'Download', action: 'download' }],
    },
  ];

  tableConfig = {
    title: true,
    footer: true,
    export: true,
    filter: true,
    uplaodVpa: true,
    scrollY: '315px',
  };



  approveTableConfig = {
    title: true,
    footer: true,
    filter: true,
    footerButton: true,
  };




  fileTableConfig = {
    title: false,
    footer: true,
    export: false,
    filter: false,
    uplaodVpa: false,
    footerButton: false,
  };
  public vpaData: any = [];
  fileHistoryData: any = [];
  listOfRequest: any[] = [];

  ngOnInit(): void {
    this.vpaData = this.generateData();
    this.listOfRequest = this.requestData();
    this.fileHistoryData = this.fileHistoryGenData();
  }
  fileHistoryGenData() {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        totalCount: `${i}2`,
        fileName: `New York No. ${i} Lake Park`,
        checked: false,
        successCount: `${Math.floor(Math.random() * 1000)}`,
        fileCount: `${Math.floor(Math.random() * 1000)}`,
        uploadedOn: `${new Date(
          new Date(2020, 0, 1).getTime() +
          Math.random() *
          (new Date(2024, 11, 31).getTime() -
            new Date(2020, 0, 1).getTime())
        )}`,

        expand: false,
      });
    }
    return data;
  }

  generateData() {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        merchanName: `NPST Merchant ${i * 2}`,
        vpa: `${i}2`,
        address: `New York No. ${i}`,
        checked: false,
        ifsc: `SBIN${Math.floor(Math.random() * 40000)}`,
        mobileNo: `916373722${i}`,
        accountNo: `${Math.floor(Math.random() * 9000000009)}`,
        mcc: `${Math.floor(Math.random() * 1000)}`,
        branch: `Numbai ${Math.floor(Math.random() * 1000)} `,
        uploadedOn: `${new Date(
          new Date(2020, 0, 1).getTime() +
          Math.random() *
          (new Date(2024, 11, 31).getTime() -
            new Date(2020, 0, 1).getTime())
        )}`,
        status: 'failed',
        expand: false,
      });
    }
    return data;
  }

  requestData() {
    const data = [];
    for (let i = 1; i <=20; i++) {
      data.push({
        merchantName: `NPST Merchant ${i * 2}`,
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
        status: 'failed',
        expand: false,
      });
    }
    return data;
  }

  functionHandler(action) {
    if (typeof this[action] === 'function') {
      this[action](); // Dynamically call the function based on the action name
    }
  }

  onUplodVpa() {
    this.isVisible = true;
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() { }
}
