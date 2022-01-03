import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuBtnComponent } from './components/menu-btn/menu-btn.component';
import { PlayerValueComponent } from './components/player-value/player-value.component';
import { FieldGameComponent } from './components/field-game/field-game.component';
import { FieldItemComponent } from './components/field-item/field-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuBtnComponent,
        PlayerValueComponent,
        FieldGameComponent,
        FieldItemComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
