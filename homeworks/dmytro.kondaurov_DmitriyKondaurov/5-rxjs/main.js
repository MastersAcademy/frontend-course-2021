const { fromEvent } = window.rxjs;
const { map, filter, distinctUntilChanged } = window.rxjs.operators;
let curPos = 0;
let directionUp;

const scroll = fromEvent(document, 'scroll');
const positions = scroll.pipe(
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

positions.subscribe(() => {
    document.querySelector('[data-header-visible]').classList.toggle('header_hide');
});
