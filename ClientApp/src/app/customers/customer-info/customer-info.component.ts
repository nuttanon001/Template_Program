import { Component, OnInit } from '@angular/core';
import { BaseInfoComponent } from '../../shared/base-info-component';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { CustomerCommuncateService } from '../shared/customer-communcate.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent extends BaseInfoComponent<Customer,CustomerService,CustomerCommuncateService> {
  constructor(
    service: CustomerService,
    serviceCommuncate: CustomerCommuncateService,
    private fb: FormBuilder,
  ) {
    super(service, serviceCommuncate);
  }
  // on GetData
  onGetDataByKey(infoValue?: Customer): void {
    if (infoValue) {
      if (infoValue.CustomerId) {
        this.service.getOneKeyNumber(infoValue)
          .subscribe(dbData => {
            this.InfoValue = dbData;
          }, error => console.error(error), () => this.buildForm());
      } 
    } else {
      this.InfoValue = {
        CustomerId: 0,
      };
      this.buildForm();
    }
  }
  // build form
  buildForm(): void {
    // Form
    this.InfoValueForm = this.fb.group({
      CustomerId: [this.InfoValue.CustomerId],
      FirstName: [this.InfoValue.FirstName,
        [
          Validators.required,
          Validators.maxLength(200)
        ]
      ],
      LastName: [this.InfoValue.LastName,
        [
          Validators.maxLength(200)
        ]
      ],
      Image: [this.InfoValue.Image],
      Sex: [this.InfoValue.Sex],
      Address: [this.InfoValue.Address,
        [
          Validators.maxLength(200)
        ]
      ],
      Address2: [this.InfoValue.Address2,
        [
          Validators.maxLength(200)
        ]
      ],
      Infomation: [this.InfoValue.Infomation,
        [
          Validators.maxLength(200)
        ]
      ],
      BirthDate: [this.InfoValue.BirthDate],
      RegisterDate: [this.InfoValue.RegisterDate],
      PhoneNo: [this.InfoValue.PhoneNo,
        [
          Validators.maxLength(50)
        ]
      ],
      MailAddress: [this.InfoValue.MailAddress,
        [
          Validators.maxLength(100)
        ]
      ],
      Remark: [this.InfoValue.Remark,
        [
          Validators.maxLength(200)
        ]
      ],
      CreateDate: [this.InfoValue.CreateDate],
      ModifyDate: [this.InfoValue.ModifyDate],
    });
    this.InfoValueForm.valueChanges.subscribe((data: any) => this.onValueChanged(data));
  }

}
