import {Component} from '@angular/core';

export interface IPlayer {
  name: string
  score: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    players: IPlayer[] = [
        {
            name: 'Player 1',
            score: 3,
        },
        {
            name: 'Player 2',
            score: 0,
        }
    ]

    state: number[][] = [
        [0, 1, 2],
        [0, 0 , 0],
        [1, 2, 1]
    ]

    currentPlayer:string = this.players[0].name;

    ngOnInit () {
        if(!localStorage.getItem('state')) {
            this.saveStorage();
        }
    }

    saveStorage () {
        localStorage.setItem('players', JSON.stringify(this.players));
        localStorage.setItem('state', JSON.stringify(this.state));
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
    }

    resetStorage () {
        localStorage.clear();
        this.state = [
            [0, 0, 0],
            [0, 0 ,0],
            [0, 0, 0]
        ]

        this.currentPlayer = this.players[0].name;
        this.resetPlayersStorage();
        this.saveStorage();
    }

    resetPlayersStorage () {
        this.players.forEach((player) => {
            player.score = 0;
        })
        localStorage.removeItem('players');
        localStorage.setItem('players', JSON.stringify(this.players));
    }
}
