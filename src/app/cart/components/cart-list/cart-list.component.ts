import { Component, OnInit } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartProductModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {

  constructor(public cartService: CartService) {}

  ngOnInit(): void {}

  onAddProduct(product: ProductModel) {
    this.cartService.increaseQuantity(product);
  }

  onRemoveProduct(product: ProductModel) {
    this.cartService.decreaseQuantity(product);
  }

  onDeleteProduct(product: ProductModel) {
    this.cartService.deleteProduct(product);
  }

  trackByProduct(index: number, cartProduct: CartProductModel): number {
    return cartProduct.product.id;
  }
  
}
