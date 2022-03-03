import { Injectable } from '@angular/core';
import { Player } from '../enums/player_enum';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    countPlayerOne = 0;
    countPlayerTwo = 0;
    player!:Player;

    crossWin(): void {
        this.countPlayerOne++
    }

    zeroWin(): void {
        this.countPlayerTwo++
    }
}
