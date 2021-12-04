
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
        this.displayContentEl.addEventListener('click', (event) => {
            this.loaderEl.classList.add('active');
            setTimeout(() => {
                this.showPreviewImages(event);
            }, 500);
        });
        this.imageFocusEl.addEventListener('click', this.hideShowPreviewImages);
    }

    private settingsHandler = (event: any) => {
        const files = event.target.files[0];
        if (!event.target.files.length) {
            return
        }
        if (!files.type.match('image')) {
            return  alert('Data type does not match "image"');
        }
        this.loaderEl.classList.add('active');
        setTimeout(() => {
            this.renderImage(files);
        }, 2000);
    };

    private renderImage = (files: any) => {
        const src: string = URL.createObjectURL(files);
        this.displayContentEl.insertAdjacentHTML('afterbegin',
            `<img class="main__content-item" src="${src}" alt="${files.name}"/>
        `);
        this.loaderEl.classList.remove('active');
    };

    private showPreviewImages = (event: any) => {
        const src: string = (event.target as HTMLImageElement).src;
        this.imageFocusEl.classList.add('images__active');
        this.imageFocusEl.insertAdjacentHTML('afterbegin',
            `<img class="images__enlarged" src="${src}"/>
        `);
        this.loaderEl.classList.remove('active');
    }

    private hideShowPreviewImages = () => {
        this.imageFocusEl.classList.remove('images__active');
        this.imageFocusEl.innerHTML = '';
    };
}
new UploadImage(uploadInputEl, displayContentEl, loaderEl, imageFocusEl);
