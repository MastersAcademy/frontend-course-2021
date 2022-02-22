import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from '../enums/player_enum';

@Injectable({
    providedIn: 'root'
})
export class RxjsService {
    private players = new BehaviorSubject <Player>(1);
    currentPlayer$ = this.players.asObservable();
    changePlayer(player:Player) {
        this.players.next(player);
    }
}
