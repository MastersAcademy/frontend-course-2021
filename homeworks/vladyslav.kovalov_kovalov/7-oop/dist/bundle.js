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
        this.imageUploader = new _uploader__WEBPACK_IMPORTED_MODULE_0__.Uploader(document.querySelector('[data-image-upload]'));
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
        this.imageUploader.el.addEventListener('change', (event) => {
            const element = event.target;
            const file = element.files[0];
            this.imageUploader.getBase64(file).then((imageElement) => {
                this.saveImage(imageElement);
                const index = this.imageStorage.length - 1;
                const image = this.imageStorage[index];
                this.renderImage(image, index);
            });
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
    constructor(el) {
        this.el = el;
        // this.listenEvents();
    }
    // private listenEvents() {
    //     this.el.addEventListener('change', (event: MouseEvent) => {
    //         const element = (event.target as HTMLInputElement);
    //         const file = (element.files as FileList)[0];
    //         this.getBase64(file).then(data => {
    //             return data;
    //         });
    //     })
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNFO0FBQ0k7QUFFMUMsSUFBSSw2Q0FBTyxDQUNQLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQWdCLEVBQ3ZELG1EQUFVLEVBQ1YsK0NBQVEsQ0FDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2Z1bGxzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2dhbGxlcnkudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL3VwbG9hZGVyLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgRnVsbFNjcmVlbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGlubmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQsXG4gICAgKSB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MVGVtcGxhdGVFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tc3Bpbm5lcl0nKTtcblxuICAgICAgICBpZighdGVtcGxhdGVFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLXRlbXBsYXRlXScpO1xuXG4gICAgICAgIGlmKCFzcGlubmVyRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpXG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQgPSBzcGlubmVyRWxlbWVudDtcblxuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IERPTVN0cmluZ01hcD0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoZGF0YS5mdWxsU2NyZWVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudDogYW55ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUltYWdlKHNvdXJjZTogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlSW1hZ2UoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XG4gICAgcHJpdmF0ZSBpbWFnZVN0b3JhZ2U6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDpIVE1MRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuOiBhbnksXG4gICAgICAgIHByaXZhdGUgaW1hZ2VVcGxvYWRlcjogYW55LFxuICAgICl7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuXScpIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVyID0gbmV3IFVwbG9hZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLXVwbG9hZF0nKSBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UgPSBbXG4gICAgICAgICAgICAnaW1nL2ltZy0wLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0xLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0yLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0zLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy00LmpwZydcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmluaXRHYWxsZXJ5KCk7XG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R2FsbGVyeSgpIHtcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlSW1hZ2UoZWxlbWVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaW1hZ2VTdG9yYWdlLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJbWFnZShpbWFnZTogYW55LCBpbmRleDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMubG9hZEltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQucHJlcGVuZChjdXJyZW50SW1hZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEltYWdlKGltYWdlU3JjOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudF0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50Jyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleDogc3RyaW5nIHwgdW5kZWZpbmVkID0gaW1hZ2UuZGF0YXNldC5pbmRleDtcblxuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gdGhpcy5pbWFnZVN0b3JhZ2VbTnVtYmVyKGluZGV4KV1cbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsU2NyZWVuSW1hZ2U6IEhUTUxFbGVtZW50ID0gdGhpcy5mdWxsU2NyZWVuLmNyZWF0ZUltYWdlKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuLnRvZ2dsZUltYWdlKGZ1bGxTY3JlZW5JbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VVcGxvYWRlci5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IChlbGVtZW50LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVyLmdldEJhc2U2NChmaWxlKS50aGVuKChpbWFnZUVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUltYWdlKGltYWdlRWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuaW1hZ2VTdG9yYWdlLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmltYWdlU3RvcmFnZVtpbmRleF07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVsOiBhbnksXG4gICAgKSB7XG5cbiAgICAgICAgLy8gdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBwcml2YXRlIGxpc3RlbkV2ZW50cygpIHtcbiAgICAvLyAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAvLyAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgIC8vICAgICAgICAgY29uc3QgZmlsZSA9IChlbGVtZW50LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcblxuICAgIC8vICAgICAgICAgdGhpcy5nZXRCYXNlNjQoZmlsZSkudGhlbihkYXRhID0+IHtcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KVxuICAgIC8vIH1cblxuICAgIHByaXZhdGUgZ2V0QmFzZTY0KGZpbGU6IGFueSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9IGVycm9yID0+IHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSAnLi9nYWxsZXJ5JztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi91cGxvYWRlcic7XG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnLi9mdWxsc2NyZWVuJztcblxubmV3IEdhbGxlcnkoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FsbGVyeV0nKSBhcyBIVE1MRWxlbWVudCxcbiAgICBGdWxsU2NyZWVuLFxuICAgIFVwbG9hZGVyXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9