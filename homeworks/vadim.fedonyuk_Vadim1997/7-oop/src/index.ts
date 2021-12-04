import './style.css'

class Gallery {
    private readonly dataGalleryEl: HTMLElement;
    private readonly buttonAddEl: HTMLElement;
    private readonly inputFileEl: HTMLElement;
    private readonly imageStore: string[] = [];
    private readonly fullSizeModal: HTMLElement;
    private readonly fullSizeImage: HTMLElement;
    private readonly closeSizeImage: HTMLElement;

    constructor(private images: Element) {
        const dataGalleryEl = this.images.querySelector<HTMLElement>('[data-images]');
        const buttonAddEl = this.images.querySelector<HTMLButtonElement>('[data-button-add]');
        const inputFileEl = this.images.querySelector<HTMLButtonElement>('[data-input-file]');
        this.fullSizeModal = document.querySelector<HTMLElement>('[data-full-size-modal]');
        this.fullSizeImage = document.querySelector<HTMLElement>('[data-full-image]');
        this.closeSizeImage = document.querySelector<HTMLElement>('[data-button-close]')

        this.imageStore = [
            'https://images.unsplash.com/photo-1474591424615-7fe467c7fac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80',
            'https://images.unsplash.com/photo-1475518845976-0fd87b7e4e5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=7360&q=80',
            'https://images.unsplash.com/photo-1630936404616-df78789005c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3763&q=80'
        ]

        this.inputFileEl = inputFileEl;
        this.buttonAddEl = buttonAddEl;
        this.dataGalleryEl = dataGalleryEl;
        this.addImages();
        this.getGallery();
    }

    private getGallery() {
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


    private addImages() {
        this.buttonAddEl.addEventListener('click', () => {
            this.inputFileEl.click();
        });

        this.inputFileEl.addEventListener('change', (event) => {
            const objectURL = URL.createObjectURL((event.target as HTMLInputElement).files[0])
            this.imageStore.push(objectURL);
            this.renderImage(objectURL);
        })
        this.dataGalleryEl.addEventListener('click', (event) => {
            if (!(event.target as HTMLImageElement).currentSrc) {
                return;
            }
            this.fullSizeModal.classList.add('visible');
            this.fullSizeImage.setAttribute('src', (event.target as HTMLImageElement).currentSrc);
        })
        this.closeSizeImage.addEventListener('click', () => {
            this.fullSizeModal.classList.remove('visible');
            this.fullSizeModal.classList.add('hidden');
        })
    }

}

const contentEl = document.querySelector<HTMLElement>('[data-gallery]');
new Gallery(contentEl)

