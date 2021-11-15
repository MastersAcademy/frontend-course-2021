export function getFirstWeekDay(month, year, inputDays) {
    if ((month < 0) || (month > 12) || (year <= 0)) {
        return Error;
    }
    const monthsNotHighY = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthsHighY = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayWeek = [7, 1, 2, 3, 4, 5, 6];
    let daysInInputMonth = monthsNotHighY[month - 1];
    if (year % 4 === 0) {
        daysInInputMonth = monthsHighY[month - 1];
    }
    if ((inputDays < 0) || (inputDays > daysInInputMonth)) {
        return Error;
    }
    const dateA = new Date(year, month - 1, inputDays);
    const firstMonthDay = dayWeek[dateA.getDay()];
    const arr = [];
    let x;
    let y;
    let fullWeekLength;
    let shortWeekDays;
    switch (firstMonthDay) {
        case 1:
            x = 1;
            y = daysInInputMonth % 7;
            if (y === 0) {
                shortWeekDays = 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor(daysInInputMonth / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        case 2:
            x = 7;
            y = 6;
            if (y > daysInInputMonth % 7) {
                shortWeekDays = daysInInputMonth % 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor((daysInInputMonth - 6) / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        case 3:
            x = 6;
            y = 5;
            if (y > daysInInputMonth % 7) {
                shortWeekDays = daysInInputMonth % 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor((daysInInputMonth - 5) / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        case 4:
            x = 5;
            y = 4;
            if (y > daysInInputMonth % 7) {
                shortWeekDays = daysInInputMonth % 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor((daysInInputMonth - 4) / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        case 5:
            x = 4;
            y = 3;
            if (y > daysInInputMonth % 7) {
                shortWeekDays = daysInInputMonth % 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor((daysInInputMonth - 3) / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        case 6:
            x = 3;
            y = 2;
            if (y > daysInInputMonth % 7) {
                shortWeekDays = daysInInputMonth % 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor((daysInInputMonth - 2) / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        case 7:
            x = 2;
            y = 1;
            if (y > daysInInputMonth % 7) {
                shortWeekDays = daysInInputMonth % 7;
            } else {
                shortWeekDays = y;
            }
            fullWeekLength = Math.floor((daysInInputMonth - 1) / 7);
            while (daysInInputMonth >= x) {
                arr.push(x);
                x += 7;
            }
            break;
        default:
            return Error;
    }
    return {
        mondays: arr,
        firstDay: firstMonthDay,
        fullWeeks: fullWeekLength,
        shortestWeekDays: shortWeekDays,
    };
}
