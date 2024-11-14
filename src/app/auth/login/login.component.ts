import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NpstImage } from '../../shared/utils/images';
import { Router } from '@angular/router';
import { NgxOtpInputComponentOptions } from 'ngx-otp-input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  validateForm: FormGroup;
  npstLogo = NpstImage.appLogo;
  otpValue: any;
  disabled = false;
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 4,
    autoFocus: true,
    autoBlur: true,
    hideInputValues: false,
    showBlinkingCursor: true,
    regexp: /^[0-9]+$/,
    ariaLabels: ['a', 'b', 'c', 'd'],
    inputMode: 'numeric',
  };
  regexp = '^[0-9]+$';
  ariaLabels = '';
  otpChangeValue = '-';
  otpCompleteValue = '-';

  constructor(private fb: FormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      mobileNo: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
      passcode: ['', [Validators.required]],
      remember: [true],
    });
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
}
