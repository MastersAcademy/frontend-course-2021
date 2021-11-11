export function getMondaysOfMonth(date) {
    const inputData = date.value;
    const inputDataArray = inputData.split('-');
    const year = inputDataArray[0];
    const month = +inputDataArray[1];
    const day = inputDataArray[2];
    const mondayInMonth = new Date(year, month - 1, day);
    const mondays = [];
    while (mondayInMonth.getDay() !== 1) {
        mondayInMonth.setDate(mondayInMonth.getDay() + 1);
    }
    console.log(new Date(mondayInMonth.getTime()));
    while (mondayInMonth.getMonth() + 1 === month) {
        mondays.push(new Date(mondayInMonth.getTime()).getDate());
        mondayInMonth.setDate(mondayInMonth.getDate() + 7);
    }
    return mondays;
}

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

export function shortestWeekDaysNumber(date) {
    const inputData = date.value;
    const inputDataArray = inputData.split('-');
    const year = inputDataArray[0];
    const month = inputDataArray[1];
    const firstDayMonth = new Date(year, month - 1, 1);
    const lastDayMonth = new Date(year, month, 0);
    console.log(firstDayMonth);
    let firstWeek = 0;
    let lastWeek = 1;
    while (firstDayMonth.getDay() !== 1) {
        firstDayMonth.setDate(firstDayMonth.getDate() + 1);
        firstWeek++;
    }
    while (lastDayMonth.getDay() !== 1) {
        lastDayMonth.setDate(lastDayMonth.getDate() - 1);
        lastWeek++;
    }
    if (firstWeek < lastWeek) {
        return firstWeek;
    } return lastWeek;
}

export function fullWeeksNumberInMonth(date) {
    const inputData = date.value;
    const inputDataArray = inputData.split('-');
    const year = inputDataArray[0];
    const month = inputDataArray[1];
    const firstDayMonth = new Date(year, month - 1, 1);
    const lastDayMonth = new Date(year, month, 0);
    const daysInMonth = lastDayMonth.getDate();
    console.log(daysInMonth);
    let numberDay;
    let firstWeek = 0;
    let lastWeek = 1;
    while (firstDayMonth.getDay() !== 1) {
        firstDayMonth.setDate(firstDayMonth.getDate() + 1);
        firstWeek++;
    }
    while (lastDayMonth.getDay() !== 1) {
        lastDayMonth.setDate(lastDayMonth.getDate() - 1);
        lastWeek++;
    }
    if (firstWeek < 7 && lastWeek < 7) {
        numberDay = daysInMonth - (firstWeek + lastWeek);
    } else if (firstWeek < 7 && lastWeek === 7) {
        numberDay = daysInMonth - firstWeek;
    } else if (firstWeek === 7 && lastWeek < 7) {
        numberDay = daysInMonth - lastWeek;
    }
    return Math.ceil(numberDay / 7);
}
