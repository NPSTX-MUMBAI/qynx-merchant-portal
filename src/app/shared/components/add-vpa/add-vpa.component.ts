import {
  HttpClient,
  HttpEventType,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Component } from '@angular/core';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NpstImage } from '../../utils/images';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';
import { vpaCsvEnum } from '../../enums/vpa.header.enum';
import { MccCode } from '../../enums/mcc.enum';
import { log } from 'console';
import {
  catchError,
  filter,
  map,
  Observable,
  Observer,
  of,
  Subscription,
  switchMap,
  tap,
} from 'rxjs';
@Component({
  selector: 'app-add-vpa',
  templateUrl: './add-vpa.component.html',
  styleUrl: './add-vpa.component.scss',
})
export class AddVpaComponent {
  uploading = false;
  fileList: NzUploadFile[] = [];
  sampleFile = NpstImage.sampleFile;
  csvRecords: any[] = [];
  header = false;
  errorObject: any[] = [];
  uploadDisable: boolean = false;

  constructor(
    private http: HttpClient,
    private msg: NzMessageService,
    private ngxCsvParser: NgxCsvParser
  ) {}

  handleUpload(): void {
    const formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    console.log(this.fileList);
    this.uploading = true;
    setTimeout(() => {
      this.uploading = false;
    }, 3000);
  }

  errroHeader = [
    { label: 'Row', code: 'row' },
    { label: 'Description', code: 'errorName' },
  ];

  tableConfig = {
    title: false,
    footer: false,
    filter: false,
    footerButton: false,
    scrollX: '30vw',
  };

  beforeUpload = (file: any) => {
    console.log(true);

    // return new Observable((observer: Observer<boolean>) => {
    //   // Check if the file type is CSV
    //   const isCsv = file.type === 'text/csv';
    //   if (!isCsv) {
    //     this.msg.error('You can only upload CSV files!');
    //     observer.complete();
    //     return;
    //   }
    //   // Check if the file size is less than 2MB
    //   const isLt2M = file.size! / 1024 / 1024 < 2;
    //   if (!isLt2M) {
    //     this.msg.error('File must be smaller than 2MB!');
    //     observer.complete();
    //     return;
    //   }
    //   // Emit the result
    //   console.log(isCsv && isLt2M);
    //   observer.next(isCsv && isLt2M);
    //   observer.complete();
    // });
  };

  // this.fileList = this.fileList.concat(file);
  // this.errorObject = [];
  // let isValid = true;
  // this.ngxCsvParser
  //   .parse(file, { header: true, delimiter: ',', encoding: 'utf8' })
  //   .pipe()
  //   .subscribe((result: any) => {
  //     result = result.filter((row: any) => {
  //       return Object.values(row).some((value) => value !== '');
  //     });
  //     console.log(result);
  //     if (result.length > 0) {
  //       this.csvValidation(result);
  //       [
  //         'Business Name',
  //         'VPA ID',
  //         'Mobile Number',
  //         'Bank Account Number',
  //         'IFSC Code',
  //         'Manager Name',
  //         'Merchant Call Back URL',
  //         'Merchant Address',
  //         'MCC',
  //         'PAN Number',
  //         'Org Code',
  //         'Settlement Bank',
  //         'API_Bank',
  //         'OPERATOR_CONTACT_NAME',
  //         'OPERATOR_MOBILE_NUMBER',
  //         'OPERATOR_EMAIL',
  //         'AADHAR_NUMBER',
  //         'BRANCH_CODE',
  //         'ADD_MOBILE',
  //       ];
  //       if (this.errorObject.length == 0) {
  //         result = result.map((value) => {
  //           return {
  //             businessName: `${value['Business Name']}`,
  //             vpa: `${value['VPA ID']}`,
  //             mobileNo: `${value['Mobile Number']}`,
  //             accountNo: `${value['Bank Account Number']}`,
  //             ifsc: `${value['IFSC Code']}`,
  //             managerName: `${value['Manager Name']}`,
  //             merchantCallBackUrl: `${value['Merchant Call Back URL']}`,
  //             address: `${value['Merchant Address']}`,
  //             mcc: `${value['MCC']}`,
  //             panNo: `${value['PAN Number']}`,
  //             settlementBank: `${value['Settlement Bank']}`,
  //             apiBank: `${value['API_Bank']}`,
  //             OPERATOR_CONTACT_NAME: `${value['OPERATOR_CONTACT_NAME']}`,
  //             OPERATOR_MOBILE_NUMBER: `${value['OPERATOR_MOBILE_NUMBER']}`,
  //             OPERATOR_EMAIL: `${value['OPERATOR_EMAIL']}`,
  //             AADHAR_NUMBER: `${value['AADHAR_NUMBER']}`,
  //             BRANCH_CODE: `${value['BRANCH_CODE']}`,
  //             ADD_MOBILE: `${value['ADD_MOBILE']}`,
  //           };
  //         });
  //         isValid = false;
  //         console.log(isValid);
  //       } else {
  //         console.log(this.errorObject);
  //       }
  //     }
  //   });

  // console.log(isValid);

  // return false;

  csvRowValidation(res) {
    res.forEach((item, index) => {
      for (const key in item) {
        if (Object.hasOwn(item, key)) {
          const element = item[key];

          // 1. MERCHANT_ACCOUNT_NO should not be empty.
          if (key == vpaCsvEnum.BANK_ACCOUNT_NUMBER) {
            if (!this.isString(element) || element.trim() === '') {
              this.errorObject.push({
                errorName: 'Merchant Account Number should not be empty',
                row: index + 1,
              });
            }
          }

          // 2. Merchant category Code (MCC) should not be empty, length should be 4, and MCC code must exist in the database.
          if (key == vpaCsvEnum.MCC) {
            if (
              !this.isString(element) ||
              element.length !== 4 ||
              !this.mccExistsInDb(element)
            ) {
              this.errorObject.push({
                errorName:
                  'Invalid MCC: Should be 4 characters and exist in the database',
                row: index + 1,
              });
            }
          }

          // 3. MERCHANT_IFSC_CODE should not be empty and length should be 11.
          if (key == vpaCsvEnum.IFSC_CODE) {
            if (!this.isString(element) || element.length !== 11) {
              this.errorObject.push({
                errorName: 'Invalid IFSC Code: Should be 11 characters',
                row: index + 1,
              });
            }
          }

          // 4. MERCHANT_MOBILE_NO should not be empty, length should be between 10 and 12, and should be numeric.
          if (key == vpaCsvEnum.MOBILE_NUMBER) {
            if (
              !this.isString(element) ||
              element.length < 10 ||
              element.length > 12
            ) {
              this.errorObject.push({
                errorName:
                  'Invalid Mobile Number: Should be numeric and between 10 to 12 characters',
                row: index + 1,
              });
            }
          }

          // 5. MERCHANT_ORG_NAME should not be empty.
          if (key == vpaCsvEnum.BUSINESS_NAME) {
            if (!this.isString(element) || element.trim() === '') {
              this.errorObject.push({
                errorName: 'Merchant Organization Name should not be empty',
                row: index + 1,
              });
            }
          }

          // 6. MERCHANT_VPA should not be empty and should not contain '@'.
          if (key == vpaCsvEnum.VPA_ID) {
            if (
              !this.isString(element) ||
              element.trim() === '' ||
              element.includes('@')
            ) {
              this.errorObject.push({
                errorName: "Invalid VPA: Should not be empty or contain '@'",
                row: index + 1,
              });
            }
          }

          // 7. ADD_MOBILE should be comma separated up to 5, if more than 5, only the first 5 are accepted.
          if (key == vpaCsvEnum.ADD_MOBILE) {
            const mobileNumbers = element.split(',').map((num) => num.trim());
            if (mobileNumbers.length > 5) {
              this.errorObject.push({
                errorName:
                  'Additional Mobile Numbers: Only the first 5 numbers are accepted',
                row: index + 1,
              });
              // Trim the list to the first 5
              item[key] = mobileNumbers.slice(0, 5).join(',');
            }
          }
        }
      }
    });
  }

  mccExistsInDb(mcc) {
    // Simulate database check. Replace this with actual DB lookup.

    const validMCCs = Object.keys(MccCode); // Example valid MCCs
    return validMCCs.includes(mcc);
  }

  private processParsedData(result: any[]): void {
    // Transform and prepare data as needed
    result.forEach((value) => {
      const transformedData = {
        businessName: value['Business Name'],
        vpa: value['VPA ID'],
        mobileNo: value['Mobile Number'],
        accountNo: value['Bank Account Number'],
        ifsc: value['IFSC Code'],
        managerName: value['Manager Name'],
        merchantCallBackUrl: value['Merchant Call Back URL'],
        address: value['Merchant Address'],
        mcc: value['MCC'],
        panNo: value['PAN Number'],
        settlementBank: value['Settlement Bank'],
        apiBank: value['API_Bank'],
        operatorContactName: value['OPERATOR_CONTACT_NAME'],
        operatorMobileNumber: value['OPERATOR_MOBILE_NUMBER'],
        operatorEmail: value['OPERATOR_EMAIL'],
        aadharNumber: value['AADHAR_NUMBER'],
        branchCode: value['BRANCH_CODE'],
        addMobile: value['ADD_MOBILE'],
      };
      console.log(transformedData); // or handle the transformed data as needed
    });
  }

  csvValidation(res: any[]): void {
    const header = Object.keys(res[0]);
    if (header.length !== 19) {
      this.errorObject.push({
        errorName: 'Invalid CSV File. Please check file headers.',
        row: 0,
      });
    }

    if (header.length === 19) {
      // Check header validity against your predefined enum
      const isHeaderValid = this.checkHeaderValidity(header);
      if (!isHeaderValid) {
        this.errorObject.push({
          errorName: 'Invalid Headers',
          row: 0,
        });
        return;
      }
      this.csvRowValidation(res);
    }
  }

  private checkHeaderValidity(header: string[]): boolean {
    return Object.values(vpaCsvEnum).every((headerElement) =>
      header.includes(headerElement)
    );
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status == 'removed') {
      this.uploadDisable = false;
      this.errorObject = [];
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      console.log(file['message']);

      this.msg.error(`${file.name} file upload failed.`);
    }
  }

  customRequest = (item: any): Subscription => {
    this.errorObject = []; // Reset error object before new upload
    console.log(item);
    this.uploadDisable = true;

    return this.ngxCsvParser
      .parse(item.file, { header: true, delimiter: ',', encoding: 'utf8' })
      .pipe(
        filter((result: any) => !!result && result.length > 0), // Ensure we have a valid result
        map((result: any) => {
          // Filter out rows where all values are empty
          return result.filter((row: any) => {
            return Object.values(row).some((value) => value !== '');
          });
        }),
        tap((result: any) => {
          if (result.length > 0) {
            this.csvValidation(result); // Validate the CSV content
            if (this.errorObject.length > 0) {
              item.onError('CSV validation failed');
              throw new Error('CSV validation failed');
            }
          }
        }),
        map((result: any) => {
          // Map CSV fields to your required object structure
          return result.map((value: any) => ({
            businessName: `${value['Business Name']}`,
            vpa: `${value['VPA ID']}`,
            mobileNo: `${value['Mobile Number']}`,
            accountNo: `${value['Bank Account Number']}`,
            ifsc: `${value['IFSC Code']}`,
            managerName: `${value['Manager Name']}`,
            merchantCallBackUrl: `${value['Merchant Call Back URL']}`,
            address: `${value['Merchant Address']}`,
            mcc: `${value['MCC']}`,
            panNo: `${value['PAN Number']}`,
            settlementBank: `${value['Settlement Bank']}`,
            apiBank: `${value['API_Bank']}`,
            OPERATOR_CONTACT_NAME: `${value['OPERATOR_CONTACT_NAME']}`,
            OPERATOR_MOBILE_NUMBER: `${value['OPERATOR_MOBILE_NUMBER']}`,
            OPERATOR_EMAIL: `${value['OPERATOR_EMAIL']}`,
            AADHAR_NUMBER: `${value['AADHAR_NUMBER']}`,
            BRANCH_CODE: `${value['BRANCH_CODE']}`,
            ADD_MOBILE: `${value['ADD_MOBILE']}`,
          }));
        }),
        switchMap((parsedResult) => {
          // Create FormData and append the file
          const formData = new FormData();
          formData.append('file', item.file);
          // formData.append('businessName', parsedResult);
          // Prepare the upload request (mock URL in this example)
          const req = new HttpRequest(
            'POST',
            'http://localhost:3000/vpa/addBulkVpa', // Use your actual API endpoint here
            formData,
            {
              reportProgress: true,
              withCredentials: item.withCredentials, // Add credentials if required
            }
          );

          // Perform the upload request
          return this.http.request(req).pipe(
            filter(
              (event: any) =>
                event.type === HttpEventType.UploadProgress ||
                event instanceof HttpResponse
            ) // Only allow successful responses
          );
        })
      )
      .subscribe(
        (event) => {
          console.log(event);

          if (event.type === HttpEventType.UploadProgress) {
            // Compute and report the progress
            const percent = Math.round(
              (100 * event.loaded) / (event.total || 1)
            );
            item.onProgress({ percent }); // Trigger progress callback
          } else if (event instanceof HttpResponse) {
            // Handle success response
            item.onSuccess(event.body, event); // Trigger success callback
            this.uploading = false;
            this.fileList = [];
          }
          // Handle success scenario
          console.log('Upload completed.');
        },
        (error) => {
          item.onError(error);
        }
      );
  };

  // customRequest = (item): Subscription => {
  //   this.errorObject = [];
  //   this.ngxCsvParser
  //     .parse(item.file, { header: true, delimiter: ',', encoding: 'utf8' })
  //     .pipe()
  //     .subscribe((result: any) => {
  //       result = result.filter((row: any) => {
  //         return Object.values(row).some((value) => value !== '');
  //       });
  //       console.log(result);
  //       if (result.length > 0) {
  //         this.csvValidation(result);
  //         if (this.errorObject.length == 0) {
  //           result = result.map((value) => {
  //             return {
  //               businessName: `${value['Business Name']}`,
  //               vpa: `${value['VPA ID']}`,
  //               mobileNo: `${value['Mobile Number']}`,
  //               accountNo: `${value['Bank Account Number']}`,
  //               ifsc: `${value['IFSC Code']}`,
  //               managerName: `${value['Manager Name']}`,
  //               merchantCallBackUrl: `${value['Merchant Call Back URL']}`,
  //               address: `${value['Merchant Address']}`,
  //               mcc: `${value['MCC']}`,
  //               panNo: `${value['PAN Number']}`,
  //               settlementBank: `${value['Settlement Bank']}`,
  //               apiBank: `${value['API_Bank']}`,
  //               OPERATOR_CONTACT_NAME: `${value['OPERATOR_CONTACT_NAME']}`,
  //               OPERATOR_MOBILE_NUMBER: `${value['OPERATOR_MOBILE_NUMBER']}`,
  //               OPERATOR_EMAIL: `${value['OPERATOR_EMAIL']}`,
  //               AADHAR_NUMBER: `${value['AADHAR_NUMBER']}`,
  //               BRANCH_CODE: `${value['BRANCH_CODE']}`,
  //               ADD_MOBILE: `${value['ADD_MOBILE']}`,
  //             };
  //           });
  //           const formData = new FormData();
  //           formData.append('file', item.file);
  //           const req = new HttpRequest(
  //             'POST',
  //             'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //             formData,
  //             {
  //               reportProgress: true,
  //             }
  //           );
  //           this.http
  //             .request(req)
  //             .pipe(filter((e) => e instanceof HttpResponse))
  //             .subscribe(
  //               () => {
  //                 this.uploading = false;
  //                 this.fileList = [];
  //                 this.msg.success('upload successfully.');
  //               },
  //               () => {
  //                 this.uploading = false;
  //                 this.msg.error('upload failed.');
  //               }
  //             );
  //         } else {
  //           console.log(this.errorObject);
  //         }
  //       }
  //     });
  //   console.log(item);

  //   return item;
  // };
}
