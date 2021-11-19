const gambMenuEl = document.querySelector('[data-min-menu]');
const headerEl = document.querySelector('[data-attr-header]');

const { fromEvent } = window.rxjs;
const { map, filter } = window.rxjs.operators;

gambMenuEl.addEventListener('click', () => {
    const x = document.querySelector('[data-nav-menu]');
    const bars = document.querySelector('[data-attr-bars]');
    const times = document.querySelector('[data-attr-times]');
    if (x.className === 'header__menu') {
        x.className += ' responsive';
        bars.style.display = 'none';
        times.style.display = 'block';
    } else {
        x.className = 'header__menu';
        bars.style.display = 'block';
        times.style.display = 'none';
    }
});

fromEvent(window, 'scroll').pipe(
    map(() => window.pageYOffset),
    filter((value) => (value > 50) || (value < window.pageYOffset)),
    // pairwise(window.pageYOffset[0] - window.pageYOffset[1]),
)
    .subscribe(() => { headerEl.classList.toggle('header--hidden'); });
