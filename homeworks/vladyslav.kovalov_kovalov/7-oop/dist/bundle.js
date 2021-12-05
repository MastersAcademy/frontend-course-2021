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
        const containerElement = this.el.querySelector('[data-full-screen-container]');
        const templateElement = this.el.querySelector('[data-full-screen-template]');
        const spinnerElement = this.el.querySelector('[data-full-screen-spinner]');
        const closeElement = this.el.querySelector('[data-full-screen-close]');
        if (!templateElement)
            throw new Error('Missing element with [data-full-screen-template]');
        if (!spinnerElement)
            throw new Error('Missing element with [data-full-screen-spinner]');
        if (!closeElement)
            throw new Error('Missing element with [data-full-screen-close]');
        if (!containerElement)
            throw new Error('Missing element with [data-full-screen-container]');
        this.containerElement = containerElement;
        this.templateElement = templateElement;
        this.spinnerElement = spinnerElement;
        this.closeElement = closeElement;
        this.listenEvents();
    }
    listenEvents() {
        this.el.addEventListener('click', event => {
            const image = event.target;
            const data = image.dataset;
            if (data.fullScreen === '') {
                this.el.classList.add('hidden');
                if (this.containerElement.children) {
                    this.containerElement.innerHTML = '';
                }
            }
        });
        this.closeElement.addEventListener('click', () => {
            this.el.classList.add('hidden');
            this.containerElement.innerHTML = '';
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
            console.log('Timeout launched');
            this.spinnerElement.classList.add('hidden');
            this.containerElement.append(element);
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
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
        if (file && acceptedImageTypes.includes(file['type'])) {
            const url = window.URL.createObjectURL(file);
            callback(url);
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
/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader */ "./src/uploader.ts");
/* harmony import */ var _fullscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fullscreen */ "./src/fullscreen.ts");



new _gallery__WEBPACK_IMPORTED_MODULE_0__.Gallery(document.querySelector('[data-gallery]'), _fullscreen__WEBPACK_IMPORTED_MODULE_2__.FullScreen, _uploader__WEBPACK_IMPORTED_MODULE_1__.Uploader);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBeUIsRUFBRSxRQUEwQjtRQUNyRSxNQUFNLElBQUksR0FBVSxPQUFPLENBQUMsS0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLGtCQUFrQixHQUFhLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU5RSxJQUFHLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDbEQsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0wsQ0FBQztDQUNKOzs7Ozs7O1VDekJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNFO0FBQ0k7QUFFMUMsSUFBSSw2Q0FBTyxDQUNQLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQWdCLEVBQ3ZELG1EQUFVLEVBQ1YsK0NBQVEsQ0FDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2Z1bGxzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2dhbGxlcnkudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL3VwbG9hZGVyLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEZ1bGxTY3JlZW4ge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc3Bpbm5lckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY2xvc2VFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IEhUTUxFbGVtZW50LFxuICAgICkge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWNvbnRhaW5lcl0nKTtcbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MVGVtcGxhdGVFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpO1xuICAgICAgICBjb25zdCBjbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWNsb3NlXScpO1xuXG4gICAgICAgIGlmKCF0ZW1wbGF0ZUVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50IHdpdGggW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG4gICAgICAgIGlmKCFzcGlubmVyRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpO1xuICAgICAgICBpZighY2xvc2VFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLWNsb3NlXScpO1xuICAgICAgICBpZighY29udGFpbmVyRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi1jb250YWluZXJdJyk7XG5cbiAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50ID0gY29udGFpbmVyRWxlbWVudDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQgPSBzcGlubmVyRWxlbWVudDtcbiAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQgPSBjbG9zZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogRE9NU3RyaW5nTWFwID0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoZGF0YS5mdWxsU2NyZWVuID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb250YWluZXJFbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbWFnZShzb3VyY2U6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY29udGVudDogYW55ID0gdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgdG9nZ2xlSW1hZ2UoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAgICAgICBjb25zdCB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RpbWVvdXQgbGF1bmNoZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi91cGxvYWRlcic7XG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnLi9mdWxsc2NyZWVuJztcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgICBwcml2YXRlIGltYWdlU3RvcmFnZTogc3RyaW5nW10gPSBbXTtcbiAgICBwcml2YXRlIG9uSW1hZ2VVcGxvYWRlZDogQ2FsbGFibGVGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdhbGxlcnlFbGVtZW50OkhUTUxFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW46IGFueSxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVVwbG9hZGVyOiBhbnksXG4gICAgKXtcblxuICAgICAgICB0aGlzLm9uSW1hZ2VVcGxvYWRlZCA9IHRoaXMuc2F2ZUltYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuXScpIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVyID0gbmV3IFVwbG9hZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLXVwbG9hZF0nKSBhcyBIVE1MRWxlbWVudCwgdGhpcy5vbkltYWdlVXBsb2FkZWQpO1xuXG4gICAgICAgIHRoaXMuaW1hZ2VTdG9yYWdlID0gW1xuICAgICAgICAgICAgJ2ltZy9pbWctMC5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMS5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMi5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctMy5qcGcnLFxuICAgICAgICAgICAgJ2ltZy9pbWctNC5qcGcnXG4gICAgICAgIF07XG5cbiAgICAgICAgdGhpcy5pbml0R2FsbGVyeSgpO1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdhbGxlcnkoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW1hZ2VTdG9yYWdlLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShpbWFnZSwgaW5kZXgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHByaXZhdGUgc2F2ZUltYWdlKGVsZW1lbnQ6IGFueSk6IHZvaWQge1xuICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHRoaXMuaW1hZ2VTdG9yYWdlLnB1c2goZWxlbWVudClcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGxlbmd0aCAtIDE7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJJbWFnZShlbGVtZW50LCBpbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXJJbWFnZShpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMubG9hZEltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQucHJlcGVuZChjdXJyZW50SW1hZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbG9hZEltYWdlKGltYWdlU3JjOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBIVE1MSW1hZ2VFbGVtZW50IHtcbiAgICAgICAgY29uc3QgdGVtcGxhdGU6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGVdJykgYXMgSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY29udGVudDogYW55ID0gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQ6IGFueSA9IChjb250ZW50IGFzIEhUTUxJbWFnZUVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50XScpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltYWdlU3JjKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdkYXRhLWluZGV4JywgaW5kZXgpO1xuICAgICAgICBlbGVtZW50Py5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlLWVsZW1lbnQnKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZTogSFRNTEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4OiBzdHJpbmcgfCB1bmRlZmluZWQgPSBpbWFnZS5kYXRhc2V0LmluZGV4O1xuXG4gICAgICAgICAgICBpZihpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlOiBzdHJpbmcgPSB0aGlzLmltYWdlU3RvcmFnZVtOdW1iZXIoaW5kZXgpXVxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxTY3JlZW5JbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuZnVsbFNjcmVlbi5jcmVhdGVJbWFnZShzb3VyY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbi50b2dnbGVJbWFnZShmdWxsU2NyZWVuSW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBVcGxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbixcbiAgICApIHtcblxuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cyh0aGlzLmNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cyhjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCk7XG4gICAgICAgICAgICB0aGlzLmdldEltYWdlVXJsKGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbWFnZVVybChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCBjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbikge1xuICAgICAgICBjb25zdCBmaWxlOiBGaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgICAgICBjb25zdCBhY2NlcHRlZEltYWdlVHlwZXM6IHN0cmluZ1tdID0gWydpbWFnZS9naWYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcblxuICAgICAgICBpZihmaWxlICYmIGFjY2VwdGVkSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlWyd0eXBlJ10pKSB7XG4gICAgICAgICAgICBjb25zdCB1cmw6IHN0cmluZyA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2sodXJsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJy4vZ2FsbGVyeSc7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vdXBsb2FkZXInO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vZnVsbHNjcmVlbic7XG5cbm5ldyBHYWxsZXJ5KFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbGxlcnldJykgYXMgSFRNTEVsZW1lbnQsXG4gICAgRnVsbFNjcmVlbixcbiAgICBVcGxvYWRlclxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==