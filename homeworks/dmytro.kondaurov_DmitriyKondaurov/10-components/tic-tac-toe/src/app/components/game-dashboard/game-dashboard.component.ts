import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-game-dashboard',
    templateUrl: './game-dashboard.component.html',
    styleUrls: ['./game-dashboard.component.css']
})
export class GameDashboardComponent {

    constructor() {
        return
    }

    @Output() resetCurGame = new EventEmitter

    resetCur() {
        this.resetCurGame.emit();
    }
}
