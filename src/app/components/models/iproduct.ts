import { Category } from '../enums/category.enum';

export interface IProduct {
    name: string;
    description: string;
    price: number;
    amount: number;
    category: Category;
    isAvialable?: boolean;
}
