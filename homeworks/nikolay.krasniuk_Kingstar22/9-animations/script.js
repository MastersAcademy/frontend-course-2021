const themeBtnEL = document.querySelector('[data-btn]');
const hamburgerEl = document.querySelector('[data-header-burger]');
const menuEl = document.querySelector('[data-menu]');
const fixedMenuEl = document.querySelector('body');
const scrollTopEl = document.querySelector('[data-scroll-btn]');
const animationImagesEl = document.querySelectorAll('.img-animation');
const loaderEl = document.querySelector('[data-loader]');

themeBtnEL.addEventListener('click', () => {
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
    fixedMenuEl.classList.toggle('lock');
});
menuEl.addEventListener('click', () => {
    hamburgerEl.classList.remove('header__burger-active');
    menuEl.classList.remove('header__menu-active');
    fixedMenuEl.classList.remove('lock');
});

const scrollBtn = () => {
    if (window.scrollY > 600) {
        scrollTopEl.classList.add('pageUp-show');
    } else {
        scrollTopEl.classList.remove('pageUp-show');
    }
    scrollTopEl.onclick = () => {
        window.scrollTo(0, 0);
    };
};

const scrollAnimation = () => {
    const windowCenter = (window.innerHeight / 2) + window.scrollY;
    animationImagesEl.forEach((element) => {
        const scrollOffset = element.offsetTop;
        if (windowCenter >= scrollOffset) {
            element.classList.add('animation-class');
        } else {
            element.classList.remove('animation-class');
        }
    });
};

window.addEventListener('DOMContentLoaded', () => {
    loaderEl.classList.add('active');
    setTimeout(() => {
        loaderEl.classList.remove('active');
    }, 2000);
    window.addEventListener('scroll', () => {
        scrollAnimation();
        scrollBtn();
    });
});
