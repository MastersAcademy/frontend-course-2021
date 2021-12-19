const buttonSwitchThemeEl = document.querySelector('[data-button-switch-theme]');
const themeIconEl = document.querySelector('[data-switch__theme-icon]');
const pageWrapperEl = document.querySelector('body');

const changeTheme = () => {
    if (sessionStorage.getItem('theme') === 'dark') {
        themeIconEl.setAttribute('xlink:href', '../svg/sprites.svg#theme-light-icon');
        pageWrapperEl.style.setProperty('--theme-background', '#000000');
        pageWrapperEl.style.setProperty('--theme-foreground', '#FFFFFF');
    } else {
        themeIconEl.setAttribute('xlink:href', '../svg/sprites.svg#theme-night-icon');
        pageWrapperEl.style.removeProperty('--theme-background', '#000000');
        pageWrapperEl.style.removeProperty('--theme-foreground', '#FFFFFF');
    }
};

buttonSwitchThemeEl.addEventListener('click', () => {
    if (sessionStorage.getItem('theme') === 'dark') {
        sessionStorage.removeItem('theme');
    } else {
        sessionStorage.setItem('theme', 'dark');
    }
    changeTheme();
});
