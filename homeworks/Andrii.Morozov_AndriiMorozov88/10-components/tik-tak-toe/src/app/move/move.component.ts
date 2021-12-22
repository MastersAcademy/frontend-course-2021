import { Component } from '@angular/core';

@Component({
    selector: 'app-move',
    templateUrl: './move.component.html',
    styleUrls: ['./move.component.css']
})
export class MoveComponent  {
    player = 1;
    playerMove = 'assets/sprite.svg#x';
    togglePlayer():void {
        if (this.player === 1) {
            this.player = 2;
            this.playerMove = 'assets/sprite.svg#circle';
        } else {
            this.player = 1;
            this.playerMove = 'assets/sprite.svg#x';
        }
    }
}
