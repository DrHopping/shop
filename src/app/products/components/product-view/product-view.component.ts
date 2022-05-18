import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  product!: ProductModel;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.product = data['product'];
    });
  }

  onBuyButtonClick() {
    this.cartService.addProduct(this.product);
  }
}
