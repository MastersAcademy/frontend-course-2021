class LoaderImage {
    constructor(private readonly loaderEl: HTMLElement,) { }
    hidden() {
        this.loaderEl.classList.remove('display__flex')
    }

    visible() {
        this.loaderEl.classList.add('display__flex')
        setTimeout(() => {
            this.hidden()
        }, 1000)
    }
}

class ImageLibrary {

    private readonly imageEl: HTMLElement;
    private readonly templateEl: HTMLTemplateElement;
    private readonly modalRindow: HTMLElement;

    constructor(
        private readonly el: HTMLElement,
        private readonly tm: HTMLTemplateElement,
        private readonly mRindow: HTMLElement
    ) {
        this.imageEl = el
        this.templateEl = tm
        this.modalRindow = mRindow

        this.listenerLoadFile()
    }
    listenerLoadFile() {
        this.imageEl.addEventListener('change', (e) => {
            const element = (e.target as HTMLInputElement);
            this.getBase64((element.files as FileList)[0])
        })
    }

    getBase64(image: FileList[0]): void {
        const templateImageEl: any = this.tm.content.cloneNode(true);
        const reader = new FileReader();
        reader.readAsDataURL(image);
        new LoaderImage(document.querySelector('[data-loader]')).visible()

        reader.onloadend = () => {

            const imageDateEl: any = templateImageEl.querySelector('[data-photo]')
            imageDateEl.src = reader.result;
            this.listenerClickImage(imageDateEl, reader.result)
        }
    }

    listenerClickImage(imageDateEl: HTMLTemplateElement, render: string | ArrayBuffer) {
        imageDateEl.addEventListener('click', () => {
            this.modalRindow.classList.add('display__block')
            this.modalRindow.querySelector<any>('[data-modal-image]').src = render;
            this.listenerClickCancelImage()
        })
        this.imageEl.querySelector('[data-image-collection]').append(imageDateEl)
    };

    listenerClickCancelImage() {
        this.modalRindow.querySelector('[data-cancel]').addEventListener('click', () => {
            this.modalRindow.classList.remove('display__block')
        })
    }
}

new ImageLibrary(document.querySelector('[data-main]'), document.querySelector<HTMLTemplateElement>('[data-image-template]'), document.querySelector<HTMLElement>('[data-modal]'))
