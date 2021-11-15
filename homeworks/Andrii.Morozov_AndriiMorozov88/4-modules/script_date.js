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
    console.log(getMondaysOfMonth(monthOnly, yearOnly));
    console.log(isMonthLong(monthOnly));
    console.log(shortestWeekDaysNumber(monthOnly, yearOnly));
    console.log(fullWeeksNumberInMonth(monthOnly, yearOnly));
});
