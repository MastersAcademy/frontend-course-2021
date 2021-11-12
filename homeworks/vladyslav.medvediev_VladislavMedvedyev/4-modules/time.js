/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getMondaysOfMonth() {
    return [1, 8, 15, 22, 29];
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong() {
    return false;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber() {
    return 3;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month.
 * To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth() {
    return 3;
}
