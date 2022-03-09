import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'sb-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  editProductForm!: FormGroup;
  id: any

  taxCategory = [];
  color = ['Red', 'Blue', 'Green', 'Yellow'];
  size = ['S', 'M', 'L', 'XL', 'XXL'];
  brand = ['Nike', 'Adidas', 'Reebok', 'Nivea'];
  type = ['booking', 'simple'];

  constructor(private fb: FormBuilder,
    private products: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  get sku() {
    return this.editProductForm.get('sku');
  }

  get name() {
    return this.editProductForm.get('name');
  }

  get urlKey() {
    return this.editProductForm.get('urlKey');
  }

  get visibleIndividually() {
    return this.editProductForm.get('visibleIndividually');
  }

  get status() {
    return this.editProductForm.get('status');
  }

  get shortDescription() {
    return this.editProductForm.get('shortDescription');
  }

  get description() {
    return this.editProductForm.get('description');
  }

  get typ() {
    return this.editProductForm.get('product_type');
  }

  get qty() {
    return this.editProductForm.get('quantity');
  }

  get price() {
    return this.editProductForm.get('price');
  }

  ngOnInit(): void {

    this.editProductForm = this.fb.group({
      sku: ['', [Validators.required]],
      name: ['', [Validators.required]],
      // urlKey: ['', [Validators.required]],
      // taxCategory: [],
      // new: [],
      // featured: [],
      // visibleIndividually: ['', [Validators.required]],
      status: ['', [Validators.required]],
      // color: [],
      // size: [],
      // brand: [],
      // shortDescription: ['', [Validators.required]],
      // description: ['', [Validators.required]],
      product_type: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],

      // metaTitle: [],
      // metaKeywords: [],
      // metaDescritpion: [],
      // price: [],
      // cost: [],
      // specialPrice: [],
      // specialPriceFrom: [],
      // specialPriceTo: []

    });
    this.id = this.route.snapshot.params.id

    // this.products.editProductForm(this.id).subscribe((data: any) => {
    //   this.editProductForm.patchValue(data.Show_Data)
    //   console.log(data)
    // })
  }

  updateData(data: any) {
    this.products.editProducts(this.id, data).subscribe(data => {
      console.log('Data updated successfully! ', data)
    })
    this.router.navigate(['/catalog/products']);
  }

}
