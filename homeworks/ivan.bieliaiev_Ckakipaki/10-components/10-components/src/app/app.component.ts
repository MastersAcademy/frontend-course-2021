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
    Players: IPlayer[] = [{
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

    resetPlayersScores () {
        this.Players.forEach((player) => {
            player.score = 0;
        })
    }
    title = '10-components';
}
