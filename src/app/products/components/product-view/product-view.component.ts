import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { first } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductsFacade } from 'src/app/store';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  product!: ProductModel;

  constructor(
    private productsFacade: ProductsFacade,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsFacade.selectedProductByUrl$
      .pipe(first())
      .subscribe((p) => (this.product = { ...p }));
  }

  onBuyButtonClick() {
    this.cartService.addProduct(this.product);
  }
}
