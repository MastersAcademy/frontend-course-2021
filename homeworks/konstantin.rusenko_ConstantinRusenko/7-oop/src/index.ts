class ImageGallery {
    
    private bigImageEL: HTMLImageElement;
    private imagePreviewEl: HTMLElement;
    private readonly imageEl: HTMLImageElement;
    private readonly closeButtonEl: HTMLElement;



    constructor( private el: HTMLElement, private galleryEl: HTMLElement) {
        
        const imageEl = this.el.querySelector<HTMLImageElement>('[data-image]');
        const imagePreviewEl = this.el.querySelector<HTMLElement>('[data-image-preview]');
        const bigImageEL = this.el.querySelector<HTMLImageElement>('[data-big-image]');
        const closeButtonEl = this.el.querySelector<HTMLElement>('[data-close-button]');

        if (!galleryEl) {
            throw new Error('Missing [data-gallery]')
        }

        if (!imageEl) {
            throw new Error('Missing [data-image]');
        }


        this.imageEl = imageEl;
        this.imagePreviewEl = imagePreviewEl;
        this.bigImageEL = bigImageEL;
        this.closeButtonEl = closeButtonEl;

        this.listenEvents();
    }

    private listenEvents() {
        this.galleryEl.addEventListener('click', (event) => {
                const target = event.target as Element;
                if (target.hasAttribute('data-image')) {
                    this.toggleContent(target);
                }  
            });

        this.closeButtonEl.addEventListener('click', () => {
            this.imagePreviewEl.classList.add('hidden');
        })
    }

    public toggleContent(target: Element) {
        this.bigImageEL.src = target.getAttribute('src');
        this.imagePreviewEl.classList.remove('hidden');
        console.log(galleryEl);
    }
}

class ImageUpload {
    private uploadEl: HTMLInputElement;
    newImage: HTMLImageElement;

    constructor(private el: HTMLElement, public galleryEl: HTMLElement) {
        const uploadEl = this.el.querySelector<HTMLInputElement>('[data-upload]')
       
        this.uploadEl = uploadEl;

        this.listenEvents();
    }

    private listenEvents() {
        this.uploadEl.addEventListener('change', (event) => {
            this.newImage = document.createElement('img');
            this.newImage.src = URL.createObjectURL((<HTMLInputElement>event.target).files[0])
            this.newImage.setAttribute('data-image', '');
            galleryEl.appendChild(this.newImage);
        })
    }

}

const panel = document.querySelector<HTMLElement>('[data-panel]');
const galleryEl = panel.querySelector<HTMLElement>('[data-gallery]');
new ImageGallery(panel, galleryEl);
new ImageUpload(panel, galleryEl);
