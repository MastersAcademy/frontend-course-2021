import {
    getDaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';
import { addHours, subtractHours } from './asterisk.js';

const userMonthEl = document.querySelector('[data-userMonth]');
const daySelectorEl = document.querySelector('[data-daySelector]');
const dayCountBtnEl = document.querySelector('[data-dayCount]');
const citySelectorEl = document.querySelector('[data-citySelector]');
const time = document.querySelector('[data-time-state]');

const DAYS = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];

daySelectorEl.addEventListener('change', () => {
    dayCountBtnEl.textContent = `Get month ${DAYS[daySelectorEl.value]}`;
});

dayCountBtnEl.addEventListener('click', () => {
    if (userMonthEl.value) {
        document.querySelector('[data-dayCount-state]')
            .textContent = getDaysOfMonth(userMonthEl.value, Number(daySelectorEl.value));
    }
});

document.querySelector('[data-monthLength]').addEventListener('click', () => {
    if (userMonthEl.value) {
        document.querySelector('[data-monthLength-state]')
            .textContent = isMonthLong(userMonthEl.value);
    }
});

document.querySelector('[data-shortestWeek]').addEventListener('click', () => {
    if (userMonthEl.value) {
        document.querySelector('[data-shortestWeek-state]')
            .textContent = shortestWeekDaysNumber(userMonthEl.value);
    }
});

document.querySelector('[data-fullWeeks]').addEventListener('click', () => {
    if (userMonthEl.value) {
        document.querySelector('[data-fullWeeks-state]')
            .textContent = fullWeeksNumberInMonth(userMonthEl.value);
    }
});

setInterval(() => {
    if (citySelectorEl.value >= 0) {
        time.textContent = addHours(new Date(), Number(citySelectorEl.value));
    } else {
        time.textContent = subtractHours(new Date(), Math.abs(Number(citySelectorEl.value)));
    }
}, 1000);
