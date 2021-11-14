// import modules
import {
    getMondaysOfMonth, isMonthLong, fullWeeksNumberInMonth, shortestWeekDaysNumber,
} from './time.js';

// all buttons
const allMondayButton = document.querySelector('[data-monday]');
const fullMonthButton = document.querySelector('[data-fullMonth]');
const fullWeekButton = document.querySelector('[data-fullWeek]');
const shortsWeekButton = document.querySelector('[data-shortWeek]');

// Get Date
const time = document.querySelector('[data-date]');

// output data
const allMonday = document.querySelector('[data-out-monday]');
const fullMonth = document.querySelector('[data-out-month]');
const shortWeek = document.querySelector('[data-out-short');
const fullWeek = document.querySelector('[data-out-week]');

// get all monday
allMondayButton.addEventListener('click', () => {
    const allMondayVal = time.value;
    const received = new Date(allMondayVal);
    allMonday.textContent = getMondaysOfMonth(received);
});

// get is month long
fullMonthButton.addEventListener('click', () => {
    const longMonthVal = new Date(time.value);
    const year = longMonthVal.getFullYear();
    const mounth = longMonthVal.getMonth();
    fullMonth.textContent = isMonthLong(mounth, year);
});

// get full week month
fullWeekButton.addEventListener('click', () => {
    const fullWeekVal = new Date(time.value);
    const year = fullWeekVal.getFullYear();
    const mounth = fullWeekVal.getMonth() + 1;
    fullWeek.textContent = fullWeeksNumberInMonth(mounth, year);
});

// get number short week
shortsWeekButton.addEventListener('click', () => {
    const shortsWeekVal = new Date(time.value);
    shortsWeekVal.setDate(1);
    const firstDayOfMonth = shortsWeekVal.getDay() || 7;
    const lastDayOfMonth = new Date(shortsWeekVal.getFullYear(),
        shortsWeekVal.getMonth() + 1, 0).getDay() || 7;
    shortWeek.textContent = shortestWeekDaysNumber(firstDayOfMonth, lastDayOfMonth);
});
