const { fromEvent } = window.rxjs;

export class Menu {
    constructor(header, headerLogo, burgerButton, navigationMenu) {
        this.header = header;
        this.headerLogo = headerLogo;
        this.burgerButton = burgerButton;
        this.navigationMenu = navigationMenu;
        this.px = 500;
        this.toggleDropdownMenu();
        this.toggleHeader();
    }

    toggleDropdownMenu() {
        const source = fromEvent(this.burgerButton, 'click');
        source.subscribe(() => this.navigationMenu.classList.toggle('display-none'));
    }

    toggleHeader() {
        const source = fromEvent(window, 'scroll');
        source.subscribe(() => this.isScrolled(this.px));
    }

    isScrolled(px) {
        const position = window.scrollY;
        if (position > px) this.header.classList.add('display-none');
        if (position === 0) this.header.classList.remove('display-none');
    }
}
