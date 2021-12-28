const { fromEvent } = window.rxjs;
const {
    map,
} = window.rxjs.operators;
const page = document.querySelector('html');
const toggleButton = document.querySelector('[data-toggle]');
const halfmoon = document.querySelector('[data-halfmoon]');
const sun = document.querySelector('[data-sun]');
const picture = document.querySelectorAll('picture');
toggleButton.addEventListener('click', () => {
    page.classList.toggle('html--night');
    halfmoon.classList.toggle('themes-toggle__button--hidden');
    sun.classList.toggle('themes-toggle__button--active');
});
const dreamhouse = document.querySelector('[data-dreamhouse]');
const design = document.querySelector('[data-design]');
const archmove = document.querySelector('[data-archmove]');
const dreamProject = document.querySelector('[data-dream-project]');
function imageIntersectDreamhouse(entry) {
    if (entry[0].isIntersecting) {
        picture[0].classList.remove('photo--disabled');
        picture[0].classList.add('photo--animate');
    }
}
function imageIntersectDesign(entry) {
    if (entry[0].isIntersecting) {
        picture[1].classList.remove('photo--disabled');
        picture[2].classList.remove('photo--disabled');
        picture[3].classList.remove('photo--disabled');
        picture[4].classList.remove('photo--disabled');
    }
}
function imageIntersectArchmove(entry) {
    if (entry[0].isIntersecting) {
        picture[5].classList.remove('photo--disabled');
    }
}
function imageIntersectDreamProject(entry) {
    if (entry[0].isIntersecting) {
        picture[6].classList.remove('photo--disabled');
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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
const scroll$ = fromEvent(window, 'scroll');
scroll$.pipe(
    map(() => window.scrollY),
).subscribe(() => {
    if (window.scrollY > 600) {
        buttonUp.classList.replace('button-up--hidden', 'button-up--active');
    } else {
        buttonUp.classList.replace('button-up--active', 'button-up--hidden');
    }
});
