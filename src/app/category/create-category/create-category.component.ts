import { Component, OnInit } from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  category: Category = {};

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
  }

  createCategory() {
    this.categoryService.createNewCategory(this.category).subscribe(() => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }
}
