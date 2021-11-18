const { fromEvent } = window.rxjs;
const { scan, filter } = window.rxjs.operators;

const headerEl = document.querySelector(('[data-header-container]'));
const burgerEl = document.querySelector('[data-burger-icon]');
const navContainerEl = document.querySelector('[data-navigation]');
// const mainBtnEl = document.querySelector('[data-main-button]');

let headerHeight = 80;

burgerEl.addEventListener('click', () => {
    if (headerEl.classList.length === 1) {
        headerHeight = 220;
        headerEl.classList.add('header-responsive');
        navContainerEl.classList.add('header__menu-responsive');
    } else {
        headerHeight = 80;
        headerEl.classList.remove('header-responsive');
        navContainerEl.classList.remove('header__menu-responsive');
    }
});

const scrolling$ = fromEvent(document, 'scroll')
    .pipe(
        scan(() => window.scrollY),
        filter((posY) => posY > headerHeight),
        scan((acc, val) => acc.concat(val), []),
    );

scrolling$.subscribe((posArr) => {
    if (posArr[posArr.length - 1] - posArr[posArr.length - 2] > 0) {
        headerEl.classList.add('header-hide');
    } else if (posArr[posArr.length - 1] - posArr[posArr.length - 2] < 0) {
        headerEl.classList.remove('header-hide');
    }
});
