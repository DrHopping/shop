import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class TimingInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.includes('api')) {
      return next.handle(req);
    }

    const start = performance.now();
    return next.handle(req).pipe(
      tap(() => {
        console.log(`url: ${req.url} time: ${performance.now() - start} ms`);
      })
    );
  }
}
