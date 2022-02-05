import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDataService} from './services/user-data.service';
import {User} from './app.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    userForm!: FormGroup;
    constructor( private formBuilder: FormBuilder, private userDataService: UserDataService) {}

    ngOnInit() {
        const saveDate: User = this.userDataService.getUserData();
        this.userForm = this.formBuilder.group({
            email: [saveDate.email, [
                Validators.email,
                Validators.required
            ]],
            password: [saveDate.password, [
                Validators.required,
                Validators.minLength(8)
            ]],
            rememberCheckbox: false,
        });
    }
    get controls() {
        return {
            email: this.userForm.get('email') as FormControl,
            password: this.userForm.get('password') as FormControl
        }
    }

    submit() {
        const { email, password, rememberCheckbox } = this.userForm.value;
        if(rememberCheckbox) {
            this.userDataService.addUserDate(this.userForm.value);
        } else {
            localStorage.clear();
        }
        alert(`Email is: ${email}\nPassword is: ${password}`)
        this.userForm.reset();
    }
}
