/*jslint es6:true*/

function getFridaysOfMonth(date) {
    const inputedDate = new Date(date.value);
    const inputedMonth = inputedDate.getMonth();
    const fridays = [];
    inputedDate.setDate(1);

    while (inputedDate.getDay() !== 5) {
        inputedDate.setDate(inputedDate.getDate() + 1);
    }

    while (inputedDate.getMonth() === inputedMonth) {
        fridays.push(inputedDate.getDate());
        inputedDate.setDate(inputedDate.getDate() + 7);
    }

    return fridays;
}

function isMonthLong(date) {
    const inputedDate = new Date(date.value);
    const inputedMonth = inputedDate.getMonth();
    const inputedYear = inputedDate.getFullYear();
    const daysInMonth = new Date(inputedYear, inputedMonth + 1, 0).getDate();

    return daysInMonth > 30;
}

function shortestWeekDaysNumber(date) {
    const inputedDate = new Date(date.value);
    const inputedMonth = inputedDate.getMonth();
    const inputedYear = inputedDate.getFullYear();
    const firstDay = new Date(inputedYear, inputedMonth, 1).getDay();
    const lastDay = new Date(inputedYear, inputedMonth + 1, 0).getDay();
    const daysInFirstWeek = (firstDay > 0) ? 8 - firstDay : 1;
    const daysInLastWeek = (lastDay > 0) ? lastDay : 7;

    return (daysInFirstWeek <= daysInLastWeek) ? daysInFirstWeek : daysInLastWeek;
}

function fullWeeksNumberInMonth(date) {
    const inputedDate = new Date(date.value);
    const inputedMonth = inputedDate.getMonth();
    const inputedYear = inputedDate.getFullYear();
    const daysInMonth = new Date(inputedYear, inputedMonth + 1, 0).getDate();
    const firstDay = new Date(inputedYear, inputedMonth, 1).getDay();
    const lastDay = new Date(inputedYear, inputedMonth + 1, 0).getDay();
    const daysInFirstWeek = (firstDay === 0) ? 1 : 8 - firstDay;
    const fullWeeks = (daysInFirstWeek < 7) ? (daysInMonth - lastDay - daysInFirstWeek) / 7 : (daysInMonth - lastDay) / 7;

    return fullWeeks;
}

function subtractHours(date, hours) {
    const originalDate = new Date(date);
    const timeZoneHours = originalDate.getHours() - hours;
    const currentDate = new Date(originalDate.setHours(timeZoneHours));
    const printHours = ('0' + currentDate.getHours()).substr(-2);
    const printMinutes = ('0' + currentDate.getMinutes()).substr(-2);

    return printHours + ':' + printMinutes;
}

function addHours(date, hours) {
    const originalDate = new Date(date);
    const timeZoneHours = originalDate.getHours() + hours;
    const currentDate = new Date(originalDate.setHours(timeZoneHours));
    const printHours = ('0' + currentDate.getHours()).substr(-2);
    const printMinutes = ('0' + currentDate.getMinutes()).substr(-2);

    return printHours + ':' + printMinutes;
}

export {
    getFridaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
    subtractHours,
    addHours
};
