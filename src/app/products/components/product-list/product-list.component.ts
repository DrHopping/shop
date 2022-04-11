import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(public productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {}

  onAddProductToCart(product: ProductModel) {
    this.cartService.addProduct(product);
  }

}
