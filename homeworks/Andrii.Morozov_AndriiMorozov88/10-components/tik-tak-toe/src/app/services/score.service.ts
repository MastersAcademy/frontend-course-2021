import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScoreService {
    countPlayerOne = 0;
    countPlayerTwo = 0;
    crossWin(): void {
        this.countPlayerOne++
    }
    zeroWin(): void {
        this.countPlayerTwo++
    }
}
