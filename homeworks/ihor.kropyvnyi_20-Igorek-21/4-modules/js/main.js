import {
    getMondaysOfMonth, isMonthLong, shortestWeekDaysNumber, fullWeeksNumberInMonth,
} from './script.js';

document.querySelector('[data-button-get-mondays]')
    .addEventListener('click', () => {
        const newDate = new Date(document.querySelector('[data-input-date]').value);
        document.querySelector('[data-info-get-mondays]').innerText = getMondaysOfMonth(newDate);
    });

document.querySelector('[data-button-month-long]')
    .addEventListener('click', () => {
        const newDate = new Date(document.querySelector('[data-input-date]').value);
        document.querySelector('[data-info-month-long]').innerText = isMonthLong(newDate);
    });

document.querySelector('[data-button-shortest-week]')
    .addEventListener('click', () => {
        const newDate = new Date(document.querySelector('[data-input-date]').value);
        document.querySelector('[data-info-shortest-week]').innerText = shortestWeekDaysNumber(newDate);
    });

document.querySelector('[data-button-full-weeks]')
    .addEventListener('click', () => {
        const newDate = new Date(document.querySelector('[data-input-date]').value);
        document.querySelector('[data-info-full-weeks]').innerText = fullWeeksNumberInMonth(newDate);
    });
