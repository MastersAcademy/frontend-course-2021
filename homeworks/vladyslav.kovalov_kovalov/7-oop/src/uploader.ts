export class Uploader {
    constructor(
        private readonly el: any,
        private callback: CallableFunction,
    ) {

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
            const url: string = window.URL.createObjectURL(file);
            callback(url);
        }
    }
}
