import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Player } from './../enums/player_enum';
import { ScoreService } from './score.service';

@Injectable()
export class GameService {
    state = [
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty]
    ]

    player!:Player;
    fieldsquares: number[] = this.state.flat();
    gameOver!:boolean;
    constructor (private scoreService: ScoreService) {}

    private currentWinner = new Subject<Player>();
    currentWinner$ = this.currentWinner.asObservable();

    private showWinner = new BehaviorSubject<boolean>(false)
    showWinner$ = this.showWinner.asObservable();
    changeWinnerState(state:boolean): void {
        this.showWinner.next(state);
    }

    private players = new BehaviorSubject <Player>(1);
    currentPlayer$ = this.players.asObservable();
    changePlayer(player:Player) {
        this.players.next(player);
    }

    checkWinCombination():void {
        const winCombination = [
            [this.fieldsquares[0], this.fieldsquares[1], this.fieldsquares[2]],
            [this.fieldsquares[3], this.fieldsquares[4], this.fieldsquares[5]],
            [this.fieldsquares[6], this.fieldsquares[7], this.fieldsquares[8]],
            [this.fieldsquares[0], this.fieldsquares[3], this.fieldsquares[6]],
            [this.fieldsquares[1], this.fieldsquares[4], this.fieldsquares[7]],
            [this.fieldsquares[2], this.fieldsquares[5], this.fieldsquares[8]],
            [this.fieldsquares[0], this.fieldsquares[4], this.fieldsquares[8]],
            [this.fieldsquares[2], this.fieldsquares[4], this.fieldsquares[6]]
        ]
        if (this.fieldsquares.every(this.isDraw)) {
            this.currentWinner.next(Player.empty);
            this.changeWinnerState(true);
        }

        for (let count = 0; count < 8; count++) {
            if (winCombination[count].every(this.isCross)) {
                this.gameOver = true;
                this.scoreService.crossWin();
                this.currentWinner.next(Player.cross);
                this.changeWinnerState(true);
            }
            if (winCombination[count].every(this.isZero)) {
                this.gameOver = true;
                this.scoreService.zeroWin();
                this.currentWinner.next(Player.zero);
                this.changeWinnerState(true);
            }
        }
    }

    isCross(element:number) {
        return element === Player.cross;
    }

    isZero(element:number) {
        return element === Player.zero;
    }

    isDraw(element:number) {
        return element !== Player.empty
    }

    togglePlayer() {
        this.player = this.player === Player.cross ? Player.zero : Player.cross;
        return this.player
    }

    currentReset():void {
        this.fieldsquares = this.state.flat();
        this.player = Player.cross;
        this.changePlayer(this.player);
        this.gameOver = false;
        this.changeWinnerState(false)
    }

}
