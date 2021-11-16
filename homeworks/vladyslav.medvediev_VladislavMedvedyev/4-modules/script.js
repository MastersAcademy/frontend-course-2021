import {
    getMondaysOfMonth, isMonthLong, shortestWeekDaysNumber, fullWeeksNumberInMonth,
} from './time.js';

const getMondaysButton = document.querySelector('[data-get-mondays-button]');
const monthLongButtonEl = document.querySelector('[data-month-long-button]');
const shortestWeekDaysButtonEl = document.querySelector('[data-shortest-week-days-button]');
const fullWeeksButtonEl = document.querySelector('[data-full-weeks-button]');

getMondaysButton.addEventListener('click', getMondaysOfMonth);

monthLongButtonEl.addEventListener('click', isMonthLong);

shortestWeekDaysButtonEl.addEventListener('click', shortestWeekDaysNumber);

fullWeeksButtonEl.addEventListener('click', fullWeeksNumberInMonth);
