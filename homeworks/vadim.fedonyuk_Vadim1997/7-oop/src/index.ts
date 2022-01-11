import './style.css'

class Gallery {
    private readonly dataGalleryEl: HTMLElement;
    private readonly buttonAddEl: HTMLElement;
    private readonly inputFileEl: HTMLElement;
    private readonly loadModal: HTMLElement;
    imageStore: string[] = [];

    constructor(private images: HTMLElement) {
        const dataGalleryEl = this.images.querySelector<HTMLElement>('[data-images]');
        const buttonAddEl = this.images.querySelector<HTMLButtonElement>('[data-button-add]');
        const inputFileEl = this.images.querySelector<HTMLButtonElement>('[data-input-file]');
        const loadModal = this.images.querySelector<HTMLElement>('[data-load-modal]');

        this.imageStore = [
            'https://images.unsplash.com/photo-1474591424615-7fe467c7fac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80',
            'https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=7360&q=80',
            'https://images.unsplash.com/photo-1630936404616-df78789005c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3763&q=80',
            'https://images.unsplash.com/photo-1560450704-5bc8d6792948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=521&q=80'
        ]

        this.dataGalleryEl = dataGalleryEl;
        this.buttonAddEl = buttonAddEl;
        this.inputFileEl = inputFileEl;
        this.loadModal = loadModal;

        this.addImages();
        this.getGallery();
    }

    private getGallery(): void {
        this.imageStore.forEach((image) => {
            this.renderImage(image);
        })
    }

    private renderImage(image: string): void {
        const currentImage: HTMLElement = this.getElementAttribute(image);
        this.dataGalleryEl.prepend(currentImage);
    }

    private getElementAttribute(image: string): HTMLElement {
        const template = document.querySelector('[data-template-images]') as HTMLTemplateElement;
        const templateImage = template.content.cloneNode(true);
        const element: HTMLElement = (templateImage as HTMLImageElement).querySelector('[data-image]');
        element?.setAttribute('src', image);
        return element;
    }


    private addImages(): void {
        this.buttonAddEl.addEventListener('click', () => {
            this.inputFileEl.click();
        });

        this.inputFileEl.addEventListener('change', (event) => {
            const objectURL = URL.createObjectURL((event.target as HTMLInputElement).files[0])
            this.imageStore.push(objectURL);
            this.loadModal.classList.add('visible')
            setTimeout(() => {
                this.loadModal.classList.remove('visible')
                this.renderImage(objectURL);
            }, 2000);

        })
    }
}

class FullSizeImage {
    private readonly dataGalleryEl: HTMLElement;
    private readonly fullSizeModal: HTMLElement;
    private readonly fullSizeImage: HTMLElement;
    private readonly closeSizeImage: HTMLElement;

    constructor(private images: HTMLElement) {
        const dataGalleryEl = this.images.querySelector<HTMLElement>('[data-images]');
        const fullSizeModal = this.images.querySelector<HTMLElement>('[data-full-size-modal]');
        const fullSizeImage = this.images.querySelector<HTMLElement>('[data-full-image]');
        const closeSizeImage = this.images.querySelector<HTMLElement>('[data-button-close]');

        this.dataGalleryEl = dataGalleryEl;
        this.fullSizeModal = fullSizeModal;
        this.fullSizeImage = fullSizeImage
        this.closeSizeImage = closeSizeImage;

        this.getFullImage()
    }

    private getFullImage(): void {
        this.dataGalleryEl.addEventListener('click', (event) => {
            if (!(event.target as HTMLImageElement).currentSrc) {
                return;
            }
            this.fullSizeModal.classList.add('visible');
            this.fullSizeImage.setAttribute('src', (event.target as HTMLImageElement).currentSrc);
        })
        this.closeFullImage()
    }
    private closeFullImage(): void {
        this.closeSizeImage.addEventListener('click', () => {
            this.fullSizeModal.classList.remove('visible');
            this.fullSizeModal.classList.add('hidden');
        })
    }
}

const contentEl = document.querySelector<HTMLElement>('[data-gallery]');
new Gallery(contentEl)
new FullSizeImage(contentEl)


