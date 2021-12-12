const switcher = document.querySelector('[data-switch-btn]');
const styleSrc = document.querySelector('[data-style-src]');
let themeStatus = styleSrc.getAttribute('href');

switcher.addEventListener('click', () => {
    if (themeStatus === 'style-day.css') {
        styleSrc.setAttribute('href', 'style-night.css');
        switcher.setAttribute('src', 'images/cil_sun.png');
        themeStatus = false;
    } else {
        styleSrc.setAttribute('href', 'style-day.css');
        switcher.setAttribute('src', 'images/ic_sharp-mode-night.png');
        themeStatus = 'style-day.css';
    }
});
