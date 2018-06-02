import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { BaseCommunicateService } from '../../shared/base-communicate.service';

@Injectable()
export class CustomerCommuncateService extends BaseCommunicateService<Customer> {
  constructor() { super(); }
}
