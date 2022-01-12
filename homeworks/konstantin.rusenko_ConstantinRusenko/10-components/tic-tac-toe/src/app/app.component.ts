import { Component, OnInit } from '@angular/core';

interface Player {
    name: string;
    sign: 'X' | 'O' | '';
    score: number;
    link: string;
}

const LOCAL_STORAGE_KEY = 'gameInfo'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'tic-tac-toe';
    players: Player[] = [{name: 'X', sign: 'X', score: 0, link: 'cross'}, {name: 'O', sign: 'O', score: 0, link: 'circle'}];
    currentPlayer: Player = this.players[0];
    gameCoords = [['','',''],['','',''],['','','']];
    winner?: Player;
    otherTheme = true;

    ngOnInit(): void {
        const storeData = sessionStorage.getItem(LOCAL_STORAGE_KEY);

        if(!storeData) return;
        const data = JSON.parse(storeData);
        this.players = data.players;
        this.gameCoords = data.gameCoords;
        this.winner = data.winner;
        this.currentPlayer = data.currentPlayer;
    }
    
    getElem(event: Event) {
        console.log(event.target);
        console.log(this.gameCoords)
    }

    toggle() {
        const playerIndex = this.currentPlayer.sign === 'X' ? 1 : 0;
        this.currentPlayer = this.players[playerIndex];
        this.otherTheme = !this.otherTheme;
    }

    setElement(rowIndex: number, columnIndex: number) {
        if (this.gameCoords[rowIndex][columnIndex] !== '' || this.winner) return;
        this.gameCoords[rowIndex][columnIndex] = this.currentPlayer.sign;
        this.winCheck();
        if(!this.winner) this.toggle();
        this.saveData();
    }

    resetGame() {
        this.gameCoords = [['','',''],['','',''],['','','']];
        this.currentPlayer = this.players[0];
        this.winner = undefined;
        this.otherTheme = true;
        this.saveData();
    }

    resetAll() {
        this.players.forEach((player) => {
            player.score = 0;
            player.name = player.sign;
        });
        this.resetGame();
    }

    winCheck() {
        return this.winnerQ(0,1,2)
         ||  this.winnerQ(3,4,5)
         ||  this.winnerQ(6,7,8)
         ||  this.winnerQ(0,3,6)
         ||  this.winnerQ(1,4,7)
         ||  this.winnerQ(2,5,8)
         ||  this.winnerQ(0,4,8)
         ||  this.winnerQ(6,4,2)
         ||  this.stalemateQ();
    }

    winnerQ(p1: number, p2: number, p3: number) {
        const s = this.gameCoords.flat();
        const c1 = s[p1];
        if (c1 == '') return false;
        const c2 = s[p2];
        if (c1 != c2) return false;
        const c3 = s[p3];
        if (c1 != c3) return false;
        this.winner = this.getWinner(c1);
        if (this.winner) this.winner.score++;
        return true;
    }

    stalemateQ() {
        const s = this.gameCoords.flat();
        return !s.includes('');
    }

    getWinner(playerSign: string): Player | undefined {
        return this.players.find((player) => player.sign === playerSign);
    }

    renamePlayer(event: Event, player: Player) {
        player.name = (event.target as HTMLInputElement).value;
        this.saveData();
    }

    saveData() {
        const storeData = {
            players: this.players,
            gameCoords: this.gameCoords,
            winner: this.winner,
            currentPlayer: this.currentPlayer,
            otherTheme: this.otherTheme,
        }
        sessionStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storeData));
    }
}
