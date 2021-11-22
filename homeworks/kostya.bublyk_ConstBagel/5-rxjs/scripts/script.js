const { fromEvent } = window.rxjs;
const { tap, map, filter } = window.rxjs.operators;

const pageHeaderEl = document.querySelector('[data-role="page-header-section"]');
const toggleMenuButtonEl = document.querySelector('[data-role="toggle-menu-button"]');
const headerMainEl = document.querySelector('[data-role="header-main-section"]');
const pageNavigationEl = document.querySelector('[data-role="page-navigation-section"]');
let previousPosition = 0;

const changeHeaderClasses = (addedStyle, removedStyle) => {
    pageHeaderEl.classList.add(addedStyle);
    pageHeaderEl.classList.remove(removedStyle);
};

const comparePoints = (previusPoint, currentPoint) => (currentPoint - previusPoint) > 50 || (previusPoint - currentPoint) > 50;

fromEvent(window, 'scroll').pipe(
    tap(() => {
        if (!window.pageYOffset) {
            changeHeaderClasses('page__header--show', 'page__header--hide');
        }
    }),
    map(() => window.pageYOffset),
    filter((currentPosition) => comparePoints(previousPosition, currentPosition)),
).subscribe((position) => {
    if (!position) {
        changeHeaderClasses('page__header--show', 'page__header--hide');
    }
    else if (!previousPosition) {
        changeHeaderClasses('page__header--hide', 'page__header--show');
    }
    else {
        pageHeaderEl.classList.toggle('page__header--hide');
        pageHeaderEl.classList.toggle('page__header--show');
    }
    previousPosition = position;
});

toggleMenuButtonEl.addEventListener('click', () => {
    headerMainEl.classList.toggle('header__main--open');
    pageNavigationEl.classList.toggle('header__navigation--show');
});
