import { getFirstWeekDay } from './getFirstWeekDay';

export function fullWeeksNumberInMonth(date) {
    const dateArr = date.split('/');
    const day = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const year = Number(dateArr[2]);
<<<<<<< HEAD
    const firstDayMonday = getFirstWeekDay(month, year, day);
    alert(firstDayMonday);
    return firstDayMonday.fullWeeks;
=======
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
>>>>>>> e86191f22d75ff341068298e892ffde0662f6720
}
