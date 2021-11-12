import * as time from './time.js';

const mondaysButton = document.querySelector('[data-get-mondays]');
const longMonthButton = document.querySelector('[data-month-length]');
const shortestWeekButton = document.querySelector('[data-shortest-week]');
const fullWeekButton = document.querySelector('[data-full-weeks]');
const inputEl = document.querySelector('input');
const selectEl = document.querySelector('[data-select]');

longMonthButton.addEventListener('click', () => {
    document.querySelector('[data-length]').innerHTML = `${time.isMonthLong(inputEl.value)}`;
});

mondaysButton.addEventListener('click', () => {
    document.querySelector('[data-monday]').innerHTML = `${(time.getMondaysOfMonth(inputEl.value))}`;
});

shortestWeekButton.addEventListener('click', () => {
    document.querySelector('[data-shortest]').innerHTML = `${time.shortestWeekDaysNumber(inputEl.value)}`;
});

fullWeekButton.addEventListener('click', () => {
    document.querySelector('[data-full]').innerHTML = `${time.fullWeeksNumberInMonth(inputEl.value)}`;
});

document.addEventListener('DOMContentLoaded', () => time.digitalClock(selectEl.value));

document.addEventListener('change', () => setInterval(() => {
    time.digitalClock(selectEl.value);
}, 1000));
