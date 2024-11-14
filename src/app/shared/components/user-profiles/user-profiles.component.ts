import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrl: './user-profiles.component.scss',
})
export class UserProfilesComponent {
  header = [
    { label: 'Employee Name', code: 'employeeName' },
    { label: 'Email ID', code: 'email' },
    { label: 'User Type', code: 'userType' },
    { label: 'Mobile Number', code: 'mobileNo' },
    { label: 'Creation Date', code: 'updateOn' },
    { label: 'Status', code: 'status' },
  ];

  tableConfig = {
    title: false,
    footer: false,
  };
}
