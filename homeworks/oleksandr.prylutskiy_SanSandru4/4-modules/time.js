export function getMondaysOfMonth(date) {
    const inputData = date.value;
    const mondays = [];

    if (inputData === '') {
        alert('Enter date, please!');
    } else {
        const inputDataArray = inputData.split('-');
        const year = inputDataArray[0];
        const month = +inputDataArray[1];
        const dateDay = new Date(year, month - 1, 1);
        console.log(dateDay);
        while (dateDay.getDay() !== 1) {
            dateDay.setDate(dateDay.getDate() + 1);
            if (dateDay.getDay() === 1) {
                break;
            }
            console.log(dateDay.setDate(dateDay.getDate() + 1));
        }
        while (dateDay.getMonth() + 1 === month) {
            mondays.push(new Date(dateDay.getTime()).getDate());
            dateDay.setDate(dateDay.getDate() + 7);
        }
    }

    return mondays;
}

export function isMonthLong(date) {
    const inputData = date.value;
    let result = '';

    if (inputData === '') {
        alert('Enter date, please!');
    } else {
        const inputDataArray = inputData.split('-');
        const year = inputDataArray[0];
        const month = inputDataArray[1];
        const lengthMonth = new Date(year, month, 0);
        const longMonth = lengthMonth.getDate();
        if (longMonth === 31) {
            result = 'true';
        } else result = 'false';
    }

    return result;
}

export function shortestWeekDaysNumber(date) {
    const inputData = date.value;
    let shortWeek;
    let firstWeek = 0;
    let lastWeek = 1;

    if (inputData === '') {
        alert('Enter date, please!');
    } else {
        const inputDataArray = inputData.split('-');
        const year = inputDataArray[0];
        const month = inputDataArray[1];
        const firstDayMonth = new Date(year, month - 1, 1);
        const lastDayMonth = new Date(year, month, 0);
        while (firstDayMonth.getDay() !== 1) {
            firstDayMonth.setDate(firstDayMonth.getDate() + 1);
            firstWeek++;
        }
        while (lastDayMonth.getDay() !== 1) {
            lastDayMonth.setDate(lastDayMonth.getDate() - 1);
            lastWeek++;
        }
        if (lastWeek < firstWeek || firstWeek === 0) {
            shortWeek = lastWeek;
        } else shortWeek = firstWeek;
    }

    return shortWeek;
}

export function fullWeeksNumberInMonth(date) {
    const inputData = date.value;
    let numberDay;
    let firstWeek = 0;
    let lastWeek = 1;
    let resultNumWeeks;

    if (inputData === '') {
        alert('Enter date, please!');
    } else {
        const inputDataArray = inputData.split('-');
        const year = inputDataArray[0];
        const month = inputDataArray[1];
        const firstDayMonth = new Date(year, month - 1, 1);
        const lastDayMonth = new Date(year, month, 0);
        const daysInMonth = lastDayMonth.getDate();

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
        resultNumWeeks = Math.ceil(numberDay / 7);
    }
    return resultNumWeeks;
}
