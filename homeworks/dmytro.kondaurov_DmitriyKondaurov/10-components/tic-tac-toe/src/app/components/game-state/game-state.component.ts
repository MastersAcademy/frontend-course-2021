import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-game-state',
    templateUrl: './game-state.component.html',
    styleUrls: ['./game-state.component.css']
})
export class GameStateComponent {

    @Input() state!: number[][];

    constructor() {
        return
    }


}
