import { Component } from '@angular/core';
import { Player } from 'src/app/enums/player_enum';
import { GameService } from 'src/app/services/game.service';

@Component({
    selector: 'app-player-turn',
    templateUrl: './player-turn.component.html',
    styleUrls: ['./player-turn.component.css']
})
export class PlayerTurnComponent {
    player!: Player;
    iconSize = 35;
    gameOver!:boolean;
    cross!: boolean;
    zero!: boolean;
    draw!: boolean

    constructor(private gameService: GameService) {
        this.gameService.currentPlayer$.subscribe(player => this.player = player);
        this.gameService.showWinner$.subscribe(gameOver => this.gameOver = gameOver);
        this.gameService.currentWinner$.subscribe(winner => {
            if (winner === Player.cross) {
                this.gameService.showWinner$.subscribe(gameOver => {
                    this.cross = gameOver;
                    this.draw = false;
                    this.zero = false
                });
            }

            if (winner === Player.zero) {
                this.gameService.showWinner$.subscribe(gameOver => {
                    this.zero = gameOver;
                    this.cross = false;
                    this.draw = false
                });
            }
            if (winner === Player.empty) {
                this.gameService.showWinner$.subscribe(gameOver => {
                    this.draw = gameOver;
                    this.cross = false;
                    this.zero = false
                });
            }
        });
    }

    get componentColor () {
        if (this.player === Player.cross) {
            return 'player-turn--cross';
        }
        if (this.player === Player.zero) {
            return 'player-turn--zero';
        }
        return null
    }
}

