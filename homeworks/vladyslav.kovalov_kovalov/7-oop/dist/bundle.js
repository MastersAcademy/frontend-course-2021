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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZ2FsbGVyeS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvaW1hZ2VzdG9yYWdlLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy91cGxvYWRlci50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuSW1hZ2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGxcblxuICAgICkge1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogRE9NU3RyaW5nTWFwID0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoZGF0YS5mdWxsU2NyZWVuID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoc291cmNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuSW1hZ2VFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgICBwdWJsaWMgb25JbWFnZUxvYWRlZDogQ2FsbGFibGVGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW46IGFueSxcbiAgICAgICAgcHJpdmF0ZSBVcGxvYWRlcjogYW55LFxuXG4gICAgKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgICAgICB0aGlzLm9uSW1hZ2VMb2FkZWQgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5VcGxvYWRlci5saXN0ZW5FdmVudHModGhpcy5vbkltYWdlTG9hZGVkKTtcblxuICAgIH1cbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RvcmFnZS5pbWFnZXMuZm9yRWFjaCgoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbmRlcihpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG5ld0ltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5jcmVhdGUoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudD8ucHJlcGVuZChuZXdJbWFnZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGUoc291cmNlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgncGhvdG8tZ3JpZF9faXRlbScpO1xuICAgICAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XG4gICAgICAgIGltYWdlLmRhdGFzZXQuZ2FsbGVyeUl0ZW0gPSAnJztcbiAgICAgICAgaW1hZ2UuZGF0YXNldC5pbmRleCA9IFN0cmluZyhpbmRleCk7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZShpbWFnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aDogbnVtYmVyID0gdGhpcy5zdG9yYWdlLnNhdmUoaW1hZ2UpO1xuICAgICAgICBjb25zdCBpbmRleDogbnVtYmVyID0gbGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy5yZW5kZXIoaW1hZ2UsIGluZGV4KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHtpbmRleH06IERPTVN0cmluZ01hcCA9IGltYWdlLmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2U6IHN0cmluZyA9IHRoaXMuc3RvcmFnZS5pbWFnZXNbTnVtYmVyKGluZGV4KV07XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuLnRvZ2dsZShzb3VyY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU3RvcmFnZSB7XG4gICAgcHVibGljIGltYWdlczogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmltYWdlcyA9IFtcbiAgICAgICAgICAgICdpbWcvaW1nLTAuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTEuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTIuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTMuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTQuanBnJ1xuICAgICAgICBdO1xuICAgIH1cblxuICAgIHB1YmxpYyBzYXZlKGltYWdlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5pbWFnZXMucHVzaChpbWFnZSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBpbnB1dEZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG5cbiAgICApIHt9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cyhjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmdldFVybChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VXJsKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZpbGU6IEZpbGUgPSAoZWxlbWVudC5maWxlcyBhcyBGaWxlTGlzdClbMF07XG4gICAgICAgIGNvbnN0IGFjY2VwdGVkSW1hZ2VUeXBlczogc3RyaW5nW10gPSBbJ2ltYWdlL2dpZicsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xuXG4gICAgICAgIGlmKGZpbGUgJiYgYWNjZXB0ZWRJbWFnZVR5cGVzLmluY2x1ZGVzKGZpbGVbJ3R5cGUnXSkpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRGdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXQ6IG51bWJlciA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmw6IHN0cmluZyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRGdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodXJsKTtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJy4vZ2FsbGVyeSc7XG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnLi9mdWxsc2NyZWVuJztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi91cGxvYWRlcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnLi9pbWFnZXN0b3JhZ2UnO1xuXG5jb25zdCBnYWxsZXJ5RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWdhbGxlcnldJyk7XG5jb25zdCBmdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuXScpO1xuY29uc3QgZnVsbFNjcmVlbkNsb3NlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWNsb3NlXScpO1xuY29uc3QgZnVsbFNjcmVlbkltYWdlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJyk7XG5jb25zdCBpbnB1dEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1pbWFnZS11cGxvYWRlci1pbnB1dF0nKTtcbmNvbnN0IGlucHV0RnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1pbWFnZS11cGxvYWRlci1mdWxsLXNjcmVlbl0nKTtcblxubmV3IEdhbGxlcnkoXG4gICAgbmV3IFN0b3JhZ2UoKSxcbiAgICBnYWxsZXJ5RWxlbWVudCxcblxuICAgIG5ldyBGdWxsU2NyZWVuKFxuICAgICAgICBmdWxsU2NyZWVuRWxlbWVudCxcbiAgICAgICAgZnVsbFNjcmVlbkNsb3NlRWxlbWVudCxcbiAgICAgICAgZnVsbFNjcmVlbkltYWdlXG4gICAgKSxcblxuICAgIG5ldyBVcGxvYWRlcihcbiAgICAgICAgaW5wdXRFbGVtZW50LFxuICAgICAgICBpbnB1dEZ1bGxTY3JlZW5FbGVtZW50LFxuICAgIClcbik7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=