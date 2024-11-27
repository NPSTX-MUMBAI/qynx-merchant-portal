import { Component } from '@angular/core';
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

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  npstLogo = NpstImage.qynxLogo;
  validateForm: FormGroup<{
    newPasscode: FormControl<string>;
    confirm: FormControl<string>;
  }>;

  constructor(private fb: NonNullableFormBuilder, private router: Router) {
    this.validateForm = this.fb.group({
      newPasscode: ['', [Validators.required, Validators.pattern('[0-9]{4}')]],
      confirm: ['', [this.confirmValidator]],
    });
  }

  passwordValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.value;

    // Regular expression for password validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumeric = /\d/.test(password); // Check for at least one numeric digit
    const isValidLength = password.length >= 6;

    if (
      hasUpperCase &&
      hasLowerCase &&
      hasSpecialChar &&
      hasNumeric &&
      isValidLength
    ) {
      return null; // Valid password
    }

    return { passwordStrength: true };
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    this.router.navigate(['/auth/login']);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  validateConfirmPassword(): void {
    setTimeout(() =>
      this.validateForm.controls.confirm.updateValueAndValidity()
    );
  }

  userNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.validateForm.controls.newPasscode.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
