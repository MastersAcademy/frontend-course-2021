const getMonthLength = (date) => {
    const nowDate = date.split('-');
    nowDate.splice(2, 1, '0');
    const monthLength = new Date(...nowDate).getDate();
    return monthLength;
};

export const getMondaysOfMonth = (date) => {
    const monthLength = getMonthLength(date);
    const arrOfMond = [];
    for (let i = 1; i <= monthLength; i++) {
        const monthDay = new Date(date);
        monthDay.setDate(i);
        if (monthDay.getDay() === 1) arrOfMond.push(i);
    }
    return arrOfMond;
};

export const isMonthLong = (date) => {
    const monthLength = getMonthLength(date);
    return monthLength === 31;
};

export const fullWeeksNumberInMonth = (date) => {
    const monthLength = getMonthLength(date);
    const arrOfMond = getMondaysOfMonth(date);
    return (monthLength + 1 - arrOfMond[arrOfMond.length - 1] === 7)
        ? arrOfMond.length : arrOfMond.length - 1;
};

export const shortestWeekDaysNumber = (date) => {
    let firstWeek = 7;
    let lastWeek = 7;
    const monthLength = getMonthLength(date);
    const arrOfMond = getMondaysOfMonth(date);
    if (arrOfMond[0] !== 1) firstWeek = arrOfMond[0] - 1;
    if (arrOfMond[arrOfMond.length - 1] !== monthLength - 6) {
        lastWeek = monthLength + 1 - arrOfMond[arrOfMond.length - 1];
    }
    return firstWeek > lastWeek ? lastWeek : firstWeek;
};

export const digitalClock = (timeZone) => {
    const date = new Date();
    let hours = +timeZone === 0 ? date.getHours() : (date.getHours() + +timeZone);
    let minutes = date.getMinutes();
    if (hours > 23) hours %= 24;
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    document.querySelector('[data-clock]').innerHTML = `${hours}:${minutes}`;
};
