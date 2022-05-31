import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/products/models/product.model';

export const getProducts = createAction(
  '[Products List Page (App)] GET_PRODUCTS'
);

export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
  props<{ products: ProductModel[] }>()
);

export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
);
