import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  sortOptions: Partial<Record<keyof ProductModel, string>> = {
    name: 'Name',
    price: 'Price',
    isAvailable: 'Availability',
  };

  selected!: keyof ProductModel;
  isAscending: boolean = false;

  constructor(
    public productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  onAddProductToCart(product: ProductModel) {
    this.cartService.addProduct(product);
  }
}
