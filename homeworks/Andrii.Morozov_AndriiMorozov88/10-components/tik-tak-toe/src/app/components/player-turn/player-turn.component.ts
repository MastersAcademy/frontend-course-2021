import { Component } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';

@Component({
    selector: 'app-player-turn',
    templateUrl: './player-turn.component.html',
    styleUrls: ['./player-turn.component.css']
})
export class PlayerTurnComponent {
    player!: number;
    iconSize = 35;
    constructor(private rxjsService: RxjsService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.player = player);
    }
}

