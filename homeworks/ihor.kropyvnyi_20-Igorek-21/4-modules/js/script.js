function countDays(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export function getMondaysOfMonth(date) {
    const mondays = [];
    for (let i = 1; i <= countDays(date); i++) {
        const newDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (newDate.getDay() === 1) {
            mondays.push(+i);
        }
    }
    return mondays;
}

export function isMonthLong(date) {
    return countDays(date) > 30;
}

export function shortestWeekDaysNumber(date) {
    let shortestDays = 7;
    let runningDays = 1;
    for (let i = 0; i <= countDays(date); i++) {
        const newDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (newDate.getDay() === 1) {
            if (shortestDays > runningDays) {
                shortestDays = runningDays;
            }
            runningDays = 0;
        }
        runningDays++;
    }
    if (shortestDays > runningDays) {
        shortestDays = runningDays;
    }
    return shortestDays;
}

export function fullWeeksNumberInMonth(date) {
    let fullWeeks = 0;
    for (let i = 1; i <= countDays(date); i++) {
        const newDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (newDate.getDay() === 1) {
            newDate.setDate(newDate.getDate() + 6);
            if (newDate.getMonth() === date.getMonth()) {
                fullWeeks++;
            }
        }
    }
    return fullWeeks;
}
