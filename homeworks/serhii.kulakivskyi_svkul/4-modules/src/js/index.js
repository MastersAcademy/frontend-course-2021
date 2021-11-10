import * as timeM from './tools/time.js';

((time) => {
    const datePicker = document.querySelector('[data-time-local]');
    const currentTime = document.querySelector('[data-current-time]');
    const timezone = document.querySelector('[data-timezone]');

    const allMondaysBtn = document.querySelector('[data-time-fn="all mondays"]');
    const allMondaysOutput = document.querySelector('[data-time-output="all mondays"]');

    const isMonthLongBtn = document.querySelector('[data-time-fn="is month long"]');
    const isMonthLongOutput = document.querySelector('[data-time-output="is month long"]');

    const shortestWeekBtn = document.querySelector('[data-time-fn="shortest week"]');
    const shortestWeekOutput = document.querySelector('[data-time-output="shortest week"]');

    const fullWeeksInMonthBtn = document.querySelector('[data-time-fn="full weeks in month"]');
    const fullWeeksInMonthOutput = document.querySelector('[data-time-output="full weeks in month"]');

    let date = null;

    // init month info
    (() => {
        if (datePicker) {
            datePicker.addEventListener('change', (e) => {
                const { value } = e.target;

                date = time.getWeeksOfMonth(value).filter((el) => !!el.length);
            });
        }

        if (allMondaysBtn && allMondaysOutput) {
            allMondaysBtn.addEventListener('click', () => {
                if (date) {
                    allMondaysOutput.textContent = JSON.stringify(time.getMondaysOfMonth(date));
                }
            });
        }

        if (isMonthLongBtn && isMonthLongOutput) {
            isMonthLongBtn.addEventListener('click', () => {
                if (date) {
                    isMonthLongOutput.textContent = JSON.stringify(time.isMonthLong(date));
                }
            });
        }

        if (shortestWeekBtn && shortestWeekOutput) {
            shortestWeekBtn.addEventListener('click', () => {
                if (date) {
                    // eslint-disable-next-line max-len
                    shortestWeekOutput.textContent = JSON.stringify(time.shortestWeekDaysNumber(date));
                }
            });
        }

        if (fullWeeksInMonthBtn && fullWeeksInMonthOutput) {
            fullWeeksInMonthBtn.addEventListener('click', () => {
                if (date) {
                    // eslint-disable-next-line max-len
                    fullWeeksInMonthOutput.textContent = JSON.stringify(time.fullWeeksNumberInMonth(date));
                }
            });
        }
    })();

    // init time
    (() => {
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
    })();
})(timeM);
