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
            this.navigationMenu.classList.toggle('hidden');
        });
    }

    toggleHeader() {
        const source = fromEvent(window, 'scroll').pipe(
            map(() => window.scrollY),
            throttleTime(750),
            filter((data) => data > this.scrollLimit),
            pairwise(),
            map(([prev, next]) => prev < next),
            distinctUntilChanged(),
        );

        source.subscribe((value) => {
            this.navigationMenu.classList.add('hidden');
            if (value) {
                this.header.classList.add('invisible');
                this.navigationMenu.classList.add('hidden');
            } else {
                this.header.classList.remove('invisible');
            }
        });
    }
}
