const { fromEvent } = window.rxjs;
const {
    map, pairwise, throttleTime,
} = window.rxjs.operators;
const logo = document.querySelector('[data-header]');
const scroll$ = fromEvent(window, 'scroll');
scroll$.pipe(
    map(() => window.scrollY),
    throttleTime(200),
    pairwise(),
    map((pairDifference) => pairDifference[1] - pairDifference[0]),
).subscribe((pairDifference) => {
    if (pairDifference > 50) {
        logo.className = 'header-hidden';
    }
    if (pairDifference < -50) {
        logo.className = 'header';
    }
});
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu]');
burgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('header__menu__hidden');
});
