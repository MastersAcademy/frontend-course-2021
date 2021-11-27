let points: number = 100;
const pointsBlockEl: HTMLElement = document.querySelector('[data-attr-points]');
const symbolBlockEl: HTMLElement = document.querySelector('[data-attr-symbol]');
const sphereBlockEl: HTMLElement = document.querySelector('[data-attr-sphere]');
const headerBlockEl: HTMLElement = document.querySelector('[data-attr-header]');
const headerTextEl: HTMLElement = document.querySelector('[data-attr-header-text]');
const changePointsBlockEl: HTMLElement = document.querySelector('[data-attr-change]');
const progressBarBlockEl: HTMLElement = document.querySelector('[data-attr-progress]');
let symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbolValue: string = '';
let randomPoints: number;
let interval: number = 2000;

function renderPoints(num: number): void {
    pointsBlockEl.textContent = `${num}`;
}

function randomGetSymbol(symbolArray: string[]): string {
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
    if (pointsNum >= 200) {
        clearInterval(symbolTimer);
        renderResultGame('green', 'You win!!! :)');
    }
    if (pointsNum <= 0) {
        clearInterval(symbolTimer);
        renderResultGame('red', 'You lose :(');
    }
}

function randomNum(min: number, max: number): number {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
};

function changesUpSphere(randomP: number): void {
    sphereBlockEl.style.width = points + randomP + 'px';
    sphereBlockEl.style.height = points + randomP + 'px';
    points += randomP;
}

function changesDownSphere(randomP: number): void {
    sphereBlockEl.style.width = points - randomP + 'px';
    sphereBlockEl.style.height = points - randomP + 'px';
    points -= randomP;
}

function renderProgressLine(): void {
    let stepProgress: number = 10;
    let allProgress: number = 100;
    setInterval(() => {
        if (allProgress >= 0) {
            progressBarBlockEl.style.width = allProgress + '%';
            allProgress -= stepProgress;
            return;
        }
    }, 200);
}

let symbolTimer = setInterval(() => {
    symbolValue = randomGetSymbol(symbols);
    symbolBlockEl.textContent = symbolValue;
    renderProgressLine();
}, interval);

function gameProcess(): void {
    document.addEventListener('keydown', (event) => {
        if (event.key.toUpperCase() === symbolValue) {
            randomPoints = randomNum(5, 10);
            renderChangePoints('',randomPoints);
            changesUpSphere(randomPoints);
            renderPoints(points);
        }
        if (event.key.toUpperCase() !== symbolValue && !event.shiftKey) {
            randomPoints = randomNum(20, 25);
            renderChangePoints('-', randomPoints);
            changesDownSphere(randomPoints);
            renderPoints(points);
        }
        winnerOrLoser(points);
    });
}


renderPoints(points);
gameProcess();
