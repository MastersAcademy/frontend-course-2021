const headerEl = document.querySelector('[data-header]');
const headerButtonEl = document.querySelector('[data-header-button]');
const burgerMenuEl = document.querySelector('[data-burger-menu]');
const burgerMenuButtonEl = document.querySelector('[data-burger-menu-button]');

headerButtonEl.addEventListener('touchstart', () => {
    burgerMenuEl.style.transform = 'scale(1)';
    headerEl.style.transform = 'scale(0)';
});

headerButtonEl.addEventListener('click', () => {
    burgerMenuEl.style.transform = 'scale(1)';
    headerEl.style.transform = 'scale(0)';
});

burgerMenuButtonEl.addEventListener('touchstart', () => {
    burgerMenuEl.style.transform = 'scale(0)';
    headerEl.style.transform = 'scale(1)';
});

burgerMenuButtonEl.addEventListener('click', () => {
    burgerMenuEl.style.transform = 'scale(0)';
    headerEl.style.transform = 'scale(1)';
});

const { fromEvent } = window.rxjs;
const {
    map, filter, throttleTime, pairwise,
} = window.rxjs.operators;

const scroll$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY),
    throttleTime(200),
    pairwise(),
    filter((px) => (px[1] - px[0]) > 50 || (px[0] - px[1]) > 50),
    map((px) => px[0] < px[1]),
);

scroll$.subscribe((px) => {
    console.log(px);
    if (px) {
        headerEl.style.transform = 'scale(0)';
        burgerMenuEl.transform = 'scale(0)';
    } else {
        headerEl.style.transform = 'scale(1)';
    }
});
