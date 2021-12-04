import './styles.css';

const imageUriList: Array<string> = [
    '../src/images/1.jpg',
    '../src/images/2.jpg',
    '../src/images/3.jpg',
    '../src/images/4.jpg',
    '../src/images/5.jpg',
    '../src/images/6.jpg',
]

class ImageGallery {
    private templateImgEl: HTMLTemplateElement = document.querySelector('[data-gallery-item-template]');
    private newImgEl: HTMLElement = (<HTMLTemplateElement>this.templateImgEl).content.querySelector('[data-img-container]');
    private closeImgBtnEl: HTMLElement = document.querySelector('[data-close-image-btn]');
    private activeImageEl: HTMLElement;
    private cloneNewImgEl: Node = this.newImgEl.cloneNode(true);
    private imageGalleryContainer: HTMLElement = document.querySelector('[data-gallery-container]');
    private uploadImgBtnEl: HTMLElement = document.querySelector('[data-upload-image-btn]');
    private preloaderEl: HTMLElement = document.querySelector('[data-preloader]');
    private newImageSrc: Blob | MediaSource;
    constructor(
        private imageUriList: Array<string>,
    ) {
        this.uploadImgBtnEl.addEventListener('change', async (event: Event ): Promise<void> => {
            this.preloaderEl.classList.remove('hide');
            await setTimeout(() => {
                this.newImageSrc = (<HTMLInputElement>event.target).files[0];
                const cloneNewImgEl = this.newImgEl.cloneNode(true);
                (<HTMLImageElement>(<HTMLElement>cloneNewImgEl)
                    .querySelector('[data-gallery-img]'))
                    .src = URL.createObjectURL(this.newImageSrc);
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
    build(imageUriList: Array<string>) {
        imageUriList.forEach(imageUri => {
            this.cloneNewImgEl = this.newImgEl.cloneNode(true);
            (<HTMLImageElement>(<HTMLElement>this.cloneNewImgEl).querySelector('[data-gallery-img]')).src = imageUri;
            (<HTMLImageElement>(<HTMLElement>this.cloneNewImgEl)).addEventListener('click', (event: MouseEvent) => {
                (<HTMLElement>event.currentTarget).classList.add('active');
                this.closeImgBtnEl.classList.remove('hide');
            })
            this.imageGalleryContainer.append(this.cloneNewImgEl);
        })
    }
}

const gallery = new ImageGallery(imageUriList);
gallery.build(imageUriList);
