const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";
const BIGBALLSIZE = 50;

const ramdomPoint = (min: number = 1, max: number = 2): number => Math.round(Math.random() * (max - min) + min);

let speedTimeGame: number = 2000;
let points: number = 100;
let letterForCheck: string = '';
let keystrokeLock: boolean = true
let interval: NodeJS.Timeout;

const latterValueEl = document.querySelector<HTMLElement>('[data-box-letter]');
const ballEl = document.querySelector<HTMLElement>('[data-ball]');
const textInfoEl = document.querySelector<HTMLElement>('[data-info]')
const ballBoxEl = document.querySelector<HTMLElement>('[data-box-from-letter]');
const buttonNewGameEl = document.querySelector<HTMLElement>('[data-button-new-game]');
const buttonStopGameEl = document.querySelector<HTMLElement>('[data-button-stop-game]');
const maingameEl = document.querySelector<HTMLElement>('[data-main]');

const newLetter = (str: string): string => {
    return (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();
}

const resetCssBackground = () => {
    maingameEl.classList.remove('background__box-letter');
    maingameEl.classList.remove('background__lost-menu');
    maingameEl.classList.remove('background__start-menu');
    maingameEl.classList.remove('background__win-menu');
}
const ballSizeUpdate = (point: number) => {
    ballEl.style.width = `${point + BIGBALLSIZE}px`
    ballEl.style.height = `${point + BIGBALLSIZE}px`
}

const decrementNotPressKeyPoints = () => {
    const decrement = ramdomPoint(10, 15)
    points -= decrement
    latterValueEl.textContent = `-${decrement}`
    ballSizeUpdate(points);
}

const endGameStatus = (textStatus: string, classBackground: string) => {
    keystrokeLock = true
    resetCssBackground();
    maingameEl.classList.add(classBackground);
    textInfoEl.textContent = textStatus
    clearInterval(interval)
}

const start = (): void => {
    textInfoEl.textContent = `${points} points`
    letterForCheck = newLetter(ALPHABET)
    latterValueEl.textContent = letterForCheck
    ballBoxEl.classList.add('background__box-letter');

    interval = setInterval(() => {
        letterForCheck = newLetter(ALPHABET)
        latterValueEl.textContent = letterForCheck
        if (!keystrokeLock && points > 0 && points < 200) decrementNotPressKeyPoints()
        else if (points > 0 && points < 200) {
            keystrokeLock = false
        }
        textInfoEl.textContent = `${points} points`;
        setTimeout(() => {
            latterValueEl.textContent = letterForCheck
        }, 200)

        if (points >= 200) endGameStatus('You win Game!', 'background__win-menu')
        else if (points <= 0) endGameStatus('You lost Game!', 'background__lost-menu')
    }, speedTimeGame);
}

const correctKeyPressed = () => {
    let increment = ramdomPoint(5, 10)
    latterValueEl.textContent = `+${increment}`
    points += increment
    textInfoEl.textContent = `${points} points`
    ballBoxEl.classList.remove('background-box-letter-lost');
    ballBoxEl.classList.add('background__box-letter-win');
    keystrokeLock = true
}

const errorKeyPressed = () => {
    let decrement = ramdomPoint(20, 25)
    latterValueEl.textContent = `-${decrement}`
    points -= decrement
    textInfoEl.textContent = `${points} points`
    ballBoxEl.classList.remove('background__box-letter');
    ballBoxEl.classList.add('background-box-letter-lost');
    keystrokeLock = true
}

document.addEventListener('keyup', (letter) => {
    if (letter.key.toLocaleUpperCase() == letterForCheck && !keystrokeLock && points) correctKeyPressed()
    else if (!keystrokeLock && points) errorKeyPressed()
    ballSizeUpdate(points);
});

buttonNewGameEl.addEventListener('click', () => {
    keystrokeLock = false
    clearInterval(interval)
    points = 100;
    resetCssBackground();
    maingameEl.classList.add('background__start-menu');
    start()
})

buttonStopGameEl.addEventListener('click', () => {
    clearInterval(interval)
    textInfoEl.textContent = 'You lost Game!'
    keystrokeLock = true
    resetCssBackground();
    maingameEl.classList.add('background__lost-menu');
})
