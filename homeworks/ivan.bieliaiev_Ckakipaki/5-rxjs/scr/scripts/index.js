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
        // Header container height 220 color red
        headerEl.style.height = '220px';
        headerEl.style.background = '#f75f5f';
        // Menu show
        menuEl.style.display = 'flex';
        // Main Container > new padding
        mainEl.style.padding = '220px 0';
    } else {
        headerHeight = 80;
        // Header container default > remove hide
        headerEl.style.background = '#111';
        headerEl.style.height = '80px';
        // Menu hide
        menuEl.style.display = 'none';
        // Main container > default
        mainEl.style.padding = '80px 0';
    }
});

window.addEventListener('resize', () => {
    windowTop = window.scrollY;
    rect = mainBtn.getBoundingClientRect();
    rectBottom = rect.bottom + windowTop;
    if (window.innerWidth <= 768) {
        // Menu hide
        menuEl.style.display = 'none';
    } else {
        headerHeight = 80;
        // Header container default
        headerEl.style.background = '#111';
        headerEl.style.height = '80px';
        // Main container > default
        mainEl.style.padding = '80px 0';
        // Menu show
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
        // Header container default
        headerEl.style.background = '#111';
        headerEl.style.height = '80px';
        // Main container > default
        mainEl.style.padding = '80px 0';
        // Menu hide
        menuEl.style.display = 'none';
    }
    if (posArr[posArr.length - 1] - posArr[posArr.length - 2] > 0) {
        // Header container animation hide
        headerEl.classList.add('header-hide');
        headerEl.classList.remove('header-show');
        // headerEl.style.animation = 'hideHeader .5s 1 linear forwards';
        // Header default inner hide
        headerDefaultEl.classList.add('header__inner-default-hide');
        // headerDefaultEl.style.display = 'none';
        // After bottom scroll bottom
        if (posArr[posArr.length - 1] > rectBottom) {
            // Header container animation show
            headerEl.classList.remove('header-hide');
            headerEl.classList.add('header-show');
            // headerEl.style.animation = 'showHeader .5s 1 linear forwards';
            // Header after button show
            // headerAfterBtnEl.style.display = 'flex';
            headerAfterBtnEl.classList.add('header__inner-afterBtn-show');
        }
    } else if (posArr[posArr.length - 1] - posArr[posArr.length - 2] < 0) {
        // Header container animation show
        // headerEl.classList.remove('header-hide');
        headerEl.classList.remove('header-hide');
        headerEl.classList.add('header-show');
        // headerEl.style.animation = 'showHeader .5s 1 linear forwards';
        // Header default inner show
        headerDefaultEl.classList.remove('header__inner-default-hide');
        // headerDefaultEl.style.display = 'flex';
        // After bottom scroll top
        if (posArr[posArr.length - 1] > rectBottom) {
            // Header after button hide
            headerAfterBtnEl.classList.remove('header__inner-afterBtn-show');
            // headerAfterBtnEl.style.display = 'none';
            // Button in default header inner show
            headerDefBtnEl.classList.add('header__button-show');
            // headerDefBtnEl.style.display = 'block';
            // headerDefBtnEl.style.animation = 'showButton .5s 1 linear forwards';
        } else {
            // Button in default header inner hide
            headerDefBtnEl.classList.remove('header__button-show');
            // headerDefBtnEl.style.animation = 'hideButton .5s 1 linear forwards';
            // headerDefBtnEl.style.display = 'none';
        }
    }
});
