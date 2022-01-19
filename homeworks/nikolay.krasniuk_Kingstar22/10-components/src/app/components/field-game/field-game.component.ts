import {Component, EventEmitter, Input, Output,} from '@angular/core';

@Component({
    selector: 'app-field-game',
    templateUrl: './field-game.component.html',
    styleUrls: ['./field-game.component.css']
})
export class FieldGameComponent  {
    @Input() state: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    @Output() clickChange = new EventEmitter();
    click(row: number, col: number) {
        const gameItemCoords = {row, col};
        this.clickChange.emit(gameItemCoords);
    }
}
