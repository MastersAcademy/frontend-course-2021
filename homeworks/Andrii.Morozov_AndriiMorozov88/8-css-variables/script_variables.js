const page = document.querySelector('html');
const toggleButton = document.querySelector('[data-toggle]');
const halfmoon = document.querySelector('[data-halfmoon]');
const sun = document.querySelector('[data-sun]');
const picture = document.querySelectorAll('picture');
toggleButton.addEventListener('click', () => {
    page.classList.toggle('html--dark');
    halfmoon.classList.toggle('themes-toggle__button--hidden');
    sun.classList.toggle('themes-toggle__button--active');
});
const dreamhouse = document.querySelector('[data-dreamhouse]');
const design = document.querySelector('[data-design]');
const archmove = document.querySelector('[data-archmove]');
const dreamProject = document.querySelector('[data-dream-project]');
function imageIntersectDreamhouse(entry) {
    if (entry[0].isIntersecting) {
        picture[0].classList.remove('photo--hidden');
        picture[0].classList.add('photo--animate');
    }
}
function imageIntersectDesign(entry) {
    if (entry[0].isIntersecting) {
        picture[1].classList.remove('photo--hidden');
        picture[2].classList.remove('photo--hidden');
        picture[3].classList.remove('photo--hidden');
        picture[4].classList.remove('photo--hidden');
    }
}
function imageIntersectArchmove(entry) {
    if (entry[0].isIntersecting) {
        picture[5].classList.remove('photo--hidden');
    }
}
function imageIntersectDreamProject(entry) {
    if (entry[0].isIntersecting) {
        picture[6].classList.remove('photo--hidden');
    }
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0,
};
const dreamhouseObserver = new IntersectionObserver(imageIntersectDreamhouse, options);
dreamhouseObserver.observe(dreamhouse);
const designObserver = new IntersectionObserver(imageIntersectDesign, options);
designObserver.observe(design);
const archmoveObserver = new IntersectionObserver(imageIntersectArchmove, options);
archmoveObserver.observe(archmove);
const dreamProjectObserver = new IntersectionObserver(imageIntersectDreamProject, options);
dreamProjectObserver.observe(dreamProject);
const buttonUp = document.querySelector('[data-button-up]');
buttonUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});
window.addEventListener('scroll', () => {
    if (window.scrollY > document.documentElement.clientHeight) {
        buttonUp.classList.replace('button__up--hidden', 'button__up--active');
    } else {
        buttonUp.classList.replace('button__up--active', 'button__up--hidden');
    }
});
