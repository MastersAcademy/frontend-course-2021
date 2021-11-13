import { firstWeeDayMonth } from './firstWeekDayMonth.js';

export function isMonthLong(date) {
    const inputValue = firstWeeDayMonth(date);
    const longMonths = [1, 3, 5, 7, 8, 10, 12];
    if (longMonths.includes(inputValue.amountOfMonth)) {
        return true;
    }
    return false;
}
