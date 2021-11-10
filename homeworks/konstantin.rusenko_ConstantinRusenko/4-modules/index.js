import * as time from './time.js';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');

buttonEl.addEventListener('click', () => {
    console.log(time.isMonthLong(inputEl.value));
    console.log(time.getMondaysOfMonth(inputEl.value));
    console.log(time.fullWeeksNumberInMonth(inputEl.value));
    console.log(time.shortestWeekDaysNumber(inputEl.value));
});
