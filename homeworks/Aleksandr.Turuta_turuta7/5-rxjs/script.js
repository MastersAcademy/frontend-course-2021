const headerEl = document.querySelector('[data-header]');
const checkboxEl = document.querySelector('[data-input]');
const navigationEl = document.querySelector('[data-navigation]');

const { fromEvent } = window.rxjs;
const {
    map,
    pairwise,
    filter,
    throttleTime,
} = window.rxjs.operators;

fromEvent(window, 'scroll')
    .pipe(
        map(() => window.pageYOffset),
        throttleTime(100),
        pairwise(),
        map((positionScroll) => positionScroll[1] - positionScroll[0]),
        filter((positionScroll) => positionScroll > 50 || positionScroll < -50),
    )
    .subscribe((position) => {
        if (position > 0) {
            headerEl.classList.add('visible');
            headerEl.classList.remove('hidden');
            headerEl.classList.remove('sticky');
        }
        if (position < 0) {
            headerEl.classList.add('hidden');
            headerEl.classList.remove('visible');
            headerEl.classList.add('sticky');
        }
    });

checkboxEl.checked = true;

checkboxEl.addEventListener('change', function () {
    if (this.checked) {
        navigationEl.classList.add('visible');
        navigationEl.classList.remove('hidden');
        headerEl.classList.remove('sticky');
    } else {
        navigationEl.classList.remove('visible');
        navigationEl.classList.add('hidden');
        headerEl.classList.add('sticky');
    }
});
