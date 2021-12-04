/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var Gallery = /** @class */ (function () {
    function Gallery() {
        this._mainField = document.querySelector('[data-role="main-field"]');
        this._imageInputField = document.querySelector('[data-role="input-image"]');
        this._loader = document.querySelector('[data-role="loader"]');
        this._imageBlock = document.querySelector('[data-role="image-field"]');
        this._imageField = document.querySelector('[data-role="full-image"]');
        this._closeImageButton = document.querySelector('[data-role="close-image-button"]');
    }
    Object.defineProperty(Gallery.prototype, "imageInputField", {
        get: function () {
            return this._imageInputField;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Gallery.prototype, "closeImageButton", {
        get: function () {
            return this._closeImageButton;
        },
        enumerable: false,
        configurable: true
    });
    Gallery.prototype.addImageToGallery = function (_image) {
        _image.classList.add('main__image');
        this._mainField.appendChild(_image);
    };
    Gallery.prototype.switchLoader = function () {
        this._loader.classList.toggle('gallery__loader--show');
    };
    Gallery.prototype.showBigPicture = function (path) {
        var img = document.createElement('img');
        img.alt = 'Not displayed';
        img.src = path;
        img.classList.add('image__big');
        this._imageBlock.appendChild(img);
        this._imageBlock.classList.add('gallery__image--show');
    };
    Gallery.prototype.hideBigPicture = function () {
        this._imageBlock.removeChild(this._imageBlock.lastChild);
        this._imageBlock.classList.remove('gallery__image--show');
    };
    Gallery.prototype.createImage = function (src, altText) {
        var image = document.createElement('img');
        image.src = src;
        image.alt = altText;
        return image;
    };
    return Gallery;
}());
var gallery = new Gallery();
var inputFieldEl = gallery.imageInputField;
inputFieldEl.addEventListener('change', function (event) {
    if (inputFieldEl.files && inputFieldEl.files[0]) {
        gallery.switchLoader();
        var imageEl = document.createElement('img');
        imageEl.alt = 'Not displayed';
        imageEl.addEventListener('load', function () { return setTimeout(function () { return gallery.switchLoader(); }, 2000); });
        var url_1 = URL.createObjectURL(inputFieldEl.files[0]);
        imageEl.addEventListener('click', function () { return gallery.showBigPicture(url_1); });
        imageEl.src = url_1;
        gallery.addImageToGallery(imageEl);
    }
});
gallery.closeImageButton.addEventListener('click', function () { return gallery.hideBigPicture(); });

/******/ })()
;