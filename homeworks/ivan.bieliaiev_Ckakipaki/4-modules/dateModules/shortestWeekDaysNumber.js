import { getFirstWeekDay } from './getFirstWeekDay';

export function shortestWeekDaysNumber(date) {
    const dateArr = date.split('/');
    const day = Number(dateArr[0]);
    const month = Number(dateArr[1]);
    const year = Number(dateArr[2]);
    const firstDayMonday = getFirstWeekDay(month, year, day);
    return firstDayMonday.mondays;
}
