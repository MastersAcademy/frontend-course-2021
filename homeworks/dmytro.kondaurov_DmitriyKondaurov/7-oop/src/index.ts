import './styles.css';

const galleryContainer: HTMLElement = document.querySelector('[data-gallery-container]');
const uploadImgBtnEl: HTMLElement = document.querySelector('[data-upload-image-btn]');
const closeImgBtnEl: HTMLElement = document.querySelector('[data-close-image-btn]');
const listOfImagesEl: Array<HTMLElement> = Array.from(document.querySelectorAll('[data-img-container]'));
const template: HTMLElement = document.querySelector('[data-gallery-item-template]');
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
    constructor(
        private imageGalleryContainer: HTMLElement,
        private uploadImgBtnEl: HTMLElement,
        private imageUriList: Array<string>,
        private preloaderEl: HTMLElement,
        private templateImgEl: HTMLElement,
    ) {

    }
    renderImages() {
        const newImgEl: HTMLElement = (<HTMLTemplateElement>template).content.querySelector('[data-img-container]');
        this.imageUriList.forEach(imageUri => {
            const cloneNewImgEl: Node = newImgEl.cloneNode(true);
            (<HTMLImageElement>(<HTMLElement>cloneNewImgEl).querySelector('[data-gallery-img]')).src = imageUri;
            this.imageGalleryContainer.append(cloneNewImgEl);
        })
    }
}

class Images {
    constructor(
        private imageTemplate: HTMLElement,
        private closeImgBtnEl: HTMLElement,
        private imageSrc: Blob | MediaSource,
        private preloaderEl: HTMLElement,
    ) {


    }
}

const gallery = new ImageGallery(galleryContainer, uploadImgBtnEl, imageUriList, preloaderEl, template);
gallery.renderImages();

uploadImgBtnEl.addEventListener('change', async (event: Event ): Promise<void> => {
    preloaderEl.classList.remove('hide');
    await setTimeout(() => {
        const newImageSrc: Blob | MediaSource = (<HTMLInputElement>event.target).files[0];
        const newImgEl: HTMLElement = (<HTMLTemplateElement>template).content.querySelector('[data-img-container]');
        const cloneNewImgEl: Node = newImgEl.cloneNode(true);
        (<HTMLImageElement>(<HTMLElement>cloneNewImgEl)
            .querySelector('[data-gallery-img]'))
            .src = URL.createObjectURL(newImageSrc);
        galleryContainer.append(cloneNewImgEl);
        preloaderEl.classList.add('hide');
    }, 2000);
})

listOfImagesEl.forEach((item: HTMLElement) => {
    item.addEventListener('click', (event: MouseEvent) => {
        (<HTMLElement>event.currentTarget).classList.add('active');
        closeImgBtnEl.classList.remove('hide');
    })
});

closeImgBtnEl.addEventListener('click', () => {
    const activeImageEl: HTMLElement = document.querySelector('.gallery__item.active')
    activeImageEl.classList.remove('active');
})
