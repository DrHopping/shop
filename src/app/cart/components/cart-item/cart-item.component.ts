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
  @Output() addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() removeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  @Output() deleteProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }
  
  get product() : ProductModel {
    return this.cartItem.product;
  }
  
  get count() : number {
    return this.cartItem.count;
  }
  
  onAddProduct() {
    this.addProduct.emit(this.product);
  }

  onRemoveProduct() {
    this.removeProduct.emit(this.product);
  }

  onDeleteProduct() {
    this.deleteProduct.emit(this.product);
  }
}
