import { IUploader } from './Uploader.types'

export class Uploader implements IUploader {
    constructor(
        private inputElement: HTMLElement | null,
        private inputFullScreenElement: HTMLElement | null,

    ) {}

    public listenEvents(callback: CallableFunction): void {
        this.inputElement?.addEventListener('change', event => {
            const element: HTMLInputElement = (event.target as HTMLInputElement);
            this.getUrl(element, callback);
        });
    }

    private getUrl(element: HTMLInputElement, callback: CallableFunction): void {
        const file: File = (element.files as FileList)[0];
        const acceptedImageTypes: string[] = ['image/gif', 'image/jpeg', 'image/png'];

        if(file && acceptedImageTypes.includes(file['type'])) {
            this.inputFullScreenElement?.classList.remove('hidden');

            const timeout: number = window.setTimeout(() => {
                const url: string = window.URL.createObjectURL(file);
                this.inputFullScreenElement?.classList.add('hidden');
                callback(url);
                clearTimeout(timeout);
            }, 1000);
        }
    }
}
