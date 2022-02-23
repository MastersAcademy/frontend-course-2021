import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Player } from '../../enums/player_enum';
import { Icons } from '../../enums/icon_enum';
import { ScoreService } from '../../services/score.service';

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
    constructor(private gameService: GameService, private scoreService: ScoreService) {}

    currentReset() :void {
        this.gameService.currentReset()
    }

    resetAll(): void {
        this.scoreService.countPlayerOne = 0;
        this.scoreService.countPlayerTwo = 0;
        this.gameService.currentReset();
    }

    get countPlayerOne() {
        return this.scoreService.countPlayerOne;
    }

    get countPlayerTwo() {
        return this.scoreService.countPlayerTwo;
    }
}
