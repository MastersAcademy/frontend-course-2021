const { fromEvent } = window.rxjs;
const {
    throttleTime, map,
} = window.rxjs.operators;

const buttonSwitchThemeEl = document.querySelector('[data-button-switch-theme]');
const themeIconEl = document.querySelector('[data-switch__theme-icon]');
const pageWrapperEl = document.querySelector('body');
const ButtonUpEl = document.querySelector('[data-button-up]');
const scrollImagesEl = document.querySelectorAll('[data-scroll-img]');

const changeTheme = () => {
    if (sessionStorage.getItem('theme') === 'dark') {
        themeIconEl.setAttribute('xlink:href', '../svg/sprites.svg#theme-light-icon');
        pageWrapperEl.style.setProperty('--theme-background', '#000000');
        pageWrapperEl.style.setProperty('--theme-foreground', '#FFFFFF');
    } else {
        themeIconEl.setAttribute('xlink:href', '../svg/sprites.svg#theme-night-icon');
        pageWrapperEl.style.removeProperty('--theme-background', '#000000');
        pageWrapperEl.style.removeProperty('--theme-foreground', '#FFFFFF');
    }
};

const buttonSwitchTheme$ = fromEvent(buttonSwitchThemeEl, 'click');
buttonSwitchTheme$.subscribe(() => {
    if (sessionStorage.getItem('theme') === 'dark') {
        sessionStorage.removeItem('theme');
    } else {
        sessionStorage.setItem('theme', 'dark');
    }
    changeTheme();
});

const windowHeight = document.documentElement.clientHeight;
const scroll$ = fromEvent(window, 'scroll')
    .pipe(map(() => Math.trunc(document.documentElement.scrollTop)),
        throttleTime(20));

scroll$.subscribe((event) => {
    if (event > windowHeight) {
        ButtonUpEl.classList.add('button-up--show');
    } else {
        ButtonUpEl.classList.remove('button-up--show');
    }
});

scroll$.subscribe(() => {
    const windowCenter = (window.innerHeight / 1.2) + window.scrollY;
    scrollImagesEl.forEach((element) => {
        const scrollNewElement = element.offsetTop + (element.offsetHeight / 2);
        if (windowCenter >= scrollNewElement) {
            element.classList.add('img--show');
        } else {
            element.classList.remove('img--show');
        }
    });
});

const buttonUp$ = fromEvent(ButtonUpEl, 'click');
buttonUp$.subscribe(() => {
    window.scrollTo(0, 0);
});
