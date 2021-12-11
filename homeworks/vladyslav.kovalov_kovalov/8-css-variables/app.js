class ThemeToggler {
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
            this.getTheme();
        });
    }

    getTheme() {
        if (this.theme.dataset.theme === 'dark') this.setTheme('light');
        else this.setTheme('dark');
    }

    setTheme(themeName) {
        if (themeName === 'dark') this.togglerIcon.setAttribute('xlink:href', 'icons/icons-sprite.svg#theme-toggler-light');
        else this.togglerIcon.setAttribute('xlink:href', 'icons/icons-sprite.svg#theme-toggler-dark');

        this.pageContainer.setAttribute('data-theme', themeName);
    }
}

function initThemeToggler() {
    return new ThemeToggler(
        document.querySelector('[data-theme-toggler]'),
        document.querySelector('[data-page-container]'),
        document.querySelector('[data-theme]'),
        document.querySelector('[data-theme-toggler-icon]'),
    );
}

initThemeToggler();
