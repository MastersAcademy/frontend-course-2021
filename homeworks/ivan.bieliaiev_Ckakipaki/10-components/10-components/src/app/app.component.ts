import { Component } from '@angular/core';

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

    resetPlayersScores () {
        this.players.forEach((player) => {
            player.score = 0;
        })
    }
    title = '10-components';
}
