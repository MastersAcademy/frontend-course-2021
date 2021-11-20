const { fromEvent } = window.rxjs;
const { scan, filter, debounceTime } = window.rxjs.operators;

const burgerEl = document.querySelector('[data-burger-icon]');
const menuEl = document.querySelector('[data-navigation]');
const headerEl = document.querySelector('[data-header]');
const headerDefBtnEl = document.querySelector('[data-defHeader-button]');
const headerAfterBtnBtnEl = document.querySelector('[data-afterBtn-button]');
const mainEl = document.querySelector('[data-main]');
const mainBtn = document.querySelector('[data-main-button]');

const headerDefaultEl = document.querySelector('[data-header-default]');
const headerAfterBtnEl = document.querySelector('[data-header-after-button]');

headerAfterBtnBtnEl.style.display = 'block';

let headerHeight = 80;

let windowTop = window.scrollY;
let rect = mainBtn.getBoundingClientRect();
let rectBottom = rect.bottom + windowTop;

burgerEl.addEventListener('click', () => {
    if (menuEl.style.display === 'none') {
        headerHeight = 220;
        menuEl.style.display = 'flex';
        headerEl.style.height = '220px';
        mainEl.style.padding = '220px 0';
        headerEl.style.background = '#f75f5f';
    } else {
        headerHeight = 80;
        headerEl.style.background = '#111';
        mainEl.style.padding = '80px 0';
        menuEl.style.display = 'none';
        headerEl.style.height = '80px';
    }
});

window.addEventListener('resize', () => {
    windowTop = window.scrollY;
    rect = mainBtn.getBoundingClientRect();
    rectBottom = rect.bottom + windowTop;
    if (window.innerWidth <= 768) {
        menuEl.style.display = 'none';
    } else {
        headerHeight = 80;
        mainEl.style.padding = '80px 0';
        menuEl.style.display = 'flex';
        headerEl.style.height = '80px';
    }
});

const scrolling$ = fromEvent(document, 'scroll')
    .pipe(
        scan(() => window.scrollY),
        debounceTime(20),
        filter((posY) => posY > headerHeight),
        scan((acc, val) => acc.concat(val), []),
    );

scrolling$.subscribe((posArr) => {
    if (headerHeight === 220) {
        headerEl.style.background = '#111';
        mainEl.style.padding = '80px 0';
        menuEl.style.display = 'none';
        headerEl.style.height = '80px';
    }
    if (posArr[posArr.length - 1] - posArr[posArr.length - 2] > 0) {
        headerEl.style.animation = 'hideHeader .5s 1 linear forwards';
        headerDefaultEl.style.display = 'none';
        if (posArr[posArr.length - 1] > rectBottom) {
            headerEl.style.animation = 'showHeader .5s 1 linear forwards';
            headerAfterBtnEl.style.display = 'flex';
            headerDefaultEl.style.display = 'none';
        }
    } else if (posArr[posArr.length - 1] - posArr[posArr.length - 2] < 0) {
        headerEl.style.animation = 'showHeader .5s 1 linear forwards';
        headerDefaultEl.style.display = 'flex';
        if (posArr[posArr.length - 1] > rectBottom) {
            headerAfterBtnEl.style.display = 'none';
            headerDefBtnEl.style.display = 'none';
            headerDefaultEl.style.display = 'flex';
            headerDefBtnEl.style.display = 'block';
            headerDefBtnEl.style.animation = 'showButton .5s 1 linear forwards';
        } else {
            headerDefBtnEl.style.animation = 'hideButton .5s 1 linear forwards';
            headerDefBtnEl.style.display = 'none';
        }
    }
});
