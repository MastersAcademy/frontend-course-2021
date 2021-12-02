const { fromEvent } = window.rxjs;
const { scan, filter, debounceTime } = window.rxjs.operators;

const burgerEl = document.querySelector('[data-burger-icon]');
const menuEl = document.querySelector('[data-navigation]');
const headerEl = document.querySelector('[data-header]');
const headerDefBtnEl = document.querySelector('[data-defHeader-button]');
const mainEl = document.querySelector('[data-main]');
const mainBtn = document.querySelector('[data-main-button]');

const headerDefaultEl = document.querySelector('[data-header-default]');
const headerAfterBtnEl = document.querySelector('[data-header-after-button]');

let headerHeight = 80;

let windowTop = window.scrollY;
let rect = mainBtn.getBoundingClientRect();
let rectBottom = rect.bottom + windowTop;

burgerEl.addEventListener('click', () => {
    if (menuEl.style.display === 'none') {
        headerHeight = 220;
        headerEl.style.height = '220px';
        headerEl.style.background = '#f75f5f';
        menuEl.style.display = 'flex';
        mainEl.style.padding = '220px 0';
    } else {
        headerHeight = 80;
        headerEl.style.background = '#111';
        headerEl.style.height = '80px';
        menuEl.style.display = 'none';
        mainEl.style.padding = '80px 0';
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
        headerEl.style.background = '#111';
        headerEl.style.height = '80px';
        mainEl.style.padding = '80px 0';
        menuEl.style.display = 'flex';
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
        headerEl.style.height = '80px';
        mainEl.style.padding = '80px 0';
        menuEl.style.display = 'none';
    }
    if (posArr[posArr.length - 1] - posArr[posArr.length - 2] > 0) {
        headerEl.classList.add('header-hide');
        headerEl.classList.remove('header-show');
        headerDefaultEl.classList.add('header__inner-default-hide');
        if (posArr[posArr.length - 1] > rectBottom) {
            headerEl.classList.remove('header-hide');
            headerEl.classList.add('header-show');
            headerAfterBtnEl.classList.add('header__inner-afterBtn-show');
        }
    } else if (posArr[posArr.length - 1] - posArr[posArr.length - 2] < 0) {
        headerEl.classList.remove('header-hide');
        headerEl.classList.add('header-show');
        headerDefaultEl.classList.remove('header__inner-default-hide');
        if (posArr[posArr.length - 1] > rectBottom) {
            headerAfterBtnEl.classList.remove('header__inner-afterBtn-show');
            headerDefBtnEl.classList.add('header__button-show');
        } else {
            headerDefBtnEl.classList.remove('header__button-show');
        }
    }
});
