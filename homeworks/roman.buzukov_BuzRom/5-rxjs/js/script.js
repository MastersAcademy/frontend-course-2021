const { fromEvent } = window.rxjs;
const {
    filter,
    map,
    throttleTime,
    pairwise,
    distinctUntilChanged,
} = window.rxjs.operators;

const SCROLL_TRESHOLD = 50;
const WINDOW_TOP = 0;

const burgerEl = document.querySelector('[data-menu-burger]');
const menuBodyEl = document.querySelector('[data-menu-body]');
const logoMenuEl = document.querySelector('[data-header-logo-menu]');

const headerEl = document.querySelector('[data-header]');
const subheadreEl = document.querySelector('[data-subheader]');
const headerBtnEl = document.querySelector('[data-header-button]');
const contentButtonEl = document.querySelector('[data-content-button]');

burgerEl.addEventListener('click', () => {
    if (!headerBtnEl.classList.contains('header__button-wrapper--active')) {
        headerBtnEl.classList.add('header__button-wrapper--active');
    } else {
        setTimeout(() => {
            headerBtnEl.classList.remove('header__button-wrapper--active');
        }, 700);
    }
    menuBodyEl.classList.toggle('menu--active');
    burgerEl.classList.toggle('header__main-burger--active');
    logoMenuEl.classList.toggle('header__main--active');
});

fromEvent(window, 'scroll')
    .pipe(
        map(() => window.scrollY),
        throttleTime(300),
        pairwise(),
        map((scrollData) => scrollData[1] - scrollData[0]),
        filter((scrollData) => Math.abs(scrollData) > SCROLL_TRESHOLD),
        map((scrollData) => ({
            isScrollUp: scrollData < WINDOW_TOP,
            isContentButton: contentButtonEl.getBoundingClientRect().bottom < WINDOW_TOP,
        })),
        distinctUntilChanged(),
    )
    .subscribe((position) => {
        headerEl.classList.toggle('hidden', !position.isScrollUp);
        subheadreEl.classList.toggle('hidden', !position.isContentButton || position.isScrollUp);
        headerBtnEl.classList.toggle('hidden', !position.isContentButton);
    });
