class Hidden {
    constructor(private readonly dataEl: HTMLElement, private readonly dataClass: string) { }
    public hidden() {
        this.dataEl.classList.remove(`${this.dataClass}`)
    }

    public visible() {
        this.dataEl.classList.add(`${this.dataClass}`)
    }
}

class Base64 {
    public getBase64(image: File) {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onloadend = () => {
                resolve(reader.result.toString());

            }
        })
    }
}

class ImageLibrary {
    constructor(
        private readonly imageEl: HTMLElement,
        private readonly templateEl: HTMLTemplateElement,
        private readonly modalRindow: HTMLElement
    ) {
        this.listenerLoadFile()
    }

    listenerLoadFile() {
        this.imageEl.addEventListener('change', (e) => {
            const element = (e.target as HTMLInputElement);
            this.getBase64((element.files as FileList)[0])
        })
    }

    async getBase64(image: File) {
        const templateImageEl = this.templateEl.content.cloneNode(true) as HTMLElement
        const imageDateEl: HTMLDivElement = templateImageEl.querySelector('[data-photo]')
        loader.visible()
        setTimeout(() => loader.hidden(), 2000)
        const getFileBase64 = await base64.getBase64(image)
        imageDateEl.setAttribute('src', getFileBase64.toString());
        this.listenerClickImage(templateImageEl.querySelector('[data-button]'), getFileBase64.toString())
    }

    listenerClickImage(imageDateEl: HTMLDivElement, render: string) {
        imageDateEl.addEventListener('click', () => {
            this.modalRindow.classList.add('display__flex')
            loader.visible()
            setTimeout(() => loader.hidden(), 2000)
            this.modalRindow.querySelector('[data-modal-container]').classList.add('display__flex')
            this.modalRindow.querySelector('[data-cancel-button]').classList.add('display__flex')

            this.modalRindow.querySelector('[data-modal-image]').setAttribute('src', render);
            this.listenerClickCancelImage()
        })
        this.imageEl.querySelector('[data-image-collection]').after(imageDateEl)
    }

    listenerClickCancelImage() {
        this.modalRindow.querySelector('[data-cancel-button]').addEventListener('click', () => {
            this.modalRindow.classList.remove('display__flex')
            this.modalRindow.querySelector('[data-modal-container]').classList.remove('display__flex')
            this.modalRindow.querySelector('[data-cancel-button]').classList.remove('display__flex')
        })
    }
}

const base64 = new Base64()
const loader = new Hidden(document.querySelector('[data-loader]'), 'display__flex')
new ImageLibrary(document.querySelector('[data-main]'), document.querySelector<HTMLTemplateElement>('[data-image-template]'), document.querySelector<HTMLElement>('[data-modal]'))
