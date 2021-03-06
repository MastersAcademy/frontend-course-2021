
import './style.css';

const uploadInputEl: HTMLElement = document.querySelector('[data-upload]');
const displayContentEl: HTMLElement  = document.querySelector('[data-display-image]');
const loaderEl: HTMLElement = document.querySelector('[data-loader]');
const imageFocusEl: HTMLElement = document.querySelector('[data-enlarged-image]');

class UploadImage {
    constructor (
        private uploadInputEl: HTMLElement,
        private displayContentEl: HTMLElement,
        private loaderEl: HTMLElement,
        private imageFocusEl: HTMLElement,
    ){
        this.listenEvents();
    }

    private listenEvents() {
        this.uploadInputEl.addEventListener('change', this.settingsHandler);
        this.displayContentEl.addEventListener('click', (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.hasAttribute('data-item-img')) {
                this.loaderEl.classList.add('active');
                setTimeout(() => {
                    this.showPreviewImages(target.src);
                }, 500);
            }
        });
        this.imageFocusEl.addEventListener('click', this.hideShowPreviewImages);
    }

    private settingsHandler = (event: Event): void => {
        const file = (event.target as HTMLInputElement).files[0];
        if (!file.type.match('image')) {
            return  alert('Data type does not match "image"');
        }
        this.loaderEl.classList.add('active');
        const url: string = URL.createObjectURL(file);
        setTimeout(() => {
            this.renderImage(url);
        }, 2000);
    };

    private renderImage = (src: string): void => {
        this.displayContentEl.insertAdjacentHTML('afterbegin',
            `<img data-item-img class="main__content-item" src="${src}"/>
        `);
        this.loaderEl.classList.remove('active');
    };

    private showPreviewImages = (src: string): void => {
        this.imageFocusEl.classList.add('images__active');
        this.imageFocusEl.insertAdjacentHTML('afterbegin',
            `<img class="images__enlarged" src="${src}"/>
        `);
        this.loaderEl.classList.remove('active');

    }

    private hideShowPreviewImages = (): void => {
        this.imageFocusEl.classList.remove('images__active');
        this.imageFocusEl.innerHTML = '';
    };
}
new UploadImage(uploadInputEl, displayContentEl, loaderEl, imageFocusEl);
