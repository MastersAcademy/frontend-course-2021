import { Injectable } from '@angular/core';
import {User} from '../app.interface';
@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    addUserDate(userForm: User): void {
        localStorage.setItem('userData', btoa(JSON.stringify(userForm)));
    }

    getUserData(): User {
        const value = localStorage.getItem('userData');
        if (value) {
            return JSON.parse(atob(value));
        }
        return {
            email: '',
            password: '',
        };
    }
}
