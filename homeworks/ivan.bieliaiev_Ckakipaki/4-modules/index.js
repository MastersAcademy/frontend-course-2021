import { getMondaysOfMonth } from './dateModules/getMondaysOfMonth.js';
import { isMonthLong } from './dateModules/isMonthLong.js';
import { shortestWeekDaysNumber } from './dateModules/shortestWeekDaysNumber.js';
import { fullWeeksNumberInMonth } from './dateModules/fullWeeksNumberInMonth.js';

const inputDate = document.querySelector('[data-input-date]');
const inputDateValue = inputDate.value;

const mondaysBtn = document.querySelector('[data-mondays]');
const isLongBtn = document.querySelector('[data-is-long]');
const shortestWeekBtn = document.querySelector('[data-shortest-week]');
const fullWeeksBtn = document.querySelector('[data-full-weeks]');

const mondaysBtnResult = document.querySelector('[data-mondays-result]');
const isLongBtnResult = document.querySelector('[data-is-long-result]');
const shortestWeekBtnResult = document.querySelector('[data-shortest-week-result]');
const fullWeeksBtnResult = document.querySelector('[data-full-weeks-result]');

mondaysBtn.addEventListener('click', () => {
    const result = getMondaysOfMonth(inputDateValue).join();
    mondaysBtnResult.innerText = result;
    mondaysBtnResult.style.display = 'block';
});
isLongBtn.addEventListener('click', () => {
    const result = isMonthLong(inputDateValue);
    isLongBtnResult.innerText = result;
    isLongBtnResult.style.display = 'block';
});
shortestWeekBtn.addEventListener('click', () => {
    const result = shortestWeekDaysNumber(inputDateValue);
    shortestWeekBtnResult.innerText = result;
    shortestWeekBtnResult.style.display = 'block';
});
fullWeeksBtn.addEventListener('click', () => {
    const result = fullWeeksNumberInMonth(inputDateValue);
    fullWeeksBtnResult.innerText = result;
    fullWeeksBtnResult.style.display = 'block';
});
