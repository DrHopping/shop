import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import {
  selectProductByUrl,
  selectProductsData,
  selectProductsError,
} from './products.selectors';
import * as ProductsActions from './products.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string | null>;
  selectedProductByUrl$: Observable<ProductModel>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectProductsData);
    this.productsError$ = this.store.select(selectProductsError);
    this.selectedProductByUrl$ = this.store.select(selectProductByUrl);
  }
}
