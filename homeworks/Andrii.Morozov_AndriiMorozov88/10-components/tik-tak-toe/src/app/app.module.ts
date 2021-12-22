import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoveComponent } from './move/move.component';
import { ControlComponent } from './control/control.component';
import { FieldComponent } from './field/field.component';

@NgModule({
    declarations: [
        AppComponent,
        MoveComponent,
        ControlComponent,
        FieldComponent
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
