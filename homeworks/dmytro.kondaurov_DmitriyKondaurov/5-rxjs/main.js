const { fromEvent } = window.rxjs;
const { map, filter, distinctUntilChanged } = window.rxjs.operators;
let curPos = 0;
let directionUp;

const scroll = fromEvent(document, 'scroll');
const scrollDirection = scroll.pipe(
    filter(() => {
        if (window.scrollY - curPos > 50) {
            curPos = window.scrollY;
            directionUp = false;
            return true;
        } if (window.scrollY - curPos < -50) {
            curPos = window.scrollY;
            directionUp = true;
            return true;
        }
        return false;
    }),
    map(() => directionUp),
    distinctUntilChanged(),
);

const clicks = fromEvent(document, 'click');
const clickOnBurger = clicks.pipe(
    filter((event) => event.target.attributes['data-nav-burger']),
);
const clickOnNavItems = clicks.pipe(
    filter((event) => event.target.attributes['data-nav-item']),
);

scrollDirection.subscribe(() => {
    document.querySelector('[data-header-visible]').classList.toggle('header_hide');
});

clickOnBurger.subscribe((e) => {
    const burgerIconEl = e.target;
    burgerIconEl.classList.toggle('top-nav-resp-btn_active');
    document.querySelector('[data-nav-conainer]').classList.toggle('top-nav_hidden');
});

clickOnNavItems.subscribe((e) => {
    const curNavItemEl = e.target;
    const listNavItems = Array.from(document.querySelectorAll('[data-nav-item]'));
    listNavItems.forEach((item) => item.classList.remove('top-nav__link_active'));
    curNavItemEl.classList.add('top-nav__link_active');
});
