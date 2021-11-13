import {input, mondaysShow} from './js.js';

export function getMondays(dateEnter, mon) {
        let d = new Date(input),
        month = d.getMonth(),
        mondays = [];
    d.setDate(1);
    while (d.getDay() !== 1) {
        d.setDate(d.getDate() + 1);
    }
    while (d.getMonth() === month) {
        mondays.push(new Date(d.getTime()));
        d.setDate(d.getDate() + 7);
    }
    let dateMondays = mondays.map((item) => {
        return item.getDate();
    });
    mondaysShow.textContent = dateMondays;
}
