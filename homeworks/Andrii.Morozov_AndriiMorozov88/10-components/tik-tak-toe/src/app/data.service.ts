import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from './enums';
import { RxjsService } from './rxjs.service';
import { ScoreService } from './score.service';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    state = [
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty],
        [Player.empty,Player.empty,Player.empty]
    ]
    player! :number;
    fieldsquares: number[] = this.state.flat();
    gameOver!:boolean;
    constructor (private rxjsService: RxjsService, private scoreService: ScoreService) {}
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
                this.scoreService.crossWin();
            }
            if (winCombination[count].every(this.isZero)) {
                setTimeout(this.zeroWin, 1);
                this.gameOver = true;
                this.scoreService.zeroWin();
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
    togglePlayer() {
        if (this.player === Player.cross) {
            this.player = Player.zero;
        } else {
            this.player = Player.cross;
        }
        return this.player
    }
    currentReset():void {
        this.fieldsquares = this.state.flat();
        this.player = Player.cross;
        this.rxjsService.changePlayer(this.player);
        this.gameOver = false;
    }
}
