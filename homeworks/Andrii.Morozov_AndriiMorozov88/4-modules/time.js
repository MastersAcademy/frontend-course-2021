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
        let weekDay = date.getDay();
        let dateOnly = date.getDate();
        let monthOnly = date.getMonth();
        let yearOnly = date.getFullYear();
        if (long.includes(monthOnly)) {
            var lastDate = 32;
        }
        else if (short.includes(monthOnly)) {
            var lastDate = 31;
        }
        else {
            var lastDate = 29;
        }
        for (let i = 1; i < lastDate; i++) {
            let checkDay = new Date(yearOnly, monthOnly, i);
            if (checkDay.getDay() === weekDay) {
                let dates = document.createElement('div');
                monthDays.append(dates);
                dates.style.margin = '5px';
                dates.innerText = i;
            }
        }
    });
}
export function longMonth() {
    const longMonthOutput = document.querySelector('[data-long-month]');
    longMonthOutput.style.height = '30px';
    const long = [0, 2, 4, 6, 7, 9, 11];
    let btn = document.querySelector('[data-long]');
    btn.addEventListener('click', () => {
        let date  = new Date(calendar.value);
        let monthOnly = date.getMonth();
        longMonthOutput.style.margin = '5px'
        longMonthOutput.innerHTML = long.includes(monthOnly);
    });
}
export function shortestWeek () {
    const long = [0, 2, 4, 6, 7, 9, 11];
    const short = [3, 5, 8, 10];
    let buttonShortWeek = document.querySelector('[data-btn-short-week]');
    let resultShortWeek = document.querySelector('[data-short-week]');
    resultShortWeek.style.height = '30px';
    calendar.addEventListener('change', () => {
        let date  = new Date(calendar.value);
        let monthOnly = date.getMonth();
        let yearOnly = date.getFullYear();
        let firstDate = new Date(yearOnly, monthOnly, 1);
        if (long.includes(monthOnly)) {
            let lastDate = new Date(yearOnly, monthOnly, 31);
            var lastDay = lastDate.getDay();
        }
        else if (short.includes(monthOnly)) {
            let lastDate = new Date(yearOnly, monthOnly, 30);
            var lastDay = lastDate.getDay();
        }
        else {
            let lastDate = new Date(yearOnly, monthOnly, 28);
            var lastDay = lastDate.getDay();
        }
        
        if (lastDay === 0) {
            var lastDay = 7
        }
        var firstDay = firstDate.getDay();
        if (firstDay === 0) {
            var firstDay = 7;
        }
        let amountFirstDays = 8 - firstDay;
        if (lastDay !== 0) {
            if (amountFirstDays > lastDay) {
                var shortWeekDays = lastDay;
            }
        else if (amountFirstDays < lastDay) {
                var shortWeekDays = amountFirstDays;
        }
        else {
            var shortWeekDays = (lastDay);
        }
        }
        buttonShortWeek.addEventListener('click', () => {
        resultShortWeek.style.margin = '5px';
        resultShortWeek.innerHTML = shortWeekDays;
        });
    });
}
export function fullWeek() {
    let long = [0, 2, 4, 6, 7, 9, 11];
    let short = [3, 5, 8, 10];
    let buttonFullWeek = document.querySelector('[data-btn-full-week]');
    let resultFullWeek = document.querySelector('[data-full-week]');
    calendar.addEventListener('change', () => {
        let date  = new Date(calendar.value);
        let monthOnly = date.getMonth();
        let yearOnly = date.getFullYear();
        let firstDate = new Date(yearOnly, monthOnly, 1);
        var weekAmount = 3;
        if (firstDate.getDay() === 1) {
            var weekAmount = 4;
        }
        if (long.includes(monthOnly)) {
            let lastDate = new Date(yearOnly, monthOnly, 31);
            if (lastDate.getDay() < 3) {
                var weekAmount = 4;
            }
        }
        else if (short.includes(monthOnly)) {
            let lastDate = new Date(yearOnly, monthOnly, 30);
            if (lastDate.getDay() < 2) {
                var weekAmount = 4;
            }
        }
        else if (monthOnly === 1) {
            let lastDate = new Date(yearOnly, monthOnly, 28);
            if (lastDate.getDay() === 0) {
                var weekAmount = 4;
            }
        }
        buttonFullWeek.addEventListener('click', () => {
        resultFullWeek.style.margin = '5px'
        resultFullWeek.innerHTML = weekAmount;
        console.log(weekAmount);
        });
    });
}