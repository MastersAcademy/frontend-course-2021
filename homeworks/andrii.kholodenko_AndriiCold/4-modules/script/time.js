export function getMondayOfMonth(date) {
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDayOfMonth = lastDayDate.getDate();
    const mondayOfMonthArray = [];
    for (let i = 1; i <= lastDayOfMonth; i++) {
        date.setDate(i);
        if (date.getDay() === 1) {
            mondayOfMonthArray.push(date.getDate());
        }
    }
    return mondayOfMonthArray;
}

export function isMonthLong(date) {
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDayOfMonth = lastDayDate.getDate();
    if (lastDayOfMonth === 31) {
        return 'True';
    }
    return 'False';
}

export function shortTestWeekDaysNumber(date) {
    const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    let numbersOfDate = '';
    if (firstDayDate.getDay() === 1) {
        numbersOfDate = lastDayDate.getDay();
    } else if (firstDayDate.getDay() === 0) {
        numbersOfDate = 1;
    } else if (lastDayDate.getDay() === 0) {
        numbersOfDate = 8 - firstDayDate.getDay();
    } else if (8 - firstDayDate.getDay() >= lastDayDate.getDay()) {
        numbersOfDate = lastDayDate.getDay();
    } else if (8 - firstDayDate.getDay() < lastDayDate.getDay()) {
        numbersOfDate = 8 - firstDayDate.getDay();
    }
    return numbersOfDate;
}

export function fullWeeksNumberInMonth(date) {
    const lastDayDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const lastDayOfMonth = lastDayDate.getDate();
    const dateArrayStart = [];
    const dateArrayEnd = [];
    const arrayFullWeeks = [];
    for (let i = 1; i <= lastDayOfMonth; i++) {
        const fullWeeksDate = new Date(date.getFullYear(), date.getMonth(), i);
        if (fullWeeksDate.getDay() === 1) {
            dateArrayStart.push(fullWeeksDate.getDate());
        }
        if (fullWeeksDate.getDay() === 0) {
            dateArrayEnd.push(fullWeeksDate.getDate());
        }
    }
    for (let i = 0; i <= dateArrayStart.length; i++) {
        if (dateArrayStart[i] < dateArrayEnd[i]) {
            arrayFullWeeks.push('week');
        } else if (dateArrayStart[i] < dateArrayEnd[i + 1]) {
            arrayFullWeeks.push('week');
        }
    }
    return arrayFullWeeks.length;
}
