const { fromEvent } = window.rxjs;
const {
    filter,
    map,
    throttleTime,
    pairwise,
    distinctUntilChanged,
} = window.rxjs.operators;

const burgerEl = document.querySelector('[data-menu-burger]');
const menuBodyEl = document.querySelector('[data-menu-body]');
const logoMenuEl = document.querySelector('[data-header-logo-menu]');

const headerEl = document.querySelector('[data-header]');
const subheadreEl = document.querySelector('[data-subheader]');
const headerBtnEl = document.querySelector('[data-header-button]');
const contentButtonEl = document.querySelector('[data-content-button]');

burgerEl.addEventListener('click', () => {
    if (!headerBtnEl.classList.contains('_active')) {
        headerBtnEl.classList.add('_active');
    } else {
        setTimeout(() => {
            headerBtnEl.classList.remove('_active');
        }, 500);
    }
    menuBodyEl.classList.toggle('_active');
    burgerEl.classList.toggle('_active');
    logoMenuEl.classList.toggle('_active');
});

fromEvent(window, 'scroll')
    .pipe(
        map(() => window.pageYOffset),
        throttleTime(300),
        pairwise(),
        map((scrollData) => scrollData[1] - scrollData[0]),
        filter((scrollData) => Math.abs(scrollData) > 50),
        map((scrollData) => ({
            isScrollUp: scrollData < 0,
            isContentButton: contentButtonEl.getBoundingClientRect().top < 0,
        })),
        distinctUntilChanged(),
    )
    .subscribe((position) => {
        headerEl.classList.toggle('hidden', !position.isScrollUp);
        subheadreEl.classList.toggle('hidden', !position.isContentButton || position.isScrollUp);
        headerBtnEl.classList.toggle('hidden', !position.isContentButton);
    });
