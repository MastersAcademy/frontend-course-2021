export class Uploader {
    constructor(
        private readonly el: any,
        private callback: any,
    ) {

        this.listenEvents(this.callback);
    }

    private listenEvents(callback: any): void {
        this.el.addEventListener('change', (event: MouseEvent) => {
            const element = (event.target as HTMLInputElement);
            this.getImageUrl(element, callback);
        });
    }

    private getImageUrl(element: HTMLInputElement, callback: any) {
        const file = (element.files as FileList)[0];
        const acceptedImageTypes: string[] = ['image/gif', 'image/jpeg', 'image/png'];

        if(file && acceptedImageTypes.includes(file['type'])) {
            const url = URL.createObjectURL(file);
            callback(url);
        }
    }
}
