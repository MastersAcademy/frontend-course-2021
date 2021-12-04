class LoaderImage {
    constructor(private readonly loaderEl: HTMLElement,) { }
    hidden() {
        this.loaderEl.classList.remove('display__flex')
    }

    visible() {
        return new Promise(resolve => {
            this.loaderEl.classList.add('display__flex')
            setTimeout(() => {
                resolve(this.hidden())

            }, 1000)
        })

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

    async getBase64(image: FileList[0]) {
        const templateImageEl = this.tm.content.cloneNode(true) as HTMLElement

        const reader = new FileReader();
        reader.readAsDataURL(image);
        const sleepLoader = new LoaderImage(document.querySelector('[data-loader]'))
        reader.onloadend = () => {
            const imageDateEl: HTMLDivElement = templateImageEl.querySelector('[data-photo]')
            sleepLoader.visible().then(() => {
                imageDateEl.setAttribute('src', reader.result.toString());
                this.listenerClickImage(imageDateEl, reader.result.toString())
            });
        }
    }

    listenerClickImage(imageDateEl: HTMLDivElement, render: string) {
        imageDateEl.addEventListener('click', () => {
            this.modalRindow.classList.add('display__block')
            this.modalRindow.querySelector('[data-modal-image]').setAttribute('src', render);
            this.listenerClickCancelImage()
        })
        this.imageEl.querySelector('[data-image-collection]').after(imageDateEl)
    }

    listenerClickCancelImage() {
        this.modalRindow.querySelector('[data-cancel]').addEventListener('click', () => {
            this.modalRindow.classList.remove('display__block')
        })
    }
}

new ImageLibrary(document.querySelector('[data-main]'), document.querySelector<HTMLTemplateElement>('[data-image-template]'), document.querySelector<HTMLElement>('[data-modal]'))
