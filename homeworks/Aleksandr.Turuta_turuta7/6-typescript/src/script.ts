const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";
const BIGBALL = 50;

const decrement_not_press_key_points = (min: number = 20, max: number = 25): number => Math.round(Math.random() * (max - min) + min);
const decrement_points = (min: number = 20, max: number = 25): number => Math.round(Math.random() * (max - min) + min);
const increment_points = (min: number = 5, max: number = 10): number => Math.round(Math.random() * (max - min) + min);

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
    maingameEl.classList.remove('background-AAA');
    maingameEl.classList.remove('background-F5ADAD');
    maingameEl.classList.remove('background-F8F4C2');
    maingameEl.classList.remove('background-F8F4C2');
}
const ballSizeUpdate = (point: number) => {
    ballEl.style.width = `${point + BIGBALL}px`
    ballEl.style.height = `${point + BIGBALL}px`
}

const decrementNotPressKeyPoints = () => {
    const decrement = decrement_not_press_key_points()
    points -= decrement
    latterValueEl.textContent = `-${decrement}`
    ballSizeUpdate(points);
}

const winGame = () => {
    keystrokeLock = true
    resetCssBackground();
    maingameEl.classList.add('background-B6F3B6');
    textInfoEl.textContent = 'You win Game!'
    clearInterval(interval)
}

const lostGame = () => {
    keystrokeLock = true
    resetCssBackground();
    maingameEl.classList.add('background-F5ADAD');
    textInfoEl.textContent = 'You lost Game!'
    clearInterval(interval)
}

const start = (): void => {
    textInfoEl.textContent = `${points} points`
    letterForCheck = newLetter(ALPHABET)
    latterValueEl.textContent = letterForCheck

    interval = setInterval(() => {
        ballBoxEl.classList.add('background-AAA');
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

        if (points >= 200) winGame()
        else if (points <= 0) lostGame()
    }, speedTimeGame);
}

const correctKeyPressed = () => {
    let increment = increment_points()
    latterValueEl.textContent = `+${increment}`
    points += increment
    textInfoEl.textContent = `${points} points`
    ballBoxEl.classList.remove('background-box-8F0F0F');
    ballBoxEl.classList.add('background-box-07AC15');
    keystrokeLock = true
}

const errorKeyPressed = () => {
    let decrement = decrement_points()
    latterValueEl.textContent = `-${decrement}`
    points -= decrement
    textInfoEl.textContent = `${points} points`
    ballBoxEl.classList.remove('background-box-07AC15');
    ballBoxEl.classList.add('background-box-8F0F0F');
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
    maingameEl.classList.add('background-F8F4C2');
    start()
})

buttonStopGameEl.addEventListener('click', () => {
    clearInterval(interval)
    textInfoEl.textContent = 'You lost Game!'
    keystrokeLock = true
    resetCssBackground();
    maingameEl.classList.add('background-F5ADAD');
})
