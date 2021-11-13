import { firstWeeDayMonth } from './firstWeekDayMonth.js';

export function shortestWeekDaysNumber(date) {
    const inputValue = firstWeeDayMonth(date);
    const firstMonthDay = inputValue.firstWeekDay;
    const days = inputValue.amountOfDays;
    let x;
    switch (firstMonthDay) {
        case 1:
            x = days % 7;
            if (x === 0) {
                return 7;
            }
            return x;
        case 2:
            x = 6;
            if (x > days % 7) {
                return days % 7;
            }
            return x;
        case 3:
            x = 5;
            if (x > days % 7) {
                return days % 7;
            }
            return x;
        case 4:
            x = 4;
            if (x > days % 7) {
                return days % 7;
            }
            return x;
        case 5:
            x = 3;
            if (x > days % 7) {
                return days % 7;
            }
            return x;
        case 6:
            x = 2;
            if (x > days % 7) {
                return days % 7;
            }
            return x;
        case 7:
            x = 1;
            if (x > days % 7) {
                return days % 7;
            }
            return x;
        default:
            return 'Input Correct value';
    }
}
