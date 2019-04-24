import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../enums/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Array<Product> = [
    /* car */
    new Product(0,  'BMW',     'new car',   88000, 2, Category.car),
    new Product(1,  'Ford',    'new car',   64000, 3, Category.car),
    new Product(2,  'Audi',    'new car',   48000, 5, Category.car),
    /* bread */
    new Product(3,  'Bakery',  'french bun', 4.5,  18, Category.bread),
    /* clothes */
    new Product(4,  'Gucci',  'Blazer',    8, 11, Category.clothes),
    new Product(5,  'Prada',  'shirt',     3, 7, Category.clothes),
    new Product(6,  'Versace',  'jeans',     18, 32, Category.clothes),
    /* Instruments */
    new Product(7,  'scoop',  'garden tools',     12, 48, Category.instruments),
    new Product(8,  'scissors',  'garden tools',  11, 24, Category.instruments),
    /* flowers */
    new Product(9,  'roses',  'garden flowers',     19.5, 2, Category.flowers),
    new Product(10, 'lilies',  'garden flowers',    24.5, 9, Category.flowers)
  ];

  itemsCart: Array<Product> = [];

  constructor() { }

  getItems(): Array<Product> {
    return this.items;
  }

  getItemsCart(): Array<Product> {
    return this.itemsCart;
  }

  addItemToCart(id: number): void {
    this.items[id].amount -= 1;
    if (this.items[id].amount === 0) {
      this.items[id].isAvialable = false;
    }
    for (const item of this.itemsCart) {
      if (item.id === id) {
        item.amount += 1;
        return;
      }
    }

    this.itemsCart.push(Object.assign({}, this.items[id]));
    this.itemsCart[this.itemsCart.length - 1].amount = 1;
  }

  delItemFromCart(id: number, amt: number): void {
    for (let i = 0; i < this.itemsCart.length; i++) {
      if (this.itemsCart[i].id === id) {
        if (this.itemsCart[i].amount > 1 && amt === 1) {
          this.itemsCart[i].amount -= 1;
        } else {
          this.itemsCart.splice(i, 1);
        }
      }
    }

    this.items[id].amount += amt;
    if (this.items[id].amount > 0 && !this.items[id].isAvialable) {
      this.items[id].isAvialable = true;
    }
  }
}
