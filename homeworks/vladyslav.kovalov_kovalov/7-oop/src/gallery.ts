import { Uploader } from './uploader';
import { FullScreen } from './fullscreen';
export class Gallery {
    private imageStorage: string[] = [];
    private onImageUploaded: CallableFunction;

    constructor(
        private galleryElement:HTMLElement,
        private fullScreen: any,
        private imageUploader: any,
    ){

        this.onImageUploaded = this.saveImage.bind(this);
        this.fullScreen = new FullScreen(document.querySelector('[data-full-screen]') as HTMLElement);
        this.imageUploader = new Uploader(document.querySelector('[data-image-uploader]') as HTMLElement, this.onImageUploaded);

        this.imageStorage = [
            'img/img-0.jpg',
            'img/img-1.jpg',
            'img/img-2.jpg',
            'img/img-3.jpg',
            'img/img-4.jpg'
        ];

        this.initGallery();
        this.listenEvents();
    }

    private initGallery(): void {
        this.imageStorage.forEach((image, index) => {
            this.renderImage(image, index);
        })
    }

    private saveImage(element: string): void {
        const length: number = this.imageStorage.push(element)
        const index: number = length - 1;

        this.renderImage(element, index);
    }

    private renderImage(image: string, index: number): void {
        const currentImage: HTMLImageElement = this.loadImage(image, index);
        this.galleryElement.prepend(currentImage);
    }

    private loadImage(imageSrc: string, index: number): HTMLImageElement {
        const template: HTMLTemplateElement = document.querySelector('[data-new-image-template]') as HTMLTemplateElement;
        const content: any = template.content.cloneNode(true);
        const element: any = (content as HTMLImageElement).querySelector('[data-new-image-template-element]');
        element?.setAttribute('src', imageSrc);
        element?.setAttribute('data-index', index);
        element?.removeAttribute('data-new-image-template-element');
        return element;
    }

    private listenEvents(): void {
        this.galleryElement.addEventListener('click', event => {
            const image: HTMLElement = (event.target as HTMLElement);
            const index: string | undefined = image.dataset.index;

            if(index !== undefined) {
                const source: string = this.imageStorage[Number(index)]
                const fullScreenImage: HTMLImageElement = this.fullScreen.createImage(source);
                this.fullScreen.toggleImage(fullScreenImage);
            }
        });
    }
}

