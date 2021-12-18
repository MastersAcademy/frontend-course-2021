import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconSpriteModule } from 'ng-svg-icon-sprite';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { GameActionsComponent } from './game-actions/game-actions.component';
import { GameComponent } from './game/game.component';

@NgModule({
    declarations: [
        AppComponent,
        PlayersComponent,
        GameActionsComponent,
        GameComponent,
    ],
    imports: [
        BrowserModule,
        IconSpriteModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
