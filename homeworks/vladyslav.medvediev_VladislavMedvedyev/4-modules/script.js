const monthLongButtonEl = document.querySelector('[data-month-long__button]');
const shortestWeekDaysButtonEl = document.querySelector('[data-shortest-week-days__button]');
const fullWeeksButtonEl = document.querySelector('[data-full-weeks__button]');
const getMondaysButton = document.querySelector('[data-get-mondays__button]');

getMondaysButton.addEventListener('click', () => {
    const selectedYear = document.querySelector('[data-date__input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date__input]').value.slice(5, 7);
    const getMondaysOutputEl = document.querySelector('[data-get-mondays__output]');
    function getMondaysOfMonth() {
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
        const mondays = mondaysArr.toString();
        const test1 = mondays.match(/\b\d{2}\b/g);
        getMondaysOutputEl.textContent = `[${test1}]`;
    }
    getMondaysOfMonth();
});

monthLongButtonEl.addEventListener('click', () => {
    const selectedYear = document.querySelector('[data-date__input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date__input]').value.slice(5, 7);
    const monthLongOutputEl = document.querySelector('[data-month-long__output]');
    const numberDaysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
    function isMonthLong() {
        if (numberDaysInMonth < 31) {
            return false;
        }
        return true;
    }
    monthLongOutputEl.textContent = isMonthLong();
});

shortestWeekDaysButtonEl.addEventListener('click', () => {
    const selectedYear = document.querySelector('[data-date__input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date__input]').value.slice(5, 7);
    const shortestWeekDaysOutputEl = document.querySelector('[data-shortest-week-days__output]');
    const firstDayinMonth = new Date(selectedYear, selectedMonth - 1, 1).getDay();
    const lastDayinMonth = new Date(selectedYear, selectedMonth, 0).getDay();
    const daysToFullWeeks = 7 - firstDayinMonth;
    const daysAfterFullWeeks = lastDayinMonth + 1;
    if (daysToFullWeeks < daysAfterFullWeeks) {
        shortestWeekDaysOutputEl.textContent = daysToFullWeeks;
    } else {
        shortestWeekDaysOutputEl.textContent = daysAfterFullWeeks;
    }
});

fullWeeksButtonEl.addEventListener('click', () => {
    const selectedYear = document.querySelector('[data-date__input]').value.slice(0, 4);
    const selectedMonth = document.querySelector('[data-date__input]').value.slice(5, 7);
    const fullWeeksOutputEl = document.querySelector('[data-full-weeks__output]');
    function fullWeeksNumberInMonth() {
        const numberDaysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
        const firstDayinMonth = new Date(selectedYear, selectedMonth - 1, 1).getDay();
        const lastDayinMonth = new Date(selectedYear, selectedMonth, 0).getDay();
        const daysToFullWeeks = 7 - firstDayinMonth;
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
    fullWeeksNumberInMonth();
});
