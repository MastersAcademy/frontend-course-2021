import {
    getMondaysOfMonth, isMonthLong, shortestWeekDaysNumber, fullWeeksNumberInMonth,
} from './time.js';

const getMondaysButton = document.querySelector('[data-get-mondays__button]');
const monthLongButtonEl = document.querySelector('[data-month-long__button]');
const shortestWeekDaysButtonEl = document.querySelector('[data-shortest-week-days__button]');
const fullWeeksButtonEl = document.querySelector('[data-full-weeks__button]');

getMondaysButton.addEventListener('click', () => {
    getMondaysOfMonth();
});
monthLongButtonEl.addEventListener('click', () => {
    isMonthLong();
});
shortestWeekDaysButtonEl.addEventListener('click', () => {
    shortestWeekDaysNumber();
});
fullWeeksButtonEl.addEventListener('click', () => {
    fullWeeksNumberInMonth();
});
