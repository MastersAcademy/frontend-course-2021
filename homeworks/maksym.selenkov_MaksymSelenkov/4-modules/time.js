export function getMondaysOfMonth(date) {
    const mondaysArray = [];
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= days; i++) {
        const day = new Date(date.getFullYear(), date.getMonth(), i);
        if (day.getDay() === 1) {
            mondaysArray.push(day.getDate());
        }
    }
    return mondaysArray;
}

export function isMonthLong(date) {
    const longMonths = [0, 2, 4, 6, 7, 9, 11];
    return longMonths.includes(date.getMonth());
}

export function shortestWeekDaysNumber(date) {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    console.log(lastDay);
    const firstWeek = 7 - firstDay;
    const lastWeek = lastDay + 1;
    return firstWeek > lastWeek ? lastWeek : firstWeek;
}

export function fullWeeksNumberInMonth(date) {
    let counter = 0;
    const days = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= days; i++) {
        const firstWeekDay = new Date(date.getFullYear(), date.getMonth(), i).getDay();
        const lastWeekDay = new Date(date.getFullYear(), date.getMonth(), i + 6).getDay();
        const remainder = days - i;
        if (remainder >= 7 && firstWeekDay === 0 && lastWeekDay === 6) {
            counter += 1;
        }
    }
    return counter;
}
