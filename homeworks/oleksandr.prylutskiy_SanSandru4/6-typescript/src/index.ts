import * as _ from 'lodash';

let points: number = 100;
const pointsBlockEl: HTMLElement = document.querySelector('[data-attr-points]');
const symbolBlockEl: HTMLElement = document.querySelector('[data-attr-symbol]');
const sphereBlockEl: HTMLElement = document.querySelector('[data-attr-sphere]');
const headerBlockEl: HTMLElement = document.querySelector('[data-attr-header]');
const headerTextEl: HTMLElement = document.querySelector('[data-attr-header-text]');
let symbols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let symbolValue: string = '';
let randomPoints: number;
let pressKey: boolean = false;

function outPoints(num: number): void {
    pointsBlockEl.textContent = `${num}`;
}

outPoints(points);

function randomSymbol<T>(symbolArray: T[]): T {
    let symbolIndex = Math.floor(Math.random() * symbolArray.length);
    return symbolArray[symbolIndex];
}

function winOrLoser(pointsNum: number): void {
    if (pointsNum >= 200) {
        clearInterval(symbolTimer);
        headerBlockEl.style.backgroundColor = 'green';
        headerTextEl.textContent = 'You win!!! :)';
    }
    if (pointsNum <= 0) {
        clearInterval(symbolTimer);
        headerBlockEl.style.backgroundColor = 'red';
        headerTextEl.textContent = 'You lose :(';
    }
}

function randomNum(min: number, max: number): number {
    let ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
};

function changesIncSphere(randomP: number): void {
    sphereBlockEl.style.width = points + randomP + 'px';
    sphereBlockEl.style.height = points + randomP + 'px';
    points += randomP;
}

function changesDecSphere(randomP: number): void {
    sphereBlockEl.style.width = points - randomP + 'px';
    sphereBlockEl.style.height = points - randomP + 'px';
    points -= randomP;
}

let symbolTimer = setInterval(() => {
    symbolValue = randomSymbol(symbols);
    symbolBlockEl.textContent = symbolValue;
}, 2000);

function gameProcess(): void {
    document.addEventListener('keydown', (event) => {
        pressKey = true;
        if (event.key.toUpperCase() === symbolValue) {
            randomPoints = randomNum(5, 10);
            changesIncSphere(randomPoints);
            outPoints(points);
        }
        if (event.key.toUpperCase() !== symbolValue) {
            randomPoints = randomNum(20, 25);
            changesDecSphere(randomPoints);
            outPoints(points);
        }
        winOrLoser(points);
    });
}

gameProcess();
