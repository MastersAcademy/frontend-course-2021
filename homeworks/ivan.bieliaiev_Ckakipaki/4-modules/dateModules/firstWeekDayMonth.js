function getWeekDay(date) {
    const days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

export function firstWeeDayMonth(date) {
    const monthsNotHight = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthsHight = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dateArr = date.split('-');
    const year = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const dateFormat = new Date(year, month - 1, 1);
    const firstMonthDay = getWeekDay(dateFormat);
    let days = monthsNotHight[month - 1];
    if (year % 4 === 0) {
        days = monthsHight[month - 1];
    }

    return {
        firstWeekDay: firstMonthDay,
        amountOfDays: days,
        amountOfMonth: month,
    };
}
