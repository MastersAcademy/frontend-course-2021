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
buttonBurgerEl.addEventListener('click', () => {
    menuEl.classList.toggle('menu--opened');
    buttonBurgerEl.classList.toggle('active');
});
fromEvent(window, 'scroll')
    .pipe(
        throttleTime(200),
        map(() => window.pageYOffset),
        pairwise(),
        map((scroll) => scroll[1] - scroll[0]),
        filter((scroll) => Math.abs(scroll) >= 50),
        map((scroll) => scroll < 0),
    )
    .subscribe((scroll) => headerEl.classList.toggle('hidden-header', !scroll));
