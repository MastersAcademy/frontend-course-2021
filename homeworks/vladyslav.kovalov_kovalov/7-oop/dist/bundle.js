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
        this.imageStorage = [];
        this.imageStorage = [
            'img/img-0.jpg',
            'img/img-1.jpg',
            'img/img-2.jpg',
            'img/img-3.jpg',
            'img/img-4.jpg'
        ];
        this.listenEvents();
        this.initGallery();
    }
    initGallery() {
        this.imageStorage.forEach((image, index) => {
            this.renderImage(image, index);
        });
    }
    saveImage(element) {
        this.imageStorage.push(element);
    }
    renderImage(image, index) {
        const currentImage = this.loadImage(image, index);
        this.galleryElement.prepend(currentImage);
    }
    loadImage(imageSrc, index) {
        const template = document.querySelector('[data-new-image-template]');
        const content = template.content.cloneNode(true);
        const element = content.querySelector('[data-new-image-template-element]');
        element === null || element === void 0 ? void 0 : element.setAttribute('src', imageSrc);
        element === null || element === void 0 ? void 0 : element.setAttribute('data-index', index);
        element === null || element === void 0 ? void 0 : element.removeAttribute('data-new-image-template-element');
        return element;
    }
    createFullSizeImage(src) {
        const template = document.querySelector('[data-full-screen-template]');
        const content = template.content.cloneNode(true);
        const element = content.querySelector('[data-full-screen-image]');
        element === null || element === void 0 ? void 0 : element.setAttribute('src', src);
        return element;
    }
    toggleFullSizeImage(imageSource) {
        var _a;
        const imagePath = imageSource;
        const image = this.createFullSizeImage(imagePath);
        (_a = this.fullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
        this.fullScreenLoader.classList.remove('hidden');
        setTimeout(() => {
            this.fullScreenElement.append(image);
            this.fullScreenLoader.classList.add('hidden');
        }, 1000);
    }
    listenEvents() {
        var _a, _b;
        (_a = this.galleryElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', event => {
            const image = event.target;
            const imageIndex = image.getAttribute('data-index');
            const imageSource = this.imageStorage[imageIndex];
            if (imageSource !== undefined)
                this.toggleFullSizeImage(imageSource);
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
            this.getBase64(file).then(imageSource => {
                const element = imageSource;
                this.imageStorage.push(element);
                const index = (this.imageStorage.length - 1);
                this.renderImage(this.imageStorage[index], index);
            });
        });
    }
    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
}
// class Uploader {
//     constructor(
//         private imageUploaderElement: HTMLInputElement,
//     ) {}
//     private listenEvent() {
//         imageUploaderElement?.addEventListener('change', event => {
//             const element = (event.target as HTMLInputElement);
//             const file = (element.files as FileList)[0];
//             this.getBase64(file).then(image => {
//                 return image;
//             });
//         })
//     }
//     private getBase64(file: any) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = error => reject(error);
//         })
//     }
// }
// class FullScreenImage {
//     constructor(
//         private fullScreenElement: HTMLInputElement,
//         private fullScreenLoader: HTMLDivElement,
//         private fullScreenTemplate: HTMLTemplateElement,
//     ) {}
//     private listenEvent() {
//         this.fullScreenElement?.addEventListener('click', event => {
//             const currentImage = (event.target as HTMLButtonElement).dataset;
//             if(currentImage.fullScreenImage !== '') {
//                 this.fullScreenElement?.classList.add('hidden');
//                 const childElement = this.fullScreenElement.querySelector('[data-full-screen-image]') as HTMLImageElement;
//                 this.fullScreenElement.removeChild(childElement);
//             }
//         });
//     }
//     private createFullSizeImage(src: any) {
//         const template = document.querySelector('[data-full-screen-template]') as HTMLTemplateElement;
//         const content = template.content.cloneNode(true);
//         const element = (content as HTMLImageElement).querySelector('[data-full-screen-image]');
//         element?.setAttribute('src', src);
//         return element;
//     }
//     private toggleFullSizeImage(imageSource: any): void {
//         const imagePath = imageSource;
//         const image: any = this.createFullSizeImage(imagePath);
//         this.fullScreenElement?.classList.remove('hidden');
//         this.fullScreenLoader.classList.remove('hidden');
//         setTimeout(() => {
//             this.fullScreenElement.append(image);
//             this.fullScreenLoader.classList.add('hidden');
//         }, 1000);
//     }
// }
const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const imageUploaderElement = document.querySelector('[data-image-upload]');
const fullScreenTemplate = document.querySelector('[data-full-screen-template]');
const fullScreenLoader = document.querySelector('[data-full-screen-loader]');
new Gallery(galleryElement, fullScreenElement, imageUploaderElement, fullScreenTemplate, fullScreenLoader);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQXdCLENBQUM7QUFDeEcsTUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDJCQUEyQixDQUFtQixDQUFDO0FBRS9GLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsRUFBRSxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbGxlcnkge1xuICAgIHByaXZhdGUgaW1hZ2VTdG9yYWdlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZ2FsbGVyeUVsZW1lbnQ6SFRNTERpdkVsZW1lbnQsXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGltYWdlVXBsb2FkZXJFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5UZW1wbGF0ZTogSFRNTFRlbXBsYXRlRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuTG9hZGVyOiBIVE1MRGl2RWxlbWVudCxcbiAgICApe1xuICAgICAgICB0aGlzLmltYWdlU3RvcmFnZSA9IFtcbiAgICAgICAgICAgICdpbWcvaW1nLTAuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTEuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTIuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTMuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTQuanBnJ1xuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuaW5pdEdhbGxlcnkoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRHYWxsZXJ5KCkge1xuICAgICAgICB0aGlzLmltYWdlU3RvcmFnZS5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW1hZ2UoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmVJbWFnZShlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckltYWdlKGltYWdlOiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICAgICAgY29uc3QgY3VycmVudEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5sb2FkSW1hZ2UoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudC5wcmVwZW5kKGN1cnJlbnRJbWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkSW1hZ2UoaW1hZ2VTcmM6IHN0cmluZywgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZV0nKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50XScpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlU3JjKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgICAgICBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlLWVsZW1lbnQnKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGdWxsU2l6ZUltYWdlKHNyYzogYW55KSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVGdWxsU2l6ZUltYWdlKGltYWdlU291cmNlOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgaW1hZ2VQYXRoID0gaW1hZ2VTb3VyY2U7XG4gICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSB0aGlzLmNyZWF0ZUZ1bGxTaXplSW1hZ2UoaW1hZ2VQYXRoKTtcblxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuTG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudC5hcHBlbmQoaW1hZ2UpO1xuICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuTG9hZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleDogYW55ID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgICAgICAgICBjb25zdCBpbWFnZVNvdXJjZSA9IHRoaXMuaW1hZ2VTdG9yYWdlW2ltYWdlSW5kZXhdO1xuXG4gICAgICAgICAgICBpZihpbWFnZVNvdXJjZSAhPT0gdW5kZWZpbmVkKSB0aGlzLnRvZ2dsZUZ1bGxTaXplSW1hZ2UoaW1hZ2VTb3VyY2UpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEltYWdlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGF0YXNldDtcbiAgICAgICAgICAgIGlmKGN1cnJlbnRJbWFnZS5mdWxsU2NyZWVuSW1hZ2UgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50ID0gdGhpcy5mdWxsU2NyZWVuRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW1hZ2VVcGxvYWRlckVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IChlbGVtZW50LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcblxuICAgICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSkudGhlbihpbWFnZVNvdXJjZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gaW1hZ2VTb3VyY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UucHVzaChlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gKHRoaXMuaW1hZ2VTdG9yYWdlLmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVySW1hZ2UodGhpcy5pbWFnZVN0b3JhZ2VbaW5kZXhdLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEJhc2U2NChmaWxlOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuLy8gY2xhc3MgVXBsb2FkZXIge1xuLy8gICAgIGNvbnN0cnVjdG9yKFxuLy8gICAgICAgICBwcml2YXRlIGltYWdlVXBsb2FkZXJFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LFxuLy8gICAgICkge31cblxuLy8gICAgIHByaXZhdGUgbGlzdGVuRXZlbnQoKSB7XG4vLyAgICAgICAgIGltYWdlVXBsb2FkZXJFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4vLyAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbi8vICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSAoZWxlbWVudC5maWxlcyBhcyBGaWxlTGlzdClbMF07XG5cbi8vICAgICAgICAgICAgIHRoaXMuZ2V0QmFzZTY0KGZpbGUpLnRoZW4oaW1hZ2UgPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBpbWFnZTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9KVxuLy8gICAgIH1cblxuLy8gICAgIHByaXZhdGUgZ2V0QmFzZTY0KGZpbGU6IGFueSkge1xuLy8gICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbi8vICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuLy8gICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4vLyAgICAgICAgICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XG4vLyAgICAgICAgIH0pXG4vLyAgICAgfVxuLy8gfVxuXG4vLyBjbGFzcyBGdWxsU2NyZWVuSW1hZ2Uge1xuLy8gICAgIGNvbnN0cnVjdG9yKFxuLy8gICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LFxuLy8gICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5Mb2FkZXI6IEhUTUxEaXZFbGVtZW50LFxuLy8gICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5UZW1wbGF0ZTogSFRNTFRlbXBsYXRlRWxlbWVudCxcbi8vICAgICApIHt9XG5cbi8vICAgICBwcml2YXRlIGxpc3RlbkV2ZW50KCkge1xuLy8gICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbi8vICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRhdGFzZXQ7XG4vLyAgICAgICAgICAgICBpZihjdXJyZW50SW1hZ2UuZnVsbFNjcmVlbkltYWdlICE9PSAnJykge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuLy8gICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudCA9IHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIHByaXZhdGUgY3JlYXRlRnVsbFNpemVJbWFnZShzcmM6IGFueSkge1xuLy8gICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLXRlbXBsYXRlXScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4vLyAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbi8vICAgICAgICAgY29uc3QgZWxlbWVudCA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuLy8gICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG4vLyAgICAgICAgIHJldHVybiBlbGVtZW50O1xuLy8gICAgIH1cblxuLy8gICAgIHByaXZhdGUgdG9nZ2xlRnVsbFNpemVJbWFnZShpbWFnZVNvdXJjZTogYW55KTogdm9pZCB7XG4vLyAgICAgICAgIGNvbnN0IGltYWdlUGF0aCA9IGltYWdlU291cmNlO1xuLy8gICAgICAgICBjb25zdCBpbWFnZTogYW55ID0gdGhpcy5jcmVhdGVGdWxsU2l6ZUltYWdlKGltYWdlUGF0aCk7XG5cbi8vICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4vLyAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQuYXBwZW5kKGltYWdlKTtcbi8vICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkxvYWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbi8vICAgICAgICAgfSwgMTAwMCk7XG4vLyAgICAgfVxuLy8gfVxuXG5jb25zdCBnYWxsZXJ5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbGxlcnldJykhIGFzIEhUTUxEaXZFbGVtZW50O1xuY29uc3QgZnVsbFNjcmVlbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbl0nKSBhcyBIVE1MRGl2RWxlbWVudDtcbmNvbnN0IGltYWdlVXBsb2FkZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2UtdXBsb2FkXScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5jb25zdCBmdWxsU2NyZWVuVGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuY29uc3QgZnVsbFNjcmVlbkxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWxvYWRlcl0nKSBhcyBIVE1MRGl2RWxlbWVudDtcblxubmV3IEdhbGxlcnkoZ2FsbGVyeUVsZW1lbnQsIGZ1bGxTY3JlZW5FbGVtZW50LCBpbWFnZVVwbG9hZGVyRWxlbWVudCwgZnVsbFNjcmVlblRlbXBsYXRlLCBmdWxsU2NyZWVuTG9hZGVyKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9