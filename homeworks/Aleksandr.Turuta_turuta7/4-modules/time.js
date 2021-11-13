const getMondaysOfMonth = (year, month) => {
    const counter = [];
    let newDate;
    const daysInMount = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMount; day++) {
        newDate = new Date(year, month - 1, day);
        if (newDate.getDay() === 1 && day !== 0) counter.push(day);
    }
    return `[${counter}]`;
};

const isMonthLong = (year, month) => {
    const daysInMount = new Date(year, month, 0).getDate();
    if (daysInMount === 31) return true;
    return false;
};

const shortestWeekDaysNumber = (year, month) => {
    let daysInWeek = 1;
    const weekMinimumNumberOfDays = [];
    let date;
    const daysInMount = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMount; day++) {
        date = new Date(year, month - 1, day);
        if (date.getDay() === 0) {
            weekMinimumNumberOfDays.push(daysInWeek);
            daysInWeek = 1;
        } else {
            daysInWeek += 1;
        }
    }
    if (daysInWeek - 1 !== 0) weekMinimumNumberOfDays.push(daysInWeek - 1);
    weekMinimumNumberOfDays.sort((a, b) => (a > b ? 1 : -1));
    return weekMinimumNumberOfDays[0];
};

const fullWeeksNumberInMonth = (year, month) => {
    let weeks = 0;
    let daysInWeek = 1;
    let date = new Date(year, month - 1, 1);
    const daysInMount = new Date(year, month, 0).getDate();

    for (let day = 1; day <= daysInMount; day++) {
        if (date.getDay() === 6 && daysInWeek >= 7) {
            daysInWeek = 1;
            weeks++;
        } else {
            daysInWeek += 1;
        }
        date = new Date(year, month - 1, day);
    }
    return weeks;
};

export {
    getMondaysOfMonth,
    isMonthLong,
    shortestWeekDaysNumber,
    fullWeeksNumberInMonth,
};
