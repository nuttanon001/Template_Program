import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCenterComponent } from './customer-center.component';
import { CustomerMasterComponent } from './customer-master/customer-master.component';

const routes: Routes = [{
  path: "",
  component: CustomerCenterComponent,
  children: [
    {
      path: ":key",
      component: CustomerMasterComponent,
    },
    {
      path: "",
      component: CustomerMasterComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
