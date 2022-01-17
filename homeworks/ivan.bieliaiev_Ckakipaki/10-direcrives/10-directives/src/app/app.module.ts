import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CocktailsComponent } from './cocktails/cocktails.component';
import { HttpClientModule} from '@angular/common/http';
import { IngridientsPipe } from './pipes/ingridients.pipe';
import { CookTimeDirective } from './directives/cook-time.directive';

@NgModule({
    declarations: [
        AppComponent,
        CocktailsComponent,
        IngridientsPipe,
        CookTimeDirective
    ],
    imports: [
        BrowserModule, HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
