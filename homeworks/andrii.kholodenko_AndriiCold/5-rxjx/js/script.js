const headerBurgerEl = document.querySelector('[data-header-burger]');
const headerNavigationEl = document.querySelector('[data-header-navigation]');
const bodyEl = document.querySelector('[data-body]');
const buttonBuyEl = document.querySelector('[data-button-buy]');
const navigationWrapperEl = document.querySelector('[data-navigation-wrapper]');
const headerEl = document.querySelector('[data-header]');
const headerBurgerLineEl = document.querySelector('[data-burger-line]');
headerBurgerEl.addEventListener('click', () => {
    headerBurgerEl.classList.toggle('aside__burger--active');
    headerNavigationEl.classList.toggle('aside__navigation--active');
    bodyEl.classList.toggle('page-body--lock');
    buttonBuyEl.classList.toggle('aside__button-buy--active');
    navigationWrapperEl.classList.toggle('header__container__aside--active');
    headerEl.classList.toggle('page-body__header--active');
    headerBurgerLineEl.classList.toggle('burger__line--active');
});

const { fromEvent } = window.rxjs;
const {
    pairwise,
    distinctUntilChanged,
    map,
    throttleTime,
    filter,
} = window.rxjs.operators;
const scrollEvent = fromEvent(window, 'scroll');
scrollEvent.pipe(
    map((scrollDirection) => scrollDirection.path[1].window.scrollY),
    throttleTime(300),
    pairwise(),
    filter(([previousHeight, currentHeight]) => Math.abs(previousHeight - currentHeight) > 50),
    map(([previousHeight, currentHeight]) => previousHeight < currentHeight),
    distinctUntilChanged(),
)
    .subscribe((scrollDirection) => {
        headerEl.classList.toggle('page-body__header--hidden', scrollDirection);
    });
