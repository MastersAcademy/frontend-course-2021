import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    @Input() gameState: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    ngOnInit(): void {
        console.log('init game');
    }

}
