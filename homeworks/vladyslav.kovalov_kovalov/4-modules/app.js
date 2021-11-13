import { Time } from './time.js';

class App {
    constructor(now) {
        this.now = now;
        this.datePickerEl = document.querySelector('[data-datepicker]');
        this.pageEl = document.querySelector('[data-page]');
        this.timezoneEl = document.querySelector('[data-timezone]');
        this.clock = document.querySelector('[data-clock]');
    }

    initTodayDate() {
        const [now] = this.now.toISOString().split('T');
        this.datePickerEl.setAttribute('min', now);
        this.datePickerEl.value = now;
    }

    timeClock(date = this.now) {
        const hours = date.getHours() < 10 ? `${0}${String(date.getHours())}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `${0}${String(date.getMinutes())}` : date.getMinutes();
        this.clock.value = `${hours}:${minutes}`;
    }

    convertTZ(date, tzString) {
        return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }));
    }
}

const now = new Date();
const app = new App(now);
const time = new Time();
app.initTodayDate();
const clock = setInterval(app.timeClock(), 1000);

app.datePickerEl.addEventListener('change', (e) => {
    e.preventDefault();
    const { value } = e.target;
    app.now = new Date(value);

    Array.from(document.querySelector('[data-page]').children).filter((element) => element.dataset.card).forEach((element) => {
        const cardResult = element.children[0];
        cardResult.innerHTML = '&nbsp;';
        return cardResult;
    });
});

app.pageEl.addEventListener('click', (e) => {
    if (e.target.dataset.button === '') {
        const currentElement = e.target.previousElementSibling;
        const { card: action } = e.target.closest('[data-card]').dataset;
        const result = time[action](app.now);
        currentElement.textContent = result;
    }
});

app.timezoneEl.addEventListener('change', (e) => {
    const { value } = e.target;
    const timezone = app.convertTZ(new Date(), value);
    clearInterval(clock);
    app.clock.value = '';
    setInterval(app.timeClock(timezone, 1000));
});
