import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const dateInputEl = document.querySelector('[data-entry-date]');

const mondaysBtnEl = document.querySelector('[data-btn-mondays]');
const mondayOutputEl = document.querySelector('[data-output-mondays]');

const longMonthBtnEl = document.querySelector('[data-btn-month-question]');
const longMonthOutputEl = document.querySelector('[data-output-month-question]');

const shortestBtnEl = document.querySelector('[data-btn-shortest-question]');
const shortestOutputEl = document.querySelector('[data-output-shortest-question ]');

const fullBtnEl = document.querySelector('[data-btn-full-question]');
const fullOutputEl = document.querySelector('[data-output-full-question]');

dateInputEl.addEventListener('change', () => {
    const label = document.querySelectorAll('.times__date');
    label.forEach((item) => {
        item.textContent = '';
    });
});

mondaysBtnEl.addEventListener('click', () => {
    mondayOutputEl.textContent = getMondaysOfMonth(new Date(dateInputEl.value));
});
longMonthBtnEl.addEventListener('click', () => {
    longMonthOutputEl.textContent = isMonthLong(new Date(dateInputEl.value));
});
shortestBtnEl.addEventListener('click', () => {
    shortestOutputEl.textContent = shortestWeekDaysNumber(new Date(dateInputEl.value));
});
fullBtnEl.addEventListener('click', () => {
    fullOutputEl.textContent = fullWeeksNumberInMonth(new Date(dateInputEl.value));
});
