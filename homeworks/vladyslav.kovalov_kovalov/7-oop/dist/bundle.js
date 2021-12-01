/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

class Gallery {
    constructor(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate) {
        this.galleryElement = galleryElement;
        this.fullScreenElement = fullScreenElement;
        this.imageUploaderElement = imageUploaderElement;
        this.fullScreenTemplate = fullScreenTemplate;
        this.listenEvents();
    }
    listenEvents() {
        var _a, _b;
        (_a = this.galleryElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', event => {
            const image = event.target;
            const imageSource = image.getAttribute('src');
            if (imageSource !== null)
                this.toggleFullSizeImage(imageSource, fullScreenElement);
        });
        (_b = this.fullScreenElement) === null || _b === void 0 ? void 0 : _b.addEventListener('click', event => {
            var _a;
            const currentImage = event.target.dataset;
            if (currentImage.fullScreenImage !== '') {
                (_a = this.fullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                this.fullScreenElement.innerHTML = '';
            }
        });
        imageUploaderElement === null || imageUploaderElement === void 0 ? void 0 : imageUploaderElement.addEventListener('change', event => {
            const element = event.target;
            const file = element.files[0];
            this.getBase64(file).then(imageSrc => {
                this.addImage(imageSrc, galleryElement);
            });
        });
    }
    toggleFullSizeImage(imageSource, container) {
        const imagePath = imageSource;
        const image = this.createFullSizeImage(imagePath);
        container.append(image);
        fullScreenElement === null || fullScreenElement === void 0 ? void 0 : fullScreenElement.classList.remove('hidden');
    }
    createFullSizeImage(src) {
        const template = document.querySelector('[data-full-screen-template]');
        const content = template.content.cloneNode(true);
        const element = content.querySelector('[data-full-screen-image]');
        element === null || element === void 0 ? void 0 : element.setAttribute('src', src);
        return element;
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    addImage(imageSrc, container) {
        const template = document.querySelector('[data-new-image-template]');
        const content = template.content.cloneNode(true);
        const element = content.querySelector('[data-new-image-template-element]');
        element === null || element === void 0 ? void 0 : element.setAttribute('src', imageSrc);
        element === null || element === void 0 ? void 0 : element.removeAttribute('data-new-image-template-element');
        container.prepend(element);
    }
}
const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const imageUploaderElement = document.querySelector('[data-image-upload]');
const fullScreenTemplate = document.querySelector('[data-full-screen-template]');
new Gallery(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUF3QixDQUFDO0FBRXhHLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdhbGxlcnlFbGVtZW50OkhUTUxEaXZFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVVwbG9hZGVyRWxlbWVudDogSFRNTElucHV0RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuVGVtcGxhdGU6IEhUTUxUZW1wbGF0ZUVsZW1lbnRcbiAgICApe1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVNvdXJjZSA9IGltYWdlLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgICAgICBpZihpbWFnZVNvdXJjZSAhPT0gbnVsbCkgdGhpcy50b2dnbGVGdWxsU2l6ZUltYWdlKGltYWdlU291cmNlLCBmdWxsU2NyZWVuRWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEltYWdlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGF0YXNldDtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRJbWFnZS5mdWxsU2NyZWVuSW1hZ2UgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW1hZ2VVcGxvYWRlckVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IChlbGVtZW50LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcblxuICAgICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSkudGhlbihpbWFnZVNyYyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRJbWFnZShpbWFnZVNyYywgZ2FsbGVyeUVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVGdWxsU2l6ZUltYWdlKGltYWdlU291cmNlOiBhbnksIGNvbnRhaW5lcjogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGltYWdlUGF0aCA9IGltYWdlU291cmNlO1xuICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuY3JlYXRlRnVsbFNpemVJbWFnZShpbWFnZVBhdGgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGltYWdlKTtcbiAgICAgICAgZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlRnVsbFNpemVJbWFnZShzcmM6IGFueSkge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLXRlbXBsYXRlXScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0QmFzZTY0KGZpbGU6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xuICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkSW1hZ2UoaW1hZ2VTcmM6IGFueSwgY29udGFpbmVyOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlLWVsZW1lbnRdJyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VTcmMpO1xuICAgICAgICBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlLWVsZW1lbnQnKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gICAgfVxufVxuXG5jb25zdCBnYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbGxlcnldJykhIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgZnVsbFNjcmVlbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbl0nKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IGltYWdlVXBsb2FkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2UtdXBsb2FkXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBmdWxsU2NyZWVuVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuXG5uZXcgR2FsbGVyeShnYWxsZXJ5RWxlbWVudCwgZnVsbFNjcmVlbkVsZW1lbnQsIGltYWdlVXBsb2FkZXJFbGVtZW50LCBmdWxsU2NyZWVuVGVtcGxhdGUpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=