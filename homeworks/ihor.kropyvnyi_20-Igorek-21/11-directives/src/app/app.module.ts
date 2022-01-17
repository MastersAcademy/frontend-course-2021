import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';

import { appServices } from './services';
import { appDirectives } from './directives ';
import { appPipes } from './pipes';


@NgModule({
    declarations: [
        AppComponent,
        CardsComponent,
        CardComponent,
        ...appPipes,
        ...appDirectives,
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],

    providers: [...appServices],

    bootstrap: [AppComponent]
})

export class AppModule { }
