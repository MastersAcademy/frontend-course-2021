const { fromEvent } = window.rxjs;
const { map } = window.rxjs.operators;

const source = fromEvent(document, 'scroll');
const headerEl = document.querySelector('[data-header]');
const menuBtn = document.querySelector('[data-menuBtn]');
const crossBtn = document.querySelector('[data-crossBtn]');
const phoneNav = document.querySelector('[data-phoneNav]');
const burgerBtn = document.querySelector('[data-burgerBtn]');

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

const classChaning = (classNameA, classNameR) => {
    headerEl.classList.remove(classNameR);
    headerEl.classList.add(classNameA);
};

source.pipe(
    map(() => window.scrollY),
).subscribe((curr) => {
    if (curr >= 50) {
        classChaning('nav_hidden', 'nav_show');
    } else {
        classChaning('nav_show', 'nav_hidden');
    }
});
