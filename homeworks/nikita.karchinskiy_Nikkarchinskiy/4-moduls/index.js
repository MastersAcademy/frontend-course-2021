import {
    mondaysInMonth,
    incompleteWeeks,
    shortDay,
    fullWeek,
} from './time.js';

const getMondeysBtn = document.querySelector('[data-monday-btn]');
const shortMonthBtn = document.querySelector('[data-month-long-btn]');
const incompleteWeekBtn = document.querySelector('[data-shortest-week-btn]');
const fullWeeksBtn = document.querySelector('[data-full-weeks-btn]');

getMondeysBtn.addEventListener('click', mondaysInMonth);

shortMonthBtn.addEventListener('click', shortDay);

incompleteWeekBtn.addEventListener('click', incompleteWeeks);

fullWeeksBtn.addEventListener('click', fullWeek);
