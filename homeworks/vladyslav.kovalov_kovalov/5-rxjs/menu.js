const { fromEvent } = window.rxjs;
const { map, filter } = window.rxjs.operators;

export class Menu {
    constructor(header, headerLogo, burgerButton, navigationMenu) {
        this.header = header;
        this.headerLogo = headerLogo;
        this.burgerButton = burgerButton;
        this.navigationMenu = navigationMenu;
        this.px = 50;
        this.toggleDropdownMenu();
        this.toggleHeader();
    }

    toggleDropdownMenu() {
        const source = fromEvent(this.burgerButton, 'click');
        source.subscribe(() => this.navigationMenu.classList.toggle('opened-menu'));
    }

    toggleHeader() {
        const source = fromEvent(window, 'scroll');
        const header = source.pipe(
            map(() => window.scrollY),
            filter((value) => value < 200),
        );
        header.subscribe((value) => { this.header.style.top = `-${value}px`; });
    }
}
