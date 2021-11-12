const fullWeekNum = 7;

function daysOfMonth(date) {
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    return days;
}

export function getMondaysOfMonth(date) {
    const mondaysOfMonth = [];
    for (let i = 1; i <= daysOfMonth(date); i++) {
        const day = new Date(date.getFullYear(), date.getMonth(), i);
        if (day.getDay() === 1) {
            mondaysOfMonth.push(day.getDate());
        }
    }
    return mondaysOfMonth;
}

export function isMonthLong(date) {
    if (daysOfMonth(date) === 31) {
        return true;
    }
    return false;
}

export function shortestWeekDaysNumber(date) {
    const numfirstDay = new Date(date.setDate(1)).getDay();
    const numlastDay = new Date(date.setDate(daysOfMonth(date))).getDay();

    const dayFirstWeek = fullWeekNum - (numfirstDay - 1);
    const dayLastWeek = fullWeekNum - (fullWeekNum - numlastDay);
    return Math.min(dayFirstWeek, dayLastWeek);
}

export function fullWeeksNumberInMonth(date) {
    return Math.trunc(((daysOfMonth(date) - shortestWeekDaysNumber(date)) / 7));
}
