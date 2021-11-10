function getWeekDay(date) {
    const days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

export function shortestWeekDaysNumber(date) {
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
            alert(Error);
    }
    return false;
}
