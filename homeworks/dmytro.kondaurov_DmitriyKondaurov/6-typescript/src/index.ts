import './styles.css';

const startBtnEl: HTMLElement = document.querySelector('[data-start-btn]');
const stopBtnEl: HTMLElement = document.querySelector('[data-stop-btn]');
const conditionEl: HTMLElement = document.querySelector('[data-condition-container]');
const progressBarEl: HTMLProgressElement = document.querySelector('[data-progress-bar]');

let intervalId: NodeJS.Timer;
type letterT = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';

const startGame = (): void => {
    if (!intervalId) {
        intervalId = setInterval(gameFlow, 2000);
    }
}

const randomLetterGen = (): string | letterT => {
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const gameFlow = (): void => {
    conditionEl.textContent = randomLetterGen();
    moveProgressBar();
}

const keyboardListener = (inputKey: string): string => {
    return inputKey;
}
const stopGame = (): void => {
    clearInterval(intervalId);
    intervalId = null;
}


const moveProgressBar = (): void => {
    let i: number = 0;
    if (i == 0) {
        i = 1;
        let curProgress: number = 1;
        const frame = (): void => {
            if (curProgress >= 100) {
                clearInterval(id);
                i = 0;
            } else {
                curProgress++;
                progressBarEl.value = curProgress;
            }
        }
        const id: NodeJS.Timer = setInterval(frame, 20);
    }
}

startBtnEl.addEventListener('click', startGame);
stopBtnEl.addEventListener('click', stopGame);
