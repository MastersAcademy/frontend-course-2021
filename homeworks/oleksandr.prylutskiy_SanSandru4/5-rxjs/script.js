const gambMenuEl = document.querySelector('[data-min-menu]');
const headerEl = document.querySelector('[data-attr-header]');

const { fromEvent } = window.rxjs;
const { map, filter } = window.rxjs.operators;

gambMenuEl.addEventListener('click', () => {
    const x = document.querySelector('[data-nav-menu]');
    if (x.className === 'header__nav_menu') {
        x.className += ' responsive';
    } else {
        x.className = 'header__nav_menu';
    }
});

fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    filter((value) => (value > 50)),
)
    .subscribe(() => { headerEl.classList.add('header_hidden'); console.log(window.pageYOffset); });

fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    filter((value) => (value < 50)),
)
    .subscribe(() => { headerEl.classList.remove('header_hidden'); console.log(window.pageYOffset); });
