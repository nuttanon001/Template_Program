import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseRestService } from '../../shared/base-rest.service';
import { HttpErrorHandler } from '../../shared/http-error-handler.service';
//Model
import { Customer } from './customer.model';

@Injectable()
export class CustomerService extends BaseRestService<Customer> {
  constructor(
    http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    super(
      http,
      "api/Customer/",
      "CustomerService",
      "CustomerId",
      httpErrorHandler
    );
  }
}
