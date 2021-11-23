const headerEl = document.querySelector('[data-header]');
const menuIconEl = document.querySelector('[data-burger-menu-icon]');
const burgerMenuEl = document.querySelector('[data-burger-menu]');

const { fromEvent } = window.rxjs;
const {
    map, filter, throttleTime, pairwise,
} = window.rxjs.operators;

const scroll$ = fromEvent(window, 'scroll').pipe(
    map(() => window.scrollY),
    throttleTime(200),
    pairwise(),
    filter(([prev, next]) => (next - prev) > 50 || (prev - next) > 50),
    map(([prev, next]) => prev < next),
);

scroll$.subscribe((px) => {
    if (px) {
        headerEl.classList.add('hidden');
    } else {
        headerEl.classList.toggle('hidden', false);
    }
});

const click$ = fromEvent(document, 'click').pipe(
    filter((ev) => ev.target.tagName === 'DIV'),
);
click$.subscribe(() => {
    menuIconEl.classList.toggle('active');
    burgerMenuEl.parentElement.classList.toggle('active');
});
