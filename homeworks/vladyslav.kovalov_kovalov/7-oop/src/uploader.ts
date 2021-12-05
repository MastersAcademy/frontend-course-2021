export class Uploader {
    private readonly inputElement: HTMLElement;
    private readonly fullScreenElement: HTMLElement;
    private readonly spinnerElement: HTMLElement;

    constructor(
        private readonly el: any,
        private readonly callback: CallableFunction,

    ) {
        const inputElement: HTMLElement | null = this.el.querySelector('[data-image-uploader-input]');
        const fullScreenElement: HTMLElement | null = this.el.querySelector('[data-image-uploader-full-screen]');
        const spinnerElement: HTMLElement | null = this.el.querySelector('[data-image-uploader-spinner]');

        if(!inputElement) throw new Error('Missing element with [data-image-uploader-input]');
        if(!fullScreenElement) throw new Error('Missing element with [data-image-uploader-full-screen]');
        if(!spinnerElement) throw new Error('Missing element with [data-image-uploader-spinner]');

        this.inputElement = inputElement;
        this.fullScreenElement = fullScreenElement;
        this.spinnerElement = spinnerElement;

        this.listenEvents(this.callback);

    }
    private listenEvents(callback: CallableFunction): void {
        this.el.addEventListener('change', (event: MouseEvent) => {
            const element: HTMLInputElement = (event.target as HTMLInputElement);
            this.getImageUrl(element, callback);
        });
    }

    private getImageUrl(element: HTMLInputElement, callback: CallableFunction) {
        const file: File = (element.files as FileList)[0];
        const acceptedImageTypes: string[] = ['image/gif', 'image/jpeg', 'image/png'];

        if(file && acceptedImageTypes.includes(file['type'])) {
            this.fullScreenElement.classList.remove('hidden');

            setTimeout(() => {
                const url: string = window.URL.createObjectURL(file);
                callback(url);
                this.fullScreenElement.classList.add('hidden');
            }, 1000);
        }
    }
}
