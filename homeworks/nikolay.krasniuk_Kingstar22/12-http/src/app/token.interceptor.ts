import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor() {return}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const change = request.clone({
            headers: request.headers.append('Authorization', '0ffda07f-1321-4137-9a82-fdee37ebbd5f')
        })
        return next.handle(change);
    }
}
