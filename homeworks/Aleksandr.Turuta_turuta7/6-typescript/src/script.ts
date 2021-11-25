import * as _ from 'lodash';
import { fromEvent } from 'rxjs';

const ALPHABET: string = "abcdefghijklmnopqrstuvwxyz";

const getRandomArbitrary = (min: number, max: number): number => Math.random() * (max - min) + min

let INCREMENT_POINTS: number = Math.round(getRandomArbitrary(10, 15));
let DECREMENT_POINTS: number = Math.round(getRandomArbitrary(20, 25));

let speedTimeGame: number = 2000;
let POINTS: number = 100;
let letterForCheck: string = '';
let triger: boolean = true
const BIGBALL = 50;

const latterValueEl = document.querySelector<HTMLElement>('[data-box-letter]');
const ballEl = document.querySelector<HTMLElement>('[data-ball]');
const textInfoEl = document.querySelector<HTMLElement>('[data-info]')
const ballBoxEl = document.querySelector<HTMLElement>('[data-box-from-letter]');


const newLetter = (str: string): string => {
    let randomLetter = (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();
    return randomLetter
}

const start = (): void => {
    const interval = setInterval(() => {
        textInfoEl.textContent = ''
        ballBoxEl.style.background = '#AAA'
        if (POINTS >= 200) {
            clearInterval(interval)
            textInfoEl.textContent = 'win Game'

        }
        else if (POINTS <= 0) {
            clearInterval(interval)
            textInfoEl.textContent = 'loser Game'

        }

        letterForCheck = newLetter(ALPHABET)
        latterValueEl.textContent = letterForCheck

        if (triger) {
            POINTS -= INCREMENT_POINTS
            ballEl.style.width = `${POINTS+BIGBALL}px`
            ballEl.style.height = `${POINTS+BIGBALL}px`
        }
        triger = true
    }, speedTimeGame);
}

fromEvent<KeyboardEvent>(document, 'keydown')
    .subscribe((letter) => {
        if (letter.key.toLocaleUpperCase() == letterForCheck && triger) {
            let decrement = DECREMENT_POINTS
            textInfoEl.textContent = `+${decrement}points`
            POINTS += DECREMENT_POINTS
            ballBoxEl.style.background = '#07ac15'
            triger = false
        }
        else if (triger) {
            let increment = DECREMENT_POINTS
            textInfoEl.textContent = `-${increment}points`
            POINTS -= INCREMENT_POINTS
            ballBoxEl.style.background = '#8f0f0f'
            triger = false
        }
        ballEl.style.width = `${POINTS+BIGBALL}px`
        ballEl.style.height = `${POINTS+BIGBALL}px`
    });

start()

