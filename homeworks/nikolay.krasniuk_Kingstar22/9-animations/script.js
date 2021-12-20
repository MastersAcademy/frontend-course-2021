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
    let theme = 'dark';
    if (value === `#${theme}`) {
        theme = 'light';
        icon.setAttribute('xlink:href', `#${theme}`);
    } else {
        icon.setAttribute('xlink:href', `#${theme}`);
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
        scrollTopEl.classList.add('page__up-show');
    } else {
        scrollTopEl.classList.remove('page__up-show');
    }
    scrollTopEl.onclick = () => {
        window.scrollTo(0, 0);
    };
};

const scrollAnimation = () => {
    const windowCenter = (window.innerHeight / 2) + window.scrollY;
    const windowBottom = window.innerHeight + window.scrollY;
    animationImagesEl.forEach((element) => {
        const scrollOffset = element.offsetTop;
        if (windowCenter >= scrollOffset) {
            element.classList.add('animation-class');
        } else if (windowBottom <= scrollOffset) {
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
