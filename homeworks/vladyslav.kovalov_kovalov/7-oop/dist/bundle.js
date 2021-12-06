/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/FullScreen.ts":
/*!***************************!*\
  !*** ./src/FullScreen.ts ***!
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

/***/ "./src/Gallery.ts":
/*!************************!*\
  !*** ./src/Gallery.ts ***!
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

/***/ "./src/ImageStorage.ts":
/*!*****************************!*\
  !*** ./src/ImageStorage.ts ***!
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

/***/ "./src/Uploader.ts":
/*!*************************!*\
  !*** ./src/Uploader.ts ***!
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
/* harmony import */ var _Gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gallery */ "./src/Gallery.ts");
/* harmony import */ var _FullScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FullScreen */ "./src/FullScreen.ts");
/* harmony import */ var _Uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Uploader */ "./src/Uploader.ts");
/* harmony import */ var _ImageStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageStorage */ "./src/ImageStorage.ts");




const galleryElement = document.querySelector('[data-gallery]');
const fullScreenElement = document.querySelector('[data-full-screen]');
const fullScreenCloseElement = document.querySelector('[data-full-screen-close]');
const fullScreenImage = document.querySelector('[data-full-screen-image]');
const inputElement = document.querySelector('[data-image-uploader-input]');
const inputFullScreenElement = document.querySelector('[data-image-uploader-full-screen]');
new _Gallery__WEBPACK_IMPORTED_MODULE_0__.Gallery(new _ImageStorage__WEBPACK_IMPORTED_MODULE_3__.Storage(), galleryElement, new _FullScreen__WEBPACK_IMPORTED_MODULE_1__.FullScreen(fullScreenElement, fullScreenCloseElement, fullScreenImage), new _Uploader__WEBPACK_IMPORTED_MODULE_2__.Uploader(inputElement, inputFullScreenElement));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvR2FsbGVyeS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvSW1hZ2VTdG9yYWdlLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9VcGxvYWRlci50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGdWxsU2NyZWVuIH0gZnJvbSAnLi9GdWxsU2NyZWVuLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEZ1bGxTY3JlZW4gaW1wbGVtZW50cyBJRnVsbFNjcmVlbiB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuQ2xvc2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbkltYWdlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsXG5cbiAgICApIHtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcblxuICAgIH1cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGE6IERPTVN0cmluZ01hcCA9IGltYWdlLmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmKGRhdGEuZnVsbFNjcmVlbiA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuQ2xvc2VFbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlKHNvdXJjZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkltYWdlRWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJU3RvcmFnZSB9IGZyb20gJy4vSW1hZ2VTdG9yYWdlLnR5cGVzJztcblxuZXhwb3J0IGNsYXNzIEdhbGxlcnkge1xuICAgIHB1YmxpYyBvbkltYWdlTG9hZGVkOiBDYWxsYWJsZUZ1bmN0aW9uO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZTogSVN0b3JhZ2UsXG4gICAgICAgIHByaXZhdGUgZ2FsbGVyeUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuOiBhbnksXG4gICAgICAgIHByaXZhdGUgVXBsb2FkZXI6IGFueSxcblxuICAgICkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbkltYWdlTG9hZGVkID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuVXBsb2FkZXIubGlzdGVuRXZlbnRzKHRoaXMub25JbWFnZUxvYWRlZCk7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuaW1hZ2VzLmZvckVhY2goKGltYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKGltYWdlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuY3JlYXRlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQ/LnByZXBlbmQobmV3SW1hZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlKHNvdXJjZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bob3RvLWdyaWRfX2l0ZW0nKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc291cmNlO1xuICAgICAgICBpbWFnZS5kYXRhc2V0LmdhbGxlcnlJdGVtID0gJyc7XG4gICAgICAgIGltYWdlLmRhdGFzZXQuaW5kZXggPSBTdHJpbmcoaW5kZXgpO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUoaW1hZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHRoaXMuc3RvcmFnZS5zYXZlKGltYWdlKTtcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMucmVuZGVyKGltYWdlLCBpbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB7aW5kZXh9OiBET01TdHJpbmdNYXAgPSBpbWFnZS5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlOiBzdHJpbmcgPSB0aGlzLnN0b3JhZ2UuaW1hZ2VzW051bWJlcihpbmRleCldO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbi50b2dnbGUoc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSVN0b3JhZ2UgfSBmcm9tICcuL0ltYWdlU3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuICAgIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXG4gICAgICAgICAgICAnaW1nL2ltZy0wLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0xLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0yLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0zLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy00LmpwZydcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZShpbWFnZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBJVXBsb2FkZXIgfSBmcm9tICcuL1VwbG9hZGVyLnR5cGVzJ1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIgaW1wbGVtZW50cyBJVXBsb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGlucHV0RnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcblxuICAgICkge31cblxuICAgIHB1YmxpYyBsaXN0ZW5FdmVudHMoY2FsbGJhY2s6IENhbGxhYmxlRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5nZXRVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVybChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCBjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWxlOiBGaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgICAgICBjb25zdCBhY2NlcHRlZEltYWdlVHlwZXM6IHN0cmluZ1tdID0gWydpbWFnZS9naWYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcblxuICAgICAgICBpZihmaWxlICYmIGFjY2VwdGVkSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlWyd0eXBlJ10pKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0OiBudW1iZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vRnVsbFNjcmVlbic7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vVXBsb2FkZXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vSW1hZ2VTdG9yYWdlJztcblxuY29uc3QgZ2FsbGVyeUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1nYWxsZXJ5XScpO1xuY29uc3QgZnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbl0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1jbG9zZV0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5JbWFnZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtaW1hZ2UtdXBsb2FkZXItaW5wdXRdJyk7XG5jb25zdCBpbnB1dEZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtaW1hZ2UtdXBsb2FkZXItZnVsbC1zY3JlZW5dJyk7XG5cbm5ldyBHYWxsZXJ5KFxuICAgIG5ldyBTdG9yYWdlKCksXG4gICAgZ2FsbGVyeUVsZW1lbnQsXG5cbiAgICBuZXcgRnVsbFNjcmVlbihcbiAgICAgICAgZnVsbFNjcmVlbkVsZW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW5JbWFnZVxuICAgICksXG5cbiAgICBuZXcgVXBsb2FkZXIoXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgaW5wdXRGdWxsU2NyZWVuRWxlbWVudCxcbiAgICApXG4pO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9