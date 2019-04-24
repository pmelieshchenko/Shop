import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Array<Product>;
  amt: number;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.items = this.productService.getItemsCart();
  }

  getAmt(): number {
    return this.items.reduce((sum, item) => sum + item.price * item.amount, 0);
  }

  delItemFromCart(id: number, amt: number): void {
    this.productService.delItemFromCart(id, amt);
  }
}
