import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
    SvgIconComponent,
    SidebarComponent,
    GameComponent,
    GameItemComponent,
    HeaderComponent,
    PlayerInfoComponent,
    FooterComponent,
    MessageComponent
} from './components';

@NgModule({
    declarations: [
        AppComponent,
        SvgIconComponent,
        GameComponent,
        SidebarComponent,
        HeaderComponent,
        PlayerInfoComponent,
        FooterComponent,
        GameItemComponent,
        MessageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
