import {Component, EventEmitter, Output} from '@angular/core';

export interface IPlayer {
  name: string
  logo: string
  score: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    players: IPlayer[] = [{
        name: 'Player 1',
        logo: 'src',
        score: 3,
    },
    {
        name: 'Player 2',
        logo: 'src',
        score: 0,
    }
    ]

    state: number[][] = [
        [0, 1, 2],
        [0, 0 , 0],
        [1, 2, 1]
    ]

    currentPlayer = this.players[0].name;

    // @Output() playersState: IPlayer[] = JSON.parse(localStorage.getItem('players') as string);

    ngOnInit () {
        localStorage.setItem('players', JSON.stringify(this.players));
        localStorage.setItem('state', JSON.stringify(this.state));
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
    }

    resetPlayersScores () {
        this.players.forEach((player) => {
            player.score = 0;
        })
        const playersStr = localStorage.getItem('players') as string;
        const playersState: IPlayer[] = JSON.parse(playersStr);
        playersState.forEach((player) => {
            player.score = 0;
        })
        this.players = playersState;
        localStorage.removeItem('players');
        localStorage.setItem('players', JSON.stringify(this.players));
        console.log(playersState);
    }
}
