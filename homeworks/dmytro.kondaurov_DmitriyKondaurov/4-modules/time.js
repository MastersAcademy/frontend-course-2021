/**
 * @param date - date string of any supported format
 * @returns array of Mondays dates in a month the date from
 */
export function getMondaysOfMonth(date) {
    const dateObject = new Date(date);
    const res = [];
    for (let i = 1; i <= 31; i++) {
        dateObject.setDate(i);
        if (dateObject.getDay() === 1) {
            res.push(dateObject.getDate());
        }
    }
    return res;
}
/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    const dateObject = new Date(date);
    dateObject.setDate(31);
    return dateObject.getDate() === 31;
}
/**
 * @param date - date string of any supported format
 * @returns {number} of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    const dateObject = new Date(date);
    const dateYear = dateObject.getFullYear();
    const dateMonth = dateObject.getMonth();
    dateObject.setDate(1);
    const firstWeekLength = 7 - ((dateObject.getDay() + 6) % 7);
    let lastWeekLength;
    if (isMonthLong(date)) {
        dateObject.setDate(31);
        lastWeekLength = ((dateObject.getDay() + 6) % 7) + 1;
    } else if (dateMonth !== 1) {
        dateObject.setDate(30);
        lastWeekLength = ((dateObject.getDay() + 6) % 7) + 1;
    } else if (((dateYear % 4 === 0) && (dateYear % 100 !== 0)) || (dateYear % 400 === 0)) {
        dateObject.setDate(29);
        lastWeekLength = ((dateObject.getDay() + 6) % 7) + 1;
    } else {
        dateObject.setDate(28);
        lastWeekLength = ((dateObject.getDay() + 6) % 7) + 1;
    }
    return Math.min(firstWeekLength, lastWeekLength);
}
