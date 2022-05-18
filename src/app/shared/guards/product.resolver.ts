import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {delay, EMPTY, from, Observable, of, switchMap, take} from "rxjs";
import { ProductModel } from "src/app/products/models/product.model";
import { ProductsPromiseService } from "src/app/products/services/products-promise.service";

export function resolveProductWithRedirect(redirectUrl: string) {
  return {data: {redirectUrl}, resolve: {product: ProductResolver}};
}

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductsPromiseService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    return from(this.productService.getProduct(+route.params['productID'])).pipe(
      delay(1000),
      switchMap(product => {
        if (product) {
          return of(product)
        } else {
          this.router.navigate(['/products']);
          return EMPTY;
        }
      })
    );
  }
}
