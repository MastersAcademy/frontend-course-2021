import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {

    @Input() gameState: number[][] = [];
}
