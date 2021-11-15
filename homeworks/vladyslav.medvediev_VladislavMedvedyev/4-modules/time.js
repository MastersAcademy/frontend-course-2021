export function getMondaysOfMonth() {
    const selectedYear = document.querySelector('[data-date-input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date-input]').value.slice(5, 7);
    const getMondaysOutputEl = document.querySelector('[data-get-mondays-output]');
    const d = new Date(selectedYear, selectedMonth, 0);
    const month = d.getMonth();
    const mondaysArr = [];
    d.setDate(1);
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }
    while (d.getMonth() === month) {
        mondaysArr.push(new Date(d.getTime()).toDateString());
        d.setDate(d.getDate() + 7);
    }
    const monday = mondaysArr.toString();
    const mondays = monday.match(/\b\d{2}\b/g);
    getMondaysOutputEl.textContent = `[${mondays}]`;
}

export function isMonthLong() {
    const selectedYear = document.querySelector('[data-date-input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date-input]').value.slice(5, 7);
    const monthLongOutputEl = document.querySelector('[data-month-long-output]');
    const numberDaysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    function ifNumberDays() {
        if (numberDaysInMonth < 31) {
            return false;
        }
        return true;
    }
    monthLongOutputEl.textContent = ifNumberDays();
}

export function shortestWeekDaysNumber() {
    const selectedYear = document.querySelector('[data-date-input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date-input]').value.slice(5, 7);
    const shortestWeekDaysOutputEl = document.querySelector('[data-shortest-week-days-output]');
    const firstDayinMonth = new Date(selectedYear, selectedMonth - 1, 1).getDay();
    const lastDayinMonth = new Date(selectedYear, selectedMonth, 0).getDay();
    const daysToFullWeeks = 7 - firstDayinMonth;
    const daysAfterFullWeeks = lastDayinMonth + 1;
    if (daysToFullWeeks < daysAfterFullWeeks) {
        shortestWeekDaysOutputEl.textContent = daysToFullWeeks;
    } else {
        shortestWeekDaysOutputEl.textContent = daysAfterFullWeeks;
    }
}

export function fullWeeksNumberInMonth() {
    const selectedYear = document.querySelector('[data-date-input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date-input]').value.slice(5, 7);
    const fullWeeksOutputEl = document.querySelector('[data-full-weeks-output]');
    const numberDaysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    const firstDayinMonth = new Date(selectedYear, selectedMonth - 1, 1).getDay();
    const lastDayinMonth = new Date(selectedYear, selectedMonth, 0).getDay();
    const daysToFullWeeks = 7 - firstDayinMonth;
    console.log(firstDayinMonth);
    const daysAfterFullWeeks = lastDayinMonth + 1;
    if (lastDayinMonth < 6 && daysToFullWeeks < 7) {
        const fullWeeksNumber = (numberDaysInMonth - (daysToFullWeeks + daysAfterFullWeeks))
            / 7;
        fullWeeksOutputEl.textContent = fullWeeksNumber;
    } else {
        const fullWeeksNumber = (numberDaysInMonth - (daysToFullWeeks + daysAfterFullWeeks))
            / 7 + 1;
        fullWeeksOutputEl.textContent = fullWeeksNumber;
    }
}
