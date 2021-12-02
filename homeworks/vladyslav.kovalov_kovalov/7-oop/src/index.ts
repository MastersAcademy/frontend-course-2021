class Gallery {
    private imageStorage: string[] = [];

    constructor(
        private galleryElement:HTMLDivElement,
        private fullScreenElement: HTMLDivElement,
        private imageUploaderElement: HTMLInputElement,
        private fullScreenTemplate: HTMLTemplateElement,
        private fullScreenLoader: HTMLDivElement,
    ){
        this.imageStorage = [
            'img/img-0.jpg',
            'img/img-1.jpg',
            'img/img-2.jpg',
            'img/img-3.jpg',
            'img/img-4.jpg'
        ];

        this.listenEvents();
        this.initGallery();
    }

    private initGallery() {
        this.imageStorage.forEach((image, index) => {
            this.renderImage(image, index);
        })
    }

    private saveImage(element: any) {
        this.imageStorage.push(element);
    }

    private renderImage(image: any, index: any) {
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

    private createFullSizeImage(src: any) {
        const template = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
        const content = template.content.cloneNode(true);
        const element = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
        element?.setAttribute('src', src);
        return element;
    }

    private toggleFullSizeImage(imageSource: any): void {
        const imagePath = imageSource;
        const image: any = this.createFullSizeImage(imagePath);

        this.fullScreenElement?.classList.remove('hidden');
        this.fullScreenLoader.classList.remove('hidden');

        setTimeout(() => {
            this.fullScreenElement.append(image);
            this.fullScreenLoader.classList.add('hidden');
        }, 1000);
    }

    private listenEvents(): void {
        this.galleryElement?.addEventListener('click', event => {
            const image = (event.target as HTMLButtonElement);
            const imageIndex: any = image.getAttribute('data-index');
            const imageSource = this.imageStorage[imageIndex];

            if(imageSource !== undefined) this.toggleFullSizeImage(imageSource);

        });

        this.fullScreenElement?.addEventListener('click', event => {
            const currentImage = (event.target as HTMLButtonElement).dataset;
            if(currentImage.fullScreenImage !== '') {
                this.fullScreenElement?.classList.add('hidden');
                const childElement = this.fullScreenElement.querySelector('[data-full-screen-image]') as HTMLImageElement;
                this.fullScreenElement.removeChild(childElement);
            }
        });

        imageUploaderElement?.addEventListener('change', event => {
            const element = (event.target as HTMLInputElement);
            const file = (element.files as FileList)[0];

            this.getBase64(file).then(imageSource => {
                const element: any = imageSource;
                this.imageStorage.push(element);

                const index = (this.imageStorage.length - 1);
                this.renderImage(this.imageStorage[index], index);
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

// class Uploader {
//     constructor(
//         private imageUploaderElement: HTMLInputElement,
//     ) {}

//     private listenEvent() {
//         imageUploaderElement?.addEventListener('change', event => {
//             const element = (event.target as HTMLInputElement);
//             const file = (element.files as FileList)[0];

//             this.getBase64(file).then(image => {
//                 return image;
//             });
//         })
//     }

//     private getBase64(file: any) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = error => reject(error);
//         })
//     }
// }

// class FullScreenImage {
//     constructor(
//         private fullScreenElement: HTMLInputElement,
//         private fullScreenLoader: HTMLDivElement,
//         private fullScreenTemplate: HTMLTemplateElement,
//     ) {}

//     private listenEvent() {
//         this.fullScreenElement?.addEventListener('click', event => {
//             const currentImage = (event.target as HTMLButtonElement).dataset;
//             if(currentImage.fullScreenImage !== '') {
//                 this.fullScreenElement?.classList.add('hidden');
//                 const childElement = this.fullScreenElement.querySelector('[data-full-screen-image]') as HTMLImageElement;
//                 this.fullScreenElement.removeChild(childElement);
//             }
//         });
//     }

//     private createFullSizeImage(src: any) {
//         const template = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
//         const content = template.content.cloneNode(true);
//         const element = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
//         element?.setAttribute('src', src);
//         return element;
//     }

//     private toggleFullSizeImage(imageSource: any): void {
//         const imagePath = imageSource;
//         const image: any = this.createFullSizeImage(imagePath);

//         this.fullScreenElement?.classList.remove('hidden');
//         this.fullScreenLoader.classList.remove('hidden');

//         setTimeout(() => {
//             this.fullScreenElement.append(image);
//             this.fullScreenLoader.classList.add('hidden');
//         }, 1000);
//     }
// }

const galleryElement = document.querySelector('[data-gallery]')! as HTMLDivElement;
const fullScreenElement = document.querySelector('[data-full-screen]') as HTMLDivElement;
const imageUploaderElement = document.querySelector('[data-image-upload]') as HTMLInputElement;
const fullScreenTemplate = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
const fullScreenLoader = document.querySelector('[data-full-screen-loader]') as HTMLDivElement;

new Gallery(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate, fullScreenLoader);

