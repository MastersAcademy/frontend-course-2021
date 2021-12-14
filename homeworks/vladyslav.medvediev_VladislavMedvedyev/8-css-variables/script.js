const nightThemeToggleEl = document.querySelector('[data-night-theme]');
const dayThemeToggleEl = document.querySelector(['[data-day-theme]']);
const bodyEl = document.querySelector('[data-body]');

nightThemeToggleEl.addEventListener('click', () => {
    bodyEl.setAttribute('data-theme-night', '');
    nightThemeToggleEl.classList.toggle('header__button-night-theme-hidden');
    dayThemeToggleEl.classList.toggle('header__button-day-theme-visible');
});

dayThemeToggleEl.addEventListener('click', () => {
    bodyEl.removeAttribute('data-theme-night');
    nightThemeToggleEl.classList.toggle('header__button-night-theme-hidden');
    dayThemeToggleEl.classList.toggle('header__button-day-theme-visible');
});
