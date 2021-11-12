import {
    getMondaysOfMonth, isMonthLong, fullWeeksNumberInMonth, shortestWeekDaysNumber,
} from './time.js';

const mondaysBtnEl = document.querySelector('[data-mondays]');
mondaysBtnEl.addEventListener('click', () => {
    const userDate = new Date(document.querySelector('[data-input]').value);
    mondaysBtnEl.after(getMondaysOfMonth(userDate));
});

const longMonthEl = document.querySelector('[data-month]');
longMonthEl.addEventListener('click', () => {
    const userDate = new Date(document.querySelector('[data-input]').value);
    longMonthEl.after(isMonthLong(userDate));
});

const shortWeekEl = document.querySelector('[data-short-week]');
shortWeekEl.addEventListener('click', () => {
    const userDate = new Date(document.querySelector('[data-input]').value);
    shortWeekEl.after(shortestWeekDaysNumber(userDate));
});

const fullWeekEl = document.querySelector('[data-full-weeks]');
fullWeekEl.addEventListener('click', () => {
    const userDate = new Date(document.querySelector('[data-input]').value);
    fullWeekEl.after(fullWeeksNumberInMonth(userDate));
});
