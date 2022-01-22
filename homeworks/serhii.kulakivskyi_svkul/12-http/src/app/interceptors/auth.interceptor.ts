import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if(localStorage['token']) {
            const updated = req.clone({
                headers: req.headers.set('authorization', localStorage['token'])
            });

            return next.handle(updated);
        }

        return next.handle(req);
    }
}
