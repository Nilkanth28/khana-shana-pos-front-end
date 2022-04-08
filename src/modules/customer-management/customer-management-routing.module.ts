import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerManagementModule } from './customer-management.module';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer_management',
  },
  {
    path: 'customer_management',
    canActivate: [],
    component: CustomerManagementComponent,
    data: {
      title: 'Customers',
    } as SBRouteData,
  },
  {
    path: 'addcustomer',
    canActivate: [],
    component: AddCustomerComponent,
    data: {
      title: 'Add Customer',
    } as SBRouteData,
  },
  {
    path: 'editcustomer/:id',
    canActivate: [],
    component: EditCustomerComponent,
    data: {
      title: 'Edit Customer',
    } as SBRouteData,
  },
];

@NgModule({
  imports: [CustomerManagementModule ,RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerManagementRoutingModule { }
