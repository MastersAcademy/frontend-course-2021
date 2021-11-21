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
        filter(([previousScroll, currentScroll]) => Math.abs(currentScroll - previousScroll) > 50),
        map(([previousScroll, currentScroll]) => previousScroll < currentScroll),
    )
    .subscribe((headerHidden) => {
        if (headerHidden) {
            headerEl.classList.add('header--hidden');
        } else {
            headerEl.classList.remove('header--hidden');
        }
    });

fromEvent(burgerEl, 'click')
    .subscribe(() => {
        buyEl.classList.toggle('header__buy--burger-click');
        navigationEl.classList.toggle('header__nav');
        navigationEl.classList.toggle('header__nav--burger-click');
        headerEl.classList.toggle('header--burger-click');
        burgerEl.classList.toggle('header__burger');
    });
