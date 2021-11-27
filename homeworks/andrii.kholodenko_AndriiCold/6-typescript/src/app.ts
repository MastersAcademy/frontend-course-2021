import './styles/style.css';

const totalScoreEl = document.querySelector<HTMLHeadingElement>('[data-total-score]');
const bubbleEl = document.querySelector<HTMLHeadingElement>('[data-bubble]');
const dynamicScoreEl = document.querySelector<HTMLHeadingElement>('[data-dynamic-score]');
const keyEl = document.querySelector<HTMLHeadingElement>('[data-key]');

let score: number = 100;
let currentKey: string = '';
const interval: number = 2000;
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
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    currentKey = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    updateRandomValue(currentKey.toUpperCase());
    return currentKey;
}

function startKeysInterval(): void {
    setKey();
    if (score < 200) {
        timer = setTimeout(() => {
            differentKey();
            checkGameEnd();
            if (score > 0) {
                startKeysInterval();
            }
        }, interval);
    }
}

function checkGameEnd(): void {
    if (score >= 200) {
        updateScore('You are win!');
        clearTimeout(timer);
        updateBubbleScore('');
        updateRandomValue('');
    } else if (score <= 0) {
        updateScore('You are lose!');
        clearTimeout(timer);
        updateBubbleScore('');
        updateRandomValue('');
    }
}

function checkKey(key: string): void {
    if (key === currentKey) {
        sameKey();
        checkGameEnd();
    } else {
        differentKey();
        checkGameEnd();
    }
}

function subscribeOnKeyPress(): void {
    document.addEventListener('keypress', event => {
        clearTimeout(timer);
        if (score < 200 && score > 0) {
            checkKey(event.key.toUpperCase());
            startKeysInterval();
        }
    })
}

function randomInteger(min: number, max: number, plusOrMinus: string): number {
    let randomNumber: number;
    let rand: number = min + Math.random() * (max + 1 - min);
    randomNumber = Math.floor(rand);
    updateBubbleScore(`${plusOrMinus+randomNumber}`);
    setTimeout(() => {
        updateBubbleScore('');
    }, 1000);
    return randomNumber;

}

function sameKey(): void {
    score += randomInteger(5, 10,'+');
    updateScore(String(score));
    bubbleSize();
}

function differentKey(): void {
    score -= randomInteger(20, 25, '-')
    updateScore(String(score));
    bubbleSize();
}

subscribeOnKeyPress();
startKeysInterval();
