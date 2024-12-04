import { Component } from '@angular/core';

@Component({
  selector: 'app-approve-soundbox-request',
  templateUrl: './approve-soundbox-request.component.html',
  styleUrl: './approve-soundbox-request.component.scss',
})
export class ApproveSoundboxRequestComponent {
  header = [
    { label: 'checkBox', code: 'checkbox' },
    { label: 'Merchant Name', code: 'merchanName' },
    { label: 'VPA', code: 'vpa' },
    { label: 'Device ID', code: 'deviceId' },
    { label: 'Branch', code: 'branch' },
    { label: 'SIM Provider', code: 'simProvider' },
    { label: 'SIM Number', code: 'simNumber' },
    { label: 'Device Status', code: 'deviceStatus' },
    { label: 'Activation Date', code: 'uploadedOn' },
  ];

  tableConfig = {
    title: true,
    footer: true,
    filter: true,
    export: true,
    footerButton: true,
  };
  dataList: any;

  ngOnInit(): void {
    this.dataList = this.generateData();
  }

  generateData() {
    const data = [];
    for (let i = 1; i <= 10; i++) {
      data.push({
        merchanName: `NPST Merchant ${i * 2}`,
        vpa: `${i}2`,
        simProvider: `New York No. ${i} Lake Park`,
        checked: false,
        simNumber: `916373722${i}`,
        deviceId: `${Math.floor(Math.random() * 9000000009)}`,
        branch: `Mumbai ${Math.floor(Math.random() * 1000)}`,
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

  initiateDelink(data) {
    console.log(data);
  }

  initiateReturn(data) {
    console.log(data);
  }
}
