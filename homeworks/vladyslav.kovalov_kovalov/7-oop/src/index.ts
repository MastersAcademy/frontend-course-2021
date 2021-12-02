
class FullScreen {
    private readonly templateElement: HTMLTemplateElement;
    private readonly spinnerElement: HTMLDivElement;

    constructor(
        private readonly el: HTMLElement,
    ) {
        const templateElement = this.el.querySelector<HTMLTemplateElement>('[data-full-screen-template]');
        const spinnerElement = this.el.querySelector<HTMLDivElement>('[data-full-screen-spinner]');

        if(!templateElement) throw new Error('Missing element with [data-full-screen-template]');

        if(!spinnerElement) throw new Error('Missing element with [data-full-screen-spinner]')

        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;

        this.listenEvents();
    }

    private listenEvents() {
        this.el.addEventListener('click', event => {
            const image = (event.target as HTMLElement);
            const data: DOMStringMap= image.dataset;

            if(data.fullScreen !== undefined) {
                this.el.classList.add('hidden');
                const childElement: any = this.el.querySelector('[data-full-screen-image]');
                this.el.removeChild(childElement);
            }
        })

    }

    private createImage(source: string): Element | null {
        const content = this.templateElement.content.cloneNode(true);
        const element: HTMLElement | null = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
        element?.setAttribute('src', source);
        return element;
    }

    private toggleImage(element: HTMLElement): void {
        this.el.classList.remove('hidden');
        this.spinnerElement.classList.remove('hidden');

        setTimeout(() => {
            this.el.append(element);
            this.spinnerElement.classList.add('hidden');
        }, 1000);
    }
}

class Uploader {
    constructor(
        private readonly el: any,
    ) {

    }

    private listenEvents() {
        this.el.addEventListener('change', (event: MouseEvent) => {
            const element = (event.target as HTMLInputElement);
            const file = (element.files as FileList)[0];

            this.getBase64(file).then(data => {
                return data;
            });
        })
    }

    private getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }
}

class Gallery {
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
        })
    }
}

new Gallery(
    document.querySelector('[data-gallery]') as HTMLElement,
    FullScreen,
    Uploader
);
