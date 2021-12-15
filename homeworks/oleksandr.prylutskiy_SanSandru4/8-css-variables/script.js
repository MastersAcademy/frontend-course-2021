const changeSkin = document.querySelector('[data-attr-change-skin]');
const iconSkinEl = document.querySelector('[data-attr-icon]');
const bodyEl = document.querySelector('body');
const currentTheme = localStorage.getItem('skin');

function setTheme(name) {
    bodyEl.setAttribute('data-skin', name);
    iconSkinEl.setAttribute('xlink:href', `#${name}`);
    localStorage.setItem('skin', name);
}

function init() {
    if (currentTheme) {
        bodyEl.setAttribute('data-skin', currentTheme);
        setTheme(currentTheme);
    } else {
        setTheme('light');
    }

    changeSkin.addEventListener('click', () => {
        if (bodyEl.getAttribute('data-skin') === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
}

init();
