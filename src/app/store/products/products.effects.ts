import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, switchMap, map, catchError, of } from 'rxjs';
import { ProductsObservableService } from 'src/app/products/services/products-observable.service';
import * as ProductsActions from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsObservableService
  ) {}

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap((action) =>
        this.productsService.getProducts().pipe(
          map((products) => ProductsActions.getProductsSuccess({ products })),
          catchError((error) => of(ProductsActions.getProductsError({ error })))
        )
      )
    )
  );
}
