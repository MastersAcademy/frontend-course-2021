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
    let randomLetter = (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();
    return randomLetter
}

const start = (): void => {
    textInfoEl.textContent = `${points} points`
    letterForCheck = newLetter(ALPHABET)
    latterValueEl.textContent = letterForCheck

    interval = setInterval(() => {
        ballBoxEl.style.background = '#AAA'
        letterForCheck = newLetter(ALPHABET)
        latterValueEl.textContent = letterForCheck
        if (!keystrokeLock && points > 0 && points < 200) {
            const decrement = decrement_not_press_key_points()
            points -= decrement
            latterValueEl.textContent = `-${decrement}`
            ballEl.style.width = `${points + BIGBALL}px`
            ballEl.style.height = `${points + BIGBALL}px`
        } else if (points > 0 && points < 200) {
            keystrokeLock = false
        }
        textInfoEl.textContent = `${points} points`;
        setTimeout(() => {
            latterValueEl.textContent = letterForCheck
        }, 200)

        if (points >= 200) {
            keystrokeLock = true
            maingameEl.style.background = '#b6f3b6'
            textInfoEl.textContent = 'You win Game!'
            clearInterval(interval)
        }
        else if (points <= 0) {
            keystrokeLock = true
            maingameEl.style.background = '#f5adad'
            textInfoEl.textContent = 'You lost Game!'
            clearInterval(interval)
        }
    }, speedTimeGame);
}

document.addEventListener('keyup', (letter) => {
    if (letter.key.toLocaleUpperCase() == letterForCheck && !keystrokeLock && points) {
        let increment = increment_points()
        latterValueEl.textContent = `+${increment}`
        points += increment
        textInfoEl.textContent = `${points} points`
        ballBoxEl.style.background = '#07ac15'
        keystrokeLock = true
    }
    else if (!keystrokeLock && points) {
        let decrement = decrement_points()
        latterValueEl.textContent = `-${decrement}`
        points -= decrement
        textInfoEl.textContent = `${points} points`
        ballBoxEl.style.background = '#8f0f0f'
        keystrokeLock = true
    }
    ballEl.style.width = `${points + BIGBALL}px`
    ballEl.style.height = `${points + BIGBALL}px`
});


buttonNewGameEl.addEventListener('click', () => {
    keystrokeLock = false
    clearInterval(interval)
    points = 100;
    maingameEl.style.background = '#F8F4C2'
    start()
})

buttonStopGameEl.addEventListener('click', () => {
    clearInterval(interval)
    textInfoEl.textContent = 'You lost Game!'
    keystrokeLock = true
    maingameEl.style.background = '#f5adad'
})



