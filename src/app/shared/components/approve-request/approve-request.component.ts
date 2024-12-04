import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-request',
  templateUrl: './approve-request.component.html',
  styleUrl: './approve-request.component.scss',
})
export class ApproveRequestComponent implements OnInit {
  header = [
    { label: 'checkBox', code: 'checkbox' },
    { label: 'File Name', code: 'address' },
    { label: 'Uploaded On', code: 'uploadedOn' },
    { label: 'VPA ID', code: 'vpa' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Merchant Name', code: 'merchantName' },
    { label: 'Branch', code: 'branch' },
  ];

  tableConfig = {
    title: true,
    footer: true,
    filter: true,
    footerButton: true,
  };
  listOfRequest: any[] = [];

  ngOnInit(): void {
    this.listOfRequest = this.generateData();
  }
  generateData() {
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
}
