const { fromEvent } = window.rxjs;
const {
    map,
    throttleTime,
    pairwise,
    filter,
} = window.rxjs.operators;

const headerEl = document.querySelector('[data-header]');
const buttonBurgerEl = document.querySelector('[data-burger-button]');
const menuEl = document.querySelector('[data-navigation-menu]');

fromEvent(window, 'scroll')
    .pipe(
        throttleTime(200),
        map(() => window.scrollY),
        pairwise(),
        map(([previousScroll, currentScroll]) => currentScroll - previousScroll),
        filter((scroll) => Math.abs(scroll) >= 50),
        map((scroll) => scroll < 0),
    )
    .subscribe((scroll) => headerEl.classList.toggle('hidden-header', !scroll));

fromEvent(buttonBurgerEl, 'click')
    .subscribe(() => {
        menuEl.classList.toggle('menu--opened');
        buttonBurgerEl.classList.toggle('active');
    });
