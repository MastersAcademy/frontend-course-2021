import * as time from './tools/time.js';

export function init() {
    const datePicker = document.querySelector('[data-time-local]');

    const allMondaysBtn = document.querySelector('[data-time-fn="all mondays"]');
    const allMondaysOutput = document.querySelector('[data-time-output="all mondays"]');

    const isMonthLongBtn = document.querySelector('[data-time-fn="is month long"]');
    const isMonthLongOutput = document.querySelector('[data-time-output="is month long"]');

    const shortestWeekBtn = document.querySelector('[data-time-fn="shortest week"]');
    const shortestWeekOutput = document.querySelector('[data-time-output="shortest week"]');

    const fullWeeksInMonthBtn = document.querySelector('[data-time-fn="full weeks in month"]');
    const fullWeeksInMonthOutput = document.querySelector('[data-time-output="full weeks in month"]');

    let date = null;

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
}
