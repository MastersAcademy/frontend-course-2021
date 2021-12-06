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
    constructor(fullScreenElement, fullScreenCloseElement, fullScreenImageElement) {
        this.fullScreenElement = fullScreenElement;
        this.fullScreenCloseElement = fullScreenCloseElement;
        this.fullScreenImageElement = fullScreenImageElement;
        this.listenEvents();
    }
    listenEvents() {
        var _a, _b;
        (_a = this.fullScreenElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', event => {
            var _a;
            const image = event.target;
            const data = image.dataset;
            if (data.fullScreen === '') {
                (_a = this.fullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
            }
        });
        (_b = this.fullScreenCloseElement) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
            var _a;
            (_a = this.fullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
        });
    }
    toggle(source) {
        var _a, _b;
        (_a = this.fullScreenImageElement) === null || _a === void 0 ? void 0 : _a.setAttribute('src', source);
        (_b = this.fullScreenElement) === null || _b === void 0 ? void 0 : _b.classList.remove('hidden');
    }
}
// export interface IStorage {
//     images: string[];
//     save(image: string): number;
// }


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
class Gallery {
    constructor(storage, galleryElement, fullScreen, Uploader) {
        this.storage = storage;
        this.galleryElement = galleryElement;
        this.fullScreen = fullScreen;
        this.Uploader = Uploader;
        this.init();
        this.listenEvents();
        this.onImageLoaded = this.save.bind(this);
        this.Uploader.listenEvents(this.onImageLoaded);
    }
    init() {
        this.storage.images.forEach((image, index) => {
            this.render(image, index);
        });
    }
    render(image, index) {
        var _a;
        const newImage = this.create(image, index);
        (_a = this.galleryElement) === null || _a === void 0 ? void 0 : _a.prepend(newImage);
    }
    create(source, index) {
        const image = document.createElement('img');
        image.classList.add('photo-grid__item');
        image.src = source;
        image.dataset.galleryItem = '';
        image.dataset.index = String(index);
        return image;
    }
    save(image) {
        const length = this.storage.save(image);
        const index = length - 1;
        this.render(image, index);
    }
    listenEvents() {
        var _a;
        (_a = this.galleryElement) === null || _a === void 0 ? void 0 : _a.addEventListener('click', event => {
            const image = event.target;
            const { index } = image.dataset;
            if (index !== undefined) {
                const source = this.storage.images[Number(index)];
                this.fullScreen.toggle(source);
            }
        });
    }
}


/***/ }),

/***/ "./src/imagestorage.ts":
/*!*****************************!*\
  !*** ./src/imagestorage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Storage": () => (/* binding */ Storage)
/* harmony export */ });
class Storage {
    constructor() {
        this.images = [];
        this.images = [
            'img/img-0.jpg',
            'img/img-1.jpg',
            'img/img-2.jpg',
            'img/img-3.jpg',
            'img/img-4.jpg'
        ];
    }
    save(image) {
        return this.images.push(image);
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
    constructor(inputElement, inputFullScreenElement) {
        this.inputElement = inputElement;
        this.inputFullScreenElement = inputFullScreenElement;
    }
    listenEvents(callback) {
        var _a;
        (_a = this.inputElement) === null || _a === void 0 ? void 0 : _a.addEventListener('change', event => {
            const element = event.target;
            this.getUrl(element, callback);
        });
    }
    getUrl(element, callback) {
        var _a;
        const file = element.files[0];
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (file && acceptedImageTypes.includes(file['type'])) {
            (_a = this.inputFullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.remove('hidden');
            const timeout = window.setTimeout(() => {
                var _a;
                const url = window.URL.createObjectURL(file);
                (_a = this.inputFullScreenElement) === null || _a === void 0 ? void 0 : _a.classList.add('hidden');
                callback(url);
                clearTimeout(timeout);
            }, 1000);
        }
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
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fullscreen */ "./src/fullscreen.ts");
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uploader */ "./src/uploader.ts");
/* harmony import */ var _imagestorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagestorage */ "./src/imagestorage.ts");




const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const fullScreenCloseElement = document.querySelector('[data-full-screen-close]');
const fullScreenImage = document.querySelector('[data-full-screen-image]');
const inputElement = document.querySelector('[data-image-uploader-input]');
const inputFullScreenElement = document.querySelector('[data-image-uploader-full-screen]');
new _gallery__WEBPACK_IMPORTED_MODULE_0__.Gallery(new _imagestorage__WEBPACK_IMPORTED_MODULE_3__.Storage(), galleryElement, new _fullscreen__WEBPACK_IMPORTED_MODULE_1__.FullScreen(fullScreenElement, fullScreenCloseElement, fullScreenImage), new _uploader__WEBPACK_IMPORTED_MODULE_2__.Uploader(inputElement, inputFullScreenElement));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2Z1bGxzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2dhbGxlcnkudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2ltYWdlc3RvcmFnZS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvdXBsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRnVsbFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuQ2xvc2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbkltYWdlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsXG5cbiAgICApIHtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcblxuICAgIH1cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IERPTVN0cmluZ01hcCA9IGltYWdlLmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuZnVsbFNjcmVlbiA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuQ2xvc2VFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKHNvdXJjZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkltYWdlRWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZ1bGxTY3JlZW4ge1xuICAgIGZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgZnVsbFNjcmVlbkNsb3NlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsO1xuICAgIGZ1bGxTY3JlZW5JbWFnZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBsaXN0ZW5FdmVudHM6ICgpID0+IHZvaWQ7XG4gICAgdG9nZ2xlOiAoc291cmNlOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgSVN0b3JhZ2Uge1xuLy8gICAgIGltYWdlczogc3RyaW5nW107XG4vLyAgICAgc2F2ZShpbWFnZTogc3RyaW5nKTogbnVtYmVyO1xuLy8gfVxuIiwiaW1wb3J0IHsgSVN0b3JhZ2UgfSBmcm9tICcuL2ltYWdlc3RvcmFnZSc7XG5pbXBvcnQgeyBJRnVsbFNjcmVlbiB9IGZyb20gJy4vZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBJVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgICBwdWJsaWMgb25JbWFnZUxvYWRlZDogQ2FsbGFibGVGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IElTdG9yYWdlLFxuICAgICAgICBwcml2YXRlIGdhbGxlcnlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbjogYW55LFxuICAgICAgICBwcml2YXRlIFVwbG9hZGVyOiBhbnksXG5cbiAgICApIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgICAgIHRoaXMub25JbWFnZUxvYWRlZCA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLlVwbG9hZGVyLmxpc3RlbkV2ZW50cyh0aGlzLm9uSW1hZ2VMb2FkZWQpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLmltYWdlcy5mb3JFYWNoKChpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihpbWFnZSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVyKGltYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbmV3SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmNyZWF0ZShpbWFnZSwgaW5kZXgpO1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50Py5wcmVwZW5kKG5ld0ltYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZShzb3VyY2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IEhUTUxJbWFnZUVsZW1lbnQge1xuICAgICAgICBjb25zdCBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdwaG90by1ncmlkX19pdGVtJyk7XG4gICAgICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcbiAgICAgICAgaW1hZ2UuZGF0YXNldC5nYWxsZXJ5SXRlbSA9ICcnO1xuICAgICAgICBpbWFnZS5kYXRhc2V0LmluZGV4ID0gU3RyaW5nKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKGltYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLnN0b3JhZ2Uuc2F2ZShpbWFnZSk7XG4gICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBsZW5ndGggLSAxO1xuICAgICAgICB0aGlzLnJlbmRlcihpbWFnZSwgaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3Qge2luZGV4fTogRE9NU3RyaW5nTWFwID0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gdGhpcy5zdG9yYWdlLmltYWdlc1tOdW1iZXIoaW5kZXgpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW4udG9nZ2xlKHNvdXJjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTdG9yYWdlIHtcbiAgICBwdWJsaWMgaW1hZ2VzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VzID0gW1xuICAgICAgICAgICAgJ2ltZy9pbWctMC5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMS5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMi5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMy5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctNC5qcGcnXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUoaW1hZ2U6IHN0cmluZyk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmltYWdlcy5wdXNoKGltYWdlKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN0b3JhZ2Uge1xuICAgIGltYWdlczogc3RyaW5nW107XG4gICAgc2F2ZShpbWFnZTogc3RyaW5nKTogbnVtYmVyO1xufVxuXG5cbiIsImV4cG9ydCBjbGFzcyBVcGxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICAgIHByaXZhdGUgaW5wdXRGdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuXG4gICAgKSB7fVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoY2FsbGJhY2s6IENhbGxhYmxlRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5nZXRVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVybChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCBjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWxlOiBGaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgICAgICBjb25zdCBhY2NlcHRlZEltYWdlVHlwZXM6IHN0cmluZ1tdID0gWydpbWFnZS9naWYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcblxuICAgICAgICBpZihmaWxlICYmIGFjY2VwdGVkSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlWyd0eXBlJ10pKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0OiBudW1iZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVVwbG9hZGVyIHtcbiAgICBpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbDtcbiAgICBpbnB1dEZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGw7XG4gICAgbGlzdGVuRXZlbnRzOiAoY2FsbGJhY2s6IENhbGxhYmxlRnVuY3Rpb24pID0+IHZvaWQ7XG4gICAgZ2V0VXJsOiAoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCwgY2FsbGJhY2s6IENhbGxhYmxlRnVuY3Rpb24pID0+IHZvaWQ7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuL2dhbGxlcnknO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vdXBsb2FkZXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vaW1hZ2VzdG9yYWdlJztcblxuY29uc3QgZ2FsbGVyeUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1nYWxsZXJ5XScpO1xuY29uc3QgZnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbl0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1jbG9zZV0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5JbWFnZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtaW1hZ2UtdXBsb2FkZXItaW5wdXRdJyk7XG5jb25zdCBpbnB1dEZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtaW1hZ2UtdXBsb2FkZXItZnVsbC1zY3JlZW5dJyk7XG5cbm5ldyBHYWxsZXJ5KFxuICAgIG5ldyBTdG9yYWdlKCksXG4gICAgZ2FsbGVyeUVsZW1lbnQsXG5cbiAgICBuZXcgRnVsbFNjcmVlbihcbiAgICAgICAgZnVsbFNjcmVlbkVsZW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW5JbWFnZVxuICAgICksXG5cbiAgICBuZXcgVXBsb2FkZXIoXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgaW5wdXRGdWxsU2NyZWVuRWxlbWVudCxcbiAgICApXG4pO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9