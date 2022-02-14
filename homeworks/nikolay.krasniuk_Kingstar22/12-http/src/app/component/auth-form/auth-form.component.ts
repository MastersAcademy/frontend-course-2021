import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../app.interface';
import {UserDataService} from '../../services/user-date.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
    userForm!: FormGroup;
    constructor( private formBuilder: FormBuilder, private userDataService: UserDataService, private router: Router) {}

    ngOnInit() {
        const saveDate: User = this.userDataService.getUserData();
        this.userForm = this.formBuilder.group({
            login: [saveDate.login, [ Validators.required ]],
            password: [saveDate.password, [ Validators.required,  Validators.minLength(4) ]],
            rememberCheckbox: false,
        });
    }
    get controls() {
        return {
            login: this.userForm.get('login') as FormControl,
            password: this.userForm.get('password') as FormControl
        }
    }

    submit() {
        this.userDataService.addUser(this.userForm.value).subscribe(() => {
            this.userForm.reset();
            this.router.navigate(['/todo']);
        });
    }
}
