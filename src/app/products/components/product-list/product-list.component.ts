import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductsFacade } from 'src/app/store';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<readonly ProductModel[]>;
  sortOptions: Partial<Record<keyof ProductModel, string>> = {
    name: 'Name',
    price: 'Price',
    isAvailable: 'Availability',
  };
  selected!: keyof ProductModel;
  isAscending: boolean = false;

  constructor(
    public productsFacade: ProductsFacade,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productsFacade.products$;
  }

  onAddProductToCart(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
