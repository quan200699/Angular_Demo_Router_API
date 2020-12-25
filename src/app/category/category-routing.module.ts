import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCategoryComponent} from './create-category/create-category.component';


const routes: Routes = [
  {
    path: 'create',
    component: CreateCategoryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule {
}
