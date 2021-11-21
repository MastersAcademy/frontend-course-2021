const headerEl = document.querySelector('[data-header]');
const checkboxEl = document.querySelector('[data-input]');
const navigationEl = document.querySelector('[data-navigation]');

const { fromEvent } = window.rxjs;
const {
    map,
    pairwise,
    filter,
    throttleTime,
} = window.rxjs.operators;

fromEvent(window, 'scroll')
    .pipe(
        map(() => window.pageYOffset),
        throttleTime(100),
        pairwise(),
        map((data) => data[1] - data[0]),
        filter((data) => data > 50 || data < -50),
    )
    .subscribe((position) => {
        if (position > 0) {
            headerEl.classList.toggle('visible', false);
            headerEl.classList.toggle('hidden', true);
            headerEl.classList.toggle('absolute', true);
        }
        if (position < 0) {
            headerEl.classList.toggle('absolute', false);
            headerEl.classList.toggle('hidden', false);
            headerEl.classList.toggle('visible', true);
        }
    });

checkboxEl.checked = true;

checkboxEl.addEventListener('change', function () {
    if (this.checked) {
        headerEl.classList.toggle('absolute');
        navigationEl.classList.toggle('hidden');
    } else {
        navigationEl.classList.toggle('hidden');
        headerEl.classList.toggle('absolute');
    }
});
