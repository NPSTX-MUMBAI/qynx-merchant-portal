import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NpstImage } from '../../shared/utils/images';
import { Router } from '@angular/router';
import {
  NgxOtpInputComponent,
  NgxOtpInputComponentOptions,
} from 'ngx-otp-input';

@Component({
  selector: 'app-send-otp',
  templateUrl: './send-otp.component.html',
  styleUrl: './send-otp.component.scss',
})
export class SendOtpComponent implements OnInit {
  @ViewChild('otpInput') otpInput: NgxOtpInputComponent;
  otpSent = false;
  otpForm: FormGroup;
  npstLogo = NpstImage.qynxLogo;
  otpValue: any;
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 4,
  };
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.otpForm = this.fb.group({
      mobileNo: [
        '',
        [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)],
      ],
    });
  }
  sendOTP() {
    if (this.otpForm.controls['mobileNo'].valid) {
      // Logic to send OTP
      this.otpSent = true; // Show the OTP field after sending
    }
  }

  verifyOTP() {
    if (this.otpValue.length == 4) {
      console.log(this.otpValue);
      this.router.navigate(['/auth/reset-password']);
    }
  }
  changeOtp(event) {
    this.otpValue = event;
  }
}
