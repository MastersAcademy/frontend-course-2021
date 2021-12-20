const changeSkin = document.querySelector('[data-attr-change-skin]');
const iconSkinEl = document.querySelector('[data-attr-icon]');
const bodyEl = document.querySelector('body');
const currentTheme = localStorage.getItem('skin');
const preloaderEl = document.querySelector('[data-preloader]');
const toTopEl = document.querySelector('[data-to-top]');
const imagesEl = document.querySelectorAll('[data-image]');
const options = { threshold: [0.5] };

window.addEventListener('load', () => {
    setTimeout(() => {
        if (!preloaderEl.classList.contains('done')) {
            preloaderEl.classList.add('done');
        }
    }, 1000);
});

function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        toTopEl.classList.add('to-top--show');
    }
    if (scrolled < coords) {
        toTopEl.classList.remove('to-top--show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 20);
    }
}

function setTheme(name) {
    bodyEl.setAttribute('data-skin', name);
    iconSkinEl.setAttribute('xlink:href', `#${name}`);
    localStorage.setItem('skin', name);
}

function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add('animation__show');
        }
    });
}

function init() {
    const observer = new IntersectionObserver(onEntry, options);

    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        setTheme('light');
    }

    changeSkin.addEventListener('click', () => {
        if (bodyEl.getAttribute('data-skin') === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    });
    window.addEventListener('scroll', trackScroll);
    toTopEl.addEventListener('click', backToTop);

    for (let i = 0; i < imagesEl.length; i++) {
        observer.observe(imagesEl[i]);
    }
}

init();
