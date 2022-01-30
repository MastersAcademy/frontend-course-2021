import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { IText } from '../models/toDoList.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private token  = '';

    constructor(private http: HttpClient) { }

    login(login: IText, password: IText ): Observable<{ token: string  }> {
        return  this.http.post<{ token: string  }>('https://ma-http-homework.herokuapp.com/sign-in', {
            'username': login,
            'password': password
        })
            .pipe( tap( ({token}) => {
                localStorage.setItem('auth-token', token);
                this.setToken(token);
            }))
    }

    setToken(token: string ): void {
        this.token = token;
    }


    getToken(): string  {
        return this.token;
    }

    singOut(): void{
        this.token = '';
        localStorage.clear();
    }
}
