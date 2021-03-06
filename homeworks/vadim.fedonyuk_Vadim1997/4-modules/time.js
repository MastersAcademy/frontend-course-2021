export function getMondaysOfMonth(date) {
    const selectedDate = new Date(date);
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const numberDaysOfMonth = new Date(year, month + 1, 0).getDate();
    const mondaysArray = [];
    for (let i = 1; i <= numberDaysOfMonth; i++) {
        const daysOfMonth = new Date(year, month, i);
        if (daysOfMonth.getDay() === 1) {
            mondaysArray.push(i);
        }
    }
    return mondaysArray;
}

export function isMonthLong(date) {
    const selectedDate = new Date(date);
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    let numberDaysOfMonth = new Date(year, month + 1, 0).getDate();
    if (numberDaysOfMonth > 30) {
        numberDaysOfMonth = true;
    } else numberDaysOfMonth = (month + 1 === 2) && (numberDaysOfMonth > 28);
    return numberDaysOfMonth;
}

export function shortestWeekDaysNumber(date) {
    const selectedDate = new Date(date);
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const numberDaysOfMonth = new Date(year, month + 1, 0).getDate();
    let numberFirstWeek = 0;
    let numberLastWeek = 0;
    let shortestDaysWeek;
    for (let i = 1; i <= numberDaysOfMonth; i++) {
        const daysOfMonth = new Date(year, month, i);
        numberFirstWeek += 1;
        if (daysOfMonth.getDay() === 0) {
            break;
        }
    }
    for (let i = numberDaysOfMonth; i >= 1; i--) {
        const daysOfMonth = new Date(year, month, i);
        numberLastWeek += 1;
        if (daysOfMonth.getDay() === 1) {
            break;
        }
    }
    if (numberFirstWeek < numberLastWeek) {
        shortestDaysWeek = numberFirstWeek;
    } else {
        shortestDaysWeek = numberLastWeek;
    }
    return shortestDaysWeek;
}

export function fullWeeksNumberInMonth(date) {
    const selectedDate = new Date(date);
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    let numberWeek = 0;
    let firstWeekDay;
    const numberDaysOfMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= numberDaysOfMonth; i++) {
        const daysOfMonthMon = new Date(year, month, i);
        if (daysOfMonthMon.getDay() === 1) {
            firstWeekDay = i;
            for (i = firstWeekDay; i <= numberDaysOfMonth; i++) {
                const daysOfMonthSun = new Date(year, month, i);
                if (daysOfMonthSun.getDay() === 0) {
                    numberWeek += 1;
                }
            }
        }
    }
    return numberWeek;
}
