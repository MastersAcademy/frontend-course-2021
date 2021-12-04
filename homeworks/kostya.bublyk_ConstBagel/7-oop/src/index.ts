class Gallery {
    private readonly _mainField: HTMLElement;
    private readonly _imageInputField: HTMLInputElement;
    private readonly _loader: HTMLElement;
    private readonly _imageBlock: HTMLElement;
    private readonly _imageField: HTMLImageElement;
    private readonly _closeImageButton: HTMLButtonElement;
    constructor() {
        this._mainField = document.querySelector('[data-role="main-field"]');
        this._imageInputField = document.querySelector('[data-role="input-image"]');
        this._loader = document.querySelector('[data-role="loader"]');
        this._imageBlock = document.querySelector('[data-role="image-field"]');
        this._imageField = document.querySelector('[data-role="full-image"]');
        this._closeImageButton = document.querySelector('[data-role="close-image-button"]');
    }

    get imageInputField(): HTMLInputElement {
        return this._imageInputField;
    }

    get closeImageButton(): HTMLButtonElement {
        return this._closeImageButton;
    }

    addImageToGallery(_image: HTMLImageElement) {
        _image.classList.add('main__image');
        this._mainField.appendChild(_image);
    }

    switchLoader(): void {
        this._loader.classList.toggle('gallery__loader--show');
    }

    showBigPicture(path: string): void {
        const img = document.createElement('img');
        img.alt = 'Not displayed';
        img.src = path;
        img.classList.add('image__big');
        this._imageBlock.appendChild(img);
        this._imageBlock.classList.add('gallery__image--show');
    }

    hideBigPicture(): void {
        this._imageBlock.removeChild(this._imageBlock.lastChild);
        this._imageBlock.classList.remove('gallery__image--show');
    }
}

const gallery = new Gallery();
const inputFieldEl = gallery.imageInputField;
inputFieldEl.addEventListener('change', (event) => {
    if (inputFieldEl.files && inputFieldEl.files[0]) {
        gallery.switchLoader();
        const imageEl = document.createElement('img');
        imageEl.alt = 'Not displayed';
        imageEl.addEventListener('load', () => setTimeout(() => gallery.switchLoader(), 2000));
        const url = URL.createObjectURL(inputFieldEl.files[0]);
        imageEl.src = url;
        imageEl.addEventListener('click', () => gallery.showBigPicture(url));
        gallery.addImageToGallery(imageEl);
    }
});
gallery.closeImageButton.addEventListener('click', () => gallery.hideBigPicture());
