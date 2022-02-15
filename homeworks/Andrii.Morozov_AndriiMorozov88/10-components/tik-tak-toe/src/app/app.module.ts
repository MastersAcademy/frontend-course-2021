import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ScoreComponent } from './components/score/score.component';
import { FieldComponent } from './components/field/field.component';
import { SquareComponent } from './components/square/square.component';
import { PlayerTurnComponent } from './components/player-turn/player-turn.component';
import { DataService } from './services/data.service';
import { IconComponent } from './components/icon/icon.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
    declarations: [
        AppComponent,
        ScoreComponent,
        FieldComponent,
        SquareComponent,
        PlayerTurnComponent,
        IconComponent,
        PlayerComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
