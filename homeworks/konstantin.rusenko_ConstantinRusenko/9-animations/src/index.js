const toggleSwitch = document.querySelector('[data-theme]');
const toggleSwitchIcon = document.querySelector('[data-theme-icon]');
const burgerToggle = document.querySelector('[data-toggle]');
const burgerIcon = document.querySelector('[data-burger]');
const burgerSVG = document.querySelector('[data-svg]');
const navigation = document.querySelector('[data-nav]');
const goToTheButtonEl = document.querySelector('[data-top-button]');
const currentTheme = toggleSwitch.dataset.theme;
const targets = document.querySelectorAll('img');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

const switchTheme = () => {
    if (toggleSwitch.dataset.theme === 'light') {
        toggleSwitch.dataset.theme = 'dark';
        toggleSwitchIcon.setAttribute('href', 'src/image/sprite.svg#light');
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        toggleSwitch.dataset.theme = 'light';
        toggleSwitchIcon.setAttribute('href', 'src/image/sprite.svg#dark');
        document.documentElement.setAttribute('data-theme', 'light');
    }
};

const toggleBurger = () => {
    navigation.classList.toggle('visible');
    if (navigation.classList.contains('visible')) {
        burgerIcon.setAttribute('href', 'src/image/sprite.svg#close');
    } else {
        burgerIcon.setAttribute('href', 'src/image/sprite.svg#burger');
    }
};

const finc = (event) => {
    if ((event.target !== navigation)
        && (event.target !== burgerIcon)
        && (event.target !== burgerSVG)
        && navigation.classList.contains('visible')) {
        navigation.classList.remove('visible');
        burgerIcon.setAttribute('href', 'src/image/sprite.svg#burger');
    }
};

const trackScroll = () => {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goToTheButtonEl.classList.add('visible');
    }
    if (scrolled < coords) {
        goToTheButtonEl.classList.remove('visible');
    }
};

const backToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 20);
    }
};

const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);
                img.classList.add('fade');

                observer.disconnect();
            }
        });
    });

    io.observe(target);
};

targets.forEach(lazyLoad);

window.addEventListener('scroll', trackScroll);
goToTheButtonEl.addEventListener('click', backToTop);
document.addEventListener('click', finc);
toggleSwitch.addEventListener('click', switchTheme);
burgerToggle.addEventListener('click', toggleBurger);
