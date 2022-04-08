import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppToastService } from '@modules/shared-module/services/app-toast.service';

import { CustomerManagementService } from '../customer-management.service';

@Component({
  selector: 'sb-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.scss']
})
export class CustomerManagementComponent implements OnInit {

  public customerData: any = [];
  public length = 0;
  public total = 0;
  public id = 0;
  page = 1;
  pageSize = 10;
  itemsPerPage: any;
  searchValue: any
  showloader: any

  constructor(
    private toast: AppToastService,
    private router: Router,
    private customerService: CustomerManagementService
  ) { }

  ngOnInit(): void {
    this.getCustomerData()
  }

  getCustomerData() {
    this.customerService.getCustomerData().subscribe(data=> {
      this.customerData = data
      this.length = this.customerData.length
    })
  }

  // For navigating to add product form on click
  onClick() {
    this.router.navigate(['/customer_management/addcustomer']);
  }

  // For updating data on page change
  onPageChange(event: any) {
    // this.page = event;
    // this.getCustomerData();
    // console.log('Here >>>', this.page, this.productData);
  }

  // For deleting product
  deleteRow(id: number) {
    // this.customerService.deleteProducts(id).subscribe(data => {
    //   this.getCustomerData();
    //   this.toast.success('Success', 'Deleted Successfully.')
    // }, err => {
    //   this.toast.error('Error', 'Server error.')
    // });
  }


}
