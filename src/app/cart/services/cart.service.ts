import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartModel, CartProductModel } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartModel = {};
  private channel = new Subject<CartProductModel[]>();
  public channel$ = this.channel.asObservable()

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
    this.channel.next(this.getCartProducts());
  }

  removeProduct(product: ProductModel) {
    if(!this.cart[product.id]) return;
    if(this.cart[product.id].count > 1) {
      this.cart[product.id].count--;
    } else {
      delete this.cart[product.id];
    }
    this.channel.next(this.getCartProducts());
  }

  getCartProducts() : CartProductModel[] {
    return Object.values(this.cart);
  }
}
