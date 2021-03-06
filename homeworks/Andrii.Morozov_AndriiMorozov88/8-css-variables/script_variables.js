const pageEl = document.querySelector('html');
const toggleButtonEl = document.querySelector('[data-toggle]');
const halfmoonEl = document.querySelector('[data-halfmoon]');
const sunEl = document.querySelector('[data-sun]');
const imagesInEl = document.querySelectorAll('[data-image-in]');
const buttonBackToTopEl = document.querySelector('[data-back-to-top]');
const burgerEl = document.querySelector('[data-burger]');
const headerButtonsEl = document.querySelector('[data-header-buttons]');
const headerMenuEl = document.querySelector('[data-header-menu]');
burgerEl.addEventListener('click', () => {
    headerButtonsEl.classList.toggle('header__buttons--hidden');
    headerMenuEl.classList.toggle('header__menu--active');
});
toggleButtonEl.addEventListener('click', () => {
    pageEl.classList.toggle('html--dark');
    halfmoonEl.classList.toggle('hidden');
    sunEl.classList.toggle('hidden');
});
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
};
function imageIntersect([entry]) {
    if (entry.isIntersecting) {
        entry.target.classList.add('image-animation');
        entry.target.classList.remove('image');
    }
}
const observer = new IntersectionObserver(imageIntersect, options);
for (let count = 0; count < imagesInEl.length; count++) {
    observer.observe(imagesInEl[count]);
}
window.addEventListener('scroll', () => {
    const isHidden = window.scrollY < document.documentElement.clientHeight;
    buttonBackToTopEl.classList.toggle('hidden', isHidden);
});
buttonBackToTopEl.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
