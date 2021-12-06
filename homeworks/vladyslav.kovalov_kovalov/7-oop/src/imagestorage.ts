export class Storage {
    public images: string[] = [];

    constructor() {
        this.images = [
            'img/img-0.jpg',
            'img/img-1.jpg',
            'img/img-2.jpg',
            'img/img-3.jpg',
            'img/img-4.jpg'
        ];
    }

    public save(image: string): number {
        return this.images.push(image);
    }
}
