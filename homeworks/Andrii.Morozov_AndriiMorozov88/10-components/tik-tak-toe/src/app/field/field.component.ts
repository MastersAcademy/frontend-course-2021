import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { PlayerMove } from '../enums';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent {
    /*fieldsquares!: number[];
    player!:number;
    gameOver!:boolean;
    state = [
        [PlayerMove.empty,PlayerMove.empty,PlayerMove.empty],
        [PlayerMove.empty,PlayerMove.empty,PlayerMove.empty],
        [PlayerMove.empty,PlayerMove.empty,PlayerMove.empty]
    ]
    constructor(private dataService: DataService) {
        this.dataService.currentPlayer$.subscribe(player => this.player = player);
    }
    @Output() getScore = new EventEmitter<number>();
    ngOnInit() {
        this.currentReset();
    }
    currentReset():void {
        this.fieldsquares = this.state.flat();
        this.player = PlayerMove.cross;
        this.dataService.changePlayer(this.player);
        this.gameOver = false;
    }
    togglePlayer() {
        if (this.player === PlayerMove.cross) {
            this.player = PlayerMove.zero;
        } else {
            this.player = PlayerMove.cross;
        }
        return this.player
    }
    move(index:number):void {
        if (this.fieldsquares[index] === PlayerMove.empty && this.gameOver === false) {
            if (this.player === PlayerMove.cross) {
                this.fieldsquares[index] = PlayerMove.cross;
            } else {
                this.fieldsquares[index] = PlayerMove.zero;
            }
            this.checkWinCombination();
            this.togglePlayer();
            this.dataService.changePlayer(this.player);
        }
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
                this.changeScore(PlayerMove.cross);
            }
            if (winCombination[count].every(this.isZero)) {
                setTimeout(this.zeroWin, 1);
                this.gameOver = true;
                this.changeScore(PlayerMove.zero);
            }
        }
    }
    changeScore(point:number):void {
        this.getScore.emit(point);
    }
    isCross(element:number) {
        return element === PlayerMove.cross;
    }
    isZero(element:number) {
        return element === PlayerMove.zero;
    }
    crossWin():void {
        alert('Player 1 Win!!!! Reset Current Game');
    }
    zeroWin():void {
        alert('Player 2 Win!!!! Reset Current Game');
    }*/
}

