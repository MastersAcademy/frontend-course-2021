import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Player } from './../enums/player_enum';


@Injectable()
export class GameService {
    state = [
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty]
    ]

    countPlayerOne = 0;
    countPlayerTwo = 0;

    player!:Player;
    fieldsquares: number[] = this.state.flat();
    gameOver!:boolean;

    private currentWinner = new Subject<Player>();
    currentWinner$ = this.currentWinner.asObservable();

    private showWinner = new BehaviorSubject<boolean>(false)
    showWinner$ = this.showWinner.asObservable();
    changeWinnerState(state:boolean): void {
        this.showWinner.next(state);
    }

    private players = new BehaviorSubject<Player>(Player.cross);
    currentPlayer$ = this.players.asObservable();
    changePlayer(player:Player) {
        this.players.next(player);
    }

    get player$(){
        return this.players.value
    }

    checkWinCombination() {
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
                this.crossWin();
                this.currentWinner.next(Player.cross);
                this.changeWinnerState(true);
                return
            }
            if (winCombination[count].every(this.isZero)) {
                this.gameOver = true;
                this.zeroWin();
                this.currentWinner.next(Player.zero);
                this.changeWinnerState(true);
                return
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

    crossWin(): void {
        this.countPlayerOne++
    }

    zeroWin(): void {
        this.countPlayerTwo++
    }

    togglePlayer() {
        this.player = this.player === Player.cross ? Player.zero : Player.cross;
        return this.player
    }

    move(index:number):void {
        if (this.fieldsquares[index] !== Player.empty) return;
        if (this.gameOver) return;
        this.fieldsquares[index] = this.player;
        this.checkWinCombination();
        this.togglePlayer();
        this.changePlayer(this.player);
    }

    currentReset():void {
        this.fieldsquares = this.state.flat();
        this.player = Player.cross;
        this.changePlayer(this.player);
        this.gameOver = false;
        this.changeWinnerState(false);
    }

}
