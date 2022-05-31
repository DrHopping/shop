import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterFacade } from 'src/app/store';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;
  @Output() addProductToCart: EventEmitter<ProductModel> =
    new EventEmitter<ProductModel>();

  constructor(private routerFacade: RouterFacade) {}

  ngOnInit(): void {}

  onBuyButtonClick(): void {
    this.addProductToCart.emit(this.product);
  }

  onViewProduct(id: number) {
    const link = ['/products', id];
    this.routerFacade.goTo({ path: link });
  }
}
