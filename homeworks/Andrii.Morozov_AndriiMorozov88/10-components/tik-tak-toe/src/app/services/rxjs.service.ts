import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RxjsService {
    private players = new BehaviorSubject <number>(1);
    currentPlayer$ = this.players.asObservable();
    changePlayer(player:number) {
        this.players.next(player);
    }
}
