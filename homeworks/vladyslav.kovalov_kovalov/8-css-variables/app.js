class ThemeToggler {
    constructor(
        buttonElement,
        pageContainer,
        theme,
    ) {
        this.buttonElement = buttonElement;
        this.pageContainer = pageContainer;
        this.theme = theme;
        this.eventListeners();
    }

    eventListeners() {
        this.buttonElement.addEventListener('click', () => {
            this.getTheme();
        });
    }

    getTheme() {
        console.log(this.theme.dataset.theme);
        if (this.theme.dataset.theme === 'dark') this.setTheme('light');
        else this.setTheme('dark');
    }

    setTheme(themeName) {
        this.pageContainer.setAttribute('data-theme', themeName);
    }
}

const darkTheme = new ThemeToggler(
    document.querySelector('[data-theme-toggler]'),
    document.querySelector('[data-page-container]'),
    document.querySelector('[data-theme]'),
);

darkTheme();
