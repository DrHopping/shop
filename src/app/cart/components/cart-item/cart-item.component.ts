import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartProductModel } from '../../models/cart.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartProductModel; 
  
  @Output() quantityIncrease: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() quantityDecrease: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() deleteItem: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {}

  onQuantityIncrease() {
    this.quantityIncrease.emit(this.product);
  }

  onQuantityDecrease() {
    this.quantityDecrease.emit(this.product);
  }

  onDeleteItem() {
    this.deleteItem.emit(this.product);
  }
  
  get product() : ProductModel {
    return this.cartItem.product;
  }
  
  get count() : number {
    return this.cartItem.count;
  }
}
