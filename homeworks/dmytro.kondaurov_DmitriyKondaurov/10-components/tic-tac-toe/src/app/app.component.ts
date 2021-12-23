import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'tic-tac-toe';
    state: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
}
