const themeSwitcherBtn = document.querySelector('[data-switch-btn]');
const styleSrc = document.querySelector('[data-style-src]');
const menuSwitcherBtn = document.querySelector('[data-menu-switcher-btn]');
const switcherBtnLine1 = document.querySelector('[data-cross-line-1]');
const switcherBtnLine2 = document.querySelector('[data-cross-line-2]');
const menuContainer = document.querySelector('[data-header-menu]');
const headerContainer = document.querySelector('[data-header]');
const galleryContainer = document.querySelector('[data-gallery-container]');
const heroPictureEl = document.querySelector('[data-hero-picture]');
let themeStatus = styleSrc.getAttribute('href');
const listNavItems = Array.from(document.querySelectorAll('[data-nav-item]'));
let width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

const initialStateNavMenu = () => {
    if (width > 1024) {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '0';
        menuContainer.classList.remove('list--visibility-hide');
    } else {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
        menuContainer.classList.add('list--visibility-hide');
    }
};

const heroPictureAnimate = () => {
    heroPictureEl.style.opacity = 1;
    heroPictureEl.style.transform = 'translateY(0%)';
};

const scrollActions = () => {
    if (window.scrollY > 50) {
        headerContainer.classList.add('header--scrolled');
        if (window.scrollY > galleryContainer.offsetTop - 450) {
            galleryContainer.classList.add('show');
        }
    } else {
        headerContainer.classList.remove('header--scrolled');
    }
};

const navMenuStateOnResize = () => {
    width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    if (width > 1024) {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '0';
        menuContainer.classList.remove('list--visibility-hide');
    } else {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
        menuContainer.classList.add('list--visibility-hide');
    }
};

const toggleMenu = () => {
    if (menuSwitcherBtn.attributes['data-menu-switcher-btn'].value === '1') {
        menuContainer.classList.remove('list--visibility-hide');
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '0';
        switcherBtnLine1.classList.add('switcher__cross-lines_close');
        switcherBtnLine2.classList.add('switcher__cross-lines_close');
    } else {
        menuContainer.classList.add('list--visibility-hide');
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
        switcherBtnLine1.classList.remove('switcher__cross-lines_close');
        switcherBtnLine2.classList.remove('switcher__cross-lines_close');
    }
};

const itemMenuTrigger = (e) => {
    const clickEvent = new Event('click');
    const curNavItemEl = e.target;

    listNavItems.forEach((item) => {
        if (curNavItemEl.tagName === 'A') {
            item.classList.remove('header-menu__link_active');
            curNavItemEl.classList.add('header-menu__link_active');
            if (width <= 1024) {
                menuContainer.classList.add('list--visibility-hide');
                menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
                switcherBtnLine1.classList.remove('switcher__cross-lines_close');
                switcherBtnLine2.classList.remove('switcher__cross-lines_close');
            }
        } else if (curNavItemEl.tagName === 'LI') {
            item.classList.remove('header-menu__link_active');
            curNavItemEl.firstElementChild.classList.add('header-menu__link_active');
            curNavItemEl.firstElementChild.dispatchEvent(clickEvent);
            if (width <= 1024) {
                menuContainer.classList.add('list--visibility-hide');
                menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
                switcherBtnLine1.classList.remove('switcher__cross-lines_close');
                switcherBtnLine2.classList.remove('switcher__cross-lines_close');
            }
        }
    });
};

const themeToggle = () => {
    if (themeStatus === 'style-day.css') {
        styleSrc.setAttribute('href', 'style-night.css');
        themeSwitcherBtn.firstElementChild.setAttribute('src', 'images/cil_sun.png');
        themeStatus = false;
    } else {
        styleSrc.setAttribute('href', 'style-day.css');
        themeSwitcherBtn.firstElementChild.setAttribute('src', 'images/ic_sharp-mode-night.png');
        themeStatus = 'style-day.css';
    }
};

window.addEventListener('load', () => {
    heroPictureAnimate();
    initialStateNavMenu();
});

window.addEventListener('scroll', scrollActions);
window.addEventListener('resize', navMenuStateOnResize);
menuSwitcherBtn.addEventListener('click', toggleMenu);
menuContainer.addEventListener('click', itemMenuTrigger);
themeSwitcherBtn.addEventListener('click', themeToggle);
