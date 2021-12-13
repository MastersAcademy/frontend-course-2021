const htmlEl = document.querySelector('[data-html]');
const nightThemeToggleEl = document.querySelector('[data-night-theme]');
const dayThemeToggleEl = document.querySelector(['[data-day-theme]']);

nightThemeToggleEl.addEventListener('click', () => {
    htmlEl.style.setProperty('--button-color', 'rgba(253, 126, 119, 1)');
    htmlEl.style.setProperty('--background-color', 'rgba(13, 13, 13, 1)');
    htmlEl.style.setProperty('--header-and-footer-text-color', 'rgba(255, 255, 255, 1)');
    htmlEl.style.setProperty('--text-and-advantages-svg-stroke-color', 'rgba(255, 255, 255, 1)');
    htmlEl.style.setProperty('--background-gradient', 'linear-gradient(180deg, rgba(13, 13, 13, 1) 22.12%, rgba(249, 249, 249, 0) 100%)');
    nightThemeToggleEl.classList.toggle('header__button-night-theme-hidden');
    dayThemeToggleEl.classList.toggle('header__button-day-theme-visible');
});

dayThemeToggleEl.addEventListener('click', () => {
    htmlEl.style.setProperty('--button-color', 'rgba(253, 102, 94, 1)');
    htmlEl.style.setProperty('--background-color', 'rgba(255, 255, 255, 1)');
    htmlEl.style.setProperty('--header-and-footer-text-color', 'rgba(88, 88, 88, 1)');
    htmlEl.style.setProperty('--text-and-advantages-svg-stroke-color', 'rgba(0, 0, 0, 1)');
    htmlEl.style.setProperty('--background-gradient', 'linear-gradient(180deg, rgba(249, 249, 249, 1) 22.12%, rgba(249, 249, 249, 0) 100%)');
    nightThemeToggleEl.classList.toggle('header__button-night-theme-hidden');
    dayThemeToggleEl.classList.toggle('header__button-day-theme-visible');
});
