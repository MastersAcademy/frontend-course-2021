export function getMondaysOfMonth(month, year) {
    const lastDate = new Date(year, month + 1, 0).getDate();
    const mondayArray = [];
    for (let i = 1; i < lastDate; i++) {
        const checkDay = new Date(year, month, i);
        if (checkDay.getDay() === 1) {
            mondayArray.push(i);
        }
    }
    return mondayArray;
}
export function isMonthLong(month, year) {
    const lastDate = new Date(year, month + 1, 0).getDate();
    return (lastDate === 31);
}
export function shortestWeekDaysNumber(month, year) {
    const firstDate = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0).getDate();
    let lastDay = new Date(year, month, lastDate).getDay();
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
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDay();
    let fullWeeks = 3;
    if (firstDay === 1 || lastDay === 0) {
        fullWeeks = 4;
    }
    return fullWeeks;
}
