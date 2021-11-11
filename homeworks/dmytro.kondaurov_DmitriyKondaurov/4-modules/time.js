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
