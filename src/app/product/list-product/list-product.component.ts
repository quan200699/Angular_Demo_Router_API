import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';

declare var $: any;

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAllProduct().subscribe(result => {
      this.products = result;
      $(function() {
        $('#product-table').DataTable({
          'paging': true,
          'lengthChange': false,
          'searching': false,
          'ordering': true,
          'info': true,
          'pageLength': 5,
          'autoWidth': false,
        });
      });
    }, error => console.log(error));
  }

}
