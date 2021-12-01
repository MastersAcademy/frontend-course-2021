/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

class Gallery {
    constructor(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate, fullScreenLoader) {
        this.galleryElement = galleryElement;
        this.fullScreenElement = fullScreenElement;
        this.imageUploaderElement = imageUploaderElement;
        this.fullScreenTemplate = fullScreenTemplate;
        this.fullScreenLoader = fullScreenLoader;
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
                const childElement = this.fullScreenElement.querySelector('[data-full-screen-image]');
                this.fullScreenElement.removeChild(childElement);
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
        var _a;
        const imagePath = imageSource;
        const image = this.createFullSizeImage(imagePath);
        (_a = this.fullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        this.fullScreenLoader.classList.remove('hidden');
        setTimeout(() => {
            container.append(image);
            this.fullScreenLoader.classList.add('hidden');
        }, 1000);
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
const fullScreenLoader = document.querySelector('[data-full-screen-loader]');
new Gallery(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate, fullScreenLoader);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBUCxPQUFPLENBQUUsZUFBZSxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDNUQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0o7QUFFRCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFvQixDQUFDO0FBQ25GLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBbUIsQ0FBQztBQUN6RixNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQXFCLENBQUM7QUFDL0YsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUF3QixDQUFDO0FBQ3hHLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQywyQkFBMkIsQ0FBbUIsQ0FBQztBQUUvRixJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsb0JBQW9CLEVBQUUsa0JBQWtCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDpIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuRWxlbWVudDogSFRNTERpdkVsZW1lbnQsXG4gICAgICAgIHByaXZhdGUgaW1hZ2VVcGxvYWRlckVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlblRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5Mb2FkZXI6IEhUTUxEaXZFbGVtZW50XG4gICAgKXtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VTb3VyY2UgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuICAgICAgICAgICAgaWYoaW1hZ2VTb3VyY2UgIT09IG51bGwpIHRoaXMudG9nZ2xlRnVsbFNpemVJbWFnZShpbWFnZVNvdXJjZSwgZnVsbFNjcmVlbkVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRhdGFzZXQ7XG4gICAgICAgICAgICBpZihjdXJyZW50SW1hZ2UuZnVsbFNjcmVlbkltYWdlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGltYWdlVXBsb2FkZXJFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSAoZWxlbWVudC5maWxlcyBhcyBGaWxlTGlzdClbMF07XG5cbiAgICAgICAgICAgIHRoaXMuZ2V0QmFzZTY0KGZpbGUpLnRoZW4oaW1hZ2VTcmMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkSW1hZ2UoaW1hZ2VTcmMsIGdhbGxlcnlFbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlRnVsbFNpemVJbWFnZShpbWFnZVNvdXJjZTogYW55LCBjb250YWluZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBpbWFnZVBhdGggPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmNyZWF0ZUZ1bGxTaXplSW1hZ2UoaW1hZ2VQYXRoKTtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGltYWdlKTtcbiAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGdWxsU2l6ZUltYWdlKHNyYzogYW55KSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRCYXNlNjQoZmlsZTogYW55KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XG4gICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBhZGRJbWFnZShpbWFnZVNyYzogYW55LCBjb250YWluZXI6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZV0nKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudF0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudCcpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcbiAgICB9XG59XG5cbmNvbnN0IGdhbGxlcnlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FsbGVyeV0nKSEgYXMgSFRNTERpdkVsZW1lbnQ7XG5jb25zdCBmdWxsU2NyZWVuRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuXScpIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgaW1hZ2VVcGxvYWRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbWFnZS11cGxvYWRdJykgYXMgSFRNTElucHV0RWxlbWVudDtcbmNvbnN0IGZ1bGxTY3JlZW5UZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLXRlbXBsYXRlXScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5jb25zdCBmdWxsU2NyZWVuTG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4tbG9hZGVyXScpIGFzIEhUTUxEaXZFbGVtZW50O1xuXG5uZXcgR2FsbGVyeShnYWxsZXJ5RWxlbWVudCwgZnVsbFNjcmVlbkVsZW1lbnQsIGltYWdlVXBsb2FkZXJFbGVtZW50LCBmdWxsU2NyZWVuVGVtcGxhdGUsIGZ1bGxTY3JlZW5Mb2FkZXIpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=