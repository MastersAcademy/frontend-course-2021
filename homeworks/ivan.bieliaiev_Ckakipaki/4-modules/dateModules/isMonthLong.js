export function isMonthLong(date) {
    const dateArr = date.split('/');
    const longMonths = [1, 3, 5, 7, 8, 10, 12];
    const monthsNotHigh = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthsHigh = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const year = Number(dateArr[2]);
    let days = monthsNotHigh[month - 1];
    if (year % 4 === 0) {
        days = monthsHigh[month - 1];
    }
    if ((day <= 0 || day > days) || (month > 12 || month <= 0) || (year <= 0)) {
        return Error;
    }
    if (longMonths.includes(month)) {
        return true;
    }
    return false;
}
