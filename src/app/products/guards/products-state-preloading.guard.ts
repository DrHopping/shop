import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ProductsFacade } from 'src/app/store';
import { checkStore } from './check-store.function';

@Injectable({
  providedIn: 'root',
})
export class ProductsStatePreloadingGuard implements CanActivate {
  constructor(private productsFacade: ProductsFacade) {}
  canActivate(): Observable<boolean> {
    return checkStore(this.productsFacade).pipe(
      switchMap(() => of(true)),
      catchError(() => of(false))
    );
  }
}
