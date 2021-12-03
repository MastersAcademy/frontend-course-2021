export class ImageGallery {
    private readonly imagesList: Element
    private readonly imageLoader: HTMLElement
    private readonly viewer: HTMLElement
    private readonly imageViewer: HTMLImageElement
    private readonly imageViewerClose: HTMLButtonElement

    constructor(private images: Element) {
        const imagesList = this.images.querySelector<HTMLButtonElement>('[data-image-list]');
        const imageLoader = this.images.querySelector<HTMLElement>('[data-image-loader]');
        const viewer = this.images.querySelector<HTMLElement>('[data-viewer]');
        const imageViewer = this.images.querySelector<HTMLImageElement>('[data-viewer-img]');
        const imageViewerClose = this.images.querySelector<HTMLButtonElement>('[data-viewer-close]');

        if(!imagesList) {
            throw new Error('Missing element with [data-image-list]')
        }

        if(!imageLoader) {
            throw new Error('Missing element with [data-image-loader]')
        }

        if(!viewer) {
            throw new Error('Missing element with [data-viewer]')
        }

        if(!imageViewer) {
            throw new Error('Missing element with [data-viewer-img]')
        }

        if(!imageViewerClose) {
            throw new Error('Missing element with [data-viewerclose]')
        }

        this.imagesList = imagesList;
        this.imageLoader = imageLoader;
        this.viewer = viewer;
        this.imageViewer = imageViewer;
        this.imageViewerClose = imageViewerClose;

        this.listenEvents();
    }

    private listenEvents() {
        this.imagesList.addEventListener('click', (e) => {
            const { target }: { target: EventTarget } = e;

            if((target as HTMLElement).getAttribute('data-gallery') === '') {
                const src: string = (target as HTMLImageElement).src;

                this.showImage(src);
            }
        });

        this.imageViewerClose.addEventListener('click', () => {
            this.viewer.dataset.viewer = '';
            this.imageViewer.src = '';
        });
    }


    private showImage(src: string) {
        console.log('here');

        this.imageLoader.dataset.imageLoader = 'true';

        setTimeout(() => {
            this.imageViewer.src = src;
            this.imageLoader.dataset.imageLoader = 'false';
            this.viewer.dataset.viewer = 'true';
        }, 500);
    }
}
