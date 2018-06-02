import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BaseMasterComponent } from '../../shared/base-master-component';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';
import { CustomerCommuncateService } from '../shared/customer-communcate.service';
import { DialogsService } from '../../dialogs/shared/dialogs.service';
import { CustomerTableComponent } from '../customer-table/customer-table.component';

@Component({
  selector: 'app-customer-master',
  templateUrl: './customer-master.component.html',
  styleUrls: ['./customer-master.component.scss']
})
export class CustomerMasterComponent
  extends BaseMasterComponent<Customer, CustomerService, CustomerCommuncateService> {

  constructor(
    service: CustomerService,
    serviceCommuncate: CustomerCommuncateService,
    serviceDialogs: DialogsService,
    viewContainerRef: ViewContainerRef
  ) {
    super(service,serviceCommuncate,serviceDialogs,viewContainerRef);
  }
}
