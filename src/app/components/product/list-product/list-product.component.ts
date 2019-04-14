import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  items: Array<Product>;

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit() {
    this.items = this.productService.getItems();
  }

  buyProduct(id:number){
    /*
      TODO: add product to cart
    */
    // console.log(id);
    this.items[id].isAvialable = !this.items[id].isAvialable;
  }

}
