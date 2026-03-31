import { Injectable } from '@angular/core';
import { products } from '../../data/mock';
import { AnyProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: AnyProduct[] = products;

  getProductById(id: number): AnyProduct | undefined {
    return this.products.find((p) => p.id === id);
  }

  getAllProducts(): AnyProduct[] {
    return this.products;
  }
}
