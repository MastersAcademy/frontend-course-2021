class Gallery {
    constructor(
        private galleryElement:HTMLDivElement,
        private fullScreenElement: HTMLDivElement,
        private imageUploaderElement: HTMLInputElement,
        private fullScreenTemplate: HTMLTemplateElement
    ){
        this.listenEvents();
    }

    private listenEvents(): void {
        this.galleryElement?.addEventListener('click', event => {
            const image = (event.target as HTMLButtonElement);
            const imageSource = image.getAttribute('src');
            if(imageSource !== null) this.toggleFullSizeImage(imageSource, fullScreenElement);
        });

        this.fullScreenElement?.addEventListener('click', event => {
            const currentImage = (event.target as HTMLButtonElement).dataset;
            if(currentImage.fullScreenImage !== '') {
                this.fullScreenElement?.classList.add('hidden');
                this.fullScreenElement.innerHTML = '';
            }
        });

        imageUploaderElement?.addEventListener('change', event => {
            const element = (event.target as HTMLInputElement);
            const file = (element.files as FileList)[0];

            this.getBase64(file).then(imageSrc => {
                this.addImage(imageSrc, galleryElement);
            });
        })
    }

    private toggleFullSizeImage(imageSource: any, container: any): void {
        const imagePath = imageSource;
        const image = this.createFullSizeImage(imagePath);
        container.append(image);
        fullScreenElement?.classList.remove('hidden');
    }

    private createFullSizeImage(src: any) {
        const template = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
        const content = template.content.cloneNode(true);
        const element = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
        element?.setAttribute('src', src);
        return element;
    }

    private getBase64(file: any) {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
    });
    }

    private addImage(imageSrc: any, container: any): void {
        const template = document.querySelector('[data-new-image-template]') as HTMLTemplateElement;
        const content = template.content.cloneNode(true);
        const element = (content as HTMLImageElement).querySelector('[data-new-image-template-element]');
        element?.setAttribute('src', imageSrc);
        element?.removeAttribute('data-new-image-template-element');
        container.prepend(element);
    }
}

const galleryElement = document.querySelector('[data-gallery]')! as HTMLDivElement;
const fullScreenElement = document.querySelector('[data-full-screen]') as HTMLDivElement;
const imageUploaderElement = document.querySelector('[data-image-upload]') as HTMLInputElement;
const fullScreenTemplate = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;

new Gallery(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate);

