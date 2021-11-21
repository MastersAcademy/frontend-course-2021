const { fromEvent } = window.rxjs;
const { throttleTime, pairwise, map } = window.rxjs.operators;

const toggleEl = document.querySelector('[data-menu-toggle]');
const headerEl = document.querySelector('[data-main-header]');
const headerNavigationEl = document.querySelector('[data-header-navigation]');
const headerButtonEl = document.querySelector('[data-header-button]');
const navigationListEl = document.querySelector('.navigation__list');

const scrollUp$ = fromEvent(window, 'scroll')
    .pipe(map(() => Math.trunc(document.documentElement.scrollTop)),
        throttleTime(20),
        pairwise());
const scrollDown$ = fromEvent(window, 'scroll')
    .pipe(map(() => Math.trunc(document.documentElement.scrollTop)),
        throttleTime(234),
        pairwise());

scrollUp$.subscribe((event) => {
    if (event[0] > event[1]) {
        headerEl.classList.add('main-header--show');
    }
});
scrollDown$.subscribe((event) => {
    if (event[0] < event[1]) {
        headerEl.classList.remove('main-header--show');
    }
});

toggleEl.addEventListener('click', () => {
    headerNavigationEl.classList.toggle('header-navigation--opened');
    headerEl.classList.toggle('main-header--active');
    headerButtonEl.classList.toggle('header__button--hidden');
    toggleEl.classList.toggle('header__menu-toggle--active');
    navigationListEl.classList.toggle('navigation__item--active');
});
