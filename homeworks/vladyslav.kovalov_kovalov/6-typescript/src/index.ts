class Game {
    private LETTERS: string = "abcdefghijklmnopqrstuvwxyz";
    private INTERVAL: number = 2000;
    private FINAL_SCORE: number = 200;
    private currentKey: string = '';
    private score: number = 100;
    private timer: any = '';

    constructor(
        private currentKeyElement: HTMLSpanElement,
        private totalScoreElement: HTMLDivElement,
        private roundScoreElement: HTMLDivElement,
        private balloonElement: HTMLDivElement,
        private progressElement: HTMLDivElement,
    ) { }

    private getRandomLetterPosition(letterString: string): number {
        const maxLength = letterString.length;
        return Math.floor(Math.random() * maxLength);
    }

    private getRandomLetter(letterString: string): string {
        const position = this.getRandomLetterPosition(letterString);
        return letterString[position];
    }

    private getRandomScore(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min) + min);
    }

    setRandomKey(): void {
        const randomLetter: string = this.getRandomLetter(this.LETTERS);
        this.currentKey = randomLetter.toUpperCase();
        this.currentKeyElement.textContent = this.currentKey;
    }

    private setRoundScore(score: number, action: string): void {
        this.roundScoreElement.textContent = `${action}${score}`;
    }

    private updateTotalScore(): void {
        this.totalScoreElement.textContent = `${this.score.toString()}`;
    }

    private increaseBalloon(): void {
        let width: number = this.balloonElement.offsetWidth;
        let height: number = this.balloonElement.offsetWidth;

        this.balloonElement.style.height = `${height + 5}px`;
        this.balloonElement.style.width = `${width + 5}px`;
    }

    private decreaseBaloon() {
        let width: number = this.balloonElement.offsetWidth;
        let height: number = this.balloonElement.offsetWidth;

        this.balloonElement.style.height = `${height - 5}px`;
        this.balloonElement.style.width = `${width - 5}px`;
    }

    private addScore(): void {
        if (this.score >= this.FINAL_SCORE) {
            console.log('You win!');
            clearInterval(this.timer);
            this.timer = '';
            this.progressElement.style.width = '0';
        }

        if (this.score < this.FINAL_SCORE) {
            const min: number = 5;
            const max: number = 10;
            const currentScore: number = this.getRandomScore(min, max);
            this.score += currentScore;
            this.setRoundScore(currentScore, '+');
            this.updateTotalScore();
            this.increaseBalloon();
        }
    }

    private removeScore(): void {
        if (this.score <= 0) {
            console.log('You lose!');
            clearInterval(this.timer);
            this.timer = '';
            this.progressElement.style.width = '0';
        }

        if (this.score > 0) {
            const min: number = 20;
            const max: number = 25;
            const currentScore: number = this.getRandomScore(min, max);
            this.score -= currentScore;
            this.setRoundScore(currentScore, '-');
            this.updateTotalScore();
            this.decreaseBaloon()
        }
    }

    checkPressedKey(key: string): void {
        if (key === this.currentKey) {
            clearInterval(this.timer);
            return this.addScore()
        };
        if (key !== this.currentKey) {
            clearInterval(this.timer);
            return this.removeScore()
        };
    }

    start() {
        this.setRandomKey();

    }

    setTimer(): void {
        let step = 10;
        let counter = 100;
        this.timer = setInterval(() => {
            console.log(this.timer);
            if (counter >= 0) {
                this.progressElement.style.width = counter + '%';
                counter -= step;
                return;
            }

            clearInterval(this.timer);

            const min: number = 20;
            const max: number = 25;
            const currentScore: number = this.getRandomScore(min, max);
            this.score -= currentScore;
            this.setRoundScore(currentScore, '-');
            this.updateTotalScore();
            this.decreaseBaloon()
        }, this.INTERVAL / 10);
    }
}

const currentKeyElement = document.querySelector('[data-current-key]') as HTMLSpanElement;
const totalScoreElement = document.querySelector('[data-total-score]') as HTMLDivElement;
const roundScoreElement = document.querySelector('[data-round-score]') as HTMLDivElement;
const balloonElement = document.querySelector('[data-balloon-item]') as HTMLDivElement;
const progressElement = document.querySelector('[data-progress]') as HTMLDivElement;

const game = new Game(currentKeyElement, totalScoreElement, roundScoreElement, balloonElement, progressElement);
game.start();

document.addEventListener('keydown', e => {
    const pressedKey: string = e.key.toUpperCase();
    game.checkPressedKey(pressedKey);
    game.setRandomKey();
    game.setTimer();
})
