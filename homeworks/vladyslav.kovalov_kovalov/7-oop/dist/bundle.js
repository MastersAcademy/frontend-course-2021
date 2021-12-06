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
        console.log(length);
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
    constructor(storage, inputElement, inputFullScreenElement) {
        this.storage = storage;
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
const imageStorage = new _imagestorage__WEBPACK_IMPORTED_MODULE_3__.Storage();
new _gallery__WEBPACK_IMPORTED_MODULE_0__.Gallery(imageStorage, galleryElement, new _fullscreen__WEBPACK_IMPORTED_MODULE_1__.FullScreen(fullScreenElement, fullScreenCloseElement, fullScreenImage), new _uploader__WEBPACK_IMPORTED_MODULE_2__.Uploader(imageStorage, inputElement, inputFullScreenElement));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksK0NBQVEsQ0FDUixZQUFZLEVBQ1osWUFBWSxFQUNaLHNCQUFzQixDQUN6QixDQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZnVsbHNjcmVlbi50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZ2FsbGVyeS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvaW1hZ2VzdG9yYWdlLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy91cGxvYWRlci50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuSW1hZ2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGxcblxuICAgICkge1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogRE9NU3RyaW5nTWFwID0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoZGF0YS5mdWxsU2NyZWVuID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoc291cmNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuSW1hZ2VFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgICBwdWJsaWMgb25JbWFnZUxvYWRlZDogQ2FsbGFibGVGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW46IGFueSxcbiAgICAgICAgcHJpdmF0ZSBVcGxvYWRlcjogYW55LFxuXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgICAgICB0aGlzLm9uSW1hZ2VMb2FkZWQgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5VcGxvYWRlci5saXN0ZW5FdmVudHModGhpcy5vbkltYWdlTG9hZGVkKTtcblxuICAgIH1cbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5pbWFnZXMuZm9yRWFjaCgoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcihpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5jcmVhdGUoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudD8ucHJlcGVuZChuZXdJbWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGUoc291cmNlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgncGhvdG8tZ3JpZF9faXRlbScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gICAgICAgIGltYWdlLmRhdGFzZXQuZ2FsbGVyeUl0ZW0gPSAnJztcbiAgICAgICAgaW1hZ2UuZGF0YXNldC5pbmRleCA9IFN0cmluZyhpbmRleCk7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZShpbWFnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5zdG9yYWdlLnNhdmUoaW1hZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhsZW5ndGgpO1xuICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5yZW5kZXIoaW1hZ2UsIGluZGV4KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHtpbmRleH06IERPTVN0cmluZ01hcCA9IGltYWdlLmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2U6IHN0cmluZyA9IHRoaXMuc3RvcmFnZS5pbWFnZXNbTnVtYmVyKGluZGV4KV07XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuLnRvZ2dsZShzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gICAgcHVibGljIGltYWdlczogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtcbiAgICAgICAgICAgICdpbWcvaW1nLTAuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTEuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTIuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTMuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTQuanBnJ1xuICAgICAgICBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKGltYWdlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBzdG9yYWdlOiBhbnksXG4gICAgICAgIHByaXZhdGUgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICAgIHByaXZhdGUgaW5wdXRGdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuXG4gICAgKSB7fVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoY2FsbGJhY2s6IENhbGxhYmxlRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5nZXRVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVybChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCBjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbikge1xuICAgICAgICBjb25zdCBmaWxlOiBGaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgICAgICBjb25zdCBhY2NlcHRlZEltYWdlVHlwZXM6IHN0cmluZ1tdID0gWydpbWFnZS9naWYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcblxuICAgICAgICBpZihmaWxlICYmIGFjY2VwdGVkSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlWyd0eXBlJ10pKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0OiBudW1iZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuL2dhbGxlcnknO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vZnVsbHNjcmVlbic7XG5pbXBvcnQge1VwbG9hZGVyfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICcuL2ltYWdlc3RvcmFnZSc7XG5cbmNvbnN0IGdhbGxlcnlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtZ2FsbGVyeV0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW5dJyk7XG5jb25zdCBmdWxsU2NyZWVuQ2xvc2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tY2xvc2VdJyk7XG5jb25zdCBmdWxsU2NyZWVuSW1hZ2U6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKTtcbmNvbnN0IGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWltYWdlLXVwbG9hZGVyLWlucHV0XScpO1xuY29uc3QgaW5wdXRGdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWltYWdlLXVwbG9hZGVyLWZ1bGwtc2NyZWVuXScpO1xuY29uc3QgaW1hZ2VTdG9yYWdlID0gbmV3IFN0b3JhZ2UoKTtcblxubmV3IEdhbGxlcnkoXG4gICAgaW1hZ2VTdG9yYWdlLFxuICAgIGdhbGxlcnlFbGVtZW50LFxuXG4gICAgbmV3IEZ1bGxTY3JlZW4oXG4gICAgICAgIGZ1bGxTY3JlZW5FbGVtZW50LFxuICAgICAgICBmdWxsU2NyZWVuQ2xvc2VFbGVtZW50LFxuICAgICAgICBmdWxsU2NyZWVuSW1hZ2VcbiAgICApLFxuXG4gICAgbmV3IFVwbG9hZGVyKFxuICAgICAgICBpbWFnZVN0b3JhZ2UsXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgaW5wdXRGdWxsU2NyZWVuRWxlbWVudCxcbiAgICApXG4pO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9