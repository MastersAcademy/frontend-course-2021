import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GameService {
  public gameActive = true;
  public currentPlayer = 1;
  public scorePlayer1 = 0;
  public scorePlayer2 = 0;
  public gameState: number[][] = [
      [0,0,0],
      [0,0,0],
      [0,0,0]
  ];
  public winningCombination: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];

  public changeCurrentPlayer(): void {
      this.currentPlayer = this.currentPlayer === 1 ? this.currentPlayer = 2 : this.currentPlayer = 1;
  }

  public changeGameState(rowIndex: number, itemIndex: number): void {
      if(this.gameState[rowIndex][itemIndex] === 0 && this.gameActive) {
          this.gameState[rowIndex][itemIndex] = this.currentPlayer;
          this.handleResultValidation();
          this.changeCurrentPlayer()
      }
  }

  public handleResultValidation(): void {
      this.winningCombination.forEach(combination => {
          const check = combination.every(index => this.gameState.flat(1)[index] === this.currentPlayer);

          if(check) {
              this.gameActive = false;
              this.addPlayerScore();
              this.reset();
          }
      });
  }

  public addPlayerScore(): void {
      if(this.currentPlayer === 1) this.scorePlayer1 += 1;
      if(this.currentPlayer === 2) this.scorePlayer2 += 1;
  }

  public reset(): void {
      this.gameState = [
          [0,0,0],
          [0,0,0],
          [0,0,0]
      ];
      this.currentPlayer = 1;
      this.gameActive = true;
  }

  public resetCurrentGame(): void {
      this.reset();
  }

  public resetAll(): void {
      this.reset();
      this.scorePlayer1 = 0;
      this.scorePlayer2 = 0;
  }
}
