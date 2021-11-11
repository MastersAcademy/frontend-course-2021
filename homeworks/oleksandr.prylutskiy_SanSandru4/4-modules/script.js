import {
    isMonthLong, getMondaysOfMonth, shortestWeekDaysNumber, fullWeeksNumberInMonth,
} from './time.js';

const numDate = document.querySelector('[data-take-calendar]');
const getMondays = document.querySelector('[data-get-monday]');
const outMondays = document.querySelector('[data-out-monday]');
const longMonth = document.querySelector('[data-long-month]');
const outLongMonth = document.querySelector('[data-out-long-month]');
const shortWeek = document.querySelector('[data-shortest-week]');
const outShortWeek = document.querySelector('[data-short-week]');
const fullWeeks = document.querySelector('[data-full-weeks]');
const outFullWeeks = document.querySelector('[data-out-full-weeks]');

getMondays.addEventListener('click', () => {
    outMondays.textContent = getMondaysOfMonth(numDate);
});

longMonth.addEventListener('click', () => {
    outLongMonth.textContent = isMonthLong(numDate);
});

shortWeek.addEventListener('click', () => {
    outShortWeek.textContent = shortestWeekDaysNumber(numDate);
});

fullWeeks.addEventListener('click', () => {
    outFullWeeks.textContent = fullWeeksNumberInMonth(numDate);
});
