const switchLunaEl = document.querySelector('[data-switch-luna]');
const switchSunEl = document.querySelector('[data-switch-sun]');
const logoEl = document.querySelector('[data-logo]');
const scrollEl = document.querySelector('[data-scrolle]');
const animateImgEls = document.querySelectorAll('[data-image]');
const mainImgEl = document.querySelector('[data-main-img]');
scrollEl.classList.add('scroll-up__hidden');
const { fromEvent } = window.rxjs;
const { scan, debounceTime } = window.rxjs.operators;

const checkBoxes = () => {
    const triggerBottom = window.innerHeight;

    animateImgEls.forEach((el) => {
        const imgTop = el.getBoundingClientRect().top;
        if (imgTop < triggerBottom) {
            el.classList.add('animate-img');
        }
    });
};

window.addEventListener('scroll', checkBoxes);

const showAnimationLogo = () => {
    logoEl.animate([
        { transform: 'scale(.5)' },
        { transform: 'scale(1)' },
    ], {
        duration: 500,
        iterations: 1,
        fill: 'forwards',
    });
};

const switchToDark = () => {
    switchLunaEl.style.display = 'none';
    switchSunEl.style.display = 'block';
    document.body.style.setProperty('--color-background', '#111');
    document.body.style.setProperty('--navigation-color', '#FFF');
    document.body.style.setProperty('--color-font', '#FFF');
    document.querySelector('.realize-house').style.background = 'linear-gradient(to bottom, #111 0%,#1111 0%,#2c2c2c 20%,#444444 50%,#111 80%)';
};

const switchToWhite = () => {
    switchLunaEl.style.display = 'block';
    switchSunEl.style.display = 'none';
    document.body.style.setProperty('--navigation-color', '#585858');
    document.body.style.setProperty('--color-background', '#FFF');
    document.body.style.setProperty('--color-font', '#111');
    document.querySelector('.realize-house').style.background = '';
};

window.addEventListener('load', () => {
    showAnimationLogo();
    mainImgEl.classList.add('animate-img');
});

switchLunaEl.addEventListener('click', () => {
    switchToDark();
});

switchSunEl.addEventListener('click', () => {
    switchToWhite();
});

animateImgEls.forEach((el) => {
    console.log(el.visibility);
    el.addEventListener('visibilitychange', () => {
    });
});

scrollEl.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

const scrolling$ = fromEvent(document, 'scroll')
    .pipe(
        scan(() => window.scrollY),
        debounceTime(20),
    );

scrolling$.subscribe((winPos) => {
    if (winPos > 100) {
        scrollEl.classList.remove('scroll-up__hidden');
    } else {
        scrollEl.classList.add('scroll-up__hidden');
    }
});
