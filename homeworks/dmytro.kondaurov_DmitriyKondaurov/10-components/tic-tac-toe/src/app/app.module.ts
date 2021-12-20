import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameFieldComponent } from './components/game-field/game-field.component';
import { GameStateComponent } from './components/game-state/game-state.component';
import { GameDashboardComponent } from './components/game-dashboard/game-dashboard.component';

@NgModule({
    declarations: [
        AppComponent,
        GameFieldComponent,
        GameStateComponent,
        GameDashboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
