export class App {
    constructor(now, datePicker, pageEl, timezoneEl, clockEl) {
        this.now = now;
        this.datePickerEl = datePicker;
        this.pageEl = pageEl;
        this.timezoneEl = timezoneEl;
        this.clockEl = clockEl;
    }

    initTodayDate() {
        const [now] = this.now.toISOString().split('T');
        this.datePickerEl.setAttribute('min', now);
        this.datePickerEl.value = now;
    }

    timeClock(date = this.now) {
        const hours = date.getHours() < 10 ? `0${String(date.getHours())}` : date.getHours();
        const minutes = date.getMinutes() < 10 ? `0${String(date.getMinutes())}` : date.getMinutes();
        this.clockEl.value = `${hours}:${minutes}`;
    }

    convertTZ(date, tzString) {
        return new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }));
    }
}
