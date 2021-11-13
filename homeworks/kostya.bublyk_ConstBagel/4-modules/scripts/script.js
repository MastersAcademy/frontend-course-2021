import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const inputDateField = document.querySelector('[ data-role="input-date-field"]');
const getFridaysButton = document.querySelector('[ data-role="get-fridays-button"]');
const isMonthLongButton = document.querySelector('[ data-role="is-month-long-button"]');
const daysShortestWeekButton = document.querySelector('[data-role="days-shortest-week-button"]');
const fullWeekInMonthButton = document.querySelector('[data-role="full-week-month-button"]');
let date = '';

/**
 * make all buttons disabled by default (before picking date)
 */
document.querySelectorAll("button").forEach((button) => {
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
inputDateField.addEventListener("change", (event) => {
    date = event.target.value;
    document.querySelectorAll("button").forEach((button) => {
        button.disabled = false;
    });
});

getFridaysButton.addEventListener("click", () => {
    displayResult('[data-role="get-fridays-output"]', `[${getFridaysOfMonth(date)}]`);
});

isMonthLongButton.addEventListener("click", () => {
    displayResult('[data-role="is-month-long-output"]', isMonthLong(date));
});

daysShortestWeekButton.addEventListener("click", () => {
    displayResult('[data-role="days-shortest-week-output"]', shortestWeekDaysNumber(date));
});

fullWeekInMonthButton.addEventListener("click", () => {
    displayResult('[data-role="full-week-month-output"]', fullWeeksNumberInMonth(date));
});
