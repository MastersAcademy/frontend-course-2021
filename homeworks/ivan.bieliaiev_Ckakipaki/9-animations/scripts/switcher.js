export class Switcher {
    constructor(lightEl, darkEl) {
        this.switcherLightEl = lightEl;
        this.switcherDarkEl = darkEl;
    }

    switchToLight() {
        this.switcherDarkEl.style.display = 'block';
        this.switcherLightEl.style.display = 'none';
        document.body.style.setProperty('--navigation-color', '#585858');
        document.body.style.setProperty('--color-background', '#FFF');
        document.body.style.setProperty('--color-font', '#111');
        document.querySelector('.realize-house').style.background = '';
    }

    switchToDark() {
        this.switcherDarkEl.style.display = 'none';
        this.switcherLightEl.style.display = 'block';
        document.body.style.setProperty('--color-background', '#111');
        document.body.style.setProperty('--navigation-color', '#FFF');
        document.body.style.setProperty('--color-font', '#FFF');
        document.querySelector('.realize-house').style.background = 'linear-gradient(to bottom, #111 0%,#1111 0%,#2c2c2c 20%,#444444 50%,#111 80%)';
    }
}
