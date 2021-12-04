import './style.css';

const fieldLetterEL: HTMLElement = document.querySelector('[data-characters]');
const fieldCounterEL: HTMLElement = document.querySelector('[data-caunter-number]');
const circleEL: HTMLElement = document.querySelector('[data-game-circle]');
const fieldPlusPointsEl: HTMLElement = document.querySelector('[data-plus-points]');
const fieldMinusPointsEl: HTMLElement = document.querySelector('[data-minus-points]');
const letters: string = 'QWERTYUIOPASDFGHJKLZXCVBNM';
let counter: number = 100;
fieldCounterEL.textContent = `${counter}`;
let valueRandomLetter: string;
let keyPress: boolean = false;
let scores: number = 0;

const readout = setInterval(() => {
    keyPress = false;
    valueRandomLetter = getRandomLetter(letters)
    fieldLetterEL.textContent = valueRandomLetter;
    document.addEventListener('keydown', gameLogic);
    setTimeout(()=> {
        if (!keyPress && counter !> 0) {
            scores = getRandomNumber(10, 15);
            counter -= scores;
            changeCircleSize(counter);
            changeCounterField(counter);
            fieldMinusPointsEl.textContent =`-${scores}`;
            fieldPlusPointsEl.textContent = '';
            }
    }, 1999);
    resultCount();
}, 2000);

function getRandomLetter(str: string): string {
    return str[Math.floor(Math.random() * str.length)];
}

function gameLogic(event: KeyboardEvent): void {
    fieldMinusPointsEl.textContent = '';
    let pressedKey : string = event.key.toUpperCase();
    if (pressedKey === valueRandomLetter) {
        scores = getRandomNumber(5, 10);
        counter += scores;
        changeCircleSize(counter);
        changeCounterField(counter);
        fieldPlusPointsEl.textContent =`+${scores}`;
    } else if (pressedKey !== valueRandomLetter) {
        fieldPlusPointsEl.textContent = '';
        scores = getRandomNumber(20, 25);
        counter -= scores;
        changeCircleSize(counter);
        changeCounterField(counter);
        fieldMinusPointsEl.textContent =`-${scores}`;
    }
    keyPress = true;
    resultCount();
}

function getRandomNumber(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeCircleSize(num: number): void {
    circleEL.style.width = num + 'px';
    circleEL.style.height = num + 'px';
}

function changeCounterField(num: number): void {
    fieldCounterEL.textContent = `${num}`;
}

function resultCount(): void {
    if (counter <= 0) {
        document.removeEventListener('keydown', gameLogic);
        clearInterval(readout);
        fieldCounterEL.textContent = `You lose: ${counter}`;
    } else if (counter >= 200) {
        document.removeEventListener('keydown', gameLogic);
        clearInterval(readout);
        fieldCounterEL.textContent = `You win: ${counter}`;
    }
}
