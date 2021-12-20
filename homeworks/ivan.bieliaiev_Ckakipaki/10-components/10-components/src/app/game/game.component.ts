import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {

    @Input() gameState: number[][] = [];
    @Output() onToggle = new EventEmitter();

    onClick (row: number, index: number) {
        this.onToggle.emit([row, index]);
    }
}
