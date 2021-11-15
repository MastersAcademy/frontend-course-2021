import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const inputDataEl = document.querySelector('[data-input-data]');
const mondaysOfMonthEl = document.querySelector('[data-get-mondays]');
const outputMondaysOfMonthEl = document.querySelector('[data-output-mondays]');
const longMonthEl = document.querySelector('[data-long-month]');
const outputLongMonthEl = document.querySelector('[data-output-long-month]');
const shortestWeekEl = document.querySelector('[data-shortest-week]');
const outputShortestWeekEl = document.querySelector('[data-output-shortest-week]');
const fullWeeksEl = document.querySelector('[data-full-weeks]');
const outputFullWeeksEl = document.querySelector('[data-output-full-weeks]');

mondaysOfMonthEl.addEventListener('click', () => {
    outputMondaysOfMonthEl.innerHTML = getMondaysOfMonth(inputDataEl.value);
});
longMonthEl.addEventListener('click', () => {
    outputLongMonthEl.innerHTML = isMonthLong(inputDataEl.value);
});
shortestWeekEl.addEventListener('click', () => {
    outputShortestWeekEl.innerHTML = shortestWeekDaysNumber(inputDataEl.value);
});
fullWeeksEl.addEventListener('click', () => {
    outputFullWeeksEl.innerHTML = fullWeeksNumberInMonth(inputDataEl.value);
});
