const currentTime = document.querySelector('[data-current-time]');
const monthLong = document.querySelector('[data-monthlong]');
const fullWeeksShow = document.querySelector('[data-fullweeks]');
const mondaysShow = document.querySelector('[data-mondays]');
const inputDate = document.querySelector('[data-input]');

export function getMondaysOfMonth() {
    const d = new Date(inputDate.value);
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
    // console.log(d);
}

export function selectLocalTimeOfCity(city) {
    let localTime = new Date().toLocaleString('en-US', { timeZone: `${city}` });
    localTime = new Date(localTime);
    const showHour = localTime.getHours();
    const showMinut = localTime.getMinutes();
    const showSeconds = localTime.getSeconds();
    currentTime.innerHTML = `${showHour.toLocaleString()} : ${showMinut.toLocaleString()} : ${showSeconds.toLocaleString()}`;
}

export function isMonthLong(month, year) {
    const myDate = new Date(year, month + 1, 1);
    const newDate = new Date(myDate - 1);
    let isMonthLongOrNot;
    if (newDate.getDate() === 31) {
        isMonthLongOrNot = true;
    } else {
        isMonthLongOrNot = false;
    }
    monthLong.textContent = isMonthLongOrNot;
}

export function fullWeeksNumberInMonth(month, years, _start) {
    const weeks = [];
    const firstDate = new Date(years, month, 1);
    const lastDate = new Date(years, month + 1, 0);
    const numDays = lastDate.getDate();

    let start = 1;
    let end = 7 - firstDate.getDay();
    if (firstDate.getDay() === _start) {
        end = 7;
    } else {
        const preMonthEndDay = new Date(years, month, 0);
        start = preMonthEndDay.getDate() + 1 - firstDate.getDay() + _start;
        end = 7 - firstDate.getDay() + _start;
        weeks.push({ startD: start, endD: end });
        start = end + 1;
        end += 7;
    }
    while (start <= numDays) {
        weeks.push({
            startD: start,
            endD: end,
        });
        start = end + 1;
        end += 7;
        if (end > numDays) {
            end = end - numDays + _start;
            weeks.push({ startD: start, endD: end });
            break;
        }
    }
    let fullWeeks = 0;
    weeks.forEach((item) => {
        if (item.endD - item.startD === 6) {
            fullWeeks += 1;
        }
    });
    fullWeeksShow.textContent = fullWeeks;
}
