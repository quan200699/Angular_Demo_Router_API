import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from './create-product/create-product.component';
import {ListProductComponent} from './list-product/list-product.component';
import {UpdateProductComponent} from './update-product/update-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';


const routes: Routes = [{
  path: 'create-product',
  component: CreateProductComponent
}, {
  path: 'list-product',
  component: ListProductComponent
}, {
  path: 'update-product/:id',
  component: UpdateProductComponent
}, {
  path: 'delete-product/:id',
  component: DeleteProductComponent
}];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
