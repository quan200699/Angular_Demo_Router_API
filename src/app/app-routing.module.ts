import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ListProductComponent} from './product/list-product/list-product.component';
import {UpdateProductComponent} from './product/update-product/update-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
