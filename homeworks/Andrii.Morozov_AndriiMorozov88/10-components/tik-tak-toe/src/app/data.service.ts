import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from './enums';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    state = [
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty]
    ]
    fieldsquares: number[] = this.state.flat();
    gameOver!:boolean;
    private players = new BehaviorSubject <number>(1);
    currentPlayer$ = this.players.asObservable();
    changePlayer(player:number) {
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
        for (let count = 0; count < 8; count++) {
            if (winCombination[count].every(this.isCross)) {
                setTimeout(this.crossWin, 1);
                this.gameOver = true;
                //this.changeScore(Player.cross);
            }
            if (winCombination[count].every(this.isZero)) {
                setTimeout(this.zeroWin, 1);
                this.gameOver = true;
                //this.changeScore(Player.zero);
            }
        }
    }

    isCross(element:number) {
        return element === Player.cross;
    }
    isZero(element:number) {
        return element === Player.zero;
    }
    crossWin():void {
        alert('Player 1 Win!!!! Reset Current Game');
    }
    zeroWin():void {
        alert('Player 2 Win!!!! Reset Current Game');
    }
}
