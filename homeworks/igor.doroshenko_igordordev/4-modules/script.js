/* jslint es6:true */
/* eslint-env es6 */

import {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours,
} from './time.js';

const dateInputEl = document.querySelector('[month-information__input]');
const buttonFridaysEl = document.querySelector('[months-fridays-button]');
const resultFridaysEl = document.querySelector('[months-fridays-result]');
const buttonMonthLongEl = document.querySelector('[month-long-button]');
const resultMonthLongEl = document.querySelector('[month-long-result]');
const buttonShortestWeekEl = document.querySelector('[shortest-week-button]');
const resultShortestWeekEl = document.querySelector('[shortest-week-result]');
const buttonFullWeeksEl = document.querySelector('[full-weeks-button]');
const resultFullWeeksEl = document.querySelector('[full-weeks-result]');
const countryListEl = document.querySelector('[country-list]');
const currentTimeEl = document.querySelector('[current-time]');
const worldTimeEl = document.querySelector('[world-time__result]');
const readyTime = new Date(Date());

currentTimeEl.textContent = subtractHours(readyTime, 0);
worldTimeEl.textContent = subtractHours(readyTime, 0);

buttonFridaysEl.addEventListener('click', () => {
    resultFridaysEl.textContent = getFridaysOfMonth(dateInputEl);
});

buttonMonthLongEl.addEventListener('click', () => {
    resultMonthLongEl.textContent = isMonthLong(dateInputEl);
});

buttonShortestWeekEl.addEventListener('click', () => {
    resultShortestWeekEl.textContent = shortestWeekDaysNumber(dateInputEl);
});

buttonFullWeeksEl.addEventListener('click', () => {
    resultFullWeeksEl.textContent = fullWeeksNumberInMonth(dateInputEl);
});

setInterval(function liveClock() {
    const currentDate = new Date(Date());
    const currentHours = (`0${currentDate.getHours()}`);
    const currentMinutes = (`0${currentDate.getMinutes()}`);

    currentTimeEl.textContent = `${currentHours.substr(-2)}:${currentMinutes.substr(-2)}`;

    countryListEl.addEventListener('change', function () {
        if (countryListEl.value === 'current') {
            worldTimeEl.textContent = subtractHours(currentDate, 0);
        } else if (countryListEl.value === 'tokyo') {
            worldTimeEl.textContent = addHours(currentDate, 7);
        } else if (countryListEl.value === 'london') {
            worldTimeEl.textContent = subtractHours(currentDate, 2);
        } else if (countryListEl.value === 'new-york') {
            worldTimeEl.textContent = subtractHours(currentDate, 7);
        }
    });
}, 1000);
