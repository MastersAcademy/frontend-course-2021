import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TToken } from '../models';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient, private router: Router) {}

    login(email:string, password:string ) {
        return this.http.post<TToken>(`${environment.apiUrl}/sign-in`, { username: email, password })
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/login');
    }

    setSession(token: string) {
        localStorage.setItem('token', token);
    }
}
