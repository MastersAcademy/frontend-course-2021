const btnEl = document.querySelector('[data-theme]');
const linkEl = document.querySelector('[data-theme-link]');
const switchEl = document.querySelector('[data-theme-switch]');
const btnToTopEl = document.querySelector('[data-to-top]');
const galleryEl = document.querySelector('[data-gallery]');
const needsImgEl = document.querySelector('[data-needs-image]');
const dreamImgEl = document.querySelector('[data-dream-image]');
const burgerEl = document.querySelector('[data-burger]');
const navigationEl = document.querySelector('[data-header-nav]');
const lightTheme = 'light.css';
const darkTheme = 'dark.css';

burgerEl.addEventListener('click', () => {
    navigationEl.classList.toggle('header__nav');
    navigationEl.classList.toggle('header__nav--burger-click');
    burgerEl.classList.toggle('change');
});

function changeTheme() {
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

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        btnToTopEl.classList.add('to-top--shown');
        galleryEl.classList.add('shown');
    }
    if (window.scrollY < 600) {
        btnToTopEl.classList.remove('to-top--shown');
    }
    if (window.scrollY > 1000) {
        needsImgEl.classList.add('shown');
    }
    if (window.scrollY > 2000) {
        dreamImgEl.classList.add('shown');
    }
});
