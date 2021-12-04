import './styles.css';

const galleryContainer: HTMLElement = document.querySelector('[data-gallery-container]');
const uploadImgBtnEl: HTMLElement = document.querySelector('[data-upload-image-btn]');
const closeImgBtnEl: HTMLElement = document.querySelector('[data-close-image-btn]');
const listOfImagesEl: Array<HTMLElement> = Array.from(document.querySelectorAll('[data-img-container]'));
const template: HTMLTemplateElement = document.querySelector('[data-gallery-item-template]');
const preloaderEl: HTMLElement = document.querySelector('[data-preloader]');
const imageUriList: Array<string> = [
    '../src/images/1.jpg',
    '../src/images/2.jpg',
    '../src/images/3.jpg',
    '../src/images/4.jpg',
    '../src/images/5.jpg',
    '../src/images/6.jpg',
]

class ImageGallery {
    private closeImgBtnEl: HTMLElement = document.querySelector('[data-close-image-btn]');
    private activeImageEl: HTMLElement;
    constructor(
        private imageGalleryContainer: HTMLElement,
        private uploadImgBtnEl: HTMLElement,
        private imageUriList: Array<string>,
        private preloaderEl: HTMLElement,
        private templateImgEl: HTMLTemplateElement,
    ) {
        this.uploadImgBtnEl.addEventListener('change', async (event: Event ): Promise<void> => {
            this.preloaderEl.classList.remove('hide');
            await setTimeout(() => {
                const newImageSrc: Blob | MediaSource = (<HTMLInputElement>event.target).files[0];
                const newImgEl: HTMLElement = this.templateImgEl.content.querySelector('[data-img-container]');
                const cloneNewImgEl: Node = newImgEl.cloneNode(true);
                (<HTMLImageElement>(<HTMLElement>cloneNewImgEl)
                    .querySelector('[data-gallery-img]'))
                    .src = URL.createObjectURL(newImageSrc);
                (<HTMLImageElement>(<HTMLElement>cloneNewImgEl)).addEventListener('click', (event: MouseEvent) => {
                    (<HTMLElement>event.currentTarget).classList.add('active');
                    this.closeImgBtnEl.classList.remove('hide');
                })
                this.imageGalleryContainer.append(cloneNewImgEl);
                this.preloaderEl.classList.add('hide');
            }, 2000);
        })
        this.closeImgBtnEl.addEventListener('click', () => {
            this.activeImageEl = document.querySelector('.gallery__item.active')
            this.activeImageEl.classList.remove('active');
        })
    }
    build() {
        const newImgEl: HTMLElement = (<HTMLTemplateElement>template).content.querySelector('[data-img-container]');
        this.imageUriList.forEach(imageUri => {
            const cloneNewImgEl: Node = newImgEl.cloneNode(true);
            (<HTMLImageElement>(<HTMLElement>cloneNewImgEl).querySelector('[data-gallery-img]')).src = imageUri;
            (<HTMLImageElement>(<HTMLElement>cloneNewImgEl)).addEventListener('click', (event: MouseEvent) => {
                (<HTMLElement>event.currentTarget).classList.add('active');
                closeImgBtnEl.classList.remove('hide');
            })
            this.imageGalleryContainer.append(cloneNewImgEl);
        })
    }
}

const gallery = new ImageGallery(galleryContainer, uploadImgBtnEl, imageUriList, preloaderEl, template);
gallery.build();
