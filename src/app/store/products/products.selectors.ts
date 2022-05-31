import { getSelectors } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel } from 'src/app/products/models/product.model';
import { productsFeatureKey } from '../app.state';
import { selectRouterState } from '../router';
import { adapter, ProductsState } from './products.state';

export const {
  selectQueryParams,
  selectRouteParams,
  selectRouteData,
  selectUrl,
} = getSelectors(selectRouterState);

export const selectProductsState =
  createFeatureSelector<ProductsState>(productsFeatureKey);

export const {
  selectEntities: selectProductsEntities,
  selectAll: selectProductsData,
} = adapter.getSelectors(selectProductsState);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectProductsLoaded = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loaded
);

export const selectProductByUrl = createSelector(
  selectProductsEntities,
  selectRouteParams,
  (products, params): ProductModel => {
    const productID = params['productID'];
    console.log(productID);
    return (productID ? products[productID] : {}) as ProductModel;
  }
);
