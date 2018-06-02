import { Component, OnInit } from '@angular/core';
import { BaseTableComponent } from '../../shared/base-table.component';
import { Customer } from '../shared/customer.model';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent extends BaseTableComponent<Customer,CustomerService> {

  constructor(
    service:CustomerService
  ) {
    super(service);
    this.displayedColumns = ["FirstName", "LastName", "PhoneNo","MailAddress","Age"];
  }
}
