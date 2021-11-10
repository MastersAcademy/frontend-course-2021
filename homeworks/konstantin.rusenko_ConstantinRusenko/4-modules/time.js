export const getMondaysOfMonth = (date) => {
    const nowDate = date.split('-');
    nowDate.splice(2, 1, '0');
    const monthLength = new Date(...nowDate).getDate();
    const arrOfMond = [];
    for (let i = 1; i <= monthLength; i++) {
        const monthDay = new Date(date);
        monthDay.setDate(i);
        if (monthDay.getDay() === 1) arrOfMond.push(i);
    }
    return arrOfMond;
};

export const isMonthLong = (date) => {
    const nowDate = date.split('-');
    nowDate.splice(2, 1, '0');
    const monthLength = new Date(...nowDate).getDate();
    return monthLength === 31;
};

export const fullWeeksNumberInMonth = (date) => {
    const nowDate = date.split('-');
    nowDate.splice(2, 1, '0');
    const monthLength = new Date(...nowDate).getDate();
    const arrOfMond = getMondaysOfMonth(date);
    return (monthLength + 1 - arrOfMond[arrOfMond.length - 1] === 7)
        ? arrOfMond.length : arrOfMond.length - 1;
};

export const shortestWeekDaysNumber = (date) => {
    let firstWeek = 7;
    let lastWeek = 7;
    const nowDate = date.split('-');
    nowDate.splice(2, 1, '0');
    const monthLength = new Date(...nowDate).getDate();
    const arrOfMond = getMondaysOfMonth(date);
    if (arrOfMond[0] !== 1) firstWeek = arrOfMond[0] - 1;
    if (arrOfMond[arrOfMond.length - 1] !== monthLength - 6) {
        lastWeek = monthLength + 1 - arrOfMond[arrOfMond.length - 1];
    }
    return firstWeek > lastWeek ? lastWeek : firstWeek;
};
