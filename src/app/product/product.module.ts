import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {ProductRoutingModule} from './product-routing.module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    CreateProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
