import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

    form!: FormGroup
    subscription: Subscription = new Subscription()
    constructor(private authService: AuthService,
                private router: Router) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            login: new FormControl(null, [Validators.required]),
            password: new FormControl( null, [Validators.required, Validators.minLength(6)])
        })
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    onSubmit() {
        this.form.disable();

        const login = this.form.value.login;
        const password = this.form.value.password;

        this.subscription.add(this.authService.login(login, password).subscribe(
            () => {
                this.router.navigate(['/to_do_list']);
            },
            error => {
                console.warn(error);
                this.form.enable();
            }
        ))
    }
}
