import * as module from './time.js';

const inputDateEl = document.querySelector('[data-input-date]');
const buttonMondays = document.querySelector('[data-button-mondays]');
const outMondays = document.querySelector('[data-out-fridays]');
const buttonMonthLong = document.querySelector('[data-button-month-long]');
const outMonthLong = document.querySelector('[data-out-month-long]');
const buttonShortWeek = document.querySelector('[data-button-short-week]');
const outShortWeek = document.querySelector('[data-out-short-week]');
const buttonFullWeeks = document.querySelector('[data-button-full-weeks]');
const outFullWeeks = document.querySelector('[data-out-full-weeks]');

inputDateEl.addEventListener('change', () => {
    outMondays.innerText = '';
    outMonthLong.innerText = '';
    outShortWeek.innerText = '';
    outFullWeeks.innerText = '';
    const inputDate = new Date(inputDateEl.value);
    buttonMondays.addEventListener('click', () => {
        outMondays.innerText = module.getMondayOfMonth(inputDate);
    });
    buttonMonthLong.addEventListener('click', () => {
        outMonthLong.innerText = module.isMonthLong(inputDate);
    });
    buttonShortWeek.addEventListener('click', () => {
        outShortWeek.innerText = module.shortTestWeekDaysNumber(inputDate);
    });
    buttonFullWeeks.addEventListener('click', () => {
        outFullWeeks.innerText = module.fullWeeksNumberInMonth(inputDate);
    });
});
