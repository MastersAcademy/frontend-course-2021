import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  isPlayerMove = true;
  player  = '0';
  playersWay = 0;
  countWinnerPlayer1 = 0;
  countWinnerPlayer2 = 0;
  squares = Array(9).fill(null);

  onClick(event: number) {
      this.player = this.player == '0' ? 'x' : '0';

      if (!this.squares[event]) {
          this.squares[event] = this.player;
      }

      this.playersWay += 1;
      this.isPlayerMove = !this.isPlayerMove;
      this.checkWinner();
      this.addCountWinnerPlayer1();
      this.addCountWinnerPlayer2();
  }

  winningPlayer() : string | boolean {
      const elements = [
          [0,1,2],
          [3,4,5],
          [6,7,8],

          [0,3,6],
          [2,5,8],
          [1,4,7],

          [0, 4, 8],
          [2, 4, 6]
      ];

      for (const element of elements) {

          if (this.squares[element[0]]
        && this.squares[element[0]] == this.squares[element[1]]
        && this.squares[element[1]] == this.squares[element[2]] )
          {
              return this.squares[element[0]];
          }

      }
      return false;
  }

  deadHeatGame() : boolean {
      return (9 == this.playersWay);
  }

  addCountWinnerPlayer1() : void {
      if (this.winningPlayer() === 'x') {
          this.countWinnerPlayer1 += 1;
      }
  }

  addCountWinnerPlayer2() : void {
      if (this.winningPlayer() === '0') {
          this.countWinnerPlayer2 += 1;
      }
  }

  endOfGame() : void {
      this.squares = Array(9).fill(null);
      this.playersWay = 0;
      this.isPlayerMove = true;
  }

  resetCurrentGame() : void {
      this.endOfGame();

  }

  resetAll() : void {
      this.endOfGame();
      this.countWinnerPlayer1 = 0;
      this.countWinnerPlayer2 = 0;
      this.isPlayerMove = true;
  }

  checkWinner() : void {
      setTimeout(() => {
          if (this.winningPlayer() || this.deadHeatGame()) {
              this.endOfGame();
              this.playersWay = 0;
          }
      }, 2500)
  }
}
