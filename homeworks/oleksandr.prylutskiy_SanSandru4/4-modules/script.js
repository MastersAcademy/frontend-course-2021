import { isMonthLong, getMondaysOfMonth, shortestWeekDaysNumber } from './time.js';

const numDate = document.querySelector('[data-take-calendar]');
const getMondays = document.querySelector('[data-get-monday]');
const outMondays = document.querySelector('[data-out-monday]');
const longMonth = document.querySelector('[data-long-month]');
const outLongMonth = document.querySelector('[data-out-long-month]');
const shortWeek = document.querySelector('[data-shortest-week]');
const outShortWeek = document.querySelector('[data-short-week]');

getMondays.addEventListener('click', () => {
    outMondays.textContent = getMondaysOfMonth(numDate);
});

longMonth.addEventListener('click', () => {
    outLongMonth.textContent = isMonthLong(numDate);
});

shortWeek.addEventListener('click', () => {
    outShortWeek.textContent = shortestWeekDaysNumber(numDate);
});
