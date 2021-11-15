import {
    getMondaysOfMonth,
    isMonthLong,
    fullWeeksNumberInMonth,
    selectLocalTimeOfCity,
} from './time.js';

const inputDate = document.querySelector('[data-input]');
const mondaysBtn = document.querySelector('[data-mondays-btn]');
const monthlongBtn = document.querySelector('[data-monthlong-btn]');
const fullWeeksBtn = document.querySelector('[data-fullweeks-btn]');
const selectCityTime = document.querySelector('[data-select-localtime]');
const currentTime = document.querySelector('[data-current-time]');
let input;
let dateEntered;
let monthData;
let year;

mondaysBtn.addEventListener('click', () => {
    if (input.value !== '') {
        getMondaysOfMonth(dateEntered, monthData);
    }
});

monthlongBtn.addEventListener('click', () => {
    isMonthLong(monthData, year);
});

fullWeeksBtn.addEventListener('click', () => {
    const weekStartNumber = 1;
    fullWeeksNumberInMonth(monthData, year, weekStartNumber);
});

const currentOclock = setInterval(() => {
    let localTime = new Date().toLocaleString('en-US', { timeZone: 'europe/kiev' });
    localTime = new Date(localTime);
    const showHour = localTime.getHours();
    const showMinut = localTime.getMinutes();
    const showSeconds = localTime.getSeconds();
    currentTime.innerHTML = `${showHour.toLocaleString()} : ${showMinut.toLocaleString()} : ${showSeconds.toLocaleString()}`;
}, 1000);

selectCityTime.addEventListener('change', function () {
    if (this.value === 'ukraine') {
        clearInterval(currentOclock);
        setInterval(selectLocalTimeOfCity, 1000, 'europe/kiev');
    } else if (this.value === 'tokyo') {
        clearInterval(currentOclock);
        setInterval(selectLocalTimeOfCity, 1000, 'asia/tokyo');
    } else if (this.value === 'new-york') {
        clearInterval(currentOclock);
        setInterval(selectLocalTimeOfCity, 1000, 'America/New_York');
    }
});

inputDate.addEventListener('change', (e) => {
    e.preventDefault();
    function getDateOfInput() {
        input = inputDate.value;
        dateEntered = new Date(input);
        monthData = dateEntered.getMonth();
        year = dateEntered.getFullYear();
    }
    getDateOfInput();
});
