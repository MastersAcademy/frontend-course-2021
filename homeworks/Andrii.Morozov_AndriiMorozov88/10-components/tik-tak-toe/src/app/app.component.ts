import { Component } from '@angular/core';
import { Icons } from './enums/icon_enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    icon = Icons.logo;
    iconSize = 35;
}
