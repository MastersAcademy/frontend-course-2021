import { Component } from '@angular/core';
import { RxjsService } from '../../services/rxjs.service';
import { Player } from 'src/app/enums/player_enum';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-player-turn',
    templateUrl: './player-turn.component.html',
    styleUrls: ['./player-turn.component.css']
})
export class PlayerTurnComponent {
    player!: Player;
    iconSize = 35;
    constructor(private rxjsService: RxjsService) {
        this.rxjsService.currentPlayer$.subscribe(player => this.player = player);
    }
    get componentColor () {
        if (this.player === Player.cross) {
            return 'player-turn--cross';
        }
        if (this.player === Player.zero) {
            return 'player-turn--zero';
        }
        return null
    }
}

