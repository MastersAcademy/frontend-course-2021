// export function getMondaysOfMonth(date) {
//     const inputData = date.value;
//     const inputDataArray = inputData.split('-');
//     const year = inputDataArray[0];
//     const month = inputDataArray[1];
//     const day = inputDataArray[2];
//     const mondayInMonth = new Date(year, month, day);
//     const mondays = [];
//     mondayInMonth.setDate(1);
//     while (mondayInMonth.getDay() !== 1) {
//         mondayInMonth.setDate(mondayInMonth.getDay() + 1);
//     }
//     while (mondayInMonth.getMonth() === month) {
//         mondays.push(new Date(mondayInMonth.getTime()));
//         mondayInMonth.setDate(mondayInMonth.getDate() + 7);
//     }
//     return mondays;
// }

export function isMonthLong(date) {
    const inputData = date.value;
    const inputDataArray = inputData.split('-');
    const year = inputDataArray[0];
    const month = inputDataArray[1];
    const lengthMonth = new Date(year, month, 0);
    const longMonth = lengthMonth.getDate();
    if (longMonth === 31) {
        return true;
    } return false;
}

// export function shortestWeekDaysNumber(date) {
//     return 3;
// }

// export function fullWeeksNumberInMonth(date) {
//     return 3;
// }
