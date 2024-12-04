import { Component, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AsyncValidatorFn,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { NpstImage } from '../../shared/utils/images';
import { Router } from '@angular/router';
import { NgxOtpInputComponent, NgxOtpInputComponentOptions, NgxOtpStatus } from 'ngx-otp-input';

export enum passcode {
  NEWPASSCOSE = 'newPasscode',
  CONFIRMPASSCODE = 'confirmPasscode'
}
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})

export class ResetPasswordComponent {
  npstLogo = NpstImage.qynxLogo;
  @ViewChild('newotpInput') newotpInput: NgxOtpInputComponent;
  @ViewChild('confirmotpInput') confirmotpInput: NgxOtpInputComponent;

  constructor(private fb: NonNullableFormBuilder, private router: Router) {

  }
  newPasscode: string
  confirmPasscode: string
  showNewPasscode: boolean = false
  showConfirmPasscode: boolean = false
  disableSubmitBtn: boolean = true
  newPasscodeOptions: any = {
    otpLength: 4,
    autoFocus: false,
    autoBlur: false,
    hideInputValues: true,
    showBlinkingCursor: false,
    regexp: /^[0-9]+$/,
    ariaLabels: ['a', 'b', 'c', 'd'],
    inputMode: 'numeric',
  };

  topStatusEnum = NgxOtpStatus;
  passcode = passcode


  confirmPasscodeOptions: any = {
    otpLength: 4,
    autoFocus: false,
    autoBlur: false,
    hideInputValues: true,
    showBlinkingCursor: false,
    regexp: /^[0-9]+$/,
    ariaLabels: ['a', 'b', 'c', 'd'],
    inputMode: 'numeric',
  };
  submitForm(): void {
    this.router.navigate(['/auth/login']);
  }

  resetForm(): void {
    this.newotpInput.reset();
    this.confirmotpInput.reset();
  }






  otpComplete(event, value) {
    if (value == passcode.NEWPASSCOSE) {
      this.newPasscode = event
    }
    if (value == passcode.CONFIRMPASSCODE) {
      this.confirmPasscode = event
    }
  }
  newPasscodeChange(otp) {
    let otpString = otp.join('')
    if (otpString.length != 4) {
      this.disableSubmitBtn = true
    }
    if (otpString == this.confirmPasscode) {
      this.disableSubmitBtn = false
    }

  }
  confirmPasscodeChange(otp) {
    let otpString = otp.join('')
    if (otpString == this.newPasscode) {
      this.disableSubmitBtn = false
    }
    if (otpString.length != 4) {
      this.disableSubmitBtn = true
    }
  }

  showHide() {
    this.newotpInput.ngxOtpOptionsInUse.hideInputValues = !this.newotpInput.ngxOtpOptionsInUse.hideInputValues
  }

  showHideConmfirmPasscode() {
    this.confirmotpInput.ngxOtpOptionsInUse.hideInputValues = !this.confirmotpInput.ngxOtpOptionsInUse.hideInputValues
  }
}
