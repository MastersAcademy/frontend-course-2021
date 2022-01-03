import { Component, Input, OnInit} from '@angular/core';
export interface Player {
    name:string
    score:number
    icon:string
    id?:number
}
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    state: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    iconPlayer= 'dagger'
    @Input() nameBtn1 = 'Reset current game';
    @Input() nameBtn2 = 'Reset all';
    turnPlayer = 'Player 1';
    playerTurn = false;
    step = 0;
    newWinner = 0;


    ngOnInit() {
        this.dataStorage();
        this.changePlayerTurn();
    }

    players: Player [] = [
        {name: 'Player 1', score: 0, icon: 'dagger', id: 1},
        {name: 'Player 2', score: 0, icon: 'circle', id: 2}
    ]

    changePlayersName(value:string, player:Player): void {
        player.name = value;
        this.saveGameDate();
    }

    onClick({ row, col }: { row: number, col: number}): void {
        if (this.state[row][col] === 0 && !this.newWinner) {
            this.playerTurn = !this.playerTurn;
            this.changePlayerTurn();
            this.state[row][col] = this.playerTurn ? 1 : 2;
            this.step += 1;
            if(this.step >= 5) {
                this.winCombinations();
            }
            if (this.step === 9) {
                alert('Draw');
                this.resetCurrentGame();
            }

        } else alert('This field is already taken');
        this.saveGameDate()
    }

    changePlayerTurn(): void {
        if (this.playerTurn) {
            this.iconPlayer = 'circle';
            this.turnPlayer = this.players[1].name;
        } else {
            this.iconPlayer = 'dagger';
            this.turnPlayer = this.players[0].name;
        }
    }
    winCombinations(){
        const winPositions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        let index = 0;
        const newState = this.state.flat();
        for (const position of winPositions) {
            if (!this.newWinner) {
                const winPositionsValues = winPositions[index];
                const result = winPositionsValues.map((index: number) => newState[index]);
                const checkValue = result[0];
                const winner = result.every((value: number) => value === checkValue && checkValue);
                this.newWinner = winner ? checkValue : 0;
                index++;
            }
        }
        if (this.newWinner) {
            this.newWinner === 1 ? alert('Виграли Хрестики') : alert('Виграли Нолики');
            this.newWinner === 1 ? this.players[0].score +=1 :  this.players[1].score +=1;
            this.resetCurrentGame();
        }
        return false;
    }

    resetCurrentGame(): void {
        this.state = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        this.step = 0;
        this.playerTurn = false;
        this.changePlayerTurn();
        this.newWinner = 0;
        this.saveGameDate();
    }
    resetAll(): void {
        this.players.forEach((player) => {
            player.name = 'Player';
            player.score = 0;
        });
        this.resetCurrentGame();
        sessionStorage.removeItem('gameStorage');

    }

    dataStorage(): void {
        const gameDate = sessionStorage.getItem('gameStorage');
        if(gameDate) {
            const data = JSON.parse(gameDate);
            this.players = data.players;
            this.step =  data.step;
            this.state = data.state;
            this.playerTurn = data.playerTurn;
        }
    }
    saveGameDate(): void {
        const gameDate = {
            players: this.players,
            step: this.step,
            state: this.state,
            playerTurn: this.playerTurn,
        }
        sessionStorage.setItem('gameStorage', JSON.stringify(gameDate));
    }
}
