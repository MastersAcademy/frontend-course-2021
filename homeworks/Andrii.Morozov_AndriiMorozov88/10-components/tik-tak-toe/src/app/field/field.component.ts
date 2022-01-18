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
    ngOnInit() {
        this.currentReset();
    }
    currentReset() {
        this.fieldsquares = this.state.flat();
        this.player = playerMove.cross;
        this.dataService.changePlayer(this.player);
    }
    togglePlayer() {
        if (this.player === playerMove.cross) {
            this.player = playerMove.zero;
        } else {
            this.player = playerMove.cross;
        }
        return this.player
    }
    move(index:number):void {
        if (this.fieldsquares[index] === playerMove.empty) {
            if (this.player === playerMove.cross) {
                this.fieldsquares[index] = playerMove.cross;
            } else { this.fieldsquares[index] = playerMove.zero}

            this.togglePlayer();
            this.dataService.changePlayer(this.player);
        }
    }
}

