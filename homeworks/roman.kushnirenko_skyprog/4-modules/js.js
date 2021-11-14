import { numberOfDays, getFullWeeksMonth, cityTime } from './time.js';

const inputDate = document.querySelector('.input');
const mondaysBtn = document.querySelector('[data-mondays-btn]');
const mondaysShow = document.querySelector('[data-mondays]');
const monthlongBtn = document.querySelector('[data-monthlong-btn]');
const fullWeeksBtn = document.querySelector('[data-fullweeks-btn]');
const selectCityTime = document.querySelector('[data-select-localtime]');
const currentTime = document.querySelector('[data-current-time]');
let input;
let dateEntered;
let mm;
let year;

const currentOclock = setInterval(() => {
    let localTime = new Date().toLocaleString('en-US', { timeZone: 'europe/kiev' });
    localTime = new Date(localTime);
    const showHour = localTime.getHours();
    const showMinut = localTime.getMinutes();
    const showSeconds = localTime.getSeconds();
    currentTime.innerHTML = `${showHour.toLocaleString()} : ${showMinut.toLocaleString()} : ${showSeconds.toLocaleString()}`;
}, 0);

selectCityTime.addEventListener('change', function () {
    if (this.value === 'ukraine') {
        clearInterval(currentOclock);
        setInterval(cityTime, 0, 'europe/kiev');
    } else if (this.value === 'tokyo') {
        clearInterval(currentOclock);
        setInterval(cityTime, 0, 'asia/tokyo');
    } else if (this.value === 'new-york') {
        clearInterval(currentOclock);
        setInterval(cityTime, 0, 'America/New_York');
    }
});

inputDate.addEventListener('change', (e) => {
    e.preventDefault();
    input = inputDate.value;
    dateEntered = new Date(input);
    mm = dateEntered.getMonth();
    year = dateEntered.getFullYear();
});

mondaysBtn.addEventListener('click', () => {
    function getMondays() {
        const d = new Date(input);
        const month = d.getMonth();
        const mondays = [];
        d.setDate(1);
        while (d.getDay() !== 1) {
            d.setDate(d.getDate() + 1);
        }
        while (d.getMonth() === month) {
            mondays.push(new Date(d.getTime()));
            d.setDate(d.getDate() + 7);
        }
        const dateMondays = mondays.map((item) => item.getDate());
        mondaysShow.textContent = dateMondays;
    }
    getMondays(dateEntered, mm);
});

monthlongBtn.addEventListener('click', () => {
    numberOfDays(mm, year);
});

fullWeeksBtn.addEventListener('click', () => {
    getFullWeeksMonth(mm, year, 1);
});
