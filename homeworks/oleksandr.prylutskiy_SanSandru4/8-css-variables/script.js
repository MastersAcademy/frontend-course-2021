const changeSkin = document.querySelector('[data-attr-change-skin]');
const iconSkinEl = document.querySelector('[data-attr-icon]');
const bodyEl = document.querySelector('body');
const currentTheme = localStorage.getItem('skin');

function setTheme(name, icon) {
    bodyEl.setAttribute('data-skin', name);
    iconSkinEl.setAttribute('xlink:href', icon);
    localStorage.setItem('skin', name);
}

function init() {
    if (currentTheme) {
        bodyEl.setAttribute('data-skin', currentTheme);
    } else {
        setTheme('light', '#moon');
    }

    changeSkin.addEventListener('click', () => {
        if (bodyEl.getAttribute('data-skin') === 'light') {
            setTheme('dark', '#sun');
        } else {
            setTheme('light', '#moon');
        }
    });
}

init();
