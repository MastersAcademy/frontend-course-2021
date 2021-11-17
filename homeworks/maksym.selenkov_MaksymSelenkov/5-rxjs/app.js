const { fromEvent, interval } = window.rxjs;
const { take } = window.rxjs.operators;

fromEvent(document.querySelector('.wrapper'), 'scroll')
    .subscribe((v) => console.log(v));

interval(500)
    .pipe(
        take(5),
    )
    .subscribe((v) => console.log(v));
