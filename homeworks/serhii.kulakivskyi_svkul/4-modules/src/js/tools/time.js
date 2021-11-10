/**
 * @param date - date string of any supported format
 * @returns array of weeks
 */
export function getWeeksOfMonth(date) {
    const selectedDate = new Date(date);
    const selectedDateMonth = selectedDate.getMonth() + 1;
    const selectedDateYear = selectedDate.getFullYear();

    const daysInMonth = new Date(selectedDateYear, selectedDateMonth, 0).getDate();
    const firstDay = new Date(selectedDateYear, selectedDateMonth - 1, 0).getDay();

    const month = [];

    let startDate = 1;

    for (let i = 0; i < 6; i++) {
        const week = [];

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                week.push('');
            } else if (startDate > daysInMonth) {
                break;
            } else {
                week.push(startDate);
                startDate++;
            }
        }

        month.push(week);
    }

    return month;
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getMondaysOfMonth(date) {
    return date.map((week) => week[0]).filter((day) => !!day);
}

/**
* @param date - date string of any supported format
* @returns {boolean} true if month of a date has 31 day, otherwise returns false
*/
export function isMonthLong(date) {
    const lastWeek = date[date.length - 1];

    return lastWeek[lastWeek.length - 1] === 31;
}

/**
* @param date - date string of any supported format
* @returns {number} number of days in a shortest week of the date month
*/
export function shortestWeekDaysNumber(date) {
    const weekDaysLength = date.map((week) => week.filter((day) => !!day).length);

    return Math.min(...weekDaysLength);
}

/**
* @param date - date string of any supported format
* @returns {number} number of full weeks in the date month. To be full,
* week should start and end in the same month
*/
export function fullWeeksNumberInMonth(date) {
    // eslint-disable-next-line max-len
    const fullWeeks = date.map((week) => week.filter((day) => !!day).length).filter((days) => days === 7);

    return fullWeeks.length;
}
