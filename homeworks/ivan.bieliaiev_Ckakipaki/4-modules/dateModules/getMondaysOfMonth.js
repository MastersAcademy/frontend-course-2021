function getWeekDay(date) {
    const days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

export function getMondaysOfMonth(date) {
    const monthsNotHight = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthsHight = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (date.search('/') !== -1) {
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
        const arr = [];
        let x;
        switch (firstMonthDay) {
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
    }
    return false;
}
