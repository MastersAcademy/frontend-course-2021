import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const update = request.clone({
            headers: request.headers.set('authorization', '65accb6c-1a46-4ae5-aa64-9590ae3408d8')
        })
        return next.handle(update);
    }
}
