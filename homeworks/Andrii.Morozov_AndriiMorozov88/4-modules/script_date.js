import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const calendar = document.querySelector('[data-date]');
calendar.addEventListener('change', () => {
    const date = new Date(calendar.value);
    const monthOnly = date.getMonth();
    const yearOnly = date.getFullYear();
    const mondayButton = document.querySelector('[data-monday-button]');
    const mondayContainer = document.querySelector('[data-monday-container]');
    const longButton = document.querySelector('[data-long-button]');
    const longContainer = document.querySelector('[data-long-container]');
    const shortWeekButton = document.querySelector('[data-short-week-button]');
    const shortWeekContainer = document.querySelector('[data-short-week-container]');
    const fullWeekButton = document.querySelector('[data-full-week-button]');
    const fullWeekContainer = document.querySelector('[data-full-week-container]');
    mondayButton.addEventListener('click', () => {
        mondayContainer.innerText = getMondaysOfMonth(monthOnly, yearOnly);
    });
    longButton.addEventListener('click', () => {
        longContainer.innerText = isMonthLong(monthOnly, yearOnly);
    });
    shortWeekButton.addEventListener('click', () => {
        shortWeekContainer.innerText = shortestWeekDaysNumber(monthOnly, yearOnly);
    });
    fullWeekButton.addEventListener('click', () => {
        fullWeekContainer.innerText = fullWeeksNumberInMonth(monthOnly, yearOnly);
    });
});
