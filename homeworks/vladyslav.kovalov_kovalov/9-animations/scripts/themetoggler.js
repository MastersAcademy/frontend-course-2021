export class ThemeToggler {
    constructor(
        buttonElement,
        pageContainer,
        theme,
        togglerIcon,
    ) {
        this.buttonElement = buttonElement;
        this.pageContainer = pageContainer;
        this.theme = theme;
        this.togglerIcon = togglerIcon;
        this.eventListeners();
    }

    eventListeners() {
        this.buttonElement.addEventListener('click', () => {
            this.setTheme();
        });
    }

    setTheme() {
        const { theme } = this.theme.dataset;
        if (theme === 'dark') {
            this.togglerIcon.setAttribute('href', 'icons/theme-toggler.svg#dark-theme-logo');
            this.pageContainer.setAttribute('data-theme', 'light');
        }
        if (theme === 'light') {
            this.togglerIcon.setAttribute('href', 'icons/theme-toggler.svg#light-theme-logo');
            this.pageContainer.setAttribute('data-theme', 'dark');
        }
    }
}
