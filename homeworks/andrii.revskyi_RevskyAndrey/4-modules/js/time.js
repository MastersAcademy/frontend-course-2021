function getCountDaysOfMonth(date) {
    return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
}

function getCurrentDate(date) {
    return new Date(date);
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */

export function getMondaysOfMonth(date) {
    const monday = [];
    const currentDate = getCurrentDate(date);
    for (let i = 1; i <= getCountDaysOfMonth(currentDate); i++) {
        const item = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        if (item.getDay() === 1) monday.push(item.getDate());
    }
    return monday;
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    return getCountDaysOfMonth(getCurrentDate(date)) === 31;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */

export function shortestWeekDaysNumber(date) {
    const currentDate = getCurrentDate(date);
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    let firstWeek = 0;
    const lastWeek = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDay();
    let shortestWeek = 0;

    if (firstDay === 0) {
        firstWeek = 1;
    } else if (firstDay > 1) {
        firstWeek = 7 - firstDay + 1;
    }

    if (firstWeek >= lastWeek) {
        shortestWeek = lastWeek || firstWeek;
    } else {
        shortestWeek = firstWeek || lastWeek;
    }

    if (firstWeek === 0 && lastWeek === 0) {
        shortestWeek = 7;
    }

    return shortestWeek;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month.
 * To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    let fullWeeksNumber = 0;
    let currentWeekDays = 0;
    const currentDate = getCurrentDate(date);
    for (let i = 1; i <= getCountDaysOfMonth(currentDate); i++) {
        const item = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
        currentWeekDays++;
        if (currentWeekDays === 7) {
            fullWeeksNumber++;
        }
        if (item.getDay() === 1) {
            currentWeekDays = 0;
        }
    }
    return fullWeeksNumber;
}

export function getTimeWithBind(timeBind) {
    const currentTime = new Date(Date.now());
    const timezoneOffset = currentTime.getTimezoneOffset() / 60;
    currentTime.setHours(currentTime.getHours() + timezoneOffset + Number.parseInt(timeBind, 10));

    return currentTime;
}

/**
 *
 * @param date - Date object or a date string of any supported format
 * @param hours - number of hours to subtract
 * @returns {Date} resultDate: date - hours
 */
export function subtractHours(date, hours) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() - hours);
    return resultDate;
}

/**
 *
 * @param date - Date object or a date string of any supported format
 * @param hours - number of hours to add
 * @returns {Date} resultDate: date + hours
 */
export function addHours(date, hours) {
    const resultDate = date;
    resultDate.setHours(resultDate.getHours() + hours);
    return resultDate;
}

function correctTime(i) {
    if (i < 10) {
        return `0${i}`;
    }
    return i;
}

export function showTime(timezone) {
    let currentDate = new Date();
    switch (timezone) {
        case 'Tokyo':
            currentDate = addHours(currentDate, 7);
            break;
        case 'London':
            currentDate = subtractHours(currentDate, 2);
            break;
        case 'NewYork':
            currentDate = subtractHours(currentDate, 7);
            break;
        case 'Current':
            currentDate = new Date();
            break;
        default:
            break;
    }
    const hours = correctTime(currentDate.getHours());
    const minutes = correctTime(currentDate.getMinutes());
    const seconds = correctTime(currentDate.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
}
