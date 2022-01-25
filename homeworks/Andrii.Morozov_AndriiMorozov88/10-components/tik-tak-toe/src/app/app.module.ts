import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControlComponent } from './control/control.component';
import { FieldComponent } from './field/field.component';
import { SquareComponent } from './field/square/square.component';
import { MoveComponent } from './move/move.component';
import { DataService } from './data.service';
import { IconComponent } from './icon/icon.component';

@NgModule({
    declarations: [
        AppComponent,
        ControlComponent,
        FieldComponent,
        SquareComponent,
        MoveComponent,
        IconComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
