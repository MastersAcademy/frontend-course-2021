const page = document.querySelector('html');
const toggleButton = document.querySelector('[data-toggle]');
const halfmoon = document.querySelector('[data-halfmoon]');
const sun = document.querySelector('[data-sun]');
toggleButton.addEventListener('click', () => {
    page.classList.toggle('html--night');
    halfmoon.classList.toggle('themes-toggle__button--hidden');
    sun.classList.toggle('themes-toggle__button--active');
});
