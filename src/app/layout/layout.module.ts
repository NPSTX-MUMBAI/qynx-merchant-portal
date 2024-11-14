import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule, Routes } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { QRManagementComponent } from '../shared/components/qr-management/qr-management.component';
import { SoundboxDetailsComponent } from '../shared/components/soundbox-details/soundbox-details.component';
import { FAQSComponent } from '../shared/components/faqs/faqs.component';
import { RaiseTicketComponent } from '../shared/components/raise-ticket/raise-ticket.component';
import { ManageTicketComponent } from '../shared/components/manage-ticket/manage-ticket.component';
import { ProfileComponent } from '../shared/components/profile/profile.component';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { AddVpaComponent } from '../shared/components/add-vpa/add-vpa.component';
import { ApproveRequestComponent } from '../shared/components/approve-request/approve-request.component';
import { AllVpaComponent } from '../shared/components/all-vpa/all-vpa.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { UserProfilesComponent } from '../shared/components/user-profiles/user-profiles.component';
import { ResetPasscodeComponent } from '../shared/components/reset-passcode/reset-passcode.component';
import { SharedModule } from '../shared/shared.module';
import { ApproveSoundboxRequestComponent } from '../shared/components/approve-soundbox-request/approve-soundbox-request.component';
import { ApproveQRRequestComponent } from '../shared/components/approve-qr-request/approve-qr-request.component';

const route: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'all-vpa',
        component: AllVpaComponent,
        data: {
          breadcrumb: 'All VPA',
        },
      },
      {
        path: 'approve-request',
        component: ApproveRequestComponent,
        data: {
          breadcrumb: 'Approve Request',
        },
      },
      {
        path: 'add-vpa',
        component: AddVpaComponent,
        data: {
          breadcrumb: 'Add Vpa',
        },
      },
      {
        path: 'qr-management',
        component: QRManagementComponent,
        data: {
          breadcrumb: 'QR Management',
        },
      },
      {
        path: 'soundbox',
        component: SoundboxDetailsComponent,
        data: {
          breadcrumb: 'soundbox',
        },
      },
      {
        path: 'soundbox-request',
        component: ApproveSoundboxRequestComponent,
        data: {
          breadcrumb: 'Approve Sound Box Request',
        },
      },
      {
        path: 'qr-request',
        component: ApproveQRRequestComponent,
        data: {
          breadcrumb: 'Approve QR Request',
        },
      },
      {
        path: 'FAQs',
        component: FAQSComponent,
        data: {
          breadcrumb: 'FAQs',
        },
      },
      {
        path: 'raise-ticket',
        component: RaiseTicketComponent,
        data: {
          breadcrumb: 'raise-ticket',
        },
      },
      {
        // children: [
        //   {
        //     path: 'FAQs',
        //     label: 'FAQs',
        //     icon: 'file-text',
        //   },
        //   {
        //     path: 'manage-ticket',
        //     label: 'Ticket Mangement',
        //     icon: 'info-circle',
        //   },
        // ],
        path: 'manage-ticket',
        component: ManageTicketComponent,
        data: {
          breadcrumb: 'Help Center',
        },
      },
      {
        path: 'profile',
        component: ProfileComponent,
        data: {
          breadcrumb: 'Profile',
        },
      },
      {
        path: 'user-profiles',
        component: UserProfilesComponent,
        data: {
          breadcrumb: 'User Profiles',
        },
      },
      {
        path: 'reset-passcode',
        component: ResetPasscodeComponent,
        data: {
          breadcrumb: 'Reset Passcode',
        },
      },
    ],
  },
];
@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzTagModule,
    NzMenuModule,
    NzToolTipModule,
    NzEmptyModule,
    NzDropDownModule,
  ],
})
export class LayoutModule {}
