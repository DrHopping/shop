import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable} from 'rxjs';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel, CartProductModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartModel = {};
  private cartProducts = new BehaviorSubject<CartProductModel[]>([]);

  constructor() {}
  
  addProduct(product: ProductModel) {
    if (this.cart[product.id]) {
      this.cart[product.id].count++;
    } else {
      this.cart[product.id] = {
        product: product,
        count: 1
      }
    }
    this.cartProducts.next(this.getCartProducts());
  }

  removeProduct(product: ProductModel) {
    if(!this.cart[product.id]) return;
    if(this.cart[product.id].count < 2) return;
    this.cart[product.id].count--;
    this.cartProducts.next(this.getCartProducts());
  }

  deleteProduct(product: ProductModel) {
    if(!this.cart[product.id]) return;
    delete this.cart[product.id];
    this.cartProducts.next(this.getCartProducts());
  }
  
  getCartProducts() : CartProductModel[] {
    return Object.values(this.cart);
  }

  get cartProducts$() : Observable<CartProductModel[]> {
    return this.cartProducts.asObservable(); 
  }

  get isEmpty$() : Observable<boolean> {
    return this.cartProducts$.pipe(map(cartProductArray => cartProductArray.length == 0))
  }

  get totalQuantity$() : Observable<number> {
    return this.getTotal(cartProduct => cartProduct.count);
  }
  
  get totalCost$() : Observable<number> {
    return this.getTotal(cartProduct => cartProduct.count * cartProduct.product.price);
  }

  private getTotal(func: (p: CartProductModel) => number) {
    return this.cartProducts$.pipe(map(cartProductArray => cartProductArray.flatMap(func).reduce((a, b) => a + b, 0)));
  }
}
