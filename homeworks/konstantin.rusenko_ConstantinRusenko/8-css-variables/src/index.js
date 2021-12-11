const toggleSwitch = document.querySelector('[data-theme]');
const toggleSwitchIcon = document.querySelector('[data-theme-icon]');
const burgerToggle = document.querySelector('[data-toggle]');
const burgerIcon = document.querySelector('[data-burger]');
const navigation = document.querySelector('[data-nav]');
const currentTheme = toggleSwitch.dataset.theme;

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

toggleSwitch.addEventListener('click', switchTheme);
burgerToggle.addEventListener('click', toggleBurger);
