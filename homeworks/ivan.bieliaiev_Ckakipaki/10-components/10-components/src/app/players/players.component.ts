import { Component, OnInit, Input } from '@angular/core';
import {IPlayer} from '../app.component';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

    @Input() players: IPlayer [] = []

    constructor() {
        console.log('hello')
    }

    ngOnInit(): void {
        console.log('players');
    }

}
