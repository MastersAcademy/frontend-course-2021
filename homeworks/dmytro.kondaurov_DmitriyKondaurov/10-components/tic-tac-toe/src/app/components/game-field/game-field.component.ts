import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-field',
    templateUrl: './game-field.component.html',
    styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

    turn = false;
    @Input() state!: number[][];

    constructor() {
        return
    }

    @Output() increaseTurn = new EventEmitter

    ngOnInit(): void {
        return
    }

    onClick(row: number, column: number) {
        if (this.state) {
            if (this.state[row][column] === 0) {
                this.increaseTurn.emit();
                this.turn = !this.turn
                this.state[row][column] = this.turn ? 1 : 2;
            } else alert('This field is not empty! Try again.')
        }
    }
}
