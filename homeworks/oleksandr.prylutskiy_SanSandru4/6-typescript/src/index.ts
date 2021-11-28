let points: number = 100;
const pointsBlockEl: HTMLElement = document.querySelector('[data-attr-points]');
const symbolBlockEl: HTMLElement = document.querySelector('[data-attr-symbol]');
const sphereBlockEl: HTMLElement = document.querySelector('[data-attr-sphere]');
const headerBlockEl: HTMLElement = document.querySelector('[data-attr-header]');
const headerTextEl: HTMLElement = document.querySelector('[data-attr-header-text]');
const changePointsBlockEl: HTMLElement = document.querySelector('[data-attr-change]');
const progressBarBlockEl: HTMLElement = document.querySelector('[data-attr-progress]');
const numForWin: number = 200;
const numForLose: number = 0;
let symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbolValue: string = '';
let randomPoints: number;
let interval: number = 2000;
let symbolTimer: NodeJS.Timer;

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
    if (pointsNum >= numForWin) {
        clearInterval(symbolTimer);
        renderResultGame('green', 'You win!!! :)');
    }
    if (pointsNum <= numForLose) {
        clearInterval(symbolTimer);
        renderResultGame('red', 'You lose :(');
    }
}

function getRandomNumber(min: number, max: number): number {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
};

function changesUpSphere(randomP: number): void {
    points += randomP;
    sphereBlockEl.style.width = points + 'px';
    sphereBlockEl.style.height = points + 'px';
}

function changesDownSphere(randomP: number): void {
    points -= randomP;
    sphereBlockEl.style.width = points + 'px';
    sphereBlockEl.style.height = points + 'px';
}

function renderProgressLine(): void {
    let stepProgress: number = 10;
    let allProgress: number = 100;
    let processLineInterval: number = 200;
    setInterval(() => {
        if (allProgress >= 0) {
            progressBarBlockEl.style.width = allProgress + '%';
            allProgress -= stepProgress;
            return;
        }
    }, processLineInterval);
}

function timerGame() {
    symbolTimer = setInterval(() => {
        symbolValue = getRandomSymbol(symbols);
        symbolBlockEl.textContent = symbolValue;
        renderProgressLine();

    }, interval);
}

function gameProcess(): void {
    document.addEventListener('keydown', (event) => {
        if (event.key.toUpperCase() === symbolValue) {
            randomPoints = getRandomNumber(5, 10);
            renderChangePoints('',randomPoints);
            changesUpSphere(randomPoints);
            renderPoints(points);
        }
        if (event.key.toUpperCase() !== symbolValue && !event.shiftKey) {
            randomPoints = getRandomNumber(20, 25);
            renderChangePoints('-', randomPoints);
            changesDownSphere(randomPoints);
            renderPoints(points);
        }
        winnerOrLoser(points);
    });
}

timerGame();
renderPoints(points);
gameProcess();
