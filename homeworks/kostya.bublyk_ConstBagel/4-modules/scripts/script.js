import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const inputDateFieldEl = document.querySelector('[ data-role="input-date-field"]');
const getFridaysButtonEl = document.querySelector('[ data-role="get-fridays-button"]');
const isMonthLongButtonEl = document.querySelector('[ data-role="is-month-long-button"]');
const daysShortestWeekButtonEl = document.querySelector('[data-role="days-shortest-week-button"]');
const fullWeekInMonthButtonEl = document.querySelector('[data-role="full-week-month-button"]');
let date = '';

/**
 * make all buttons disabled by default (before picking date)
 */
document.querySelectorAll('button').forEach((button) => {
    button.disabled = true;
});

/**
 * function for displaying results
 */
function displayResult(selector, result) {
    document.querySelector(selector).textContent = result;
}

/**
 * Event listeners:
 */
inputDateFieldEl.addEventListener('change', (event) => {
    date = event.target.value;
    document.querySelectorAll('button').forEach((button) => {
        button.disabled = false;
    });
});

getFridaysButtonEl.addEventListener('click', () => {
    displayResult('[data-role="get-fridays-output"]', `[${getFridaysOfMonth(date)}]`);
});

isMonthLongButtonEl.addEventListener('click', () => {
    displayResult('[data-role="is-month-long-output"]', isMonthLong(date));
});

daysShortestWeekButtonEl.addEventListener('click', () => {
    displayResult('[data-role="days-shortest-week-output"]', shortestWeekDaysNumber(date));
});

fullWeekInMonthButtonEl.addEventListener('click', () => {
    displayResult('[data-role="full-week-month-output"]', fullWeeksNumberInMonth(date));
});
