import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FAQSComponent } from './components/faqs/faqs.component';
import { ManageTicketComponent } from './components/manage-ticket/manage-ticket.component';
import { QRManagementComponent } from './components/qr-management/qr-management.component';
import { RaiseTicketComponent } from './components/raise-ticket/raise-ticket.component';
import { SoundboxDetailsComponent } from './components/soundbox-details/soundbox-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AddVpaComponent } from './components/add-vpa/add-vpa.component';
import { ApproveRequestComponent } from './components/approve-request/approve-request.component';
import { AllVpaComponent } from './components/all-vpa/all-vpa.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { AuthModule } from "../auth/auth.module";
import { ResetPasscodeComponent } from './components/reset-passcode/reset-passcode.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { ApexChartComponent } from './components/apex-chart/apex-chart.component';
import { NgApexchartsModule } from "ng-apexcharts"
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ApproveSoundboxRequestComponent } from './components/approve-soundbox-request/approve-soundbox-request.component';
import { ApproveQRRequestComponent } from './components/approve-qr-request/approve-qr-request.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgxCsvParserModule } from 'ngx-csv-parser';
@NgModule({
  declarations: [
    QRManagementComponent,
    SoundboxDetailsComponent,
    FAQSComponent,
    RaiseTicketComponent,
    ManageTicketComponent,
    ProfileComponent,
    DashboardComponent,
    DataTableComponent,
    AddVpaComponent,
    ApproveRequestComponent,
    AllVpaComponent,
    UserProfilesComponent,
    ResetPasscodeComponent,
    ApexChartComponent,
    ApproveSoundboxRequestComponent,
    ApproveQRRequestComponent,
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzFormModule,
    NzRadioModule,
    NzSwitchModule,
    ReactiveFormsModule,
    NzDrawerModule,
    NzSelectModule,
    NzInputModule,
    NzDatePickerModule,
    NzButtonModule,
    FormsModule,
    NzDropDownModule,
    NzPaginationModule,
    NzTagModule,
    NzUploadModule,
    NzModalModule,
    NzCardModule,
    NzQRCodeModule,
    NzDescriptionsModule,
    AuthModule,
    NzListModule,
    NzIconModule,
    NzStatisticModule,
    NgApexchartsModule,
    NzTabsModule,
    NzGridModule,
    NgxCsvParserModule

],
  exports: [
    // VPAManagementComponent,
    // QRManagementComponent,
    // SoundboxDetailsComponent,
    // FAQSComponent,
    // RaiseTicketComponent,
    // ManageTicketComponent,
    // ProfileComponent,
    // DashboardComponent,
  ],
})
export class SharedModule {}
