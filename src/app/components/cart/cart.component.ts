import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<Product>;
  cartStatus:boolean = false;

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.items = this.productService.getItems();
    this.cartStatus = this.items.every(this.checkAvialable);
  }

  checkAvialable(item:Product){
    return !item.isAvialable;
  }
}
