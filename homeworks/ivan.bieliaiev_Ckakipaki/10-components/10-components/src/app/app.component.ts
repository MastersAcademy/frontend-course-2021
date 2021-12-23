import {Component, OnInit} from '@angular/core';

export interface IPlayer {
  name: string
  score: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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

    winner: null | string = null

    state: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    currentPlayer:string = this.players[0].name;

    ngOnInit () {
        this.saveToSession();
    }

    saveToStorage () {
        localStorage.setItem('players', JSON.stringify(this.players));
        localStorage.setItem('state', JSON.stringify(this.state));
        localStorage.setItem('currentPlayer', JSON.stringify(this.currentPlayer));
    }

    saveToSession () {
        if (localStorage.length === 3) {
            this.players = JSON.parse(localStorage.getItem('players') as string) as IPlayer[];
            this.state = JSON.parse(localStorage.getItem('state') as string) as number[][];
            this.currentPlayer = JSON.parse(localStorage.getItem('currentPlayer') as string) as string;
        }
    }

    resetGameState () {
        this.state = [
            [0, 0, 0],
            [0, 0 ,0],
            [0, 0, 0]
        ]
        this.currentPlayer = this.players[0].name;
        localStorage.removeItem('state');
        localStorage.removeItem('currentPlayer');
        this.saveToStorage();
    }

    resetPlayersState () {
        this.players.forEach((player) => {
            player.score = 0;
        })
        localStorage.removeItem('state');
        this.saveToStorage();
    }

    resetStorage () {
        this.resetGameState();
        this.resetPlayersState();
    }

    isAllBlockToggle ():boolean {
        let amount = 0;
        this.state.forEach((row) => {
            row.forEach((el) => {
                if (el === 0) {
                    amount += 1;
                }
            })
        })
        return amount === 0;
    }

    changeGameBlock (row: number, index: number) {
        const blockStatus = this.state[row][index];
        if (blockStatus === 0) {
            if (this.currentPlayer === this.players[0].name) {
                this.state[row][index] = 1;
                this.currentPlayer = this.players[1].name;
            } else if (this.currentPlayer === this.players[1].name) {
                this.state[row][index] = 2;
                this.currentPlayer = this.players[0].name;
            }
            this.isWin();
            localStorage.removeItem('state');
            localStorage.removeItem('currentPlayer');
            this.saveToStorage();
        }
        if (this.isAllBlockToggle()) {
            this.resetGameState();
        }
    }

    isWin () {
        if (this.state[0][0] === this.state[0][1] && this.state[0][1] === this.state[0][2] && this.state[0][2] !== 0) {
            if (this.state[0][0] === 1) {
                this.players[0].score += 1;
                this.winner = null;
                this.winner = this.players[0].name;
            } else if (this.state[0][0] === 2) {
                this.players[1].score += 1;
                this.winner = null;
                this.winner = this.players[1].name;
            }
            this.resetGameState();
        } else if (this.state[1][0] === this.state[1][1] && this.state[1][1] === this.state[1][2] && this.state[1][2] !== 0) {
            if (this.state[1][0] === 1) {
                this.players[0].score += 1;
                this.winner = this.players[0].name;
            } else if (this.state[1][0] === 2) {
                this.players[1].score += 1;
                this.winner = this.players[1].name;
            }
            this.resetGameState();
        } else if (this.state[2][0] === this.state[2][1] && this.state[2][1] === this.state[2][2] && this.state[2][2] !== 0) {
            if (this.state[2][0] === 1) {
                this.players[0].score += 1;
                this.winner = this.players[0].name;
            } else if (this.state[2][0] === 2) {
                this.players[1].score += 1;
                this.winner = this.players[1].name;
            }
            this.resetGameState();
        } else if (this.state[0][0] === this.state[1][0] && this.state[1][0] === this.state[2][0] && this.state[0][0] !== 0) {
            if (this.state[0][0] === 1) {
                this.winner = this.players[0].name;
                this.players[0].score += 1;
            } else if (this.state[0][0] === 2) {
                this.winner = this.players[1].name;
                this.players[1].score += 1;
            }
            this.resetGameState();
        }  else if (this.state[0][1] === this.state[1][1] && this.state[1][1] === this.state[2][1] && this.state[0][1] !== 0) {
            if (this.state[0][1] === 1) {
                this.winner = this.players[0].name;
                this.players[0].score += 1;
            } else if (this.state[0][1] === 2) {
                this.winner = this.players[1].name;
                this.players[1].score += 1;
            }
            this.resetGameState();
        }  else if (this.state[0][2] === this.state[1][2] && this.state[1][2] === this.state[2][2] && this.state[0][2] !== 0) {
            if (this.state[0][1] === 1) {
                this.players[0].score += 1;
            } else if (this.state[0][1] === 2) {
                this.players[1].score += 1;
            }
            this.resetGameState();
        } else if (this.state[0][0] === this.state[1][1] && this.state[1][1] === this.state[2][2] && this.state[0][0] !== 0) {
            if (this.state[0][0] === 1) {
                this.players[0].score += 1;
            } else if (this.state[0][0] === 2) {
                this.players[1].score += 1;
            }
            this.resetGameState();
        } else if (this.state[0][2] === this.state[1][1] && this.state[1][1] === this.state[2][0] && this.state[0][2] !== 0) {
            if (this.state[0][2] === 1) {
                this.players[0].score += 1;
            } else if (this.state[0][2] === 2) {
                this.players[1].score += 1;
            }
            this.resetGameState();
        }
    }
}
