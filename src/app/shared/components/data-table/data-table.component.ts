import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  viewChildren,

} from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { log } from 'console';
import {
  NzTableLayout,
  NzTablePaginationPosition,
  NzTablePaginationType,
  NzTableSize,
} from 'ng-zorro-antd/table';
interface ItemData {
  merchanName: string;
  vpa: number | string;
  address: string;
  checked: boolean;
  expand: boolean;
  ifsc: string;
  accountNo: string;
  mobileNo: string;
  mcc: string;
  uploadedOn: string;
  branch: string;
  status: string;
  description: string;
  disabled?: boolean;
}

type TableScroll = 'unset' | 'scroll' | 'fixed';

interface Setting {
  bordered: boolean;
  loading: boolean;
  pagination: boolean;
  sizeChanger: boolean;
  title: boolean;
  header: boolean;
  footer: boolean;
  expandable: boolean;
  checkbox: boolean;
  fixHeader: boolean;
  noResult: boolean;
  ellipsis: boolean;
  simple: boolean;
  size: NzTableSize;
  tableScroll: TableScroll;
  tableLayout: NzTableLayout;
  position: NzTablePaginationPosition;
  paginationType: NzTablePaginationType;
}
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit {
  @Input() headerList: any[];
  @Input() dataList: any[] = [];
  @Input() tableConfig: any;
  @Output() actionTrigger = new EventEmitter();
  @ViewChild('datePicker', { static: false }) datePicker

  settingForm: FormGroup<{ [K in keyof Setting]: FormControl<Setting[K]> }>;
  listOfData: readonly ItemData[] = [];
  displayData: readonly ItemData[] = [];
  allChecked = false;
  indeterminate = true;
  fixedColumn = false;
  scrollX: string | null = '100vh';
  scrollY: string | null = '300px';
  settingValue: Setting;
  date: any;
  listOfSwitch = [
    { name: 'Bordered', formControlName: 'bordered' },
    { name: 'Loading', formControlName: 'loading' },
    { name: 'Pagination', formControlName: 'pagination' },
    { name: 'PageSizeChanger', formControlName: 'sizeChanger' },
    { name: 'Title', formControlName: 'title' },
    { name: 'Column Header', formControlName: 'header' },
    { name: 'Footer', formControlName: 'footer' },
    { name: 'Expandable', formControlName: 'expandable' },
    { name: 'Checkbox', formControlName: 'checkbox' },
    { name: 'Fixed Header', formControlName: 'fixHeader' },
    { name: 'No Result', formControlName: 'noResult' },
    { name: 'Ellipsis', formControlName: 'ellipsis' },
    { name: 'Simple Pagination', formControlName: 'simple' },
  ];
  listOfRadio = [
    {
      name: 'Size',
      formControlName: 'size',
      listOfOption: [
        { value: 'default', label: 'Default' },
        { value: 'middle', label: 'Middle' },
        { value: 'small', label: 'Small' },
      ],
    },
    {
      name: 'Table Scroll',
      formControlName: 'tableScroll',
      listOfOption: [
        { value: 'unset', label: 'Unset' },
        { value: 'scroll', label: 'Scroll' },
        { value: 'fixed', label: 'Fixed' },
      ],
    },
    {
      name: 'Table Layout',
      formControlName: 'tableLayout',
      listOfOption: [
        { value: 'auto', label: 'Auto' },
        { value: 'fixed', label: 'Fixed' },
      ],
    },
    {
      name: 'Pagination Position',
      formControlName: 'position',
      listOfOption: [
        { value: 'top', label: 'Top' },
        { value: 'bottom', label: 'Bottom' },
        { value: 'both', label: 'Both' },
      ],
    },
    {
      name: 'Pagination Type',
      formControlName: 'paginationType',
      listOfOption: [
        { value: 'default', label: 'Default' },
        { value: 'small', label: 'Small' },
      ],
    },
  ];
  selectedDate: string;
  selectSearch: string = 'merchant';
  selectBranch: string;
  selectSearchValue;
  currentPage = 1;
  pageSize = 20;
  totalItems = 200000;
  visible = false;
  showCustomDate: boolean = false;
  showInputSerach: boolean = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  openFilter() {
    this.visible = true;
  }
  currentPageDataChange($event: readonly ItemData[]): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  export() { }

  onChange(event) { }

  refreshStatus(): void {
    const validData = this.displayData.filter((value) => !value.disabled);
    const allChecked =
      validData.length > 0 &&
      validData.every((value) => value.checked === true);
    const allUnChecked = validData.every((value) => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = !allChecked && !allUnChecked;
  }

  checkAll(value: boolean): void {
    this.displayData.forEach((data) => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

  generateData(): readonly ItemData[] {
    const data = [];
    for (let i = 1; i <= 20; i++) {
      data.push({
        merchanName: `NPST Merchant ${i * 2}`,
        vpa: `${i}2`,
        address: `New York No. ${i} Lake Park`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        checked: false,
        ifsc: `SBIN${Math.floor(Math.random() * 40000)}`,
        mobileNo: `916373722${i}`,
        accountNo: `${Math.floor(Math.random() * 9000000009)}`,
        mcc: `${Math.floor(Math.random() * 1000)}`,
        branch: `New York No. ${Math.floor(Math.random() * 1000)} Lake Park`,
        uploadedOn: `${new Date(
          new Date(2020, 0, 1).getTime() +
          Math.random() *
          (new Date(2024, 11, 31).getTime() -
            new Date(2020, 0, 1).getTime())
        )}`,
        status: 'failed',
        expand: false,
      });
    }
    return data;
  }

  constructor(private formBuilder: NonNullableFormBuilder) { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    const screenWidth = event.target.innerWidth;
    const screenHeight = event.target.innerHeight;
    this.updateScroll(screenWidth, screenHeight);
  }




  ngOnInit(): void {
    this.updateScroll(window.innerWidth, window.innerHeight);
    this.settingForm = this.formBuilder.group({
      bordered: [false],
      loading: [false],
      pagination: [false],
      sizeChanger: [false],
      title: [this.tableConfig.title],
      header: [true],
      footer: [this.tableConfig.footer],
      expandable: [false],
      checkbox: [true],
      fixHeader: [true],
      noResult: [true],
      ellipsis: [false],
      simple: [true],
      size: 'middle' as NzTableSize,
      paginationType: 'default' as NzTablePaginationType,
      tableScroll: 'auto' as TableScroll,
      tableLayout: 'auto' as NzTableLayout,
      position: 'both' as NzTablePaginationPosition,
    });

    this.settingValue = this.settingForm.value as Setting;

    this.settingForm.valueChanges.subscribe((value) => {
      this.settingValue = value as Setting;
    });
    this.settingForm.controls.tableScroll.valueChanges.subscribe((scroll) => {
      this.fixedColumn = scroll === 'fixed';
      this.scrollX = scroll === 'scroll' || scroll === 'fixed' ? '100vw' : null;
    });
    this.settingForm.controls.fixHeader.valueChanges.subscribe((fixed) => {
      this.scrollY = fixed ? '240px' : null;
    });
    this.settingForm.controls.noResult.valueChanges.subscribe((empty) => {
      if (empty) {
        this.listOfData = [];
      } else {
        this.listOfData = this.dataList;
      }
    });
    this.listOfData = this.dataList;
  }

  updateScroll(screenWidth: number, screenHeight: number): void {
    // Adjust horizontal scrolling
    if (screenWidth < 576) {
      this.scrollX = '300px'; // For small screens
    } else if (screenWidth < 768) {
      this.scrollX = '500px'; // For medium screens
    } else {
      this.scrollX = '100%'; // For larger screens
    }

    // Adjust vertical scrolling
    if (screenHeight < 600) {
      this.scrollY = '280px'; // For smaller viewports
    } else if (screenHeight < 800) {
      this.scrollY = '380px'; // For medium viewports
    } else {
      this.scrollY = '480px'; // For larger viewports
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    this.listOfData = this.dataList;
  }

  menuClick(action: string, data) {
    this.actionTrigger.emit({ action, data });
  }

  nzPageIndexChange($event): void {
    console.log($event);
    this.currentPage = $event;
    this.loading(true);
  }
  nzPageSizeChange(event) {
    console.log(event);
    this.pageSize = event;
  }

  dateFilterChnage($event) {
    if (this.selectedDate == 'custom') {
      this.showCustomDate = true;
    } else {
      this.showCustomDate = false;
    }
  }

  onDetailsChange(event) {
    this.showInputSerach = true;
    console.log(this.selectSearch);
  }

  clearFilter() {
    this.selectSearch = '';
    this.selectedDate = '';
    this.selectSearchValue = '';
    this.showInputSerach = false;
    this.showCustomDate = false;
    this.visible = false;
    this.loading(true);
  }
  applyFilter() {
    let obj = {
      [`${this.selectSearch}`]: this.selectSearchValue,
      [`date`]: this.selectedDate,
      branch: this.selectBranch,
    };
    console.log(obj);
  }

  loading(parma: boolean) {
    let form = this.settingForm.get('loading');
    form.setValue(parma);
    setTimeout(() => {
      form.setValue(false);
    }, 4000);
  }

  clear() {
    this.displayData.forEach((data) => {
      if (!data.disabled) {
        data.checked = false;
      }
    });
    this.refreshStatus();
  }

  onApprove() {
    let checkData = this.displayData.filter((data) => data.checked);
    console.log(checkData);
  }

  onReject() {
    let checkData = this.displayData.filter((data) => data.checked);
    console.log(checkData);
  }

  checkDate(text) {
    console.log(text.includes('Date'));

    return text.includes('Date');
  }

  onUplaodVpa() {
    this.actionTrigger.emit({ event: 'onUplodVpa' });
  }

  raiseTicket() {
    this.actionTrigger.emit({ action: 'raiseTicket' });
  }
  restrictCharacters(event: any): void {
    const invalidChars = /[!#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/; // Regex for restricted characters
    const inputElement = event.target as HTMLInputElement;

    if (invalidChars.test(inputElement.value)) {
      // Remove invalid characters
      inputElement.value = inputElement.value.replace(invalidChars, '');
    }
  }

  search() {
    console.log(this.datePicker);
  }

}
