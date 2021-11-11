const getWeeksInMonth = (date) => {
    const splitDate = date.split('-');
    const month = splitDate[1] - 1;
    const year = splitDate[0];
    const weeks = [];
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    let dayOfWeekCounter = firstDay;

    for (let i = 1; i <= totalDays; i++) {
        if (dayOfWeekCounter === 1 || weeks.length === 0) {
            weeks.push([]);
        }
        weeks[weeks.length - 1].push(i);
        dayOfWeekCounter = (dayOfWeekCounter + 1) % 7;
    }
    return weeks;
};

export const getMondaysOfMonth = (date) => {
    const mondaysCount = [];
    const weeks = getWeeksInMonth(date);
    if (weeks[0].length === 7) {
        mondaysCount.push(weeks[0][0]);
    }
    weeks.shift();
    weeks.forEach((week) => {
        mondaysCount.push(week[0]);
    });
    return `[${mondaysCount.join(', ')}]`;
};

export const isMonthLong = (date) => {
    const splitDate = date.split('-');
    const month = splitDate[1];
    const year = splitDate[0];
    return new Date(year, month, 0).getDate() === 31;
};

export const shortestWeekDaysNumber = (date) => {
    const weeks = getWeeksInMonth(date);
    return (weeks[0].length < weeks[weeks.length - 1].length)
        ? weeks[0].length : weeks[weeks.length - 1].length;
};

export const fullWeeksNumberInMonth = (date) => {
    const weeks = getWeeksInMonth(date);
    return weeks.filter((week) => week.length === 7).length;
};
