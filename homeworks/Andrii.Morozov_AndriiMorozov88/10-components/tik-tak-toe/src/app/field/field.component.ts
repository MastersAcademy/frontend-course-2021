import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { playerMove } from '../enums';
@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {
    constructor(private dataService: DataService) {
        this.dataService.currentPlayer$.subscribe(player => this.player = player);
    }
    state = [
        [playerMove.empty,playerMove.empty,playerMove.empty],
        [playerMove.empty,playerMove.empty,playerMove.empty],
        [playerMove.empty,playerMove.empty,playerMove.empty]
    ]
    fieldsquares!: number[];
    player!:number;
    gameOver!:boolean;
    ngOnInit() {
        this.currentReset();
    }
    currentReset() {
        this.fieldsquares = this.state.flat();
        this.player = playerMove.cross;
        this.dataService.changePlayer(this.player);
        this.gameOver = false;
    }
    togglePlayer() {
        if (this.player === playerMove.cross) {
            this.player = playerMove.zero;
            this.checkWinCombination();
        } else {
            this.player = playerMove.cross;
            this.checkWinCombination();
        }
        return this.player
    }
    move(index:number):void {
        if (this.fieldsquares[index] === playerMove.empty && this.gameOver === false) {
            if (this.player === playerMove.cross) {
                this.fieldsquares[index] = playerMove.cross;
            } else {
                this.fieldsquares[index] = playerMove.zero;
            }
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
        function isCross(element:number) {
            return element === playerMove.cross;
        }
        function isZero(element:number) {
            return element === playerMove.zero;
        }
        function crossWin() {
            alert('Player 1 Win!!!! Reset Current Game');
        }
        function zeroWin() {
            alert('Player 2 Win!!!! Reset Current Game');
        }
        for (let count = 0; count < 8; count++) {
            if (winCombination[count].every(isCross)) {
                setTimeout(crossWin, 1);
                this.gameOver = true;

            }
            if (winCombination[count].every(isZero)) {
                setTimeout(zeroWin, 1);
                this.gameOver = true;
            }
        }
    }

}

