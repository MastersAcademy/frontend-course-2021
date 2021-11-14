import * as time from './tools/time.js';

export function init() {
    const currentTime = document.querySelector('[data-current-time]');
    const timezone = document.querySelector('[data-timezone]');

    if (currentTime && timezone) {
        let timerID = null;

        const fn60sec = (timeZone) => {
            const currentDate = time.getCurrentTime(timeZone);

            currentTime.textContent = currentDate;
        };

        timezone.addEventListener('change', (e) => {
            const { value } = e.target;
            clearInterval(timerID);

            timerID = null;
            timerID = setInterval(() => fn60sec(value), 60000);
            fn60sec(value);
        });

        window.addEventListener('beforeunload', (e) => {
            e.preventDefault();
            clearInterval(timerID);

            e.returnValue = '';
            return null;
        });

        fn60sec('current');
        timerID = setInterval(fn60sec, 60000);
    }
}
