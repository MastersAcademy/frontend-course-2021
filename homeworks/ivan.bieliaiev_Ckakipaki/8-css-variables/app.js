const switchEl = document.querySelector('[data-switch]');
const switchIConEl = switchEl.querySelector('[data-switch-href]');
let mode = 'light';

const switchToDark = () => {
    switchIConEl.href = './src/sprite.svg#sun';
    document.body.style.setProperty('--color-background', '#111');
    document.body.style.setProperty('--navigation-color', '#FFF');
    document.body.style.setProperty('--color-font', '#FFF');
    document.querySelector('.realize-house').style.background = 'linear-gradient(to top, var(--color-background), var(--color-background), var(--color-font), var(--color-background), var(--color-background))';
    mode = 'dark';
};

const switchToWhite = () => {
    switchIConEl.href = './src/sprite.svg#luna';
    document.body.style.setProperty('--navigation-color', '#585858');
    document.body.style.setProperty('--color-background', '#FFF');
    document.body.style.setProperty('--color-font', '#111');
    document.querySelector('.realize-house').style.background = '';
    mode = 'light';
};

switchEl.addEventListener('click', () => {
    console.log('click');
    if (mode === 'light') {
        switchToDark();
    } else if (mode === 'dark') {
        switchToWhite();
    }
});
