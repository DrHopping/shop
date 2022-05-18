import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { firstValueFrom } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'any',
})
export class ProductsPromiseService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<ProductModel[]> {
    const request$ = this.http.get(this.productsUrl);
    return firstValueFrom(request$)
      .then((response) => response as ProductModel[])
      .catch(this.handleError);
  }

  getProduct(id: NonNullable<ProductModel['id']> | string): Promise<ProductModel> {
    const url = `${this.productsUrl}/${id}`;
    const request$ = this.http.get(url);
    return firstValueFrom(request$)
      .then((response) => response as ProductModel)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
