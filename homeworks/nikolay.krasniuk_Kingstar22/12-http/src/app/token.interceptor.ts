import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() {return}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const change = request.clone({
            headers: request.headers.append('Authorization', '0a676987-8d2a-4454-8571-5e53a4730202')
        })
        return next.handle(change);
    }
}
