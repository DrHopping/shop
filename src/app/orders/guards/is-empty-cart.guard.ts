import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class IsEmptyCartGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.cartService.isEmpty$.pipe(
      map((e) => (e ? this.router.parseUrl('/products') : true))
    );
  }
}
