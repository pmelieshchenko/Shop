import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  items: Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.items = this.productService.getItems();
  }

  buyProduct(id: number) {
    this.productService.addItemToCart(id);
  }

}
