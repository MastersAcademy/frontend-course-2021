import { firstWeeDayMonth } from './firstWeekDayMonth.js';

export function fullWeeksNumberInMonth(date) {
    const inputValue = firstWeeDayMonth(date);
    const firstMonthDay = inputValue.firstWeekDay;
    const days = inputValue.amountOfDays;
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
