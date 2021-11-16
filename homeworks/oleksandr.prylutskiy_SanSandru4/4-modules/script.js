import {
    isMonthLong, getMondaysOfMonth, shortestWeekDaysNumber, fullWeeksNumberInMonth,
} from './time.js';

const numDate = document.querySelector('[data-take-calendar]');
const getMondaysEl = document.querySelector('[data-get-monday]');
const outMondaysEl = document.querySelector('[data-out-monday]');
const longMonthEl = document.querySelector('[data-long-month]');
const outLongMonthEl = document.querySelector('[data-out-long-month]');
const shortWeekEl = document.querySelector('[data-shortest-week]');
const outShortWeekEl = document.querySelector('[data-short-week]');
const fullWeeksEl = document.querySelector('[data-full-weeks]');
const outFullWeeksEl = document.querySelector('[data-out-full-weeks]');

getMondaysEl.addEventListener('click', () => {
    outMondaysEl.textContent = getMondaysOfMonth(numDate);
});

longMonthEl.addEventListener('click', () => {
    outLongMonthEl.textContent = isMonthLong(numDate);
});

shortWeekEl.addEventListener('click', () => {
    outShortWeekEl.textContent = shortestWeekDaysNumber(numDate);
});

fullWeeksEl.addEventListener('click', () => {
    outFullWeeksEl.textContent = fullWeeksNumberInMonth(numDate);
});
