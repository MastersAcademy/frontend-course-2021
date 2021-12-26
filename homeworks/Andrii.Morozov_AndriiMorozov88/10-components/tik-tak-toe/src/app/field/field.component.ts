import { Component } from '@angular/core';

@Component({
    selector: 'app-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.css']
})
export class FieldComponent {
    fieldsquares = new Array(9);
    player = 1;
    playerMove = 'assets/sprite.svg#x';
    togglePlayer() {
        if (this.player === 1) {
            this.player = 2;
            this.playerMove = 'assets/sprite.svg#circle';
        } else {
            this.player = 1;
            this.playerMove = 'assets/sprite.svg#x';
        }
        return this.player, this.playerMove
    }
    move(index:number): void {
        if (this.player === 1) {
            this.fieldsquares[index] = '1';

        } else { this.fieldsquares[index] = '0' }
        this.togglePlayer();
        console.log(this.fieldsquares);
    }
}
