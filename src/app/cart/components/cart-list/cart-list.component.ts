import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { CartProductModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  public items$! : Observable<CartProductModel[]>;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items$ = this.cartService.channel$;
  }

  onAddProduct(product: ProductModel) {
    this.cartService.addProduct(product);
  }

  onRemoveProduct(product: ProductModel) {
    this.cartService.removeProduct(product);
  }

  onDeleteProduct(product: ProductModel) {
    this.cartService.deleteProduct(product);
  }
}
