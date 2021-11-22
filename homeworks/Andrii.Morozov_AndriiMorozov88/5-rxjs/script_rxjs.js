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
    map(([previous, current]) => previous - current),
).subscribe((pairDifference) => {
    if (pairDifference > 50) {
        logo.classList = 'header-hidden';
    }
    if (pairDifference < -50) {
        logo.classList = 'header';
    }
});
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu]');
burgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('header__menu__hidden');
});
