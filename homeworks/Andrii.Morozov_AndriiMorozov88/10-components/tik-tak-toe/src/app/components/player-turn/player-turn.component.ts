import { Component } from '@angular/core';
import { Player } from 'src/app/enums/player_enum';
import { GameService } from 'src/app/services/game.service';

@Component({
    selector: 'app-player-turn',
    templateUrl: './player-turn.component.html',
    styleUrls: ['./player-turn.component.css']
})
export class PlayerTurnComponent {
    gameOver!:boolean;
    isCross!: boolean;
    isZero!: boolean;
    isDraw!: boolean

    constructor(private gameService: GameService) {
        this.gameService.showWinner$.subscribe(gameOver => this.gameOver = gameOver);
        this.gameService.currentWinner$.subscribe(winner => {
            if (winner === Player.cross) {
                this.gameService.showWinner$.subscribe(gameOver => {
                    this.isCross = gameOver;
                    this.isDraw = false;
                    this.isZero = false
                });
            }

            if (winner === Player.zero) {
                this.gameService.showWinner$.subscribe(gameOver => {
                    this.isZero = gameOver;
                    this.isCross = false;
                    this.isDraw = false
                });
            }
            if (winner === Player.empty) {
                this.gameService.showWinner$.subscribe(gameOver => {
                    this.isDraw = gameOver;
                    this.isCross = false;
                    this.isZero = false
                });
            }
        });
    }

    get componentColor() {
        if (this.gameService.player$ === Player.cross) {
            return 'player-turn--cross';
        }
        if (this.gameService.player$ === Player.zero) {
            return 'player-turn--zero';
        }
        return null
    }

    get player() {
        if (this.gameService.player$ === Player.cross) {
            return Player.cross;
        }
        if (this.gameService.player$ === Player.zero) {
            return Player.zero;
        }
        return null
    }
}

