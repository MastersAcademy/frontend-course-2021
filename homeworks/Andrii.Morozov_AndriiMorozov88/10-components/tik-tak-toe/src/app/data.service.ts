import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private players = new BehaviorSubject<number>(1);
    currentPlayer$ = this.players.asObservable();
    changePlayer(player:number) {
        this.players.next(player);
    }
}
