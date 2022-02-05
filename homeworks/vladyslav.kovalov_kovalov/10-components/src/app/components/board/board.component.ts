import { Component } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent {
    constructor(
        public gameService: GameService
    ) {}

    public onClick(rowIndex: number, itemIndex: number) {
        this.gameService.changeGameState(rowIndex, itemIndex);
    }


}
