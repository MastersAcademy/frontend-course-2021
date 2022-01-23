import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '[app-game]',

    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    @Input() currentPlayer = 1;
    @Input() message: string | null = null;
    @Input() gameCoords = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ];

    @Output() makeStep = new EventEmitter();

    click($event: MouseEvent) {
        const gameItem = ($event.target as HTMLElement).closest('[data-col]');
        if(!gameItem) {
            return false;
        }

        const isBlockTypeZero = gameItem.classList.contains('game-item--0')

        if(isBlockTypeZero) {
            const gameItemCoords = {
                row: (gameItem as HTMLElement).dataset['row'],
                col: (gameItem as HTMLElement).dataset['col']
            };

            this.makeStep.emit(gameItemCoords)
        }
    }
}
