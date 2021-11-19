const { fromEvent } = window.rxjs;
const {
    map, pairwise, throttleTime, filter,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');
const burgerEl = document.querySelector('[data-burger]');
const navigationEl = document.querySelector('[data-navigation]');
const buyEl = document.querySelector('[data-buy]');

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

fromEvent(burgerEl, 'click')
    .subscribe((v) => {
        if (v) {
            buyEl.classList.toggle('header__buy--burger-click');
            navigationEl.classList.toggle('header__nav');
            navigationEl.classList.toggle('header__nav--burger-click');
            headerEl.classList.toggle('header--burger-click');
            burgerEl.classList.toggle('header__burger');
        }
    });
