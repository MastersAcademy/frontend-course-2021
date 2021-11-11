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
