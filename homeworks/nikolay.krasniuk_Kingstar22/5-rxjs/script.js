const { fromEvent } = window.rxjs;
const {
    map, throttleTime, pairwise, filter, distinctUntilChanged,
} = window.rxjs.operators;

const dynamicMenuEl = document.querySelector('[data-header-menu]');
const hamburgerEl = document.querySelector('[data-header-burger]');
const menuEl = document.querySelector('[data-menu]');
const fixedMenu = document.querySelector('body');

const scrollStream$ = fromEvent(window, 'scroll');
scrollStream$.pipe(
    throttleTime(200),
    map(() => window.pageYOffset),
    pairwise(),
    filter(([prevScroll, currentScroll]) => Math.abs((prevScroll - currentScroll)) > 50),
    map(([prevScroll, currentScroll]) => prevScroll > currentScroll),
    distinctUntilChanged(),
).subscribe((value) => {
    if (value) {
        dynamicMenuEl.classList.add('active');
    } else {
        dynamicMenuEl.classList.remove('active');
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
