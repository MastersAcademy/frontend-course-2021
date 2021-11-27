import './style.css';

const fieldLetterEL:HTMLElement = document.querySelector('[data-characters]');
const fieldCounterEL:HTMLElement = document.querySelector('[data-caunter-number]');
const circleEL:HTMLElement = document.querySelector('[data-game-circle]');
const fieldPlusPoints:HTMLElement = document.querySelector('[data-plus-points]');
const fieldMinusPoints:HTMLElement = document.querySelector('[data-minus-points]');
const letters: string = 'QWERTYUIOPASDFGHJKLZXCVBNM'
let counter:number = 100;
fieldCounterEL.textContent = `${100}`;
let valueRandomLetter:string;
let keyPress:boolean = false;
let scores: number;

function gameLogic(): void {
    document.addEventListener('keydown', (event) => {
        let item = event.key.toUpperCase();
        if (item === valueRandomLetter) {
            scores = getRandomNumber(5, 10);
            counter += scores;
            changeCircleSize(counter);
            changeCounterField(counter);
            fieldPlusPoints.textContent =`+${scores}`;
        } else if (item !== valueRandomLetter) {
            scores = getRandomNumber(20, 25);
            counter -= scores;
            changeCircleSize(counter);
            changeCounterField(counter);
            fieldMinusPoints.textContent =`-${scores}`;
        }
        keyPress = true;
        resultCount();
    });
}
gameLogic();

const readout = setInterval(() => {
    valueRandomLetter = getRandomLetter(letters)
    fieldLetterEL.textContent = valueRandomLetter;
}, 2000);

function getRandomLetter(str:string):string {
    return str[Math.floor(Math.random() * str.length)];
}

function getRandomNumber(min:number, max:number):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeCircleSize(num:number):void {
    circleEL.style.width = num + 'px';
    circleEL.style.height = num + 'px';
}

function changeCounterField(num: number):void {
    fieldCounterEL.textContent = `${num}`;
}

function resultCount():void {
    if (counter <= 0) {
        clearInterval(readout);
        fieldCounterEL.textContent = `You lose: ${counter}`;
    } else if (counter >= 200) {
        clearInterval(readout);
        fieldCounterEL.textContent = `You win: ${counter}`;
    }
}
