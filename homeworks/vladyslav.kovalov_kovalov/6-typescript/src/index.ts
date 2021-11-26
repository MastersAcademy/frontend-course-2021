class Game {
    public paused: boolean = true;
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

    // private saveGameScore(data: []): string | void {

    // }

    // private getLocalStorage(): string | void {
    //     let data: any;
    //     if(localStorage.getItem('score') === null) localStorage.setItem('score', JSON.stringify([]));;
    //     if(localStorage.getItem('score')) data = JSON.parse(localStorage.getItem('score');
    //     return data;
    // }

    private getRandomLetterPosition(letterString: string): number {
        return Math.floor(Math.random() * letterString.length);
    }

    private getRandomLetter(letterString: string): string {
        return letterString[this.getRandomLetterPosition(letterString)];
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

    private reset() {
        clearInterval(this.timer);
        this.timer = '';
        this.progressElement.style.width = '100%';
        this.paused = true;
    }

    checkScore(): void {
        if(this.score <= 0) {
            clearInterval(this.timer);
            this.reset();
            this.totalScoreElement.textContent = 'You lose!';
            this.roundScoreElement.innerHTML = '&nbsp;';
        }
        if(this.score >= 200) {
            clearInterval(this.timer);
            this.reset();
            this.totalScoreElement.textContent = 'You won!';
            this.roundScoreElement.innerHTML = '&nbsp;';
        }
    }

    private addScore(): void {
            const min: number = 5;
            const max: number = 10;

            const currentScore: number = this.getRandomScore(min, max);
            this.score += currentScore;
            this.setRoundScore(currentScore, '+');
            this.updateTotalScore();
            this.increaseBalloon()
    }

    private removeScore(): void {
        const min: number = 20;
        const max: number = 25;

        const currentScore: number = this.getRandomScore(min, max);
        this.score -= currentScore;
        this.setRoundScore(currentScore, '-');
        this.updateTotalScore();
        this.decreaseBaloon()
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

    start(): void {
        this.setRandomKey();
    }

    setTimer(): void {
        let step = 10;
        let counter = 100;
        this.timer = setInterval(() => {
            if (counter >= 0) {
                this.progressElement.style.width = counter + '%';
                counter -= step;
                return;
            }

            clearInterval(this.timer);

            const min: number = 10;
            const max: number = 15;
            const currentScore: number = this.getRandomScore(min, max);
            this.score -= currentScore;
            this.setRoundScore(currentScore, '-');
            this.updateTotalScore();
            this.decreaseBaloon()

        if(this.score > 0) {
            game.setRandomKey();
            this.setTimer();
        }

        game.checkScore();
        }, this.INTERVAL / 10);
    }

    public buttonStart(): void {
        console.log('Start')
        this.paused = false;
        this.start();
        this.setTimer();
    }

    public buttonEnd(): void {
        console.log('End')
        this.paused = true;
        this.reset();
        this.currentKey = '';
        this.totalScoreElement.textContent = 'You lose!';
        this.roundScoreElement.innerHTML = '&nbsp;';
    }

    public buttonRestart(): void {
        this.reset();
        this.roundScoreElement.innerHTML = '&nbsp;';
        this.currentKey = '';
        this.score = 100;
        this.totalScoreElement.textContent = `${this.score}`;
        this.paused = false;
    }
}

const currentKeyElement = document.querySelector('[data-current-key]') as HTMLSpanElement;
const totalScoreElement = document.querySelector('[data-total-score]') as HTMLDivElement;
const roundScoreElement = document.querySelector('[data-round-score]') as HTMLDivElement;
const balloonElement = document.querySelector('[data-balloon-item]') as HTMLDivElement;
const progressElement = document.querySelector('[data-progress]') as HTMLDivElement;
const buttonsContainerElement = document.querySelector('[data-buttons-container]') as HTMLDivElement;

const game = new Game(currentKeyElement, totalScoreElement, roundScoreElement, balloonElement, progressElement);
game.start();


document.addEventListener('keydown', e => {
    game.checkScore();
    const pressedKey: string = e.key.toUpperCase();
    if(!game.paused) {
        game.checkPressedKey(pressedKey);
        game.setRandomKey();
        game.setTimer();
    }
});

buttonsContainerElement.addEventListener('click', event => {
    if(event.target instanceof HTMLElement && event.target.dataset.action !== '') {
        if(event.target.dataset.action === 'start') game.buttonStart();
        if(event.target.dataset.action === 'end') game.buttonEnd();
        if(event.target.dataset.action === 'restart') game.buttonRestart();
    }
})!;
