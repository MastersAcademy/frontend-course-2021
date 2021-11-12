/**
 * Internal function for creating calendar as matrix (array)
 */
function getMatrixOfCurrentMonth(pickedDate) {
    const date = new Date(pickedDate);
    const amountDaysPerWeek = 7;
    date.setDate(1);
    const before = Array(date.getDay()).fill(null);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    const after = Array(amountDaysPerWeek - (date.getDay() + 1)).fill(null);
    const pickedMonth = Array(date.getDate())
        .fill(1)
        .map((numb, index) => {
            date.setDate(numb + index);
            return {
                date: date.getDate(),
                dayOfWeek: date.getDay(),
            };
        });
    const fullWeeksOfPickedMonth = [...before, ...pickedMonth, ...after];
    return Array(fullWeeksOfPickedMonth.length / amountDaysPerWeek)
        .fill(null)
        .map(() =>
            fullWeeksOfPickedMonth.splice(0, amountDaysPerWeek).filter(Boolean)
        );
}

/**
 * @param date - date string of any supported format
 * @returns array of Friday dates in a month the date from
 */
export function getFridaysOfMonth(date) {
    return getMatrixOfCurrentMonth(date).reduce((result, week) => {
        const foundDay = week.find((day) => day.dayOfWeek === 5);
        return foundDay ? [...result, foundDay.date] : result;
    }, []);
}

/**
 * @param date - date string of any supported format
 * @returns {boolean} true if month of a date has 31 day, otherwise returns false
 */
export function isMonthLong(date) {
    const pickedDate = new Date(date);
    pickedDate.setMonth(pickedDate.getMonth() + 1);
    pickedDate.setDate(0);
    return pickedDate.getDate() === 31;
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of days in a shortest week of the date month
 */
export function shortestWeekDaysNumber(date) {
    return Math.min(
        ...getMatrixOfCurrentMonth(date).map((week) => week.length)
    );
}

/**
 * @param date - date string of any supported format
 * @returns {number} number of full weeks in the date month. To be full, week should start and end in the same month
 */
export function fullWeeksNumberInMonth(date) {
    return getMatrixOfCurrentMonth(date).filter((week) => week.length === 7)
        .length;
}
