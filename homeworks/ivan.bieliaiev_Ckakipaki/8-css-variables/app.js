const switchEl = document.querySelector('[data-switch]');
const switchIConEl = switchEl.querySelector('[data-switch-href]');
let mode = 'white';

const switchToDark = () => {
    switchIConEl.href = './src/sprite.svg#sun';
    document.body.style.setProperty('--color-background', '#111');
    document.body.style.setProperty('--navigation-color', '#FFF');
    document.body.style.setProperty('--color-font', '#FFF');
    mode = 'dark';
};

const switchToWhite = () => {
    switchIConEl.href = './src/sprite.svg#luna';
    document.body.style.setProperty('--navigation-color', '#585858');
    document.body.style.setProperty('--color-background', '#FFF');
    document.body.style.setProperty('--color-font', '#111');
    mode = 'white';
};

switchEl.addEventListener('click', () => {
    console.log('click');
    if (mode === 'white') {
        switchToDark();
    } else if (mode === 'dark') {
        switchToWhite();
    }
});
