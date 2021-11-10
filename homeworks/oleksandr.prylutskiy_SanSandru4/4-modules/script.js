import { isMonthLong } from './time.js';

const numDate = document.querySelector('[data-take-calendar]');
const getMondays = document.querySelector('[data-get-monday]');
const outMondays = document.querySelector('[data-out-monday]');
const longMonth = document.querySelector('[data-long-month]');
const outLongMonth = document.querySelector('[data-out-long-month]');

function getMondaysOfMonth(date) {
    const inputData = date.value;
    const inputDataArray = inputData.split('-');
    const year = inputDataArray[0];
    const month = inputDataArray[1];
    const day = inputDataArray[2];
    const mondayInMonth = new Date(year, month, day);
    console.log(mondayInMonth);
    const mondays = [];
    mondayInMonth.setDate(1);
    while (mondayInMonth.getDay() !== 1) {
        mondayInMonth.setDate(mondayInMonth.getDay() + 1);
    }
    while (mondayInMonth.getMonth() === month) {
        mondays.push(new Date(mondayInMonth.getTime()));
        mondayInMonth.setDate(mondayInMonth.getDate() + 7);
    }
    return mondays;
}

getMondays.addEventListener('click', () => {
    outMondays.textContent = getMondaysOfMonth(numDate);
});

longMonth.addEventListener('click', () => {
    outLongMonth.textContent = isMonthLong(numDate);
});
