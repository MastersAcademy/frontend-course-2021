function getWeekDay(date) {
    const days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

export function fullWeeksNumberInMonth(date) {
    const monthsNotHight = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthsHight = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dateArr = date.split('/');
    const day = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const year = Number(dateArr[2]);
    const dateA = new Date(year, month - 1, 1);
    const firstMonthDay = getWeekDay(dateA);
    let days = monthsNotHight[month - 1];
    if ((day <= 0 || day > days) || (month > 12 || month <= 0) || (year <= 0)) {
        return false;
    }
    if (year % 4 === 0) {
        days = monthsHight[month - 1];
    }
    switch (firstMonthDay) {
        case 1:
            return Math.floor(days / 7);
        case 2:
            return Math.floor((days - 6) / 7);
        case 3:
            return Math.floor((days - 5) / 7);
        case 4:
            return Math.floor((days - 4) / 7);
        case 5:
            return Math.floor((days - 3) / 7);
        case 6:
            return Math.floor((days - 2) / 7);
        case 7:
            return Math.floor((days - 1) / 7);
        default:
            return false;
    }
}
