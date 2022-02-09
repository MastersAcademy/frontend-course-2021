import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from './services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        const author = req.clone( {
            headers: req.headers.set('Authorization', this.authService.getToken())
        });
        return next.handle(author);
    }
}
