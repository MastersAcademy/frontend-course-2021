import {Component, Input} from '@angular/core';
import {ThisReceiver} from '@angular/compiler';

@Component({
    selector: 'app-game-dashboard',
    templateUrl: './game-dashboard.component.html',
    styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent {

    @Input() state!: number[][];

    constructor() {
        return
    }

    resetCur() {
        this.state = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        console.log(this.state)
    }
}
