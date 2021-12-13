const themeBtn = document.querySelector('[data-btn]');
const hamburgerEl = document.querySelector('[data-header-burger]');
const menuEl = document.querySelector('[data-menu]');
const fixedMenu = document.querySelector('body');

themeBtn.addEventListener('click', () => {
    const icon = document.querySelector('[data-icon]');
    const value = icon.getAttribute('xlink:href');
    if (value !== '#moon') {
        icon.setAttribute('xlink:href', '#moon');
    } else {
        icon.setAttribute('xlink:href', '#sun');
    }
    document.body.classList.toggle('dark-theme');
});

hamburgerEl.addEventListener('click', () => {
    hamburgerEl.classList.toggle('header__burger-active');
    menuEl.classList.toggle('header__menu-active');
    fixedMenu.classList.toggle('lock');
});
menuEl.addEventListener('click', () => {
    hamburgerEl.classList.remove('header__burger-active');
    menuEl.classList.remove('header__menu-active');
    fixedMenu.classList.remove('lock');
});
