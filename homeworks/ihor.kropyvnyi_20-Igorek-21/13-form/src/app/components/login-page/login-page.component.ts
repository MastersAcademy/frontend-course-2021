import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public limitPassword = 6;

    loginForm  = new FormGroup({
        loginEmail: new FormControl('', [Validators.required, Validators.email]),
        loginPassword: new FormControl('', [Validators.required, Validators.minLength(this.limitPassword)]),
        loginCheckbox: new FormControl(false)
    })

    ngOnInit(): void {
        const dataLogin  = localStorage.getItem('qwer');
        const dataPassword = localStorage.getItem('asdf');

        if (dataLogin && dataPassword !== null ) {
            this.loginForm.patchValue({
                loginEmail: atob(dataLogin) ,
                loginPassword: atob(dataPassword)
            })
        }
    }

    public get controls() {
        return {
            email: this.loginForm.get('loginEmail') as FormControl,
            password: this.loginForm.get('loginPassword') as FormControl
        }
    }

    public onSubmit(): void {

        if (this.loginForm.value.loginCheckbox) {
            localStorage.setItem('qwer',btoa(this.loginForm.value.loginEmail));
            localStorage.setItem('asdf',btoa(this.loginForm.value.loginPassword));
        }
        else localStorage.clear();

        alert('login: '+`${this.loginForm.value.loginEmail}`+'   '+ 'password: ' + `${this.loginForm.value.loginPassword}`);

        this.loginForm.reset();
    }

}
