const { fromEvent } = window.rxjs;

const source = fromEvent(document, 'scroll');
const headerEl = document.querySelector('[data-header]');
const menuBtn = document.querySelector('[data-menuBtn]');
const crossBtn = document.querySelector('[data-crossBtn]');
const phoneNav = document.querySelector('[data-phoneNav]');
const burgerBtn = document.querySelector('[data-burgerBtn]');
let lastScroll = window.scrollY;

const toggleMenu = () => {
    if (phoneNav.classList.contains('show_nav_phone')) {
        phoneNav.classList.remove('show_nav_phone');
        crossBtn.style.display = 'none';
        menuBtn.style.display = 'block';
    } else {
        phoneNav.classList.add('show_nav_phone');
        crossBtn.style.display = 'block';
        menuBtn.style.display = 'none';
    }
};

burgerBtn.addEventListener('click', toggleMenu);

source.subscribe(() => {
    if (lastScroll < window.scrollY) {
        headerEl.classList.add('nav_hidden');
    } else {
        headerEl.classList.remove('nav_hidden');
    }

    lastScroll = window.scrollY;
});
