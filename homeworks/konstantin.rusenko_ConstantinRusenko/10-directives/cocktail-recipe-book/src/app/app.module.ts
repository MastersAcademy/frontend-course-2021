import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataprocessorService } from './dataprocessor.service';
import { CardComponent } from './components/card/card.component';
import { GetIngredientsPipe } from './pipes/get-ingredients.pipe';
import { GetDurationPipe } from './pipes/get-duration.pipe';
import { FormsModule } from '@angular/forms';
import { CocktailFilterPipe } from './pipes/cocktail-filter.pipe';
import { CocktailSortPipe } from './pipes/cocktail-sort.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        GetIngredientsPipe,
        GetDurationPipe,
        CocktailFilterPipe,
        CocktailSortPipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [ DataprocessorService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
