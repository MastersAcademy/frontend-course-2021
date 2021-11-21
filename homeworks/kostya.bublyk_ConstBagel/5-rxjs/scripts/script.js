const { fromEvent } = window.rxjs;
const { map } = window.rxjs.operators;

const pageHeaderEl = document.querySelector('[data-role="page-header-section"]');
const toggleMenuButtonEl = document.querySelector('[data-role="toggle-menu-button"]');
const headerMainEl = document.querySelector('[data-role="header-main-section"]');
const pageNavigationEl = document.querySelector('[data-role="page-navigation-section"]');

const changeHeaderClasses = (addedStyle, removedStyle) => {
    pageHeaderEl.classList.add(addedStyle);
    pageHeaderEl.classList.remove(removedStyle);
};

fromEvent(window, 'scroll').pipe(
    map(() => this.scrollY),
).subscribe((position) => (position > 50 ? changeHeaderClasses('page__header--hide', 'page__header--show')
    : changeHeaderClasses('page__header--show', 'page__header--hide')),

);

toggleMenuButtonEl.addEventListener('click', () => {
    headerMainEl.classList.toggle('header__main--open');
    pageNavigationEl.classList.toggle('header__navigation--show');
});
