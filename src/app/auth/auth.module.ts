import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RouterModule, Routes } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { SendOtpComponent } from './send-otp/send-otp.component';
import { NgxOtpInputComponent } from 'ngx-otp-input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthService } from '../api-service/auth.service';
const route: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'otp', component: SendOtpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ResetPasswordComponent,
    SendOtpComponent,
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NgxOtpInputComponent,
    NzIconModule,
    FormsModule,

  ],

  exports: [ResetPasswordComponent],
})
export class AuthModule { }
