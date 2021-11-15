import * as time from './time.js';

const mondaysButtonEl = document.querySelector('[data-get-mondays]');
const longMonthButtonEl = document.querySelector('[data-month-length]');
const shortestWeekButtonEl = document.querySelector('[data-shortest-week]');
const fullWeekButtonEl = document.querySelector('[data-full-weeks]');
const inputEl = document.querySelector('input');
const selectEl = document.querySelector('[data-select]');

longMonthButtonEl.addEventListener('click', () => {
    document.querySelector('[data-length]').innerHTML = `${time.isMonthLong(inputEl.value)}`;
});

mondaysButtonEl.addEventListener('click', () => {
    document.querySelector('[data-monday]').innerHTML = `${(time.getMondaysOfMonth(inputEl.value))}`;
});

shortestWeekButtonEl.addEventListener('click', () => {
    document.querySelector('[data-shortest]').innerHTML = `${time.shortestWeekDaysNumber(inputEl.value)}`;
});

fullWeekButtonEl.addEventListener('click', () => {
    document.querySelector('[data-full]').innerHTML = `${time.fullWeeksNumberInMonth(inputEl.value)}`;
});

document.addEventListener('DOMContentLoaded', () => time.digitalClock(selectEl.value));

document.addEventListener('change', () => setInterval(() => {
    time.digitalClock(selectEl.value);
}, 1000));
