import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-game-field',
    templateUrl: './game-field.component.html',
    styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent {

    turn = false;
    @Input() state!: number[][];

    @Output() stateCheck = new EventEmitter<number>()

    onClick(row: number, column: number) {
        if (this.state) {
            if (this.state[row][column] === 0) {
                this.turn = !this.turn
                this.state[row][column] = this.turn ? 1 : 2;
                setTimeout(() => this.stateCheck.emit(this.state[row][column]), 10);
            } else alert('This field is not empty! Try again.')
        }
    }
}
