const { fromEvent } = window.rxjs;
const { scan, filter } = window.rxjs.operators;

const headerEl = document.querySelector(('[data-header-container]'));
const burgerEl = document.querySelector('[data-burger-icon]');
const navContainerEl = document.querySelector('[data-navigation]');
const mainBtnEl = document.querySelector('[data-main-button]');
const headerBtnContainerEl = document.querySelector('[data-header-btn]');

const headerAfterBtnEl = document.createElement('header');
const btnEl = document.createElement('button');
const titleEl = document.createElement('h1');
titleEl.style.color = '#FFF';
titleEl.innerHTML = 'GET AN IMAZING DISCOUNT';
btnEl.classList.add('main__button');
btnEl.innerHTML = 'Buy Me';
headerAfterBtnEl.appendChild(titleEl);
headerAfterBtnEl.appendChild(btnEl);
headerAfterBtnEl.classList.add('header-afterBtn');

const btnForHaederEl = document.createElement('button');
btnForHaederEl.classList.add('button__element');
btnForHaederEl.textContent = 'Buy me';

const rect = mainBtnEl.getBoundingClientRect();

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
        headerHeight = 80;
        headerEl.classList.remove('header-responsive');
        navContainerEl.classList.remove('header__menu-responsive');
        if (posArr[posArr.length - 1] > rect.bottom) {
            headerAfterBtnEl.style.top = '0';
            document.body.prepend(headerAfterBtnEl);
        }
    } else if (posArr[posArr.length - 1] - posArr[posArr.length - 2] < 0) {
        headerAfterBtnEl.style.top = '-300px';
        headerEl.classList.remove('header-hide');
        if (posArr[posArr.length - 1] > rect.bottom) {
            headerBtnContainerEl.appendChild(btnForHaederEl);
        } else {
            headerBtnContainerEl.innerHTML = '';
        }
    }
});
