import { isMonthLong, getMondaysOfMonth } from './time.js';

const numDate = document.querySelector('[data-take-calendar]');
const getMondays = document.querySelector('[data-get-monday]');
const outMondays = document.querySelector('[data-out-monday]');
const longMonth = document.querySelector('[data-long-month]');
const outLongMonth = document.querySelector('[data-out-long-month]');

getMondays.addEventListener('click', () => {
    outMondays.textContent = getMondaysOfMonth(numDate);
});

longMonth.addEventListener('click', () => {
    outLongMonth.textContent = isMonthLong(numDate);
});
