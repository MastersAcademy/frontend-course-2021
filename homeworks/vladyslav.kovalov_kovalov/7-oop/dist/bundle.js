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
        const closeElement = this.el.querySelector('[data-full-screen-close]');
        if (!templateElement)
            throw new Error('Missing element with [data-full-screen-template]');
        if (!spinnerElement)
            throw new Error('Missing element with [data-full-screen-spinner]');
        if (!closeElement)
            throw new Error('Missing element with [data-full-screen-close]');
        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;
        this.closeElement = closeElement;
        this.listenEvents();
    }
    listenEvents() {
        this.el.addEventListener('click', event => {
            const image = event.target;
            const data = image.dataset;
            if (data.fullScreen !== undefined) {
                this.el.classList.add('hidden');
                const childElement = this.el.querySelector('[data-full-screen-image]');
                if (childElement)
                    this.el.removeChild(childElement);
            }
        });
        this.closeElement.addEventListener('click', () => {
            this.el.classList.add('hidden');
            const childElement = this.el.querySelector('[data-full-screen-image]');
            this.el.removeChild(childElement);
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
        const timeout = window.setTimeout(() => {
            this.el.append(element);
            this.spinnerElement.classList.add('hidden');
            clearTimeout(timeout);
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
        this.onImageUploaded = this.saveImage.bind(this);
        this.fullScreen = new _fullscreen__WEBPACK_IMPORTED_MODULE_1__.FullScreen(document.querySelector('[data-full-screen]'));
        this.imageUploader = new _uploader__WEBPACK_IMPORTED_MODULE_0__.Uploader(document.querySelector('[data-image-upload]'), this.onImageUploaded);
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
        const length = this.imageStorage.push(element);
        const index = length - 1;
        this.renderImage(element, index);
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
            this.getImageUrl(element, callback);
        });
    }
    getImageUrl(element, callback) {
        const file = element.files[0];
        const url = URL.createObjectURL(file);
        callback(url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDO1FBQ3RDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0NBQ0o7Ozs7Ozs7VUNyQkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0U7QUFDSTtBQUUxQyxJQUFJLDZDQUFPLENBQ1AsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBZ0IsRUFDdkQsbURBQVUsRUFDViwrQ0FBUSxDQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZnVsbHNjcmVlbi50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZ2FsbGVyeS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvdXBsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRnVsbFNjcmVlbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGlubmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50LFxuICAgICkge1xuXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MVGVtcGxhdGVFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tc3Bpbm5lcl0nKTtcbiAgICAgICAgY29uc3QgY2xvc2VFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tY2xvc2VdJyk7XG5cbiAgICAgICAgaWYoIXRlbXBsYXRlRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKTtcbiAgICAgICAgaWYoIXNwaW5uZXJFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLXNwaW5uZXJdJylcbiAgICAgICAgaWYoIWNsb3NlRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi1jbG9zZV0nKVxuXG4gICAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50ID0gdGVtcGxhdGVFbGVtZW50O1xuICAgICAgICB0aGlzLnNwaW5uZXJFbGVtZW50ID0gc3Bpbm5lckVsZW1lbnQ7XG4gICAgICAgIHRoaXMuY2xvc2VFbGVtZW50ID0gY2xvc2VFbGVtZW50O1xuXG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IERPTVN0cmluZ01hcCA9IGltYWdlLmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuZnVsbFNjcmVlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYoY2hpbGRFbGVtZW50KSB0aGlzLmVsLnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbWFnZShzb3VyY2U6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUltYWdlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgY29uc3QgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XG4gICAgcHJpdmF0ZSBpbWFnZVN0b3JhZ2U6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBvbkltYWdlVXBsb2FkZWQ6IEZ1bmN0aW9uU3RyaW5nQ2FsbGJhY2s7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDpIVE1MRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuOiBhbnksXG4gICAgICAgIHByaXZhdGUgaW1hZ2VVcGxvYWRlcjogYW55LFxuICAgICl7XG5cbiAgICAgICAgdGhpcy5vbkltYWdlVXBsb2FkZWQgPSB0aGlzLnNhdmVJbWFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbl0nKSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW1hZ2VVcGxvYWRlciA9IG5ldyBVcGxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbWFnZS11cGxvYWRdJykgYXMgSFRNTElucHV0RWxlbWVudCwgdGhpcy5vbkltYWdlVXBsb2FkZWQpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VTdG9yYWdlID0gW1xuICAgICAgICAgICAgJ2ltZy9pbWctMC5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMS5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMi5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMy5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctNC5qcGcnXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5pbml0R2FsbGVyeSgpO1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdhbGxlcnkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2VTdG9yYWdlLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShpbWFnZSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc2F2ZUltYWdlKGVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmltYWdlU3RvcmFnZS5wdXNoKGVsZW1lbnQpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLnJlbmRlckltYWdlKGVsZW1lbnQsIGluZGV4KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlckltYWdlKGltYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY3VycmVudEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5sb2FkSW1hZ2UoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudC5wcmVwZW5kKGN1cnJlbnRJbWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkSW1hZ2UoaW1hZ2VTcmM6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IEhUTUxJbWFnZUVsZW1lbnQge1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZV0nKSBhcyBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50XScpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlU3JjKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgICAgICBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlLWVsZW1lbnQnKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBpbWFnZS5kYXRhc2V0LmluZGV4O1xuXG4gICAgICAgICAgICBpZihpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlOiBzdHJpbmcgPSB0aGlzLmltYWdlU3RvcmFnZVtOdW1iZXIoaW5kZXgpXVxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxTY3JlZW5JbWFnZTogSFRNTEVsZW1lbnQgPSB0aGlzLmZ1bGxTY3JlZW4uY3JlYXRlSW1hZ2Uoc291cmNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4udG9nZ2xlSW1hZ2UoZnVsbFNjcmVlbkltYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJlYWRvbmx5IGVsOiBhbnksXG4gICAgICAgIHByaXZhdGUgY2FsbGJhY2s6IGFueSxcbiAgICApIHtcblxuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cyh0aGlzLmNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cyhjYWxsYmFjazogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEltYWdlVXJsKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNhbGxiYWNrOiBhbnkpIHtcbiAgICAgICAgY29uc3QgZmlsZSA9IChlbGVtZW50LmZpbGVzIGFzIEZpbGVMaXN0KVswXTtcbiAgICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgY2FsbGJhY2sodXJsKTtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuL2dhbGxlcnknO1xuaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5uZXcgR2FsbGVyeShcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1nYWxsZXJ5XScpIGFzIEhUTUxFbGVtZW50LFxuICAgIEZ1bGxTY3JlZW4sXG4gICAgVXBsb2FkZXJcbik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=