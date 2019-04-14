import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Category } from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  items: Array<Product> = [
    /* car */
    new Product(0,  'BMW',     'new car',   88000, Category.car),
    new Product(1,  'Ford',    'new car',   64000, Category.car),
    new Product(2,  'Audi',    'new car',   48000, Category.car),
    /* bread */
    new Product(3,  'Bakery',  'french bun', 4.5,  Category.bread),
    /* clothes */
    new Product(4,  'Gucci',  'Blazer',    8, Category.clothes),
    new Product(5,  'Prada',  'shirt',     3, Category.clothes),
    new Product(6,  'Versace',  'jeans',     18, Category.clothes),
    /* Instruments */
    new Product(7,  'garden tools',  'scoop',     12, Category.instruments),
    new Product(8,  'garden tools',  'scissors',  11, Category.instruments),
    /* flowers */
    new Product(9,  'garden flowers',  'roses',     19.5, Category.flowers),
    new Product(10, 'garden flowers',  'lilies',    24.5, Category.flowers)
  ];
  constructor() { }

  getItems(): Array<Product> {
    return this.items;
  }
}