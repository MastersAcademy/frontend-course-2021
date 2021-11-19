const headerEl = document.querySelector('[data-header]');
const checkboxEl = document.querySelector('[data-input]');
const navigationEl = document.querySelector('[data-naigation]');

const { fromEvent } = window.rxjs;
const {
    map,
    tap,
    pairwise,
    filter,
    throttleTime,
} = window.rxjs.operators;

fromEvent(window, 'scroll')
    .pipe(
        tap(() => console.log(window.pageYOffset)),
        map(() => window.pageYOffset),
        throttleTime(100),
        pairwise(),
        map((data) => data[1] - data[0]),
        filter((data) => data > 50 || data < -50),
    )
    .subscribe((position) => {
        if (position > 0) {
            setTimeout(() => {
                headerEl.classList.add('absolute');
            }, 0);
            headerEl.classList.remove('visible');
            headerEl.classList.add('hidden');
        }
        if (position < 0) {
            setTimeout(() => {
                headerEl.classList.remove('absolute');
            }, 0);
            headerEl.classList.remove('mergin_top');
            headerEl.classList.remove('hidden');
            headerEl.classList.add('visible');
        }
    });

checkboxEl.checked = true;

checkboxEl.addEventListener('change', function () {
    if (this.checked) {
        setTimeout(() => {
            headerEl.classList.remove('absolute');
        }, 0);
        navigationEl.classList.add('visible');
        navigationEl.classList.remove('hidden');
    } else {
        setTimeout(() => {
            headerEl.classList.add('absolute');
        }, 0);
        navigationEl.classList.add('hidden');
        navigationEl.classList.remove('visible');
    }
});
