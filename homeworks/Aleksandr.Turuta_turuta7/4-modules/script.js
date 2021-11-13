import {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
} from './time.js';

const messageTimeEl = document.querySelector('[data-time]');
const timePEl = document.querySelector('[data-p-time]');
const selectCityEl = document.querySelector('[data-select-city]');

const button1El = document.querySelector('[data-button-1]');
const button2El = document.querySelector('[data-button-2]');
const button3El = document.querySelector('[data-button-3]');
const button4El = document.querySelector('[data-button-4]');

const returnResultFunc1El = document.querySelector('[data-function1]');
const returnResultFunc2El = document.querySelector('[data-function2]');
const returnResultFunc3El = document.querySelector('[data-function3]');
const returnResultFunc4El = document.querySelector('[data-function4]');

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

    let H = today.getHours().toString();
    let M = today.getMinutes().toString();
    let S = today.getSeconds().toString();

    if (H.length === 1) H = `0${H}`;
    if (M.length === 1) M = `0${M}`;
    if (S.length === 1) S = `0${S}`;
    timePEl.textContent = `${H}:${M}:${S}`;
};
correctData();
correctAndUpdateTime();

setInterval(() => {
    correctAndUpdateTime();
}, 1000);

button1El.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultFunc1El.textContent = getMondaysOfMonth(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

button2El.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultFunc2El.textContent = isMonthLong(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

button3El.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultFunc3El.textContent = shortestWeekDaysNumber(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

button4El.addEventListener('click', () => {
    const date = new Date(messageTimeEl.value);
    returnResultFunc4El.textContent = fullWeeksNumberInMonth(
        date.getFullYear(),
        date.getMonth() + 1,
    );
});

selectCityEl.addEventListener('change', () => {
    switch (Number(selectCityEl.value)) {
        case 1:
            correctHours = 0;
            break;
        case 2:
            correctHours = 7;
            break;
        case 3:
            correctHours = -2;
            break;
        case 4:
            correctHours = -7;
            break;
        default:
            break;
    }
});
