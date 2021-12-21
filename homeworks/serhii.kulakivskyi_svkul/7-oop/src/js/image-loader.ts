export class ImageLoader {
    private readonly imagesList: Element
    private readonly imageLoader: HTMLElement
    private readonly btnElement: HTMLButtonElement
    private readonly inputElement: HTMLInputElement

    constructor(private images: Element) {
        const imagesList = this.images.querySelector<HTMLButtonElement>('[data-image-list]');
        const imageLoader = this.images.querySelector<HTMLElement>('[data-image-loader]');
        const btnElement = this.images.querySelector<HTMLButtonElement>('[data-image-btn]');
        const inputElement = this.images.querySelector<HTMLInputElement>('[data-image-input]');

        if(!imagesList) {
            throw new Error('Missing element with [data-image-list]')
        }

        if(!imageLoader) {
            throw new Error('Missing element with [data-image-loader]')
        }

        if(!btnElement) {
            throw new Error('Missing element with [data-image-btn]')
        }

        if(!inputElement) {
            throw new Error('Missing element with [data-image-input]')
        }

        this.imagesList = imagesList;
        this.imageLoader = imageLoader;
        this.btnElement = btnElement;
        this.inputElement = inputElement;

        this.listenEvents();
    }

    private listenEvents() {
        this.btnElement.addEventListener('click', () => {
            this.inputElement.click();
        });

        this.inputElement.addEventListener('change', (e) => {
            this.setLoaderStatus(true);
            const file: File = (e.target as HTMLInputElement).files[0];

            if (file) {
                const img = this.loadImgHtml(file);
                this.setImageIntoPage(img);
            }
        })
    }

    private loadImgHtml(file: File) {
        const img = document.createElement('img');
        img.dataset.gallery = '';
        img.src = URL.createObjectURL(file);
        return img;
    }

    private setLoaderStatus(status: boolean) {
        if(status) {
            this.imageLoader.dataset.imageLoader = 'true';
        } else {
            this.imageLoader.dataset.imageLoader = 'false';
        }
    }

    private setImageIntoPage(img: HTMLImageElement) {
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'images__item';
        imageWrapper.appendChild(img);

        setTimeout(() => {
            this.setLoaderStatus(false);
            this.imagesList.prepend(imageWrapper);
        }, 2000);
    }
}
