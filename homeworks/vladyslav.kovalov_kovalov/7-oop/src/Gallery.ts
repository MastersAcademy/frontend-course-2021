import { IStorage } from './ImageStorage.types';
import { IFullScreen } from './FullScreen.types';
import { IUploader } from './Uploader.types';

export class Gallery {
    public onImageLoaded: CallableFunction;

    constructor(
        private storage: IStorage,
        private galleryElement: HTMLElement | null,
        private fullScreen: IFullScreen,
        private Uploader: IUploader,

    ) {
        this.init();
        this.listenEvents();
        this.onImageLoaded = this.save.bind(this);
        this.Uploader.listenEvents(this.onImageLoaded);

    }
    private init(): void {
        this.storage.images.forEach((image: string, index: number): void => {
            this.render(image, index);
        })
    }

    private render(image: string, index: number): void {
        const newImage: HTMLImageElement = this.create(image, index);
        this.galleryElement?.prepend(newImage);
    }

    private create(source: string, index: number): HTMLImageElement {
        const image: HTMLImageElement = document.createElement('img');
        image.classList.add('photo-grid__item');
        image.src = source;
        image.dataset.galleryItem = '';
        image.dataset.index = String(index);
        return image;
    }

    public save(image: string) {
        const length: number = this.storage.save(image);
        const index: number = length - 1;
        this.render(image, index);
    }

    private listenEvents(): void {
        this.galleryElement?.addEventListener('click', event => {
            const image: HTMLElement = (event.target as HTMLElement);
            const {index}: DOMStringMap = image.dataset;

            if(index !== undefined) {
                const source: string = this.storage.images[Number(index)];
                this.fullScreen.toggle(source);
            }
        });
    }
}
