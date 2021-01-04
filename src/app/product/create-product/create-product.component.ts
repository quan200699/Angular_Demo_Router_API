import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  product: Product = {
    category: {
      id: -1
    }
  };
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {

  }

  ngOnInit() {
    this.getAllCategory();
  }

  createProduct() {
    this.productService.createNewProduct(this.product).subscribe(() => {
      console.log('Thành công');
    }, () => {
      console.log('Xảy ra lỗi');
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }
}
