import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-game-field',
    templateUrl: './game-field.component.html',
    styleUrls: ['./game-field.component.css']
})
export class GameFieldComponent implements OnInit {

    turn = false;

    constructor() {
        return
    }

    @Output() increaseTurn = new EventEmitter

    ngOnInit(): void {
        return
    }

    onClick() {
        this.increaseTurn.emit();
        this.turn = !this.turn
    }


}
