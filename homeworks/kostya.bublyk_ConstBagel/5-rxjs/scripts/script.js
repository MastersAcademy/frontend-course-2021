const { fromEvent } = window.rxjs;
const { map } = window.rxjs.operators;

const pageHeaderEl = document.querySelector('[data-role="page-header-section"]');
const pageNavigationEl = document.querySelector('[data-role="page-navigation-section"]');

const changeHeaderClasses = (addedStyle, removedStyle) => {
    pageHeaderEl.classList.add(addedStyle);
    pageHeaderEl.classList.remove(removedStyle);
}; 

fromEvent(window, 'scroll').pipe(
    map(() => this.scrollY)
).subscribe((position) =>
        position > 50 ? 
        changeHeaderClasses('header-desappear', 'header-appear') :
        changeHeaderClasses('header-appear', 'header-desappear'));
