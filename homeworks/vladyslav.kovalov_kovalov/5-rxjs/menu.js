const { fromEvent } = window.rxjs;
const {
    map, pairwise, distinctUntilChanged, throttleTime, filter,
} = window.rxjs.operators;

export class Menu {
    constructor(header, burgerButton, navigationMenu, scrollLimit) {
        this.header = header;
        this.burgerButton = burgerButton;
        this.navigationMenu = navigationMenu;
        this.scrollLimit = scrollLimit;
        this.toggleDropdownMenu();
        this.toggleHeader();
    }

    toggleDropdownMenu() {
        const source = fromEvent(this.burgerButton, 'click');
        source.subscribe(() => {
            this.navigationMenu.classList.toggle('display-none');
        });
    }

    toggleHeader() {
        const source = fromEvent(window, 'scroll').pipe(
            throttleTime(300),
            map(() => window.scrollY),
            filter((data) => data > this.scrollLimit),
            pairwise(),
            map(([prev, next]) => prev < next),
            distinctUntilChanged(),
        );
        source.subscribe(() => {
            this.header.classList.toggle('hidden');
            this.navigationMenu.classList.add('display-none');
        });
    }
}
