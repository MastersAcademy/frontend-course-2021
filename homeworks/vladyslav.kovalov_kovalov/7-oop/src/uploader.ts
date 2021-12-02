export class Uploader {
    constructor(
        private readonly el: any,
        private callback: any,
    ) {

        this.listenEvents(this.callback);
    }

    private listenEvents(callback: any) {
        this.el.addEventListener('change', (event: MouseEvent) => {
            const element = (event.target as HTMLInputElement);
            const file = (element.files as FileList)[0];

            this.getBase64(file).then(data => {
                callback(data);
            });
        })
    }

    private getBase64(file: any) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        })
    }
}
