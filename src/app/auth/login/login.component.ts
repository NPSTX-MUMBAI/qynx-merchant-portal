import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NpstImage } from '../../shared/utils/images';
import { Router } from '@angular/router';
import { NgxOtpInputComponentOptions, NgxOtpStatus } from 'ngx-otp-input';
import { AuthService } from '../../api-service/auth.service';
import { log } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  npstLogo = NpstImage.qynxLogo;
  otpValue: any;
  disabled = false;
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 4,
    autoFocus: false,
    autoBlur: false,
    hideInputValues: false,
    showBlinkingCursor: false,
    regexp: /^[0-9]+$/,
    ariaLabels: ['a', 'b', 'c', 'd'],
    inputMode: 'numeric',
  };
  regexp = '^[0-9]+$';
  ariaLabels = '';
  otpChangeValue = '-';
  otpCompleteValue = '-';
  topStatusEnum = NgxOtpStatus;



  constructor(private fb: FormBuilder, private router: Router, private authSrv: AuthService) {
    this.validateForm = this.fb.group({
      mobileNo: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
      passcode: ['', [Validators.required]],
    });
  }


  ngOnInit(): void {
    console.log(this.authSrv.getdata());

  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.router.navigate(['layout']);
    } else {
      Object.values(this.validateForm.controls).forEach((control: any) => {
        // let str = this.validateForm.get(control);

        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  otpComplete(event) {
    this.validateForm.get('passcode').setValue(event);
  }
  otpChange(event) {
    console.log(event);

  }


  validateMobileNumber(): void {
    const mobileNoControl: AbstractControl | null =
      this.validateForm.get('mobileNo');
    if (mobileNoControl && mobileNoControl.value) {
      const firstDigit = mobileNoControl.value.charAt(0);

    }
  }

}
