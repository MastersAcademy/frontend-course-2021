const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";

const INCREMENT_NOT_PRESS_KEY_POINTS = (min: number = 20, max: number = 25): number => Math.round(Math.random() * (max - min) + min);
const INCREMENT_POINTS = (min: number = 20, max: number = 25): number => Math.round(Math.random() * (max - min) + min);
const DECREMENT_POINTS = (min: number = 5, max: number = 10): number => Math.round(Math.random() * (max - min) + min);

let speedTimeGame: number = 2000;
let POINTS: number = 100;
let letterForCheck: string = '';
let triger: boolean = false
let interval: NodeJS.Timeout;;
const BIGBALL = 50;

const latterValueEl = document.querySelector<HTMLElement>('[data-box-letter]');
const ballEl = document.querySelector<HTMLElement>('[data-ball]');
const textInfoEl = document.querySelector<HTMLElement>('[data-info]')
const ballBoxEl = document.querySelector<HTMLElement>('[data-box-from-letter]');
const buttonNewGameEl = document.querySelector<HTMLElement>('[data-button-new-game]');
const buttonStopGameEl = document.querySelector<HTMLElement>('[data-button-stop-game]');
const maingameEl = document.querySelector<HTMLElement>('[data-main]');

const newLetter = (str: string): string => {
    let randomLetter = (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();
    return randomLetter
}


const start = (): void => {
    textInfoEl.textContent = `${POINTS} points`
    letterForCheck = newLetter(ALPHABET)
    latterValueEl.textContent = letterForCheck
    interval = setInterval(() => {
        ballBoxEl.style.background = '#AAA'
        letterForCheck = newLetter(ALPHABET)
        latterValueEl.textContent = letterForCheck
        if (triger && POINTS > 0 && POINTS < 200) {
            const increment = INCREMENT_NOT_PRESS_KEY_POINTS()
            POINTS -= increment
            latterValueEl.textContent = `-${increment}`
            ballEl.style.width = `${POINTS + BIGBALL}px`
            ballEl.style.height = `${POINTS + BIGBALL}px`
        } else if (POINTS > 0 && POINTS < 200) {
            triger = true
        }
        textInfoEl.textContent = `${POINTS} points`;
        setTimeout(() => {
            latterValueEl.textContent = letterForCheck
        }, 200)

        if (POINTS >= 200) {
            triger = false
            maingameEl.style.background = '#b6f3b6'
            textInfoEl.textContent = 'You win Game!'
            clearInterval(interval)
        }
        else if (POINTS <= 0) {
            triger = false
            maingameEl.style.background = '#f5adad'
            textInfoEl.textContent = 'You lost Game!'
            clearInterval(interval)
        }

    }, speedTimeGame);
}

document.addEventListener('keyup', (letter) => {
    if (letter.key.toLocaleUpperCase() == letterForCheck && triger && POINTS) {
        let decrement = DECREMENT_POINTS()
        latterValueEl.textContent = `+${decrement}`
        POINTS += decrement
        textInfoEl.textContent = `${POINTS} points`
        ballBoxEl.style.background = '#07ac15'
        triger = false
    }
    else if (triger && POINTS) {
        let increment = INCREMENT_POINTS()
        latterValueEl.textContent = `-${increment}`
        POINTS -= increment
        textInfoEl.textContent = `${POINTS} points`
        ballBoxEl.style.background = '#8f0f0f'
        triger = false
    }
    ballEl.style.width = `${POINTS + BIGBALL}px`
    ballEl.style.height = `${POINTS + BIGBALL}px`
});


buttonNewGameEl.addEventListener('click', () => {
    triger = true
    clearInterval(interval)
    POINTS = 100;
    maingameEl.style.background = '#F8F4C2'
    start()
})

buttonStopGameEl.addEventListener('click', () => {
    clearInterval(interval)
    textInfoEl.textContent = 'You lost Game!'
    triger = false
    maingameEl.style.background = '#f5adad'
})



