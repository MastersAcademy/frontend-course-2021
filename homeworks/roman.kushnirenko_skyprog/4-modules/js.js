import { getMondays } from './time.js';

const inputDate = document.querySelector('.input');
const currentTime = document.querySelector('[data-current-time]');
const mondaysBtn = document.querySelector('[data-mondays-btn]');
export const mondaysShow = document.querySelector('[data-mondays]');
const monthlongBtn = document.querySelector('[data-monthlong-btn]');
const monthLong = document.querySelector('[data-monthlong]');
const fullWeeksBtn = document.querySelector('[data-fullweeks-btn]');
const fullWeeksShow = document.querySelector('[data-fullweeks]');
const selectCityTime = document.querySelector('[data-select-localtime]');

export let input;
let dateEntered;
let mm;
let dd;
let year;

function cityTime(city) {
    let localTime = new Date().toLocaleString('en-US', { timeZone: `${city}` });
    localTime = new Date(localTime);
    let showHour = localTime.getHours();
    let showMinut = localTime.getMinutes();
    let showSeconds = localTime.getSeconds();
    currentTime.innerHTML = showHour.toLocaleString() + ' : ' + showMinut.toLocaleString() + ' : ' + showSeconds.toLocaleString()
}

selectCityTime.addEventListener('change', function () {
    let idIntervals = 0;
    if (this.value === 'ukraine') {
        setInterval(cityTime, 0, 'europe/kiev');
    } else if (this.value === 'tokyo') {
        setInterval(cityTime, 0, 'asia/tokyo');
    } else if (this.value === 'new-york') {
        setInterval(cityTime, 0, 'America/New_York');
    }
});

inputDate.addEventListener('change', (e) => {
    e.preventDefault();
    input = inputDate.value;
    dateEntered = new Date(input);
    mm = dateEntered.getMonth();
    dd = dateEntered.getDate();
    year = dateEntered.getFullYear();
});

mondaysBtn.addEventListener('click', (e) => {
    e.preventDefault();

    getMondays(dateEntered, mm);
});

monthlongBtn.addEventListener('click', () => {
    function numberOfDays(iMonth, iYear) {
        let myDate = new Date(iYear, iMonth + 1, 1);
        let newDate = new Date(myDate - 1);
        let trueOrFalse;
        if (newDate.getDate() === 31) {
            trueOrFalse = true;
        } else {
            trueOrFalse = false;
        }
        return monthLong.textContent = trueOrFalse;
    }
    numberOfDays(mm, year);
});

fullWeeksBtn.addEventListener('click', () => {
    function getFullWeeksStartAndEndInMonth(month, year, _start) {
        let weeks = [],
            firstDate = new Date(year, month, 1),
            lastDate = new Date(year, month + 1, 0),
            numDays = lastDate.getDate()

        let start = 1;
        let end = 7 - firstDate.getDay();
        if (firstDate.getDay() === _start) {
            end = 7;
        } else {
            preMonthEndDay = new Date(year, month, 0);
            start = preMonthEndDay.getDate() + 1 - firstDate.getDay() + _start;
            end = 7 - firstDate.getDay() + _start;
            weeks.push({ start: start, end: end });
            start = end + 1;
            end = end + 7
        }
        while (start <= numDays) {
            weeks.push({ start: start, end: end });
            start = end + 1;
            end = end + 7;
            if (end > numDays) {
                end = end - numDays + _start;
                weeks.push({ start: start, end: end });
                break;
            }
        }
        let fullWeeks = 0;
        weeks.forEach((item) => {
            if (item.end - item.start === 6) {
                fullWeeks += 1;
            }
        });
        return fullWeeksShow.textContent = fullWeeks
    }
    getFullWeeksStartAndEndInMonth(mm, year, 1);
});

// function shortestWeekDaysNumber(month, year, _start) {
//     let weeks = [],
//         firstDate = new Date(year, month, 1),
//         lastDate = new Date(year, month + 1, 0),
//         numDays = lastDate.getDate()

//     let start = 1
//     let end = 7 - firstDate.getDay()
//     if (firstDate.getDay() === _start) {
//         end = 7
//     } else {
//         preMonthEndDay = new Date(year, month, 0)
//         start = preMonthEndDay.getDate() + 1 - firstDate.getDay() + _start
//         end = 7 - firstDate.getDay() + _start
//         weeks.push({ start: start, end: end })
//         start = end + 1
//         end = end + 7
//     }
//     while (start <= numDays) {
//         weeks.push({ start: start, end: end })
//         start = end + 1
//         end = end + 7
//         if (end > numDays) {
//             end = end - numDays + _start
//             weeks.push({ start: start, end: end })
//             break;
//         }
//     }
//     let shortestWeekDays = [];
//     weeks.forEach((item) => {
//         if (item.end - item.start < 6) {
//             shortestWeekDays.push(item.end % item.start);
//         }
//     });
// }
// shortestWeekDaysNumber(11, 2021, 1);
