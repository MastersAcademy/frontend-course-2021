import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {
    SvgIconComponent,
    CheckboxComponent,
    TodoFormComponent,
    TodoItemComponent
} from './components';

import {
    HomeComponent,
    LoginComponent,
    NotFoundComponent
} from './pages';

import {
    AuthInterceptor,
    ErrorCatchingInterceptor
} from './interceptors';

@NgModule({
    declarations: [
        AppComponent,
        SvgIconComponent,
        HomeComponent,
        LoginComponent,
        NotFoundComponent,
        CheckboxComponent,
        TodoFormComponent,
        TodoItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorCatchingInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
