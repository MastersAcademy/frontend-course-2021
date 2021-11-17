const { fromEvent } = window.rxjs;
const { throttleTime } = window.rxjs.operators;
const headerEl = document.querySelector('[data-header]');
let prevEl = 0;

const showLog = () => {
    const scrY = window.scrollY;
    const newEl = window.scrollY;
    if (newEl > prevEl) {
        headerEl.style.opacity = 0;
        headerEl.style.visibility = 'hidden';
    } else {
        headerEl.style.opacity = 1;
        headerEl.style.visibility = 'visible';
    }
    prevEl = newEl;
    console.log({ scrY, newEl, prevEl });
};

const clicks = fromEvent(document, 'scroll');
const example = clicks.pipe(throttleTime(500));
example.subscribe(() => showLog());
