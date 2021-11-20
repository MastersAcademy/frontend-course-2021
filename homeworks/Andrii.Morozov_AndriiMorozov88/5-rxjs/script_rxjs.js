const { fromEvent } = window.rxjs;
const {
    map, pairwise, throttleTime,
} = window.rxjs.operators;
const logo = document.querySelector('[data-header]');
const scroll$ = fromEvent(window, 'scroll');
scroll$.pipe(
    map(() => window.scrollY),
    throttleTime(200),
    pairwise(),
).subscribe((pair) => {
    const scrollWay = pair[1] - pair[0];
    function scrollUp() {
        logo.style.position = 'fixed';
    }
    function scrollDown() {
        logo.style.position = 'absolute';
    }
    if (scrollWay > 50) {
        scrollDown();
    }
    if (scrollWay < -50) {
        scrollUp();
    }
});
