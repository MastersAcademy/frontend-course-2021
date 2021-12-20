import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuBtnsComponent } from './menu-btn/menu-btns.component';
import { PlayerValueComponent } from './player-value/player-value.component';
import { FieldGameComponent } from './field-game/field-game.component';
import { PlayerTurnComponent } from './player-turn/player-turn.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuBtnsComponent,
        PlayerValueComponent,
        FieldGameComponent,
        PlayerTurnComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
