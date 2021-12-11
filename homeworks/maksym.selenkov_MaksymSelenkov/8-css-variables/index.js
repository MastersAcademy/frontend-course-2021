const btnEl = document.querySelector('[data-theme]');
const linkEl = document.querySelector('[data-theme-link]');
const switchEl = document.querySelector('[data-switch]');

function changeTheme() {
    const lightTheme = 'light.css';
    const darkTheme = 'dark.css';
    let currentTheme = linkEl.getAttribute('href');
    if (currentTheme === lightTheme) {
        currentTheme = darkTheme;
        switchEl.setAttribute('src', 'svg/sun.svg');
    } else {
        currentTheme = lightTheme;
        switchEl.setAttribute('src', 'svg/ic_sharp-mode-night.svg');
    }
    linkEl.setAttribute('href', currentTheme);
}

btnEl.addEventListener('click', changeTheme);
