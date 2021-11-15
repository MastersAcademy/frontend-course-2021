// all monday in month
export function getMondaysOfMonth(mon) {
    const addDate = mon;
    const month = addDate.getMonth();
    const mondays = [];
    addDate.setDate(1);

    while (addDate.getDay() !== 1) {
        addDate.setDate(addDate.getDate() + 1);
    }

    while (addDate.getMonth() === month) {
        const pushDate = new Date(addDate.getTime());
        mondays.push(` ${pushDate.getDate()}`);
        addDate.setDate(addDate.getDate() + 7);
    }
    return mondays;
}

// long month
export function isMonthLong(month, year) {
    const long = 33 - new Date(year, month, 33).getDate();
    return (long === 31 ? 'True' : 'False');
}

// full week in month
export function fullWeeksNumberInMonth(month, year) {
    const full = new Date(year, month, 0);
    return Math.floor((full.getDate() - full.getDay()) / 7);
}

// short week in month
export function shortestWeekDaysNumber(firstDayOfMonth, lastDayOfMonth) {
    const numberShortWeek = [];
    if (firstDayOfMonth === 7 && lastDayOfMonth >= 1) {
        numberShortWeek.push('1');
    } else if (firstDayOfMonth === 6 && lastDayOfMonth !== 1) {
        numberShortWeek.push('2');
    } else if (lastDayOfMonth === 1 && firstDayOfMonth <= 7) {
        numberShortWeek.push('1');
    } else if (firstDayOfMonth === 5 && lastDayOfMonth >= 3) {
        numberShortWeek.push('3');
    } else if (lastDayOfMonth === 2 && firstDayOfMonth <= 6) {
        numberShortWeek.push('2');
    } else if (firstDayOfMonth === 4 && lastDayOfMonth >= 4) {
        numberShortWeek.push('4');
    } else if (lastDayOfMonth === 3 && firstDayOfMonth <= 5) {
        numberShortWeek.push('3');
    } else if (firstDayOfMonth === 3 && lastDayOfMonth >= 5) {
        numberShortWeek.push('5');
    } else if (lastDayOfMonth === 4 && firstDayOfMonth <= 4) {
        numberShortWeek.push('4');
    } else if (firstDayOfMonth === 2 && lastDayOfMonth >= 6) {
        numberShortWeek.push('6');
    } else if (lastDayOfMonth === 5 && firstDayOfMonth <= 3) {
        numberShortWeek.push('5');
    } else if (firstDayOfMonth === 1 && lastDayOfMonth === 7) {
        numberShortWeek.push('0');
    } else if (lastDayOfMonth === 6 && firstDayOfMonth <= 2) {
        numberShortWeek.push('6');
    } else if (lastDayOfMonth === 7 && firstDayOfMonth <= 1) {
        numberShortWeek.push('0');
    } else {
        numberShortWeek.push('error');
    }
    return numberShortWeek;
}
