import { Time } from './time.js';
import { App } from './app.js';

const datePickerEl = document.querySelector('[data-datepicker]');
const pageEl = document.querySelector('[data-page]');
const timezoneEl = document.querySelector('[data-timezone]');
const clockEl = document.querySelector('[data-clock]');

const now = new Date();
const app = new App(now, datePickerEl, pageEl, timezoneEl, clockEl);
const time = new Time();
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
    app.clockEl.value = '';
    setInterval(app.timeClock(timezone, 1000));
});
