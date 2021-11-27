import './style.css';

const totalScoreEl = document.querySelector<HTMLElement>('[data-tottal-score]');
const currentScoreEl = document.querySelector<HTMLElement>('[data-current-score]');
const currentLetterEl = document.querySelector<HTMLElement>('[data-letters-container]');

let someLetter: string;
let points: number;
let score: number = 100;
let time: number;

totalScoreEl.textContent = '100';
currentScoreEl.textContent = '0';

function getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getLetter() {
    someLetter = String.fromCharCode(getRandom(65, 90));
    currentLetterEl.innerText = someLetter;
    time = window.setTimeout(() => {
        points = getRandom(10, 15);
        currentScoreEl.innerText = '-' + points;
        score = score - points;
        totalScoreEl.innerText = `${score}`;
        if (score > 0) {
            getLetter();
        } else {
            clearTimeout(time);
            currentScoreEl.innerText = 'Lose';
            totalScoreEl.innerText = '0';
        }
    }, 2000)
}

document.addEventListener('keypress', (e) => {
    clearTimeout(time);
    if (e.key.toUpperCase() === someLetter) {
        points = getRandom(5, 10);
        score = score + points;
        totalScoreEl.innerText = `${score}`;
        currentScoreEl.innerText = '+' + points;
    }
    if (e.key.toUpperCase() !== someLetter) {
        points = getRandom(20, 25);
        score = score - points;
        totalScoreEl.innerText = `${score}`;
        currentScoreEl.innerText = '-' + points;
    }
    if (score >= 200) {
        clearTimeout(time);
        currentScoreEl.innerText = 'Win';
        totalScoreEl.innerText = '200';
    }
    if (score <= 0) {
        clearTimeout(time);
        currentScoreEl.innerText = 'Lose';
        totalScoreEl.innerText = '0';
    }
    if ((score < 200) && (score > 0)) {
        getLetter()
    }
})

getLetter()


