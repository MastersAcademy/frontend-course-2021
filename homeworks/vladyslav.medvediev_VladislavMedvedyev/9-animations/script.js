const nightThemeToggleEl = document.querySelector('[data-night-theme]');
const dayThemeToggleEl = document.querySelector('[data-day-theme]');
const bodyEl = document.querySelector('[data-body]');
const buttonEl = document.querySelector('[data-button]');

function bodyAttributeToggle() {
    if (bodyEl.hasAttribute('data-theme-night')) {
        bodyEl.removeAttribute('data-theme-night');
    } else {
        bodyEl.setAttribute('data-theme-night', '');
    }
}

buttonEl.addEventListener('click', () => {
    bodyAttributeToggle();
    nightThemeToggleEl.classList.toggle('header__button-night-theme-hidden');
    dayThemeToggleEl.classList.toggle('header__button-day-theme-visible');
});

window.onload = () => {
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
    };

    const observerViewport = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyLoad = entry.target;
                lazyLoad.classList.toggle('img-show');
                observer.unobserve(lazyLoad);
            }
        });
    }, options);

    const images = document.querySelectorAll('[data-img]');
    images.forEach((i) => {
        observerViewport.observe(i);
    });
};
