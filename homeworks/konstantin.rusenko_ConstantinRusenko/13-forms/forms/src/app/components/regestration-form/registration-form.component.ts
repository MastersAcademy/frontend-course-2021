import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationRequestModel } from 'src/app/registration-request.module';

const LOCAL_STORAGE_KEY = 'formInfo';


@Component({
    selector: 'app-registration-form',
    templateUrl: './registration-form.component.html',
    styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

    userName = '';
    userEmail = '';
    userPassword = '';
    userRememberControl = false;

    public registrationForm?: FormGroup;



    ngOnInit(): void {
        let storeData = sessionStorage.getItem(LOCAL_STORAGE_KEY);
        if(!storeData) return this.generateRegistrationForm();
        storeData = atob(storeData);
        const data = JSON.parse(storeData);
        this.userName = data.name;
        this.userEmail = data.email;
        this.userPassword = data.password;
        this.userRememberControl = data.rememberLoginControl

        this.generateRegistrationForm();
    }


    public generateRegistrationForm (): void {
        this.registrationForm =
        new FormGroup( {
            name: new FormControl(
                this.userName ,
                {
                    validators: [
                        Validators.required,
                        Validators.maxLength(12)
                    ]
                }
            ),
            email: new FormControl(
                this.userEmail,
                {
                    validators: [
                        Validators.required,
                        Validators.email
                    ]
                }
            ),
            password: new FormControl(
                this.userPassword,
                {
                    validators: [
                        Validators.required,
                        Validators.minLength(8)
                    ]
                }
            ),
            rememberLoginControl: new FormControl(this.userRememberControl)
        });
    }

    public submitRegistrationForm (): void {
        if ( this.registrationForm?.valid ) {
            const registrationRequest: RegistrationRequestModel = {
                ...this.registrationForm.value
            };
            if (this.toggleRemember()) { 
                sessionStorage.setItem(LOCAL_STORAGE_KEY ,btoa(JSON.stringify(registrationRequest))) 
            } else {
                sessionStorage.clear();
            }
            alert( JSON.stringify(registrationRequest) );
        }
    }

    public toggleRemember(): boolean {
        return this.registrationForm?.controls['rememberLoginControl'].value;
    }

}