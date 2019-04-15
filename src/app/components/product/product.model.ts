import { Category } from './category.enum';
import { IProduct } from './iproduct';

export class Product implements IProduct {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public price: number,
        public amount: number,
        public category:Category,
        public isAvialable?: boolean
    ) {
        this.isAvialable = isAvialable || true;
    }
  }