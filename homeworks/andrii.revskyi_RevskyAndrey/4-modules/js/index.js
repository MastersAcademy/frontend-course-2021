import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    showTime,
} from './time.js';

const dateInputEl = document.querySelector('[data-input]');

const buttonMondayEl = document.querySelector('[data-btn-monday]');
const textMondayEl = document.querySelector('[data-text-monday]');

const buttonLongMonthEl = document.querySelector('[data-btn-month]');
const textLongMonthEl = document.querySelector('[data-text-month]');

const buttonShortWeekEl = document.querySelector('[data-btn-week]');
const textShortWeekEl = document.querySelector('[ data-text-week]');

const buttonFullWeekEl = document.querySelector('[data-btn-full]');
const textFullWeekEl = document.querySelector('[data-text-full]');

const timeEl = document.querySelector('[data-time]');
const selectTimezoneEl = document.querySelector('[data-select-timezone]');

let timezone = '';

buttonMondayEl.addEventListener('click', () => {
    const value = getMondaysOfMonth(dateInputEl.value);
    textMondayEl.textContent = `${value}`;
});

buttonLongMonthEl.addEventListener('click', () => {
    const value = isMonthLong(dateInputEl.value);
    textLongMonthEl.textContent = `${value}`;
});

buttonShortWeekEl.addEventListener('click', () => {
    const value = shortestWeekDaysNumber(dateInputEl.value);
    textShortWeekEl.textContent = `${value}`;
});

buttonFullWeekEl.addEventListener('click', () => {
    const value = fullWeeksNumberInMonth(dateInputEl.value);
    textFullWeekEl.textContent = `${value}`;
});

selectTimezoneEl.addEventListener('change', () => {
    timezone = selectTimezoneEl.value;
});

setInterval(() => {
    timeEl.textContent = showTime(timezone);
}, 1000);
