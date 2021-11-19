const headerBurgerEl = document.querySelector('[data-header-burger]');
const headerMenuEl = document.querySelector('[data-header-menu]');
const bodyEl = document.querySelector('[data-body]');
const buttonBuyEl = document.querySelector('[data-button-buy]');
const navigationWrapperEl = document.querySelector('[data-navigation-wrapper]');
const headerEl = document.querySelector('[data-header]');
headerBurgerEl.addEventListener('click', () => {
    headerBurgerEl.classList.toggle('active');
    headerMenuEl.classList.toggle('active');
    bodyEl.classList.toggle('lock');
    buttonBuyEl.classList.toggle('active');
    navigationWrapperEl.classList.toggle('active');
    headerEl.classList.toggle('active');
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
    map((event) => event.path[1].pageYOffset),
    throttleTime(300),
    pairwise(),
    filter(([previousHeight, currentHeight]) => Math.abs(previousHeight - currentHeight) > 50),
    map(([previousHeight, currentHeight]) => {
        if (previousHeight > currentHeight) {
            return 'scrollUp';
        }
        return 'scrollDown';
    }),
    distinctUntilChanged(),
)
    .subscribe((event) => {
        if (event === 'scrollUp') {
            headerEl.classList.remove('hidden');
        } else if (event === 'scrollDown') {
            headerEl.classList.add('hidden');
        }
    });
