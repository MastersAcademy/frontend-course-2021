const monthIs = document.querySelector('[data-mounth-long-answer]');
const monthMondays = document.querySelector('[data-mondays-answer]');
const shortWeeks = document.querySelector('[data-shortest-week-answer]');

export function daysInMonthFnc(isYear, isMonth) {
    const daysInMonth = new Date(isYear, isMonth, 0).getDate();
    if (daysInMonth < 31) {
        monthIs.insertAdjacentHTML('beforeend', 'long');
        console.log(1);
    } else {
        monthIs.insertAdjacentHTML('beforeend', 'short');
        console.log(0);
    }
    return daysInMonth;
}

export function mondaysInMonth(date) {
    const d = new Date(date);
    const month = d.getMonth();
    const mondays = [];
    d.setDate(1);
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }
    while (d.getMonth() === month) {
        const pushDate = new Date(d.getTime());
        mondays.push(`${pushDate.getDate()}/${(pushDate.getMonth() + 1)}/${pushDate.getFullYear()}, `);
        d.setDate(d.getDate() + 7);
    }
    mondays.map((current) => monthMondays.insertAdjacentHTML('beforeend', current));
    console.log(mondays);
}

export function week(year, monthNumber) {
    const firstOfMonth = new Date(year, monthNumber - 1, 1);
    const lastOfMonth = new Date(year, monthNumber, 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    return Math.trunc(used / 7);
}

export function incompleteWeeks(year, monthNumber) {
    const firstOfMonth = new Date(year, monthNumber - 1, 1);
    const lastOfMonth = new Date(year, monthNumber, 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    if (used % 7 === 0) {
        console.log(0);
        shortWeeks.innerHTML = 0;
    } else {
        console.log(1);
        shortWeeks.innerHTML = 1;
    }
}
