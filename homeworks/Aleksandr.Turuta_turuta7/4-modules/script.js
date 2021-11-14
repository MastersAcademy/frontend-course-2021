import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const messageTimeEl = document.querySelector('[data-time]');
const timePEl = document.querySelector('[data-p-time]');
const selectCityEl = document.querySelector('[data-select-city]');

const buttonGetMondaysOfMonthEl = document.querySelector('[data-button-get-mondays-of-month]');
const buttonIsMonthLongEl = document.querySelector('[data-button-is-month-long]');
const buttonShortestWeekDaysNumberEl = document.querySelector('[data-button-shortest-week-days-number]');
const buttonFullWeeksNumberInMonthEl = document.querySelector('[data-button-full-weeks-number-in-month]');

const returnResultGetMondaysOfMonthEl = document.querySelector('[data-get-mondays-of-month]');
const returnResultIsMonthLongEl = document.querySelector('[data-is-month-long]');
const returnResultShortestWeekDaysNumberEl = document.querySelector('[data-shortest-week-days-number]');
const returnResultFullWeeksNumberInMonthEl = document.querySelector('[data-full-weeks-number-in-month]');

let correctHours = 0;

const correctData = () => {
    const today = new Date();
    const dd = today.getDate().toString().padStart(2, '0');
    const mm = (today.getMonth() + 1).toString().padStart(2, '0');
    const yyyy = today.getFullYear();
    messageTimeEl.value = `${yyyy}-${mm}-${dd}`;
};

const correctAndUpdateTime = () => {
    const today = new Date();
    today.setHours(today.getHours() + correctHours);

    let hours = today.getHours().toString();
    let minutes = today.getMinutes().toString();
    let seconds = today.getSeconds().toString();

    if (hours.length === 1) hours = hours.padStart(2, '0');
    if (minutes.length === 1) minutes = minutes.padStart(2, '0');
    if (seconds.length === 1) seconds = seconds.padStart(2, '0');
    timePEl.textContent = `${hours}:${minutes}:${seconds}`;
};

const increaseHours = (hours) => {
    correctHours = hours;
};

const decreaseHours = (hours) => {
    correctHours = hours;
};

correctData();
correctAndUpdateTime();

setInterval(correctAndUpdateTime, 1000);

buttonGetMondaysOfMonthEl.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultGetMondaysOfMonthEl.textContent = `[${getMondaysOfMonth(
        date.getFullYear(),
        date.getMonth() + 1,
    )}]`;
});

buttonIsMonthLongEl.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultIsMonthLongEl.textContent = isMonthLong(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

buttonShortestWeekDaysNumberEl.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultShortestWeekDaysNumberEl.textContent = shortestWeekDaysNumber(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

buttonFullWeeksNumberInMonthEl.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultFullWeeksNumberInMonthEl.textContent = fullWeeksNumberInMonth(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

selectCityEl.addEventListener('change', () => {
    const valueHours = Number(selectCityEl.value);
    if (valueHours > 0) increaseHours(valueHours);
    else if (valueHours < 0) decreaseHours(valueHours);
    else correctHours = valueHours;
});
