const gambMenuEl = document.querySelector('[data-min-menu]');
const headerEl = document.querySelector('[data-attr-header]');
const burgerIcon = document.querySelector('[data-attr-bars]');
const closeIcon = document.querySelector('[data-attr-times]');

const { fromEvent } = window.rxjs;
const {
    map, filter, pairwise,
} = window.rxjs.operators;

closeIcon.style.display = 'none';

gambMenuEl.addEventListener('click', () => {
    const listMenu = document.querySelector('[data-nav-menu]');
    if (listMenu.classList.contains('header__menu')) {
        listMenu.classList.remove('header__menu');
        listMenu.classList.add('header__menu--opened');
        burgerIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        listMenu.classList.add('header__menu');
        listMenu.classList.remove('header__menu--opened');
        burgerIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
});

fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    pairwise(),
    filter((value) => (value[0] - value[1] > 50) || (value[1] - value[0] > 50)),
    map((value) => value[1] > value[0]),
)
    .subscribe((value) => {
        if (value === true) {
            headerEl.classList.add('header--hidden');
        } else {
            headerEl.classList.remove('header--hidden');
        }
    });
