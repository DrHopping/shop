import { Action, createReducer, on } from '@ngrx/store';
import { adapter, initialProductsState, ProductsState } from './products.state';
import * as ProductsActions from './products.actions';

const reducer = createReducer(
  initialProductsState,

  on(ProductsActions.getProducts, (state) => {
    console.log('GET_PRODUCTS action being handled!');
    return {
      ...state,
      loading: true,
    };
  }),

  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    console.log('GET_PRODUCTS_SUCCESS action being handled!');
    return adapter.setAll(products, { ...state, loading: false, loaded: true });
  }),

  on(ProductsActions.getProductsError, (state, { error }) => {
    console.log('GET_PRODUCTS_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error,
    };
  })
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
