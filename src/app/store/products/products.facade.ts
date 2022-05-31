import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import {
  selectProductByUrl,
  selectProductsData,
  selectProductsError,
  selectProductsLoaded,
} from './products.selectors';
import * as ProductsActions from './products.actions';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacade {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsLoaded$: Observable<boolean>;
  productsError$: Observable<Error | string | null>;
  selectedProductByUrl$: Observable<ProductModel>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectProductsData);
    this.productsLoaded$ = this.store.select(selectProductsLoaded);
    this.productsError$ = this.store.select(selectProductsError);
    this.selectedProductByUrl$ = this.store.select(selectProductByUrl);
  }

  getProducts() {
    this.store.dispatch(ProductsActions.getProducts());
  }
}
