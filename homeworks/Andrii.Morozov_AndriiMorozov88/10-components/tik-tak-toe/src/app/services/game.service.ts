import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Player } from './../enums/player_enum';
import { RxjsService } from './rxjs.service';
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
    constructor (private rxjsService: RxjsService, private scoreService: ScoreService) {}

    private winPlayer = new Subject<Player>();
    currentWinner$ = this.winPlayer.asObservable();

    private showWinner = new BehaviorSubject<boolean>(false)
    showWinner$ = this.showWinner.asObservable();
    changeWinnerState(state:boolean): void {
        this.showWinner.next(state);
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
            this.winPlayer.next(Player.empty);
            this.changeWinnerState(true);
        }

        for (let count = 0; count < 8; count++) {
            if (winCombination[count].every(this.isCross)) {
                this.gameOver = true;
                this.scoreService.crossWin();
                this.winPlayer.next(Player.cross);
                this.changeWinnerState(true);
            }
            if (winCombination[count].every(this.isZero)) {
                this.gameOver = true;
                this.scoreService.zeroWin();
                this.winPlayer.next(Player.zero);
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
        this.rxjsService.changePlayer(this.player);
        this.gameOver = false;
        this.changeWinnerState(false)
    }
}
