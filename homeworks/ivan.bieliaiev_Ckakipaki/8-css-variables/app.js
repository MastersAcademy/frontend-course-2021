const switchLunaEl = document.querySelector('[data-switch-luna]');
const switchSunEl = document.querySelector('[data-switch-sun]');

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

switchLunaEl.addEventListener('click', () => {
    switchToDark();
});

switchSunEl.addEventListener('click', () => {
    switchToWhite();
});
