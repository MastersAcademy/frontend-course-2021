// import RxJs
const { fromEvent } = window.rxjs;
const {
    filter,
    pairwise,
    map,
    throttleTime,
} = window.rxjs.operators;

// constants DOM
const headerEl = document.querySelector('[data-header]');
const iconMenuEl = document.querySelector('[data-icon]');
const bodyMenuEl = document.querySelector('[data-menu]');

// Constants stream
const scrolling$ = fromEvent(document, 'scroll');
const menuBurger$ = fromEvent(iconMenuEl, 'click');

// Scrolling
scrolling$.pipe(
    map(() => window.scrollY),
    throttleTime(190),
    pairwise(),
    filter((pixel) => (pixel[0] - pixel[1]) > 50 || (pixel[1] - pixel[0]) > 50),
    map((pixel) => pixel[1] < pixel[0]),
).subscribe((e) => {
    if (e) {
        headerEl.classList.remove('header_hidden');
    } else {
        headerEl.classList.add('header_hidden');
    }
});

// Menu burger
menuBurger$.pipe(
    throttleTime(450),
).subscribe(() => {
    document.body.classList.toggle('body__lock');
    iconMenuEl.classList.toggle('menu__icon_active');
    bodyMenuEl.classList.toggle('menu__body_active');
});
