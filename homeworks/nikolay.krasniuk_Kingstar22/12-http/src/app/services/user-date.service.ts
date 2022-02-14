import { Injectable } from '@angular/core';
import {IToken, User} from '../app.interface';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    private userToken = '';
    constructor(private http: HttpClient) { }

    getUserData(): User {
        const value = localStorage.getItem('userData');
        if (value) {
            return JSON.parse(atob(value));
        }
        return {
            login: '',
            password: '',
            rememberCheckbox: false
        };
    }

    addUser(user: User): Observable<IToken> {
        if (user.rememberCheckbox) {
            localStorage.setItem('userData', btoa(JSON.stringify(user)));
        } else {
            localStorage.removeItem('userData');
        }
        return this.http.post<IToken>('https://ma-http-homework.herokuapp.com/sign-in', {
            'username': user.login,
            'password': user.password
        })
            .pipe(
                tap( (userToken) => {
                    localStorage.setItem('token', userToken.token);
                    this.setToken(userToken.token);
                })
            )
    }

    setToken(userToken: string ): void {
        this.userToken = userToken

    }

    getUserToken(): string {
        return this.userToken
    }

    logOut() {
        this.userToken = '';
        localStorage.removeItem('token');
    }
}
