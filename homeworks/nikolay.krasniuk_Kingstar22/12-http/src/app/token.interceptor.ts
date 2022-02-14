import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDataService} from './services/user-date.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private userDataService: UserDataService) {}

    intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
        const change = request.clone({
            headers: request.headers.append('Authorization', this.userDataService.getUserToken())
        })
        return next.handle(change);
    }
}
