import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-game-actions',
    templateUrl: './game-actions.component.html',
    styleUrls: ['./game-actions.component.css']
})
export class GameActionsComponent {
    @Output() resetState = new EventEmitter();
    @Output() resetPlayersState = new EventEmitter();
    resetGame () {
        this.resetState.emit();
    }

    resetPlayersScore () {
        this.resetPlayersState.emit();
    }
}
