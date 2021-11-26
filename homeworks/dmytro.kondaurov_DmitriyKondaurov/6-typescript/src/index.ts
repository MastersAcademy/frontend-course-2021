import './styles.css';

const startBtnEl: HTMLElement = document.querySelector('[data-start-btn]');
const stopBtnEl: HTMLElement = document.querySelector('[data-stop-btn]');
const restartBtnEl: HTMLElement = document.querySelector('[data-restart-btn]');
const conditionEl: HTMLElement = document.querySelector('[data-condition-container]');
const progressBarEl: HTMLProgressElement = document.querySelector('[data-progress-bar]');
const totalScoreEl: HTMLElement = document.querySelector('[data-total-score]');
const curPointsEl: HTMLElement = document.querySelector('[data-cur-points]');
let curPoints: number;
let intervalId: NodeJS.Timer;
type letterT = 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'|'I'|'J'|'K'|'L'|'M'|'N'|'O'|'P'|'Q'|'R'|'S'|'T'|'U'|'V'|'W'|'X'|'Y'|'Z';
let keyPressedFlag: boolean = false;

const startGame = (): void => {
    if (!intervalId) {
        intervalId = setInterval(gameFlow, 2000);
    }
}

const stopGame = (): void => {
    clearInterval(intervalId);
    intervalId = null;
}

const restartGame = (): void => {
    stopGame();
    curPoints = 0;
    keyPressedFlag = false;
    curPointsEl.textContent = curPoints.toString();
    totalScoreEl.textContent = '100';
    startGame();
}

const randomLetterGen = (): string | letterT => {
    const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

const checkKeyValue = (key: KeyboardEvent): void => {
    document.removeEventListener('keydown', checkKeyValue, false);
    keyPressedFlag = true;
    if (key.key.toUpperCase() === conditionEl.textContent) {
        curPoints = Math.floor(Math.random() * 5) + 5;
        curPointsEl.textContent = curPoints.toString();
        totalScoreEl.textContent = (Number(totalScoreEl.textContent) + curPoints).toString();
    } else {
        curPoints = Math.floor(Math.random() * - 20) - 5;
        curPointsEl.textContent = curPoints.toString();
        totalScoreEl.textContent = (Number(totalScoreEl.textContent) + curPoints).toString();
    }
}

const gameFlow = async (): Promise<void> => {
    if (Number(totalScoreEl.textContent) < 200 && Number(totalScoreEl.textContent) > 0) {
        conditionEl.textContent = randomLetterGen();
        keyPressedFlag = false;
        document.addEventListener('keydown', checkKeyValue, false);
        moveProgressBar();
        await setTimeout(() => {
            if (!keyPressedFlag) {
                curPoints = Math.floor(Math.random() * - 5) - 10;
                curPointsEl.textContent = curPoints.toString();
                totalScoreEl.textContent = (Number(totalScoreEl.textContent) + curPoints).toString();
            }
        }, 1990);
    } else {
        stopGame();
    }
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
restartBtnEl.addEventListener('click', restartGame);
stopBtnEl.addEventListener('click', stopGame);
