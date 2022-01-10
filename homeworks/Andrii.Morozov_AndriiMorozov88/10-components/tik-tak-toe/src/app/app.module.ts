import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { FieldComponent } from './field/field.component';
import { SquareComponent } from './field/square/square.component';
import { MoveComponent } from './move/move.component';

@NgModule({
    declarations: [
        AppComponent,
        ControlComponent,
        FieldComponent,
        SquareComponent,
        MoveComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
