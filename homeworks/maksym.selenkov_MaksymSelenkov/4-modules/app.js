import {
    getMondaysOfMonth, isMonthLong, fullWeeksNumberInMonth, shortestWeekDaysNumber,
} from './time.js';

const userDate = new Date(document.querySelector('[data-input]').value);

const mondaysBtnEl = document.querySelector('[data-mondays]');
mondaysBtnEl.addEventListener('click', () => {
    mondaysBtnEl.after(getMondaysOfMonth(userDate));
});

const longMonthEl = document.querySelector('[data-month]');
longMonthEl.addEventListener('click', () => {
    longMonthEl.after(isMonthLong(userDate));
});

const fullWeekEl = document.querySelector('[data-short-week]');
fullWeekEl.addEventListener('click', () => {
    fullWeeksNumberInMonth(userDate);
});

const shortWeekEl = document.querySelector('[data-full-weeks]');
shortWeekEl.addEventListener('click', () => {
    shortestWeekDaysNumber(userDate);
});
