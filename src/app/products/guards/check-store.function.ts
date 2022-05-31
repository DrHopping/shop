import { Observable } from 'rxjs';
import { tap, filter, take } from 'rxjs/operators';
import { ProductsFacade } from 'src/app/store';

export function checkStore(
  productsFacade: ProductsFacade
): Observable<boolean> {
  return productsFacade.productsLoaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        productsFacade.getTasks();
      }
    }),
    filter((loaded) => loaded),
    take(1)
  );
}
