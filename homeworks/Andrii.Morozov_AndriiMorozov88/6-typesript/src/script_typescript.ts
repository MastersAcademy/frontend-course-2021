const letterBox = <HTMLElement>document.querySelector('[data-random-letter]');
const scoreBox = <HTMLElement>document.querySelector('[data-score]');
const scoreDif = <HTMLElement>document.querySelector('[data-score-different]');
let score: number = 100;
let randomMinus: number;
let randomPlus: number;
let randomEmpty: number;
let letter: string;
let timer: number;
scoreBox.innerText = '100';
function getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getLost() {
    scoreBox.innerText = 'Lost';
    letterBox.innerText = '';
    letterBox.classList.add('container__letter-lost');
    return
}
function getWin() {
    scoreBox.innerText = 'WIN';
    letterBox.innerText = '';
    letterBox.classList.add('container__letter-win');
    return
}
function showLetter() {
    letter = String.fromCharCode(getRandom(65, 90));
    letterBox.innerText = letter;
    timer = window.setTimeout(() => {
        randomEmpty = getRandom(10, 15);
        score = score - randomEmpty;
        scoreBox.textContent = String(score);
        scoreDif.innerText = '-' + String(randomEmpty);
        if (score > 0) {
        showLetter();
    } else
        getLost();
        return
    }, 2000);
}
showLetter()
document.addEventListener('keydown', (e) => {
    clearTimeout(timer);
    if (e.key.toUpperCase() === letter) {
        randomPlus = getRandom(5, 10);
        score = score + randomPlus;
        scoreBox.innerText = String(score);
        scoreDif.innerText = '+' + String(randomPlus);
    }
    if (e.key.toUpperCase() !== letter) {
        randomMinus = getRandom(20, 25);
        score = score - randomMinus;
        scoreBox.innerText = String(score);
        scoreDif.innerText = '-' + String(randomMinus);
    }
    if ( score <= 0 ) {
        getLost();
    } else if (score >= 200 )  {
        getWin();
    } else
    showLetter();
});
