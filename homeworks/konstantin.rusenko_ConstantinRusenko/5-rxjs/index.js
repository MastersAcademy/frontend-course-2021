const { fromEvent } = window.rxjs;
const { throttleTime, pairwise, map } = window.rxjs.operators;
const headerEl = document.querySelector('[data-header]');
const orderHeadButtonEl = document.querySelector('[data-header-order-button]');
const orderButtonEl = document.querySelector('[data-order-button]');
const discountHeaderEl = document.querySelector('[data-discount-header]');
const iconMenuEl = document.querySelector('[data-menu-icon]');
const controlsEl = document.querySelector('[data-controls]');

const showLog = (scrollDirection) => {
    const buttonPosition = orderButtonEl.getBoundingClientRect();
    if (scrollDirection === 1) {
        headerEl.classList.add('hidden');
    } else {
        headerEl.classList.remove('hidden');
        headerEl.classList.add('visible');
    }
    if (scrollDirection === 1 && buttonPosition.top < 0) {
        discountHeaderEl.style.display = 'flex';
        orderHeadButtonEl.classList.remove('visible');
        orderHeadButtonEl.classList.add('hidden');
    } else {
        discountHeaderEl.style.display = 'none';
        orderHeadButtonEl.classList.remove('hidden');
        orderHeadButtonEl.classList.add('visible');
    }
    if (scrollDirection === 0 && buttonPosition.top < 0) {
        orderHeadButtonEl.classList.remove('hidden');
        orderHeadButtonEl.classList.add('visible');
    } else {
        orderHeadButtonEl.classList.remove('visible');
        orderHeadButtonEl.classList.add('hidden');
    }
};

const documentScroll$ = fromEvent(document, 'scroll');
const documentScrollDirection$ = documentScroll$.pipe(
    map(() => window.scrollY),
    throttleTime(200),
    pairwise(),
    map(([prev, next]) => (next > prev ? 1 : 0)),
);
documentScrollDirection$.subscribe((scrollDirection) => showLog(scrollDirection));

const burgerClick$ = fromEvent(iconMenuEl, 'click');
burgerClick$.subscribe(() => controlsEl.classList.toggle('_active'));
