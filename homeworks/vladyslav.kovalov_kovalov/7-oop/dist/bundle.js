/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fullscreen.ts":
/*!***************************!*\
  !*** ./src/fullscreen.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullScreen": () => (/* binding */ FullScreen)
/* harmony export */ });
class FullScreen {
    constructor(el) {
        this.el = el;
        const templateElement = this.el.querySelector('[data-full-screen-template]');
        const spinnerElement = this.el.querySelector('[data-full-screen-spinner]');
        if (!templateElement)
            throw new Error('Missing element with [data-full-screen-template]');
        if (!spinnerElement)
            throw new Error('Missing element with [data-full-screen-spinner]');
        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;
        this.listenEvents();
    }
    listenEvents() {
        this.el.addEventListener('click', event => {
            const image = event.target;
            const data = image.dataset;
            if (data.fullScreen !== undefined) {
                this.el.classList.add('hidden');
                const childElement = this.el.querySelector('[data-full-screen-image]');
                this.el.removeChild(childElement);
            }
        });
    }
    createImage(source) {
        const content = this.templateElement.content.cloneNode(true);
        const element = content.querySelector('[data-full-screen-image]');
        element === null || element === void 0 ? void 0 : element.setAttribute('src', source);
        return element;
    }
    toggleImage(element) {
        this.el.classList.remove('hidden');
        this.spinnerElement.classList.remove('hidden');
        setTimeout(() => {
            this.el.append(element);
            this.spinnerElement.classList.add('hidden');
        }, 1000);
    }
}


/***/ }),

/***/ "./src/gallery.ts":
/*!************************!*\
  !*** ./src/gallery.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gallery": () => (/* binding */ Gallery)
/* harmony export */ });
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uploader */ "./src/uploader.ts");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullscreen */ "./src/fullscreen.ts");


class Gallery {
    constructor(galleryElement, fullScreen, imageUploader) {
        this.galleryElement = galleryElement;
        this.fullScreen = fullScreen;
        this.imageUploader = imageUploader;
        this.imageStorage = [];
        this.fullScreen = new _fullscreen__WEBPACK_IMPORTED_MODULE_1__.FullScreen(document.querySelector('[data-full-screen]'));
        this.imageUploader = new _uploader__WEBPACK_IMPORTED_MODULE_0__.Uploader(document.querySelector('[data-image-upload]'), this.saveImage);
        this.imageStorage = [
            'img/img-0.jpg',
            'img/img-1.jpg',
            'img/img-2.jpg',
            'img/img-3.jpg',
            'img/img-4.jpg'
        ];
        this.initGallery();
        this.listenEvents();
    }
    initGallery() {
        this.imageStorage.forEach((image, index) => {
            this.renderImage(image, index);
        });
    }
    saveImage(element) {
        console.log(element);
        // this.imageStorage.push(element);
        // console.log(this.imageStorage);
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
    listenEvents() {
        this.galleryElement.addEventListener('click', event => {
            const image = event.target;
            const index = image.dataset.index;
            if (index !== undefined) {
                const source = this.imageStorage[Number(index)];
                const fullScreenImage = this.fullScreen.createImage(source);
                this.fullScreen.toggleImage(fullScreenImage);
            }
        });
    }
}


/***/ }),

/***/ "./src/uploader.ts":
/*!*************************!*\
  !*** ./src/uploader.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Uploader": () => (/* binding */ Uploader)
/* harmony export */ });
class Uploader {
    constructor(el, callback) {
        this.el = el;
        this.callback = callback;
        this.listenEvents(this.callback);
    }
    listenEvents(callback) {
        this.el.addEventListener('change', (event) => {
            const element = event.target;
            const file = element.files[0];
            this.getBase64(file).then(data => {
                callback(data);
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery */ "./src/gallery.ts");
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader */ "./src/uploader.ts");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen */ "./src/fullscreen.ts");



new _gallery__WEBPACK_IMPORTED_MODULE_0__.Gallery(document.querySelector('[data-gallery]'), _fullscreen__WEBPACK_IMPORTED_MODULE_2__.FullScreen, _uploader__WEBPACK_IMPORTED_MODULE_1__.Uploader);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ViwrQ0FBUSxDQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZnVsbHNjcmVlbi50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZ2FsbGVyeS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvdXBsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwaW5uZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVsOiBIVE1MRWxlbWVudCxcbiAgICApIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxUZW1wbGF0ZUVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKTtcbiAgICAgICAgY29uc3Qgc3Bpbm5lckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpO1xuXG4gICAgICAgIGlmKCF0ZW1wbGF0ZUVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50IHdpdGggW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG5cbiAgICAgICAgaWYoIXNwaW5uZXJFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLXNwaW5uZXJdJylcblxuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IHRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudCA9IHNwaW5uZXJFbGVtZW50O1xuXG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoKSB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogRE9NU3RyaW5nTWFwPSBpbWFnZS5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihkYXRhLmZ1bGxTY3JlZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50OiBhbnkgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSW1hZ2Uoc291cmNlOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVJbWFnZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLnNwaW5uZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5hcHBlbmQoZWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLnNwaW5uZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vdXBsb2FkZXInO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vZnVsbHNjcmVlbic7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgICBwcml2YXRlIGltYWdlU3RvcmFnZTogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdhbGxlcnlFbGVtZW50OkhUTUxFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW46IGFueSxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVVwbG9hZGVyOiBhbnksXG4gICAgKXtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuID0gbmV3IEZ1bGxTY3JlZW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW5dJykgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICB0aGlzLmltYWdlVXBsb2FkZXIgPSBuZXcgVXBsb2FkZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtaW1hZ2UtdXBsb2FkXScpIGFzIEhUTUxFbGVtZW50LCB0aGlzLnNhdmVJbWFnZSk7XG5cbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UgPSBbXG4gICAgICAgICAgICAnaW1nL2ltZy0wLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0xLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0yLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0zLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy00LmpwZydcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmluaXRHYWxsZXJ5KCk7XG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R2FsbGVyeSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlSW1hZ2UoZWxlbWVudDogYW55KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVsZW1lbnQpO1xuICAgICAgICAvLyB0aGlzLmltYWdlU3RvcmFnZS5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmltYWdlU3RvcmFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJbWFnZShpbWFnZTogYW55LCBpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMubG9hZEltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQucHJlcGVuZChjdXJyZW50SW1hZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEltYWdlKGltYWdlU3JjOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudF0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50Jyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleDogc3RyaW5nIHwgdW5kZWZpbmVkID0gaW1hZ2UuZGF0YXNldC5pbmRleDtcblxuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gdGhpcy5pbWFnZVN0b3JhZ2VbTnVtYmVyKGluZGV4KV1cbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsU2NyZWVuSW1hZ2U6IEhUTUxFbGVtZW50ID0gdGhpcy5mdWxsU2NyZWVuLmNyZWF0ZUltYWdlKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuLnRvZ2dsZUltYWdlKGZ1bGxTY3JlZW5JbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogYW55LFxuICAgICAgICBwcml2YXRlIGNhbGxiYWNrOiBhbnksXG4gICAgKSB7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHModGhpcy5jYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoY2FsbGJhY2s6IGFueSkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuXG4gICAgICAgICAgICB0aGlzLmdldEJhc2U2NChmaWxlKS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRCYXNlNjQoZmlsZTogYW55KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gZXJyb3IgPT4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuL2dhbGxlcnknO1xuaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5uZXcgR2FsbGVyeShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1nYWxsZXJ5XScpIGFzIEhUTUxFbGVtZW50LFxuICAgIEZ1bGxTY3JlZW4sXG4gICAgVXBsb2FkZXJcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=