import * as module from './time.js';

const inputDateEl = document.querySelector('[data-input-date]');
const buttonMondaysEl = document.querySelector('[data-button-mondays]');
const outMondaysEl = document.querySelector('[data-out-mondays]');
const buttonMonthLongEl = document.querySelector('[data-button-month-long]');
const outMonthLongEl = document.querySelector('[data-out-month-long]');
const buttonShortWeekEl = document.querySelector('[data-button-short-week]');
const outShortWeekEl = document.querySelector('[data-out-short-week]');
const buttonFullWeeksEl = document.querySelector('[data-button-full-weeks]');
const outFullWeeksEl = document.querySelector('[data-out-full-weeks]');

inputDateEl.addEventListener('change', () => {
    outMondaysEl.innerText = '';
    outMonthLongEl.innerText = '';
    outShortWeekEl.innerText = '';
    outFullWeeksEl.innerText = '';
    const inputDate = new Date(inputDateEl.value);
    buttonMondaysEl.addEventListener('click', () => {
        outMondaysEl.innerText = module.getMondayOfMonth(inputDate);
    });
    buttonMonthLongEl.addEventListener('click', () => {
        outMonthLongEl.innerText = module.isMonthLong(inputDate);
    });
    buttonShortWeekEl.addEventListener('click', () => {
        outShortWeekEl.innerText = module.shortTestWeekDaysNumber(inputDate);
    });
    buttonFullWeeksEl.addEventListener('click', () => {
        outFullWeeksEl.innerText = module.fullWeeksNumberInMonth(inputDate);
    });
});
