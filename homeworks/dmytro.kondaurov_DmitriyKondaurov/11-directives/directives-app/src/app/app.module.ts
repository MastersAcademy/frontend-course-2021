import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { NamesPipe } from './pipes/names.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { SpeedTestPipe } from './pipes/speed-test.pipe';

@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        NamesPipe,
        DurationPipe,
        HighlightDirective,
        SpeedTestPipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
