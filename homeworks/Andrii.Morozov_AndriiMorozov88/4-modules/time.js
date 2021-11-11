const calendar = document.querySelector('[data-date]');
export function receiveDayDates() {
    const monthDays = document.querySelector('[data-day-dates]');
    monthDays.style.display = 'flex';
    monthDays.style.height = '30px';
    const long = [0, 2, 4, 6, 7, 9, 11];
    const short = [3, 5, 8, 10];
    calendar.addEventListener('change', () => {
        monthDays.innerText = '';
        const date = new Date(calendar.value);
        const weekDay = date.getDay();
        const monthOnly = date.getMonth();
        const yearOnly = date.getFullYear();
        let lastDate;
        if (long.includes(monthOnly)) {
            lastDate = 32;
        } else if (short.includes(monthOnly)) {
            lastDate = 31;
        } else {
            lastDate = 29;
        }
        for (let i = 1; i < lastDate; i++) {
            const checkDay = new Date(yearOnly, monthOnly, i);
            if (checkDay.getDay() === weekDay) {
                const dates = document.createElement('div');
                monthDays.append(dates);
                dates.style.margin = '5px';
                dates.innerText = i;
            }
        }
    });
}
export function getLongMonth() {
    const longMonthOutput = document.querySelector('[data-long-month]');
    longMonthOutput.style.height = '30px';
    const long = [0, 2, 4, 6, 7, 9, 11];
    const btn = document.querySelector('[data-long]');
    btn.addEventListener('click', () => {
        const date = new Date(calendar.value);
        const monthOnly = date.getMonth();
        longMonthOutput.style.margin = '5px';
        longMonthOutput.innerHTML = long.includes(monthOnly);
    });
}
export function getShortestWeek() {
    const long = [0, 2, 4, 6, 7, 9, 11];
    const short = [3, 5, 8, 10];
    const buttonShortWeek = document.querySelector('[data-btn-short-week]');
    const resultShortWeek = document.querySelector('[data-short-week]');
    resultShortWeek.style.height = '30px';
    calendar.addEventListener('change', () => {
        const date = new Date(calendar.value);
        const monthOnly = date.getMonth();
        const yearOnly = date.getFullYear();
        const firstDate = new Date(yearOnly, monthOnly, 1);
        let lastDay;
        if (long.includes(monthOnly)) {
            const lastDate = new Date(yearOnly, monthOnly, 31);
            lastDay = lastDate.getDay();
        } else if (short.includes(monthOnly)) {
            const lastDate = new Date(yearOnly, monthOnly, 30);
            lastDay = lastDate.getDay();
        } else {
            const lastDate = new Date(yearOnly, monthOnly, 28);
            lastDay = lastDate.getDay();
        }

        if (lastDay === 0) {
            lastDay = 7;
        }
        let firstDay = firstDate.getDay();
        if (firstDay === 0) {
            firstDay = 7;
        }
        const amountFirstDays = 8 - firstDay;
        let shortWeekDays;
        if (lastDay !== 0) {
            if (amountFirstDays > lastDay) {
                shortWeekDays = lastDay;
            } else if (amountFirstDays < lastDay) {
                shortWeekDays = amountFirstDays;
            } else {
                shortWeekDays = (lastDay);
            }
        }
        buttonShortWeek.addEventListener('click', () => {
            resultShortWeek.style.margin = '5px';
            resultShortWeek.innerHTML = shortWeekDays;
        });
    });
}
export function getFullWeek() {
    const long = [0, 2, 4, 6, 7, 9, 11];
    const short = [3, 5, 8, 10];
    const buttonFullWeek = document.querySelector('[data-btn-full-week]');
    const resultFullWeek = document.querySelector('[data-full-week]');
    calendar.addEventListener('change', () => {
        const date = new Date(calendar.value);
        const monthOnly = date.getMonth();
        const yearOnly = date.getFullYear();
        const firstDate = new Date(yearOnly, monthOnly, 1);
        let weekAmount = 3;
        if (firstDate.getDay() === 1) {
            weekAmount = 4;
        }
        if (long.includes(monthOnly)) {
            const lastDate = new Date(yearOnly, monthOnly, 31);
            if (lastDate.getDay() < 3) {
                weekAmount = 4;
            }
        } else if (short.includes(monthOnly)) {
            const lastDate = new Date(yearOnly, monthOnly, 30);
            if (lastDate.getDay() < 2) {
                weekAmount = 4;
            }
        } else if (monthOnly === 1) {
            const lastDate = new Date(yearOnly, monthOnly, 28);
            if (lastDate.getDay() === 0) {
                weekAmount = 4;
            }
        }
        buttonFullWeek.addEventListener('click', () => {
            resultFullWeek.style.margin = '5px';
            resultFullWeek.innerHTML = weekAmount;
        });
    });
}
