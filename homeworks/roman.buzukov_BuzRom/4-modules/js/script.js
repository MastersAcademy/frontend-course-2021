import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';
import { cityTime } from './asterix.js';

const userMonthEl = document.querySelector('[data-userMonth]');
const citySelectorEl = document.querySelector('[data-citySelector]');

document.querySelector('[data-dayCount]').addEventListener('click', () => {
    if (userMonthEl.value) { document.querySelector('[data-dayCount-state]').textContent = getMondaysOfMonth(userMonthEl.value); }
});

document.querySelector('[data-monthLength]').addEventListener('click', () => {
    if (userMonthEl.value) { document.querySelector('[data-monthLength-state]').textContent = isMonthLong(userMonthEl.value); }
});

document.querySelector('[data-shortestWeek]').addEventListener('click', () => {
    if (userMonthEl.value) { document.querySelector('[data-shortestWeek-state]').textContent = shortestWeekDaysNumber(userMonthEl.value); }
});

document.querySelector('[data-fullWeeks]').addEventListener('click', () => {
    if (userMonthEl.value) { document.querySelector('[data-fullWeeks-state]').textContent = fullWeeksNumberInMonth(userMonthEl.value); }
});

citySelectorEl.addEventListener('change', () => {
    if (citySelectorEl.value === 'Local') {
        cityTime();
    } else {
        cityTime(citySelectorEl.value);
    }
});
