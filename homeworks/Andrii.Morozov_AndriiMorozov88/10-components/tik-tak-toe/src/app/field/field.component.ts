import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
enum player {
  cross = 1,
  zero = 2
}
enum playerMove {
  cross = 1,
  zero = -1,
  empty = 0
}
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
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ]
    fieldsquares!: number[];
    player!:number;
    ngOnInit() {
        this.currentReset();
        console.log(this.fieldsquares)
    }
    currentReset() {
        this.fieldsquares = this.state.flat();
        this.player = player.cross;
        this.dataService.changePlayer(this.player);
        console.log(this.fieldsquares)
    }
    togglePlayer() {
        if (this.player === player.cross) {
            this.player = player.zero;
        } else {
            this.player = player.cross;
        }
        return this.player
    }
    move(index:number):void {
        if (this.fieldsquares[index] === playerMove.empty) {
            if (this.player === player.cross) {
                this.fieldsquares[index] = playerMove.cross;
            } else { this.fieldsquares[index] = playerMove.zero}
            this.togglePlayer();
            this.dataService.changePlayer(this.player);
            console.log(this.fieldsquares);
        }
    }
}

