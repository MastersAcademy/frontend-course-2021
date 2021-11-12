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

export const getDaysOfMonth = (date, value) => {
    const splitDate = date.split('-');
    const month = splitDate[1] - 1;
    const year = splitDate[0];
    const totalDays = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= totalDays; i++) {
        const checkDay = new Date(year, month, i);
        if (checkDay.getDay() === value) days.push(checkDay.getDate());
    }
    return `[${days.join(', ')}]`;
};

export const isMonthLong = (date) => {
    const splitDate = date.split('-');
    const month = splitDate[1];
    const year = splitDate[0];
    return new Date(year, month, 0).getDate() === 31;
};

export const shortestWeekDaysNumber = (date) => {
    const weeks = getWeeksInMonth(date);
    const firstWeek = weeks[0].length;
    const lastWeek = weeks[weeks.length - 1].length;
    return (firstWeek < lastWeek)
        ? firstWeek : lastWeek;
};

export const fullWeeksNumberInMonth = (date) => {
    const weeks = getWeeksInMonth(date);
    return weeks.filter((week) => week.length === 7).length;
};
