import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { gameComponents } from './components';

// import { InformationPanelComponent } from './components/information-panel/information-panel.component';

@NgModule({
    declarations: [
        AppComponent,
        ...gameComponents,

    // InformationPanelComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
