import { firstWeeDayMonth } from './firstWeekDayMonth.js';

export function getMondaysOfMonth(date) {
    const inputValue = firstWeeDayMonth(date);
    const days = inputValue.amountOfDays;
    const arr = [];
    let x;
    switch (inputValue.firstWeekDay) {
        case 1:
            x = 1;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        case 2:
            x = 7;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        case 3:
            x = 6;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        case 4:
            x = 5;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        case 5:
            x = 4;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        case 6:
            x = 3;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        case 7:
            x = 2;
            while (days >= x) {
                arr.push(x);
                x += 7;
            }
            return arr;
        default:
            console.log(false);
    }
    return false;
}
