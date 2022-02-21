import { Component } from '@angular/core';
import { ReceptService } from './recept.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ ReceptService ]
})
export class AppComponent {
  title = 'Recept';
}
