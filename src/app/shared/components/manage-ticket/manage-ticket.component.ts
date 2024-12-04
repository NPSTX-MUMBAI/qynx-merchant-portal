import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-manage-ticket',
  templateUrl: './manage-ticket.component.html',
  styleUrl: './manage-ticket.component.scss',
})
export class ManageTicketComponent implements OnInit {
  header = [
    { label: 'Ticket ID', code: 'ticketId' },
    { label: 'Creation Date', code: 'creationDate' },
    { label: 'Category', code: 'category' },
    { label: 'Sub-Category', code: 'subCategory' },
    { label: 'Ticket Description', code: 'ticketDes' },
    { label: 'Status', code: 'status' },
    { label: 'Closure Date', code: 'closureDate' },
    { label: 'Resolution Comments', code: 'comment' },
  ];

  tableConfig = {
    title: true,
    footer: true,
    filter: false,
    searchTicket: true,
    raiseTicket: true,
  };

  listOfTicket: any[];
  isVisible: boolean = false;
  ticketForm: FormGroup;
  constructor(private fb: FormBuilder, private message: NzMessageService) {}
  ngOnInit(): void {
    this.listOfTicket = this.generateData();
    this.ticketForm = this.fb.group({
      catagory: ['', Validators.required],
      subCatagory: ['', Validators.required],
      remark: ['', Validators.required],
    });
  }

  submitTicket() {
    if (this.ticketForm.valid) {
      console.log('submit', this.ticketForm.value);
      this.message.create('success', 'Ticket Create Succesfully!');
      this.isVisible = false;
    } else {
      Object.values(this.ticketForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  generateData() {
    const data = [];
    for (let i = 1; i <= 5; i++) {
      data.push({
        comment: `test testsd isud`,
        subCategory: `New York No. ${i} Lake Park`,
        ticketDes: `My name is John Brown, I am ${i}2 years old.`,
        checked: false,
        ticketId: `${Math.floor(Math.random() * 9000000009)}`,
        category: `New York No. ${Math.floor(Math.random() * 1000)} Lake Park`,
        creationDate: `${new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() *
              (new Date(2024, 11, 31).getTime() -
                new Date(2020, 0, 1).getTime())
        )}`,
        closureDate: `${new Date(
          new Date(2020, 0, 1).getTime() +
            Math.random() *
              (new Date(2024, 11, 31).getTime() -
                new Date(2020, 0, 1).getTime())
        )}`,
        status: 'inprocess',
        expand: false,
      });
    }
    return data;
  }

  functionHandler(action, data?) {
    if (typeof this[action] === 'function') {
      this[action](data); // Dynamically call the function based on the action name
    }
  }

  handleCancel() {
    this.isVisible = false;
  }

  handleOk() {}

  raiseTicket() {
    this.isVisible = true;
  }
}
