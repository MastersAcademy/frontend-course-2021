let points: number = 100;
const pointsBlockEl: HTMLElement = document.querySelector('[data-attr-points]');
const symbolBlockEl: HTMLElement = document.querySelector('[data-attr-symbol]');
const sphereBlockEl: HTMLElement = document.querySelector('[data-attr-sphere]');
const headerBlockEl: HTMLElement = document.querySelector('[data-attr-header]');
const headerTextEl: HTMLElement = document.querySelector('[data-attr-header-text]');
const changePointsBlockEl: HTMLElement = document.querySelector('[data-attr-change]');
const progressBarBlockEl: HTMLElement = document.querySelector('[data-attr-progress]');
const WIN_NUMBER: number = 200;
const LOSE_NUMBER: number = 0;
let symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbolValue: string = '';
let randomPoints: number;
let timer: number;
let processBar: NodeJS.Timer;
let push: boolean = false;

function renderPoints(num: number): void {
    pointsBlockEl.textContent = `${num}`;
}

function getRandomSymbol(symbolArray: string[]): string {
    let symbolIndex = Math.floor(Math.random() * symbolArray.length);
    return symbolArray[symbolIndex];
}

function renderResultGame (color: string, text: string): void {
    headerBlockEl.style.backgroundColor = color;
    headerTextEl.textContent = text;
}

function renderChangePoints(symbol: string, num: number): void {
    changePointsBlockEl.textContent = `${symbol}` + `${num}`;
}

function winnerOrLoser(pointsNum: number): void {
    if (pointsNum >= WIN_NUMBER) {
        resetTimer();
        renderResultGame('green', 'You win!!! :)');
    }
    if (pointsNum <= LOSE_NUMBER) {
        resetTimer();
        renderResultGame('red', 'You lose :(');
    }
    if (pointsNum < WIN_NUMBER && pointsNum > LOSE_NUMBER) {
        timerGame();
    }
}

function getRandomNumber(min: number, max: number): number {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
};

function changesSphere(): void {
    sphereBlockEl.style.width = points + 'px';
    sphereBlockEl.style.height = points + 'px';
}

function renderProgressLine(): void {
    let stepProgress: number = 10;
    let allProgress: number = 100;
    processBar = setInterval(() => {
        if (allProgress >= 0) {
            progressBarBlockEl.style.width = allProgress + '%';
            allProgress -= stepProgress;
            return;
        }
    }, 180);
}

function resetTimer() {
    clearTimeout(timer);
}

function noPushButton(): void {
    randomPoints = getRandomNumber(15, 20);
    renderChangePoints('-', randomPoints);
    points -= randomPoints;
    changesSphere();
    renderPoints(points);
    winnerOrLoser(points);
}

function timerGame(): void {
    symbolValue = getRandomSymbol(symbols);
    symbolBlockEl.textContent = symbolValue;
    renderProgressLine();
    timer = window.setTimeout(() => {
        noPushButton();
    }, 2000);
}

document.addEventListener('keydown', (event) => {
    resetTimer();
    if (event.key.toUpperCase() === symbolValue) {
        randomPoints = getRandomNumber(5, 10);
        renderChangePoints('+', randomPoints);
        points += randomPoints;
        changesSphere();
        renderPoints(points);
    }
    if (event.key.toUpperCase() !== symbolValue && !event.shiftKey) {
        randomPoints = getRandomNumber(20, 25);
        renderChangePoints('-', randomPoints);
        points -= randomPoints;
        changesSphere();
        renderPoints(points);
    }
    winnerOrLoser(points);
});

timerGame();
renderPoints(points);
