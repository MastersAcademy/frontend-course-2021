export function getMondayOfMonth(date) {
    const cloneDate = new Date(date);
    const lastDayDate = new Date(cloneDate.getFullYear(), cloneDate.getMonth() + 1, 0);
    const lastDayOfMonth = lastDayDate.getDate();
    const mondayOfMonthArray = [];
    for (let i = 1; i <= lastDayOfMonth; i++) {
        cloneDate.setDate(i);
        if (cloneDate.getDay() === 1) {
            mondayOfMonthArray.push(cloneDate.getDate());
        }
    }
    return mondayOfMonthArray;
}

export function isMonthLong(date) {
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDayOfMonth = lastDayDate.getDate();
    if (lastDayOfMonth === 31) {
        return true;
    }
    return false;
}

export function shortTestWeekDaysNumber(date) {
    const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let firstWeekOfDays;
    let lastWeekOfDays;
    if (firstDayDate.getDay() === 0) {
        firstWeekOfDays = 1;
    } else {
        firstWeekOfDays = 8 - firstDayDate.getDay();
    }
    if (lastDayDate.getDay() === 0) {
        lastWeekOfDays = 7;
    } else {
        lastWeekOfDays = lastDayDate.getDay();
    }
    if (firstWeekOfDays < lastWeekOfDays) {
        return firstWeekOfDays;
    }
    return lastWeekOfDays;
}

export function fullWeeksNumberInMonth(date) {
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDayOfMonth = lastDayDate.getDate();
    let fullWeeks = 0;
    for (let i = 1; i <= lastDayOfMonth; i++) {
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
