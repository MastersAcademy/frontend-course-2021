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
