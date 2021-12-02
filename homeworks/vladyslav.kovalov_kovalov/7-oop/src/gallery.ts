import { Uploader } from './uploader';
import { FullScreen } from './fullscreen';

export class Gallery {
    private imageStorage: string[] = [];

    constructor(
        private galleryElement:HTMLElement,
        private fullScreen: any,
        private imageUploader: any,
    ){
        this.fullScreen = new FullScreen(document.querySelector('[data-full-screen]') as HTMLElement);
        this.imageUploader = new Uploader(document.querySelector('[data-image-upload]') as HTMLElement);

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

    private initGallery() {
        this.imageStorage.forEach((image, index) => {
            this.renderImage(image, index);
        })
    }

    private saveImage(element: any) {
        this.imageStorage.push(element);
    }

    private renderImage(image: any, index: any): void {
        const currentImage: HTMLImageElement = this.loadImage(image, index);
        this.galleryElement.prepend(currentImage);
    }

    private loadImage(imageSrc: string, index: number) {
        const template = document.querySelector('[data-new-image-template]') as HTMLTemplateElement;
        const content = template.content.cloneNode(true);
        const element: any = (content as HTMLImageElement).querySelector('[data-new-image-template-element]');
        element?.setAttribute('src', imageSrc);
        element?.setAttribute('data-index', index);
        element?.removeAttribute('data-new-image-template-element');
        return element;
    }

    private listenEvents() {
        this.galleryElement.addEventListener('click', event => {
            const image: HTMLElement = (event.target as HTMLElement);
            const index: string | undefined = image.dataset.index;

            if(index !== undefined) {
                const source: string = this.imageStorage[Number(index)]
                const fullScreenImage: HTMLElement = this.fullScreen.createImage(source);
                this.fullScreen.toggleImage(fullScreenImage);
            }
        });

        this.imageUploader.el.addEventListener('change', (event: MouseEvent) => {
            const element = (event.target as HTMLInputElement);
            const file = (element.files as FileList)[0];

            this.imageUploader.getBase64(file).then((imageElement: any) => {
                this.saveImage(imageElement);

                const index = this.imageStorage.length - 1;
                const image = this.imageStorage[index];

                this.renderImage(image, index);
            });
        });
    }
}

