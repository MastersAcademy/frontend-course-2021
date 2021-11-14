import * as module from './time.js';

const getMondaysBtn = document.querySelector('[data-get-spec-day]');
const mondaysResField = document.querySelector('[data-spec-day-res]');
const isMonthLongBtn = document.querySelector('[data-get-month-long]');
const monthLongResField = document.querySelector('[data-month-long-res]');
const getDaysInShortWeekBtn = document.querySelector('[data-get-spec-week-days]');
const daysInShortResField = document.querySelector('[data-spec-week-days-res]');
const getFullWeeksBtn = document.querySelector('[data-get-spec-week]');
const fullWeeksResField = document.querySelector('[data-spec-week-res]');

getMondaysBtn.addEventListener('click', () => {
    const dateFromInput = document.querySelector('[data-spec-day]').value;
    const day = new Date(dateFromInput);
    const result = module.getMondaysOfMonth(day);
    mondaysResField.textContent = `[${result}]`;
});

isMonthLongBtn.addEventListener('click', () => {
    const dateFromInput = document.querySelector('[data-spec-day]').value;
    const day = new Date(dateFromInput);
    const result = module.isMonthLong(day);
    monthLongResField.textContent = result.toString();
});

getDaysInShortWeekBtn.addEventListener('click', () => {
    const dateFromInput = document.querySelector('[data-spec-day]').value;
    const day = new Date(dateFromInput);
    const result = module.shortestWeekDaysNumber(day);
    daysInShortResField.textContent = result.toString();
});

getFullWeeksBtn.addEventListener('click', () => {
    const dateFromInput = document.querySelector('[data-spec-day]').value;
    const day = new Date(dateFromInput);
    const result = module.fullWeeksNumberInMonth(day);
    fullWeeksResField.textContent = result.toString();
});
