import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomMaterialModule } from '../shared/customer-material.module';
// Services
import { CustomerService } from './shared/customer.service';
// Components
import { CustomerCenterComponent } from './customer-center.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerCommuncateService } from './shared/customer-communcate.service';
import { CustomerTableComponent } from './customer-table/customer-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    CustomerRoutingModule
  ],
  declarations: [
    CustomerCenterComponent,
    CustomerMasterComponent,
    CustomerInfoComponent,
    CustomerTableComponent
  ],
  providers: [
    CustomerService,
    CustomerCommuncateService
  ]
})
export class CustomerModule { }
