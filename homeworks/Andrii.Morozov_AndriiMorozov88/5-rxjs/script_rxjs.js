const { fromEvent } = window.rxjs;
const {
    map, pairwise, throttleTime,
} = window.rxjs.operators;
const header = document.querySelector('[data-header]');
const scroll$ = fromEvent(window, 'scroll');
scroll$.pipe(
    map(() => window.scrollY),
    throttleTime(200),
    pairwise(),
    map(([previous, current]) => previous - current),
).subscribe((pairDifference) => {
    if (pairDifference > 50) {
        header.classList = 'header';
    }
    if (pairDifference < -50) {
        header.classList = 'header-hidden';
    }
});
const burgerEl = document.querySelector('[data-burger]');
const menuEl = document.querySelector('[data-menu]');
const logoEl = document.querySelector('[data-logo]');
burgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('header__menu__active');
    header.classList.toggle('header__toggle');
    logoEl.classList.toggle('header__logo__hidden');
});
