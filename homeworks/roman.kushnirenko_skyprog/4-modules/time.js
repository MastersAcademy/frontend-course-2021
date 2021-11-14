const currentTime = document.querySelector('[data-current-time]');
const monthLong = document.querySelector('[data-monthlong]');
const fullWeeksShow = document.querySelector('[data-fullweeks]');

export function cityTime(city) {
    let localTime = new Date().toLocaleString('en-US', { timeZone: `${city}` });
    localTime = new Date(localTime);
    const showHour = localTime.getHours();
    const showMinut = localTime.getMinutes();
    const showSeconds = localTime.getSeconds();
    currentTime.innerHTML = `${showHour.toLocaleString()} : ${showMinut.toLocaleString()} : ${showSeconds.toLocaleString()}`;
}

export function numberOfDays(iMonth, iYear) {
    const myDate = new Date(iYear, iMonth + 1, 1);
    const newDate = new Date(myDate - 1);
    let trueOrFalse;
    if (newDate.getDate() === 31) {
        trueOrFalse = true;
    } else {
        trueOrFalse = false;
    }
    monthLong.textContent = trueOrFalse;
}

export function getFullWeeksMonth(month, years, _start) {
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
