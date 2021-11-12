// import modules
import {
    getMondaysOfMonth, isMonthLong, fullWeeksNumberInMonth, shortestWeekDaysNumber,
} from './time.js';

// all buttons
const buttonMonday = document.querySelector('[data-monday]');
const buttonfullMonth = document.querySelector('[data-fullMonth]');
const buttonfullWeek = document.querySelector('[data-fullWeek]');
const buttonShortWeek = document.querySelector('[data-shortWeek]');

// Get Date
const time = document.querySelector('[data-date]');

// output data
const outMonday = document.querySelector('[data-out-monday]');
const fullMonth = document.querySelector('[data-out-month]');
const shortWeek = document.querySelector('[data-out-short');
const weekFull = document.querySelector('[data-out-week]');

// get all monday
buttonMonday.addEventListener('click', () => {
    const monday = time.value;
    const received = new Date(monday);
    outMonday.textContent = getMondaysOfMonth(received);
});

// get is month long
buttonfullMonth.addEventListener('click', () => {
    const inputLongMonth = new Date(time.value);
    const Year = inputLongMonth.getFullYear();
    const Mounth = inputLongMonth.getMonth();
    fullMonth.textContent = isMonthLong(Mounth, Year);
});

// get full week month
buttonfullWeek.addEventListener('click', () => {
    const inputFullWeek = new Date(time.value);
    const Year = inputFullWeek.getFullYear();
    const Mounth = inputFullWeek.getMonth() + 1;
    weekFull.textContent = fullWeeksNumberInMonth(Mounth, Year);
});

// get number short week
buttonShortWeek.addEventListener('click', () => {
    const shorts = new Date(time.value);
    shorts.setDate(1);
    const firstDayOfMonth = shorts.getDay() || 7;
    const lastDayOfMonth = new Date(shorts.getFullYear(), shorts.getMonth() + 1, 0).getDay() || 7;
    shortWeek.textContent = shortestWeekDaysNumber(firstDayOfMonth, lastDayOfMonth);
});
