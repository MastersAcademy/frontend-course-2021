const { fromEvent } = window.rxjs;
const {
    map, pairwise, throttleTime, filter,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');

fromEvent(window, 'scroll')
    .pipe(
        throttleTime(150),
        map((e) => e.currentTarget.scrollY),
        pairwise(),
        filter((v) => Math.abs(v[1] - v[0]) > 50),
        map((v) => v[0] < v[1]),
    )
    .subscribe((v) => {
        if (v) {
            headerEl.classList.add('header--hide');
        } else {
            headerEl.classList.remove('header--hide');
        }
    });
