const { fromEvent } = window.rxjs;
const {
    map, throttleTime, pairwise, filter, distinctUntilChanged,
} = window.rxjs.operators;

const dynamicMenuEl = document.querySelector('[data-header-menu]');
const hamburgerEl = document.querySelector('[data-header-burger]');
const menuEl = document.querySelector('[data-menu]');
const fixedMenu = document.querySelector('body');
const LogoEl = document.querySelector('[data-logo]');
const dynamicLogoEl = document.querySelector('[data-active-logo]');
const trigerBtnEl = document.querySelector('[data-btn]');
const dynamicBtnEl = document.querySelector('[data-active-btn]');

const scrollStream$ = fromEvent(window, 'scroll');
scrollStream$.pipe(
    throttleTime(200),
    map(() => window.pageYOffset),
    pairwise(),
    filter(([prevScroll, currentScroll]) => Math.abs((prevScroll - currentScroll)) > 50),
    map(([prevScroll, currentScroll]) => ({
        scrollMoveToUp: prevScroll > currentScroll,
        scrollMoveDownUnderBtn: currentScroll > trigerBtnEl.offsetTop,
    })),
    distinctUntilChanged(),
).subscribe((value) => {
    if (value.scrollMoveToUp && !value.scrollMoveDownUnderBtn) {
        dynamicMenuEl.classList.add('active');
        dynamicBtnEl.classList.remove('btn-active');
    } else if (!value.scrollMoveToUp && !value.scrollMoveDownUnderBtn) {
        dynamicMenuEl.classList.remove('active');
    } else if (!value.scrollMoveToUp && value.scrollMoveDownUnderBtn) {
        dynamicMenuEl.classList.add('active');
        dynamicBtnEl.classList.add('btn-active');
        LogoEl.classList.add('logo-active');
        dynamicLogoEl.classList.add('logo-scroll-active');
    } else if (value.scrollMoveToUp && value.scrollMoveDownUnderBtn) {
        dynamicLogoEl.classList.remove('logo-scroll-active');
        LogoEl.classList.remove('logo-active');
    }
});

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('main__header-burger-active');
    menuEl.classList.toggle('main__nav-menu-active');
    fixedMenu.classList.toggle('lock');
});
menuEl.addEventListener('click', () => {
    hamburgerEl.classList.remove('main__header-burger-active');
    menuEl.classList.remove('main__nav-menu-active');
    fixedMenu.classList.remove('lock');
});
