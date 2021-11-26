import './styles.css';

const startBtnEl: HTMLElement = document.querySelector('[data-start-btn]');
const stopBtnEl: HTMLElement = document.querySelector('[data-stop-btn]');
const conditionEl: HTMLElement = document.querySelector('[data-condition-container]');
const progressBarEl: HTMLProgressElement = document.querySelector('[data-progress-bar]');
const totalScoreEl: HTMLElement = document.querySelector('[data-total-score]');
const curPointsEl: HTMLElement = document.querySelector('[data-cur-points]');
let curPoints: number;
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

const checkKeyValue = (key: KeyboardEvent): void => {
    // document.removeEventListener('keydown', checkKeyValue, false);
    if (key.key.toUpperCase() === conditionEl.textContent) {
        curPoints = Math.floor(Math.random() * 5) + 5;
        curPointsEl.textContent = curPoints.toString();
        totalScoreEl.textContent = (Number(totalScoreEl.textContent) + curPoints).toString();
    } else {
        curPoints = Math.floor(Math.random() * - 5) - 10;
        curPointsEl.textContent = curPoints.toString();
        totalScoreEl.textContent = (Number(totalScoreEl.textContent) + curPoints).toString();
    }
}

const gameFlow = (): void => {
    if (Number(totalScoreEl.textContent) < 200 && Number(totalScoreEl.textContent) > 0) {
        conditionEl.textContent = randomLetterGen();
        moveProgressBar();
        document.addEventListener('keydown', checkKeyValue, false);
    } else {
        stopGame();
    }
}

const keyboardListener = (): boolean => {

    return true;
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
