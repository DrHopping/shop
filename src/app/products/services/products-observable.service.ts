import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'any',
})
export class ProductsObservableService {
  private productsUrl = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.productsUrl);
  }

  getProduct(id: NonNullable<ProductModel['id']> | string): Observable<ProductModel> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<ProductModel>(url);
  }
}
