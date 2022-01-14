import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
    CardComponent,
    SvgIconComponent
} from './components';

import {
    TimeCookPipe
} from './pipes';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        SvgIconComponent,
        TimeCookPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
