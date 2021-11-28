import './style.css';

const loaderEl: HTMLDivElement = document.querySelector('[data-game-loader]');
const accountCurrentEl: HTMLDivElement = document.querySelector('[data-account-current]');
const circleEl: HTMLDivElement = document.querySelector('[data-game-circle]');
const accountPlusNumberEl: HTMLDivElement = document.querySelector('[data-account-plus-number]');
const keyEl: HTMLDivElement = document.querySelector('[data-game-key]');
const accountMinusNumber: HTMLDivElement = document.querySelector('[data-account-minus-number]');
const gamePopup: HTMLDivElement = document.querySelector('[data-game-popup]');

let points: number = 100;
let layer: number = 150;

document.addEventListener('keyup', (event) => {
    const keyUp: string = event.key.toUpperCase();
    setKey(keyUp);
    }
)
accountCurrentEl.innerText = String(points);
accountPlusNumberEl.innerText = '';
accountMinusNumber.innerText = '';

const randomLetters = setInterval(() => {
    const letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    loaderEl.classList.add('game-loader');
    keyEl.innerText = letters[Math.floor(Math.random() * letters.length)];
}, 2000);


const setKey = (key: string) => {
    if (keyEl.innerText == key) {
        const quantityNumber: number = randomNumber(5, 10);
        accountMinusNumber.innerText = '';
        layer += 5;
        points += quantityNumber;
        circleEl.style.width = layer + 'px';
        circleEl.style.height = layer + 'px';
        accountPlusNumberEl.innerText = `+${quantityNumber}`;
        accountCurrentEl.innerText = String(points);
        stopGame();

    } else if (keyEl.innerText !== key) {
        const quantityNumber: number = randomNumber(20, 25);
        accountPlusNumberEl.innerText = '';
        layer -= 10;
        points -= quantityNumber;
        circleEl.style.width = layer + 'px';
        circleEl.style.height = layer + 'px';
        accountCurrentEl.innerText = String(points);
        accountMinusNumber.innerText = `-${quantityNumber}`;
        stopGame();
    }
}

function randomNumber(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function stopGame() :void {
    if (points >= 200) {
        elementsStopGame ();
        gamePopup.innerText = 'YOU WIN!!!';
    } else if (points <= 0) {
        elementsStopGame ();
        gamePopup.innerText = 'GAME OVER';
    }
}

function elementsStopGame (): void {
    clearInterval(randomLetters);
    loaderEl.classList.remove('game-loader');
    circleEl.classList.add('game-circle--end');
    accountPlusNumberEl.innerText = '';
    accountMinusNumber.innerText = '';
    keyEl.innerText = '';
}
