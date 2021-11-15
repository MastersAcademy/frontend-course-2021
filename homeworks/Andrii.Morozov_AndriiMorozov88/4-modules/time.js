const long = [0, 2, 4, 6, 7, 9, 11];
const short = [3, 5, 8, 10];
export function getMondaysOfMonth(month, year) {
    let lastDate;
    if (long.includes(month)) {
        lastDate = 32;
    } else if (short.includes(month)) {
        lastDate = 31;
    } else {
        lastDate = 29;
    }
    const mondayArray = [];
    let k = 0;
    for (let i = 1; i < lastDate; i++) {
        const checkDay = new Date(year, month, i);
        if (checkDay.getDay() === 1) {
            mondayArray[k] = i;
            k += 1;
        }
    }
    return mondayArray;
}
export function isMonthLong(month) {
    return long.includes(month);
}
export function shortestWeekDaysNumber(month, year) {
    const firstDate = new Date(year, month, 1);
    let lastDay;
    if (long.includes(month)) {
        const lastDate = new Date(year, month, 31);
        lastDay = lastDate.getDay();
    } else if (short.includes(month)) {
        const lastDate = new Date(year, month, 30);
        lastDay = lastDate.getDay();
    } else {
        const lastDate = new Date(year, month, 28);
        lastDay = lastDate.getDay();
    }

    if (lastDay === 0) {
        lastDay = 7;
    }
    let firstDay = firstDate.getDay();
    if (firstDay === 0) {
        firstDay = 7;
    }
    const amountFirstDays = 8 - firstDay;
    let shortWeekDays;
    if (lastDay !== 0) {
        if (amountFirstDays > lastDay) {
            shortWeekDays = lastDay;
        } else if (amountFirstDays < lastDay) {
            shortWeekDays = amountFirstDays;
        } else {
            shortWeekDays = lastDay;
        }
    }
    return shortWeekDays;
}
export function fullWeeksNumberInMonth(month, year) {
    const firstDate = new Date(year, month, 1);
    let weekAmount = 3;
    if (firstDate.getDay() === 1) {
        weekAmount = 4;
    }
    if (long.includes(month)) {
        const lastDate = new Date(year, month, 31);
        if (lastDate.getDay() < 3) {
            weekAmount = 4;
        }
    } else if (short.includes(month)) {
        const lastDate = new Date(year, month, 30);
        if (lastDate.getDay() < 2) {
            weekAmount = 4;
        }
    } else if (month === 1) {
        const lastDate = new Date(year, month, 28);
        if (lastDate.getDay() === 0) {
            weekAmount = 4;
        }
    }
    return weekAmount;
}
