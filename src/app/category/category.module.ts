import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryRoutingModule} from './category-routing.module';
import { CreateCategoryComponent } from './create-category/create-category.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CreateCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ]
})
export class CategoryModule { }
