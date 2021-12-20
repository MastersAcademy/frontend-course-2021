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
        this.saveSession();
    }

    saveStorage () {
        localStorage.setItem('players', JSON.stringify(this.players));
        localStorage.setItem('state', JSON.stringify(this.state));
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
    }

    saveSession () {
        if (localStorage.length !== 0) {
            this.players = JSON.parse(localStorage.getItem('players') as string) as IPlayer[];
            this.state = JSON.parse(localStorage.getItem('state') as string) as number[][];
            this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer') as string) as string;
            this.currentPlayer = this.players[0].name;
            this.saveStorage();
        }
    }

    resetStorage () {
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
        });
        this.saveStorage();
    }

    changeGameBlock (row: number, index: number) {
        const isToggle = this.state[row][index];
        if (isToggle === 0) {
            if (this.currentPlayer === this.players[0].name) {
                this.state[row][index] = 1;
                this.isWin()
                this.currentPlayer = this.players[1].name;
            } else {
                this.state[row][index] = 2;
                this.isWin()
                this.currentPlayer = this.players[0].name;
            }
            localStorage.removeItem('state');
            localStorage.removeItem('currentPlayer');
            this.saveStorage();
        }
    }

    isWin () {
        if (this.state[0][0] === this.state[0][1] && this.state[0][1] === this.state[0][2] && this.state[0][2] !== 0) {
            this.players.forEach((player) => {
                if(player.name === this.currentPlayer) {
                    player.score += 1;
                }
            })
        }
        this.saveStorage();
    }
}
