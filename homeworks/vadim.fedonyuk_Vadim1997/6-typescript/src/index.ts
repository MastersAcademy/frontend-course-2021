import './style.css';

const totalScore = document.querySelector<HTMLElement>('[data-tottal-score]');
const currentScore = document.querySelector<HTMLElement>('[data-current-score]');
const currentLetter = document.querySelector<HTMLElement>('[data-letters-container]');

let someLetter: string;
let points: number;
let score: number = 100;
let time: number;

totalScore.textContent = '100';

function getRandom(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getLetter() {
    someLetter = String.fromCharCode(getRandom(65, 90));
    currentLetter.innerText = someLetter;
    time = window.setTimeout(() => {
        points = getRandom(10, 15);
        currentScore.innerText = '-' + points;
        score = score - points;
        totalScore.innerText = `${score}`;
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
        totalScore.innerText = `${score}`;
        currentScore.innerText = '+' + points;
    }
    if (e.key.toUpperCase() !== someLetter) {
        points = getRandom(20, 25);
        score = score - points;
        totalScore.innerText = `${score}`;
        currentScore.innerText = '-' + points;
    }
    if (score >= 200) {
        alert('You Win');
    }
    if (score <= 0) {
        alert('You Lose');
    } else getLetter()
})
