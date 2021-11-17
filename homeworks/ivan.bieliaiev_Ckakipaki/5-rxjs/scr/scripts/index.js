const { fromEvent } = window.rxjs;
const { scan, filter } = window.rxjs.operators;

fromEvent(document, 'scroll')
    .pipe(
        scan(() => (window.scrollY)),
        filter((count) => count > 65),
    )
    .subscribe((posY) => console.log(`Position Y ${posY}`));
