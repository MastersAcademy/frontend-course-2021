import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-game-item',
    templateUrl: './game-item.component.html',
    styleUrls: ['./game-item.component.css']
})
export class GameItemComponent {
    @Input() type = 0;
    @Input() currentPlayer = 1;
    @Input() colId = 0;
    @Input() rowId = 0;
}
