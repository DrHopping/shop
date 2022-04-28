import { Inject, Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';
import { LocalStorageService, LocalStorageServiceToken } from 'src/app/core/services/local-storage.service';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel, CartProductModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartStorageKey = 'CartStorage';
  private cart: CartModel = {};
  private cartProducts = new BehaviorSubject<CartProductModel[]>([]);

  constructor(@Inject(LocalStorageServiceToken) private storage: LocalStorageService) {
    if (!storage.isKeyExists(this.cartStorageKey)) {
      storage.set(this.cartStorageKey, {});
    }
    this.cart = storage.get<CartModel>(this.cartStorageKey);
    this.onChange();
  }

  addProduct(product: ProductModel) {
    if (this.cart[product.id]) {
      this.changeQuantity(product, 1);
    } else {
      this.cart[product.id] = {
        product: product,
        count: 1,
      };
    }
    this.onChange();
  }

  increaseQuantity(product: ProductModel, quantity: number = 1) {
    this.changeQuantity(product, quantity)
    this.onChange();
  }

  decreaseQuantity(product: ProductModel, quantity: number = -1) {
    this.changeQuantity(product, quantity)
    this.onChange();
  }

  deleteProduct(product: ProductModel) {
    if (!this.cart[product.id]) return;
    delete this.cart[product.id];
    this.onChange();
  }

  removeAllProducts() {
    this.cart = {};
    this.onChange();
  }

  getCartProducts(): CartProductModel[] {
    return Object.values(this.cart);
  }

  get cartProducts$(): Observable<CartProductModel[]> {
    return this.cartProducts.asObservable();
  }

  get isEmpty$(): Observable<boolean> {
    return this.cartProducts$.pipe(
      map((cartProductArray) => cartProductArray.length == 0)
    );
  }

  get totalQuantity$(): Observable<number> {
    return this.getTotal((cartProduct) => cartProduct.count);
  }

  get totalCost$(): Observable<number> {
    return this.getTotal(
      (cartProduct) => cartProduct.count * cartProduct.product.price
    );
  }

  private getTotal(func: (p: CartProductModel) => number) {
    return this.cartProducts$.pipe(
      map((cartProductArray) =>
        cartProductArray.flatMap(func).reduce((a, b) => a + b, 0)
      )
    );
  }

  private changeQuantity(product: ProductModel, quantity: number = 1) {
    if (!this.cart[product.id]) return;
    if (this.cart[product.id].count + quantity < 1) return;
    this.cart[product.id] = {
      ...this.cart[product.id],
      count: this.cart[product.id].count + quantity,
    };
  }

  private onChange() {
    this.storage.set<CartModel>(this.cartStorageKey, this.cart);
    this.cartProducts.next(this.getCartProducts());
  }
}
