import { Component, OnInit } from '@angular/core';

type Row = [
    number,
    number,
    number
]
type GameCoords = Row[]

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Tic-tac-toE';
    player1 = 'Player 1';
    player2 = 'Player 2';
    player1Score = 0;
    player2Score = 0;
    steps = 0;
    currentPlayer = 1;
    gameCoords: GameCoords = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    message: string | null = null;

    ngOnInit(): void {
        this.getHistory();
    }

    changePlayerName({ id, value }: { id: string, value: string }) {
        if(!id) {
            return;
        }

        if(id === '1') {
            this.player1 = value;
        } else {
            this.player2 = value;
        }

        this.saveHistory();
    }

    makeStep({ row, col }: { row: number, col: number}) {
        this.gameCoords[row][col] = this.currentPlayer;
        this.steps += 1;

        if(this.steps >= 5) {
            this.checkWin();
        }

        if(this.steps === 9) {
            this.showMessage('Draw!');
            this.resetGame();
        }

        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        this.saveHistory();
    }

    showMessage(message: string) {
        this.message = message;

        setTimeout(() => {
            this.message = null;
        }, 2500);
    }

    isRowCrossed() {
        return (
            (this.gameCoords[0][0] !== 0 && this.gameCoords[0][0] === this.gameCoords[0][1] && this.gameCoords[0][0] === this.gameCoords[0][2])
            || (this.gameCoords[1][0] !== 0 && this.gameCoords[1][0] === this.gameCoords[1][1] && this.gameCoords[1][0] === this.gameCoords[1][2])
            || (this.gameCoords[2][0] !== 0 && this.gameCoords[2][0] === this.gameCoords[2][1] && this.gameCoords[2][0] === this.gameCoords[2][2])
        )
    }

    isColCrossed() {
        return (
            (this.gameCoords[0][0] !== 0 && this.gameCoords[0][0] === this.gameCoords[1][0] && this.gameCoords[0][0] === this.gameCoords[2][0])
            || (this.gameCoords[0][1] !== 0 && this.gameCoords[0][1] === this.gameCoords[1][1] && this.gameCoords[0][1] === this.gameCoords[2][1])
            || (this.gameCoords[0][2] !== 0 && this.gameCoords[0][2] === this.gameCoords[1][2] && this.gameCoords[0][2] === this.gameCoords[2][2])
        )
    }

    isDigCrossed() {
        return (
            this.gameCoords[0][0] === this.gameCoords[1][1] && this.gameCoords[0][0] === this.gameCoords[2][2]
            || this.gameCoords[0][2] === this.gameCoords[1][1] && this.gameCoords[0][2] === this.gameCoords[2][0]
        )
    }

    checkWin() {
        if(this.isRowCrossed() || this.isColCrossed() || this.isDigCrossed()) {
            if(this.currentPlayer === 1) {
                this.showMessage(`${this.player1} win!`);

                this.player1Score += 1;
            } else {
                this.showMessage(`${this.player2} win!`);

                this.player2Score += 1;
            }

            this.resetGame();
        }
    }

    resetGame() {
        this.gameCoords = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];

        this.steps = 0;
        this.currentPlayer = 1;
        this.saveHistory();
    }

    resetAll() {
        this.resetGame();
        this.player1 = 'Player 1';
        this.player2 = 'Player 2';
        this.player1Score = 0;
        this.player2Score = 0;
        this.removeHistory();
    }

    getHistory() {
        const initialData = sessionStorage.getItem('tictoegame');

        if(initialData) {
            const data = JSON.parse(initialData);

            this.player1 = data.player1;
            this.player2 = data.player2;
            this.player1Score = data.player1Score;
            this.player2Score = data.player2Score;
            this.steps = data.steps;
            this.currentPlayer = data.currentPlayer;
            this.gameCoords = data.gameCoords;
        }
    }

    saveHistory() {
        const data = {
            player1: this.player1,
            player2: this.player2,
            player1Score: this.player1Score,
            player2Score: this.player2Score,
            steps: this.steps,
            currentPlayer: this.currentPlayer,
            gameCoords: this.gameCoords
        }

        sessionStorage.setItem('tictoegame', JSON.stringify(data));
    }

    removeHistory() {
        sessionStorage.removeItem('tictoegame');
    }
}
