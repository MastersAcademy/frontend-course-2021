import { Component } from '@angular/core';
import { Player } from '../../enums/player_enum';
import { Icons } from '../../enums/icon_enum';
import { GameService } from 'src/app/services/game.service';

@Component({
    selector: 'app-score',
    templateUrl: './score.component.html',
    styleUrls: ['./score.component.css']
})
export class ScoreComponent {
    playerOne = Player.cross;
    playerTwo = Player.zero;
    iconCross = Icons.cross;
    iconZero = Icons.zero;

    constructor(private gameService: GameService) {}

    currentReset() :void {
        this.gameService.currentReset()

    }

    resetAll(): void {
        this.gameService.currentReset();
        this.gameService.countPlayerOne = 0;
        this.gameService.countPlayerTwo = 0;
    }

    get countPlayerOne() {
        return this.gameService.countPlayerOne;
    }

    get countPlayerTwo() {
        return this.gameService.countPlayerTwo;
    }
}
