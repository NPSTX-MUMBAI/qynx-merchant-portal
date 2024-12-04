import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrl: './raise-ticket.component.scss',
})
export class RaiseTicketComponent implements OnInit {
  ticketForm: FormGroup;
  constructor(private fb: FormBuilder, private message: NzMessageService) {}

  ngOnInit(): void {
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
    } else {
      Object.values(this.ticketForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
