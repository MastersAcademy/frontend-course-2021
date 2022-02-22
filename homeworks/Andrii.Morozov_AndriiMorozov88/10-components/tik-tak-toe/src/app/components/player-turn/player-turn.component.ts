import { Component } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import { Player } from 'src/app/enums/player_enum';
import { DataService } from 'src/app/services/data.service';

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

    constructor(private rxjsService: RxjsService, private dataService: DataService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.player = player);
        this.dataService.showWinner$.subscribe(gameOver => this.gameOver = gameOver);
        this.dataService.currentWinner$.subscribe(winner => {
            if (winner === Player.cross) {
                this.dataService.showWinner$.subscribe(gameOver => {
                    this.cross = gameOver;
                    this.zero = false;
                    this.draw = false;
                });
            }
            if (winner === Player.zero) {
                this.dataService.showWinner$.subscribe(gameOver => {
                    this.zero = gameOver;
                    this.cross = false;
                    this.draw = false;
                });
            }
            if (winner === Player.empty) {
                this.dataService.showWinner$.subscribe(gameOver => {
                    this.draw = gameOver;
                    this.cross = false;
                    this.zero = false
                });
            }
            return null
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

