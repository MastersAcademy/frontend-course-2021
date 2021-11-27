import './styles/style.css';

const totalScoreEl = document.querySelector('[data-total-score]') as HTMLHeadingElement;
const bubbleEl = document.querySelector('[data-bubble]') as HTMLDivElement;
const dynamicScoreEl = document.querySelector('[data-dynamic-score]') as HTMLDivElement;
const keyEl = document.querySelector('[data-key]') as HTMLDivElement;

let score: number = 100;
let currentKey: string = '';
const interval: number = 2000;
let randomNumber: number;
let timer: NodeJS.Timeout;

function updateRandomValue(value: string): void {
    keyEl.innerText = value;
}

function updateScore(score: string): void {
    totalScoreEl.innerText = score;
}

function updateBubbleScore(score: string): void {
    dynamicScoreEl.innerText = score;
}

function bubbleSize(): void {
    bubbleEl.style.width = String(score + 50 + 'px');
    bubbleEl.style.height = String(score + 50 + 'px');
}

function setKey(): string {
    const letter: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    currentKey = letter.charAt(Math.floor(Math.random() * letter.length));
    updateRandomValue(currentKey.toUpperCase());
    return currentKey
}

function startKeysInterval(): void {
    setKey();
    updateScore(String(score));
    timer = setInterval(() => {
        setKey();
    }, interval);
}

function gameEnd(): void {
    if (score >= 200) {
        updateScore('You are win!');
        clearInterval(timer);
        updateBubbleScore('');
        updateRandomValue('');
    } else if (score <= 0) {
        updateScore('You are lose!');
        clearInterval(timer);
        updateBubbleScore('');
        updateRandomValue('');
    }
}

function checkKey(key: string): void {
    if (key === currentKey) {
        sameKey();
        gameEnd();
    } else {
        differentKey();
        gameEnd();
    }
}

function subscribeOnKeyPress(): void {
    document.addEventListener('keypress', event => {
        checkKey(event.key.toUpperCase());
    })
}

function randomInteger(min: number, max: number): number {
    let rand: number = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(rand);
    return randomNumber
}

function sameKey(): void {
    score += randomInteger(5, 10)
    updateBubbleScore(`+${randomNumber}`);
    setTimeout(() => {
        updateBubbleScore('');
    }, 1000);
    updateScore(String(score));
    bubbleSize();
}

function differentKey(): void {
    score -= randomInteger(20, 25)
    updateBubbleScore(`-${randomNumber}`);
    setTimeout(() => {
        updateBubbleScore('');
    }, 1000);
    updateScore(String(score));
    bubbleSize();
}

startKeysInterval();
subscribeOnKeyPress();
