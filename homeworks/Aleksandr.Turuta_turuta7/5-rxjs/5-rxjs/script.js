const headerEl = document.querySelector('[data-header]');
const checkboxEl = document.querySelector('[data-input]');
const navigationEl = document.querySelector('[data-naigation]');

const { fromEvent } = window.rxjs;
const {
    map,
    tap,
    pairwise,
    filter,
    throttleTime,
} = window.rxjs.operators;

fromEvent(window, 'scroll')
    .pipe(
        tap(() => console.log(window.pageYOffset)),
        map(() => window.pageYOffset),
        throttleTime(100),
        pairwise(),
        map((data) => data[1] - data[0]),
        filter((data) => data > 50 || data < -50),
    )
    .subscribe((position) => {
        if (position > 0) {
            headerEl.classList.remove('ccc');
            headerEl.classList.add('bbb');
        }
        if (position < 0) {
            headerEl.classList.remove('bbb');
            headerEl.classList.add('ccc');
        }
    });

checkboxEl.addEventListener('change', function () {
    if (this.checked) {
        navigationEl.classList.add('ccc');
        navigationEl.classList.remove('bbb');
    } else {
        navigationEl.classList.remove('ccc');
        navigationEl.classList.add('bbb');
    }
});
