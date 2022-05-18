import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {delay, EMPTY, Observable, of, switchMap } from "rxjs";
import { ProductModel } from "src/app/products/models/product.model";
import { ProductsObservableService } from "src/app/products/services/products-observable.service";

export function resolveProductWithRedirect(redirectUrl: string) {
  return {data: {redirectUrl}, resolve: {product: ProductResolver}};
}

@Injectable({providedIn: 'root'})
export class ProductResolver implements Resolve<ProductModel> {
  constructor(private productService: ProductsObservableService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> {
    return this.productService.getProduct(+route.params['productID']).pipe(
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
