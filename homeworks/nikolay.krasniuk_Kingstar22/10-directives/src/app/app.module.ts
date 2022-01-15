import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { HttpClientModule } from '@angular/common/http';
import {appServices} from './services';
import {appPipes} from './pipes';
import {appDirectives} from './directives';

@NgModule({
    declarations: [
        AppComponent,
        RecipeCardComponent,
        ...appPipes,
        ...appDirectives,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        ...appServices,
        ...appPipes,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
