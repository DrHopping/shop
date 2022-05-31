import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { checkStore } from './check-store.function';
import { ProductsFacade, RouterFacade } from 'src/app/store';

@Injectable({
  providedIn: 'root',
})
export class ProductExistsGuard implements CanActivate {
  constructor(
    private productsFacade: ProductsFacade,
    private routerFacade: RouterFacade
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return checkStore(this.productsFacade).pipe(
      switchMap(() => {
        const id = +route.paramMap.get('productID')!;
        return this.hasProduct(id);
      })
    );
  }

  private hasProduct(id: number): Observable<boolean> {
    return this.productsFacade.products$.pipe(
      map((products) => !!products.find((product) => product.id === id)),
      tap((result) => {
        if (!result) {
          this.routerFacade.goTo({ path: ['/products'] });
        }
      }),
      take(1)
    );
  }
}
