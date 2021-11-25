const letterBox = <HTMLDivElement>document.querySelector('[data-random-letter]');
const scoreBox = <HTMLDivElement>document.querySelector('[data-score]');
const scoreDif = <HTMLDivElement>document.querySelector('[data-score-different]');
let score: any = 100;
let letter: string;
let randomEmpty: number;
let randomMinus: number;
let randomPlus: number;
let timer: any;
scoreBox.innerText = '100';
function getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getLost() {
    scoreBox.innerText = 'Lost';
    letterBox.innerText = '';
    letterBox.classList.add('container__letter-red');
    return
}
function getWin() {
    scoreBox.innerText = 'WIN';
    letterBox.innerText = '';
    letterBox.classList.add('container__letter-green');
    return
}
function showLetter() {
    letter = String.fromCharCode(getRandom(65, 90));
    letterBox.innerText = letter;
        timer = setTimeout(() => {
        randomEmpty = getRandom(10, 15);
        score = score - randomEmpty;
        scoreBox.innerHTML = score;
        scoreDif.innerText = '-' + randomEmpty;
        if (score > 0) {
        showLetter();
    } else
        getLost();
        return
    }, 2000);
}
showLetter()
document.addEventListener('keydown', (e: KeyboardEvent) => {
    clearTimeout(timer);
    if (e.key.toUpperCase() === letter) {
        randomPlus = getRandom(5, 10);
        score = score + randomPlus;
        scoreBox.textContent = score;
        scoreDif.innerText = '+' + randomPlus;
    }
    if (e.key.toUpperCase() !== letter) {
        randomMinus = getRandom(20, 25);
        score = score - randomMinus;
        scoreBox.innerText = score;
        scoreDif.innerText = '-' + randomMinus;
    }
    if ( score <= 0 ) {
        getLost();
    } else if (score >= 200 )  {
        getWin();
    } else
    showLetter();
});
