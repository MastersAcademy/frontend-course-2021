import {
    getDaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';
import { cityTime } from './asterisk.js';

const userMonthEl = document.querySelector('[data-userMonth]');
const daySelectorEl = document.querySelector('[data-daySelector]');
const citySelectorEl = document.querySelector('[data-citySelector]');

daySelectorEl.addEventListener('change', () => {
    console.log(daySelectorEl.value);
    const days = ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'];
    document.querySelector('[data-dayCount]')
        .textContent = `Get month ${days[daySelectorEl.value]}`;
});

document.querySelector('[data-dayCount]').addEventListener('click', () => {
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

citySelectorEl.addEventListener('change', () => {
    if (citySelectorEl.value === 'Local') {
        cityTime();
    } else {
        cityTime(citySelectorEl.value);
    }
});
