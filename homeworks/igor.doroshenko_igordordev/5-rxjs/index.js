const { fromEvent } = window.rxjs;
const {
    filter,
    map,
    pairwise,
} = window.rxjs.operators;

const pageHeaderEl = document.querySelector("[header]");
const headerNavigationEl = document.querySelector("[header__navigation]");
const navigationBurgerEl = document.querySelector("[header__navigation-burger]");
const click$ = rxjs.fromEvent(navigationBurgerEl, 'click');
const scroll$ = rxjs.fromEvent(document, 'scroll');

click$.subscribe(() => {
    headerNavigationEl.classList.toggle("header__navigation--active");
    navigationBurgerEl.classList.toggle("header__navigation-burger--active");
});

scroll$.pipe(
    map(() => window.pageYOffset),
    pairwise(),
    filter(([lastScroll, currentScroll]) => {
        let pixelDifference;
        (lastScroll > currentScroll) ? pixelDifference = lastScroll - currentScroll : pixelDifference = currentScroll - lastScroll;
        return pixelDifference > 50;
    }),
    map(([lastScroll, currentScroll]) => lastScroll < currentScroll),
).subscribe((v) => {
    pageHeaderEl.classList.toggle('header--scrolled', v);
});
