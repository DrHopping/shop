import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import * as RouterActions from './router.actions';

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  constructor(private store: Store) {}

  goTo(props: {
    path: any[];
    queryParams?: object;
    extras?: NavigationExtras;
  }) {
    this.store.dispatch(RouterActions.go(props));
  }

  back() {
    this.store.dispatch(RouterActions.back());
  }

  forward() {
    this.store.dispatch(RouterActions.forward());
  }
}
