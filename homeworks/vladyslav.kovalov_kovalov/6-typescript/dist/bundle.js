class Game {
    constructor(
        currentKeyElement,
        totalScoreElement,
        roundScoreElement,
        balloonElement,
        progressElement) {
        this.currentKeyElement = currentKeyElement;
        this.totalScoreElement = totalScoreElement;
        this.roundScoreElement = roundScoreElement;
        this.balloonElement = balloonElement;
        this.progressElement = progressElement;
        this.LETTERS = "abcdefghijklmnopqrstuvwxyz";
        this.INTERVAL = 2000;
        this.FINAL_SCORE = 200;
        this.currentKey = '';
        this.score = 100;
        this.timer = '';
    }
    getRandomLetterPosition(letterString) {
        const maxLength = letterString.length;
        return Math.floor(Math.random() * maxLength);
    }
    getRandomLetter(letterString) {
        const position = this.getRandomLetterPosition(letterString);
        return letterString[position];
    }
    getRandomScore(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    setRandomKey() {
        const randomLetter = this.getRandomLetter(this.LETTERS);
        this.currentKey = randomLetter.toUpperCase();
        this.currentKeyElement.textContent = this.currentKey;
    }
    setRoundScore(score, action) {
        this.roundScoreElement.textContent = `${action}${score}`;
    }
    updateTotalScore() {
        this.totalScoreElement.textContent = `${this.score.toString()}`;
    }
    increaseBalloon() {
        let width = this.balloonElement.offsetWidth;
        let height = this.balloonElement.offsetWidth;
        this.balloonElement.style.height = `${height + 5}px`;
        this.balloonElement.style.width = `${width + 5}px`;
    }
    decreaseBaloon() {
        let width = this.balloonElement.offsetWidth;
        let height = this.balloonElement.offsetWidth;
        this.balloonElement.style.height = `${height - 5}px`;
        this.balloonElement.style.width = `${width - 5}px`;
    }
    addScore() {
        if (this.score >= this.FINAL_SCORE) {
            console.log('You win!');
            clearInterval(this.timer);
            this.timer = '';
            this.progressElement.style.width = '0';
        }
        if (this.score < this.FINAL_SCORE) {
            const min = 5;
            const max = 10;
            const currentScore = this.getRandomScore(min, max);
            this.score += currentScore;
            this.setRoundScore(currentScore, '+');
            this.updateTotalScore();
            this.increaseBalloon();
        }
    }
    removeScore() {
        if (this.score <= 0) {
            console.log('You lose!');
            clearInterval(this.timer);
            this.timer = '';
            this.progressElement.style.width = '0';
        }
        if (this.score > 0) {
            const min = 20;
            const max = 25;
            const currentScore = this.getRandomScore(min, max);
            this.score -= currentScore;
            this.setRoundScore(currentScore, '-');
            this.updateTotalScore();
            this.decreaseBaloon();
        }
    }
    checkPressedKey(key) {
        if (key === this.currentKey) {
            clearInterval(this.timer);
            return this.addScore();
        }
        ;
        if (key !== this.currentKey) {
            clearInterval(this.timer);
            return this.removeScore();
        }
        ;
    }
    start() {
        this.setRandomKey();
    }
    setTimer() {
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
            const min = 20;
            const max = 25;
            const currentScore = this.getRandomScore(min, max);
            this.score -= currentScore;
            this.setRoundScore(currentScore, '-');
            this.updateTotalScore();
            this.decreaseBaloon();
        }, this.INTERVAL / 10);
    }
}
const currentKeyElement = document.querySelector('[data-current-key]');
const totalScoreElement = document.querySelector('[data-total-score]');
const roundScoreElement = document.querySelector('[data-round-score]');
const balloonElement = document.querySelector('[data-balloon-item]');
const progressElement = document.querySelector('[data-progress]');
const game = new Game(currentKeyElement, totalScoreElement, roundScoreElement, balloonElement, progressElement);
game.start();
document.addEventListener('keydown', e => {
    const pressedKey = e.key.toUpperCase();
    game.checkPressedKey(pressedKey);
    game.setRandomKey();
    game.setTimer();
});
