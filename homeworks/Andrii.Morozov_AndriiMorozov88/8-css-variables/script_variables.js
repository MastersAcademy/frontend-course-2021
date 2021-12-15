const page = document.querySelector('html');
const toggleButton = document.querySelector('[data-toggle]');
const halfmoon = document.querySelector('[data-halfmoon]');
toggleButton.addEventListener('click', () => {
    page.classList.toggle('html--night');
    halfmoon.classList.toggle('halfmoon--hidden');
});
