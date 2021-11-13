import { getMondaysOfMonth } from './dateModules/getMondaysOfMonth.js';
import { isMonthLong } from './dateModules/isMonthLong.js';
import { shortestWeekDaysNumber } from './dateModules/shortestWeekDaysNumber.js';
import { fullWeeksNumberInMonth } from './dateModules/fullWeeksNumberInMonth.js';

const inputDateEl = document.querySelector('[data-input-date]');

const mondaysBtnEl = document.querySelector('[data-mondays]');
const isLongBtnEl = document.querySelector('[data-is-long]');
const shortestWeekBtnEl = document.querySelector('[data-shortest-week]');
const fullWeeksBtnEl = document.querySelector('[data-full-weeks]');

const mondaysBtnResultEl = document.querySelector('[data-mondays-result]');
const isLongBtnResultEl = document.querySelector('[data-is-long-result]');
const shortestWeekBtnResultEl = document.querySelector('[data-shortest-week-result]');
const fullWeeksBtnResultEl = document.querySelector('[data-full-weeks-result]');

inputDateEl.addEventListener('input', () => {
    mondaysBtnResultEl.innerText = '';
    mondaysBtnResultEl.style.display = 'none';
    isLongBtnResultEl.innerText = '';
    isLongBtnResultEl.style.display = 'none';
    shortestWeekBtnResultEl.innerText = '';
    shortestWeekBtnResultEl.style.display = 'none';
    fullWeeksBtnResultEl.innerText = '';
    fullWeeksBtnResultEl.style.display = 'none';
});

mondaysBtnEl.addEventListener('click', () => {
    const result = getMondaysOfMonth(inputDateEl.value);
    mondaysBtnResultEl.innerText = result;
    mondaysBtnResultEl.style.display = 'block';
});
isLongBtnEl.addEventListener('click', () => {
    const result = isMonthLong(inputDateEl.value);
    isLongBtnResultEl.innerText = result;
    isLongBtnResultEl.style.display = 'block';
});
shortestWeekBtnEl.addEventListener('click', () => {
    const result = shortestWeekDaysNumber(inputDateEl.value);
    shortestWeekBtnResultEl.innerText = result;
    shortestWeekBtnResultEl.style.display = 'block';
});
fullWeeksBtnEl.addEventListener('click', () => {
    const result = fullWeeksNumberInMonth(inputDateEl.value);
    fullWeeksBtnResultEl.innerText = result;
    fullWeeksBtnResultEl.style.display = 'block';
});
