const monthShortEl = document.querySelector('[data-mounth-long-answer]');
const monthMondaysEl = document.querySelector('[data-mondays-answer]');
const shortWeeksEl = document.querySelector('[data-shortest-week-answer]');
const fullWeeksEl = document.querySelector('[data-full-weeks-aswer]');
const input = document.querySelector('[data-date]');

function getDate() {
    const month = new Date(input.value).getMonth();
    const year = new Date(input.value).getFullYear();
    const arrOfDate = [month, year];
    return arrOfDate;
}

export function shortDay() {
    const getingData = getDate();
    const daysInMonth = new Date(getingData[1], getingData[0], 0).getDate();
    if (daysInMonth < 31) {
        monthShortEl.innerHTML = 'Month is long';
    } else {
        monthShortEl.innerHTML = 'Month is short';
    }
    return daysInMonth;
}

export function mondaysInMonth() {
    const getingData = getDate();
    const d = new Date(getingData[1], getingData[0]);
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
    monthMondaysEl.innerHTML = 'Monday in month:';
    mondays.map((current) => monthMondaysEl.insertAdjacentHTML('beforeend', current));
}

export function fullWeek() {
    const getingData = getDate();
    const firstOfMonth = new Date(getingData[1], getingData[0] - 1, 1);
    const lastOfMonth = new Date(getingData[1], getingData[0], 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    const result = Math.trunc(used / 7);
    fullWeeksEl.innerHTML = result;
}

export function incompleteWeeks() {
    const getingData = getDate();
    const firstOfMonth = new Date(getingData[1], getingData[0] - 1, 1);
    const lastOfMonth = new Date(getingData[1], getingData[0], 0);
    const used = firstOfMonth.getDay() + lastOfMonth.getDate();
    if (used % 7 === 0) {
        shortWeeksEl.innerHTML = 'incompleted weeks 0';
    } else {
        shortWeeksEl.innerHTML = 'incompleted weeks 1';
    }
}
