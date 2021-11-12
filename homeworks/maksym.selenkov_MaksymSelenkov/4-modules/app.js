import {
    getMondaysOfMonth, isMonthLong, fullWeeksNumberInMonth, shortestWeekDaysNumber,
} from './time.js';

function userDate() {
    return new Date(document.querySelector('[data-input]').value);
}

const mondaysBtnEl = document.querySelector('[data-mondays]');
mondaysBtnEl.addEventListener('click', () => {
    document.querySelector('[data-result-mondays]').textContent = getMondaysOfMonth(userDate());
});

const longMonthEl = document.querySelector('[data-month]');
longMonthEl.addEventListener('click', () => {
    document.querySelector('[data-result-month]').textContent = isMonthLong(userDate());
});

const shortWeekEl = document.querySelector('[data-short-week]');
shortWeekEl.addEventListener('click', () => {
    document.querySelector('[data-result-short-week]').textContent = shortestWeekDaysNumber(userDate());
});

const fullWeekEl = document.querySelector('[data-full-weeks]');
fullWeekEl.addEventListener('click', () => {
    document.querySelector('[data-result-full-weeks]').textContent = fullWeeksNumberInMonth(userDate());
});
