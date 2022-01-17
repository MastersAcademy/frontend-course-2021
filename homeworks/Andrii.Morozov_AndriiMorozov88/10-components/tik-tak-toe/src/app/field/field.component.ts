import { Component } from '@angular/core';
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
export class FieldComponent {
    constructor(private data: DataService) {
        this.data.currentPlayer$.subscribe(player => this.player = player);
    }
    fieldsquares = [0,0,0,0,0,0,0,0,0];
    player = player.cross;
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
            this.data.changePlayer(this.player);
        }
    }
}

