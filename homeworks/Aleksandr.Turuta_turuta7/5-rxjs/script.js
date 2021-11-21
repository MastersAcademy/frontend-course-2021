const headerEl = document.querySelector('[data-header]');
const checkboxEl = document.querySelector('[data-input]');
const navigationEl = document.querySelector('[data-navigation]');
const mediaQueryList = window.matchMedia('(max-width: 421px)');

const screenTest = (e) => {
    if (e.matches) navigationEl.classList.remove('hidden');
};

mediaQueryList.addListener(screenTest);

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
            headerEl.classList.add('hidden');
            headerEl.classList.remove('visible');
        }
        if (position < 0) {
            headerEl.classList.remove('hidden');
            headerEl.classList.add('visible');
        }
    });

checkboxEl.checked = false;

checkboxEl.addEventListener('change', function () {
    if (this.checked) {
        navigationEl.classList.remove('sticky');
        // headerEl.classList.remove('hidden');
        setTimeout(() => {
            navigationEl.classList.remove('hidden');
            headerEl.classList.remove('hidden');
        }, 100);
    } else {
        navigationEl.classList.remove('visible');
        navigationEl.classList.add('hidden');

        setTimeout(() => {
            navigationEl.classList.add('sticky');
        }, 300);
    }
});
