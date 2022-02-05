import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CurrentComponent } from './components/current/current.component';
import { BoardComponent } from './components/board/board.component';
import { ResetComponent } from './components/reset/reset.component';
import { ScoreComponent } from './components/score/score.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CurrentComponent,
        BoardComponent,
        ResetComponent,
        ScoreComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
