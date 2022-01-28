import { InputComponent } from './components/form-elements/input/input.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationFormComponent } from './components/regestration-form/registration-form.component';
import { FieldErrorsComponent } from './components/form-elements/field-errors/field-errors.component';
import { PasswordInputComponent } from './components/form-elements/password-input/password-input.component';

@NgModule({
    declarations: [
        AppComponent,
        RegistrationFormComponent,
        InputComponent,
        FieldErrorsComponent,
        PasswordInputComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
