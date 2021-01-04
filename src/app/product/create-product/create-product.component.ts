import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

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
  selectedImage: any = null;
  imgSrc: string = "";

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage) {

  }

  ngOnInit() {
    this.getAllCategory();
  }

  submit(){
    const filePath = `${this.product.name}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
    const fileRef = this.storage.ref(filePath);
    this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(async url => {
          this.product.image = url;
          await this.createProduct();
        });
      })
    ).subscribe();
  }

  createProduct() {
    return this.productService.createNewProduct(this.product).toPromise();
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }

  showPreview(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.selectedImage = null;
    }
  }
}
