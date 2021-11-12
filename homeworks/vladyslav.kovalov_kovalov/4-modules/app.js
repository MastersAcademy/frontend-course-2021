import { Time } from './time.js';

class App {
    constructor(timeValue) {
        this.datePickerEl = document.querySelector('[data-datepicker]');
        this.time = new Date(timeValue);
        this.clock = document.querySelector('[data-clock]');
    }

    initTodayDate() {
        const [now] = this.time.toISOString().split('T');
        this.datePickerEl.setAttribute('min', now);
        this.datePickerEl.value = now;
    }

    renderTime(date) {
        return setInterval(() => {
            const hours = date.getHours() < 10 ? `${0}${String(date.getHours())}` : date.getHours();
            const minutes = date.getMinutes() < 10 ? `${0}${String(date.getMinutes())}` : date.getMinutes();
            this.clock.value = `${hours}:${minutes}`;
        }, 1000);
    }

    convertTZ(date, tzString) {
        return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }));
    }
}

const now = new Date();
const app = new App(now);
app.initTodayDate();
const interval = app.renderTime(new Date());

const time = new Time();

document.querySelector('[data-datepicker]').addEventListener('change', (e) => {
    e.preventDefault();
    const { value } = e.target;
    app.time = new Date(value);

    Array.from(document.querySelector('[data-page]').children).filter((element) => element.dataset.card).forEach((element) => {
        const cardResult = element.children[0];
        cardResult.innerHTML = '&nbsp;';
        return cardResult;
    });
});

document.querySelector('[data-page]').addEventListener('click', (e) => {
    if (e.target.dataset.button === '') {
        const currentElement = e.target.previousElementSibling;
        const { card: action } = e.target.closest('[data-card]').dataset;
        const result = time[action](app.time);
        currentElement.textContent = result;
    }
});

document.querySelector('[data-timezone]').addEventListener('change', (e) => {
    const { value } = e.target;
    const timezone = app.convertTZ(new Date(), value);
    clearInterval(interval);
    app.clock.value = '';
    app.renderTime(timezone);
});
