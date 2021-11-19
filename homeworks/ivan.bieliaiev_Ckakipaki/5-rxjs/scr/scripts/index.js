const { fromEvent } = window.rxjs;
const { scan, filter } = window.rxjs.operators;

const headerEl = document.querySelector(('[data-header-container]'));
const burgerEl = document.querySelector('[data-burger-icon]');
const navContainerEl = document.querySelector('[data-navigation]');
const mainBtnEl = document.querySelector('[data-main-button]');
const headerBtnContainerEl = document.querySelector('[data-header-btn]');
const headerAfterBtn = document.querySelector('[data-afterBtn-header]');

headerAfterBtn.style.display = 'none';
headerBtnContainerEl.style.display = 'none';

const rect = mainBtnEl.getBoundingClientRect();

let headerHeight = 80;

burgerEl.addEventListener('click', () => {
    if (navContainerEl.classList.length === 1) {
        headerHeight = 220;
        navContainerEl.classList.add('header__menu-responsive');
    } else {
        headerHeight = 80;
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
        if (posArr[posArr.length - 1] > rect.bottom) {
            headerAfterBtn.style.display = 'flex';
            console.log('bottom');
        }
        console.log('bottom');
    } else if (posArr[posArr.length - 1] - posArr[posArr.length - 2] < 0) {
        headerEl.classList.remove('header-hide');
        headerAfterBtn.style.display = 'none';
        if (posArr[posArr.length - 1] > rect.bottom) {
            headerBtnContainerEl.style.display = 'block';
        } else {
            headerBtnContainerEl.style.display = 'none';
        }
        console.log('top');
    }
});
