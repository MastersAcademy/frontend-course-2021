import { Hidden } from './Class/Hidden';
import { Base64 } from './Class/Base64'

class ImageLibrary {
    constructor(
        private readonly imageEl: HTMLElement,
        private readonly templateEl: HTMLTemplateElement,
        private readonly modalRindow: HTMLElement,
        private readonly hidden: Hidden
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
        this.hidden.visible(document.querySelector('[data-loader]'), 'display__flex')
        setTimeout(() => this.hidden.hidden(document.querySelector('[data-loader]'), 'display__flex'), 2000)
        const getFileBase64 = await base64.getBase64(image)
        imageDateEl.setAttribute('src', getFileBase64.toString());
        this.listenerClickImage(templateImageEl.querySelector('[data-button]'), getFileBase64.toString())
    }

    listenerClickImage(imageDateEl: HTMLDivElement, render: string) {
        imageDateEl.addEventListener('click', () => {
            this.modalRindow.classList.add('display__flex')
            this.hidden.visible(document.querySelector('[data-loader]'), 'display__flex')
            setTimeout(() => this.hidden.hidden(document.querySelector('[data-loader]'), 'display__flex'), 2000)
            this.hidden.visible(this.modalRindow.querySelector('[data-modal-container]'), 'display__flex')
            this.hidden.visible(this.modalRindow.querySelector('[data-cancel-button]'), 'display__flex')

            this.modalRindow.querySelector('[data-modal-image]').setAttribute('src', render);
            this.listenerClickCancelImage()
        })
        this.imageEl.querySelector('[data-image-collection]').after(imageDateEl)
    }

    listenerClickCancelImage() {
        this.modalRindow.querySelector('[data-cancel-button]').addEventListener('click', () => {
            this.modalRindow.classList.remove('display__flex')
            this.hidden.hidden(this.modalRindow.querySelector('[data-modal-container]'), 'display__flex')
            this.hidden.hidden(this.modalRindow.querySelector('[data-cancel-button]'), 'display__flex')
        })
    }
}

const base64 = new Base64()

new ImageLibrary(
    document.querySelector('[data-main]'),
    document.querySelector<HTMLTemplateElement>('[data-image-template]'),
    document.querySelector<HTMLElement>('[data-modal]'),
    new Hidden()
)
