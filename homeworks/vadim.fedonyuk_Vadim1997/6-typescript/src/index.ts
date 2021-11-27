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
            alert('You lose');
        }
    }, 2000)
}

getLetter()

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
        alert('You Win');
    }
    if (score <= 0) {
        alert('You Lose');
    } else getLetter()
})
