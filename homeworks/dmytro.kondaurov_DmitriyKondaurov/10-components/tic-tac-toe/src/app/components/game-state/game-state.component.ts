import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-game-state',
    templateUrl: './game-state.component.html',
    styleUrls: ['./game-state.component.css']
})
export class GameStateComponent {

    @Input() scorePl1!: number;
    @Input() scorePl2!: number;

    constructor() {
        return
    }


}
