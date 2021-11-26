const scoresFieldEl =  document.querySelector('[data-role="scores"]') as HTMLElement;
const letterFieldEl = document.querySelector('[data-role="random-letter"]') as HTMLElement;

class Helper {
    static getRandomItem<T>(dataSet: T[]): T {
        return dataSet[Math.floor(Math.random() * dataSet.length)];
    }
  
    static displayScores(scores: number): void {
       if (!!scores) {
            scoresFieldEl.textContent = scores > 0 ? `+${scores}` : `${scores}`;
       }
    }
  
    static displayLetter(letter: string): void {
        letterFieldEl.textContent = letter;  
    }
  
    static displayGameResult(isWin: boolean): void {
        document.body.innerHTML = `
            <div class="page__popup">
                <p class="${isWin ? 'popup__message--win' :  'popup__message--lose'}">
                    ${isWin ? 'Congrats!' : 'Game over'}
                </p>
            </div>`;
    }
}
  
class Game {
    private _letters: string [];
    private _correctKeyScores: number[];
    private _passKeyScores: number[];
    private _wrongKeyScores: number[];
    private _totalScore: number;
    private _isPlayerWin: boolean;
    public isAllowPressAction: boolean;
    public randomLetter: string;
    public gainedPoints: number;
    constructor() {
        this._letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ],
        this._correctKeyScores = [ 5, 6, 7, 8, 9, 10 ];
        this._passKeyScores = [ -10, -11, -12, -13, -14, -15 ];
        this._wrongKeyScores = [ -20, -21, -22, -23, -24, -25 ];
        this._totalScore = 100;
        this._isPlayerWin = false;
        this.isAllowPressAction = false;
        this.randomLetter = '';
        this.gainedPoints = 0;
    }
  
    get letters(): string[] {
        return this._letters.slice();
    }
  
    get correctKeyScores(): number[] {
        return this._correctKeyScores.slice();
    }
  
    get passKeyScores(): number[] {
        return this._passKeyScores.slice();
    }
  
    get wrongKeyScores():number[] {
        return this._wrongKeyScores.slice();
    }

    get isPlayerWin(): boolean {
        return this._isPlayerWin;
    }

    addToTotalScore(points: number): void {
        this._totalScore += points;
    }
  
    isGameOver(): boolean {
        this._isPlayerWin = this._totalScore > 200;
        return this._isPlayerWin || this._totalScore < 0;
    }
}
  
  
((game) => {
    function playGame() {
        const scores = game.isAllowPressAction ?
            Helper.getRandomItem(game.passKeyScores) :
            game.gainedPoints;
        Helper.displayScores(scores);
        game.addToTotalScore(scores);
        if (game.isGameOver()) {
          Helper.displayGameResult(game.isPlayerWin);
          return;
        }
        game.randomLetter = Helper.getRandomItem(game.letters);
        Helper.displayLetter(game.randomLetter);
        game.isAllowPressAction = true;
        setTimeout(playGame, 2000);
    }
      
    window.addEventListener('keydown', (event) => {
        if (game.isAllowPressAction) {
            game.gainedPoints = event.key.toUpperCase() === game.randomLetter ? 
                Helper.getRandomItem(game.correctKeyScores) :
                Helper.getRandomItem(game.wrongKeyScores);
            game.isAllowPressAction = false;
        }
    });

    playGame();
}) (new Game())
