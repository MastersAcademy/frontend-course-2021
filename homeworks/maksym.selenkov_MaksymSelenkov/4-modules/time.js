export function getMondaysOfMonth(date) {
    const mondaysArray = [];
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    for (let i = 1; i <= days.getDate(); i++) {
        const day = new Date(date.getFullYear(), date.getMonth(), i);
        if (day.getDay() === 1) {
            mondaysArray.push(day.getDate());
        }
    }
    const result = document.createElement('div');
    result.textContent = mondaysArray;
    return result;
}

export function isMonthLong(date) {
    const longMonths = [0, 2, 4, 6, 7, 9, 11];
    const result = document.createElement('div');
    if (longMonths.includes(date.getMonth())) {
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
