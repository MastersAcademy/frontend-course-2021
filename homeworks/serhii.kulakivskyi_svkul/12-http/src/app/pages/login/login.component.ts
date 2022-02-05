import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/models';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    user: IUser = {
        email: '',
        password: ''
    };

    constructor(
      private router: Router,
      private authService: AuthService,
    ) {}

    login() {
        if (this.user.email && this.user.password) {
            this.authService.login(this.user.email, this.user.password)
                .subscribe(
                    (res) => {
                        this.authService.setSession(res.token);
                        this.router.navigateByUrl('/');
                    }
                );
        }
    }
}
