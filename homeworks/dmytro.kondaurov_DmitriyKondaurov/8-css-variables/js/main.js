const themeSwitcherBtn = document.querySelector('[data-switch-btn]');
const styleSrc = document.querySelector('[data-style-src]');
const menuSwitcherBtn = document.querySelector('[data-menu-switcher-btn]');
const switcherBtnLine1 = document.querySelector('[data-cross-line-1]');
const switcherBtnLine2 = document.querySelector('[data-cross-line-2]');
const menuContainer = document.querySelector('[data-header-menu]');
let themeStatus = styleSrc.getAttribute('href');
const listNavItems = Array.from(document.querySelectorAll('[data-nav-item]'));
let width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;

window.addEventListener('load', () => {
    if (width > 1024) {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '0';
        menuContainer.classList.remove('list--visibility-hide');
    } else {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
        menuContainer.classList.add('list--visibility-hide');
    }
});

window.addEventListener('resize', () => {
    width = (window.innerWidth > 0) ? window.innerWidth : window.screen.width;
    if (width > 1024) {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '0';
        menuContainer.classList.remove('list--visibility-hide');
    } else {
        menuSwitcherBtn.attributes['data-menu-switcher-btn'].value = '1';
        menuContainer.classList.add('list--visibility-hide');
    }
});

menuSwitcherBtn.addEventListener('click', () => {
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
});

menuContainer.addEventListener('click', (e) => {
    const clickEvent = new Event('click');
    const curNavItemEl = e.target;

    // active menu item for landing page
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
});

themeSwitcherBtn.addEventListener('click', () => {
    if (themeStatus === 'style-day.css') {
        styleSrc.setAttribute('href', 'style-night.css');
        themeSwitcherBtn.setAttribute('src', 'images/cil_sun.png');
        themeStatus = false;
    } else {
        styleSrc.setAttribute('href', 'style-day.css');
        themeSwitcherBtn.setAttribute('src', 'images/ic_sharp-mode-night.png');
        themeStatus = 'style-day.css';
    }
});
