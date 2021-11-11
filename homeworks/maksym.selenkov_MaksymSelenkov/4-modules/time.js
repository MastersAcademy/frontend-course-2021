export function getMondaysOfMonth(date = new Date()) {
    return date;
}

export function isMonthLong(date) {
    const longMonths = [0, 2, 4, 6, 7, 9, 11];
    const functionDate = new Date(date);
    const result = document.createElement('div');
    if (longMonths.includes(functionDate.getMonth())) {
        result.textContent = 'true';
    } else {
        result.textContent = 'false';
    }
    return result;
}

export function shortestWeekDaysNumber(date = new Date()) {
    return date;
}

export function fullWeeksNumberInMonth(date = new Date()) {
    return date;
}
