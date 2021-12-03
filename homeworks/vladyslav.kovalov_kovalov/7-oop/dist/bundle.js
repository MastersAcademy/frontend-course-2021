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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7Q0FDSjs7Ozs7OztVQ3JCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDRTtBQUNJO0FBRTFDLElBQUksNkNBQU8sQ0FDUCxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFnQixFQUN2RCxtREFBVSxFQUNWLCtDQUFRLENBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9mdWxsc2NyZWVuLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9nYWxsZXJ5LnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy91cGxvYWRlci50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwaW5uZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNsb3NlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQsXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxUZW1wbGF0ZUVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKTtcbiAgICAgICAgY29uc3Qgc3Bpbm5lckVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpO1xuICAgICAgICBjb25zdCBjbG9zZUVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1jbG9zZV0nKTtcblxuICAgICAgICBpZighdGVtcGxhdGVFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLXRlbXBsYXRlXScpO1xuICAgICAgICBpZighc3Bpbm5lckVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50IHdpdGggW2RhdGEtZnVsbC1zY3JlZW4tc3Bpbm5lcl0nKVxuICAgICAgICBpZighY2xvc2VFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLWNsb3NlXScpXG5cbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSB0ZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQgPSBzcGlubmVyRWxlbWVudDtcbiAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQgPSBjbG9zZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogRE9NU3RyaW5nTWFwID0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoZGF0YS5mdWxsU2NyZWVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2xvc2VFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxlbWVudDogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJykgYXMgSFRNTEltYWdlRWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuZWwucmVtb3ZlQ2hpbGQoY2hpbGRFbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbWFnZShzb3VyY2U6IHN0cmluZyk6IEVsZW1lbnQgfCBudWxsIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUltYWdlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgY29uc3QgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XG4gICAgcHJpdmF0ZSBpbWFnZVN0b3JhZ2U6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBvbkltYWdlVXBsb2FkZWQ6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGdhbGxlcnlFbGVtZW50OkhUTUxFbGVtZW50LFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW46IGFueSxcbiAgICAgICAgcHJpdmF0ZSBpbWFnZVVwbG9hZGVyOiBhbnksXG4gICAgKXtcblxuICAgICAgICB0aGlzLm9uSW1hZ2VVcGxvYWRlZCA9IHRoaXMuc2F2ZUltYWdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbiA9IG5ldyBGdWxsU2NyZWVuKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuXScpIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgdGhpcy5pbWFnZVVwbG9hZGVyID0gbmV3IFVwbG9hZGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWltYWdlLXVwbG9hZF0nKSBhcyBIVE1MSW5wdXRFbGVtZW50LCB0aGlzLm9uSW1hZ2VVcGxvYWRlZCk7XG5cbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UgPSBbXG4gICAgICAgICAgICAnaW1nL2ltZy0wLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0xLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0yLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0zLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy00LmpwZydcbiAgICAgICAgXTtcblxuICAgICAgICB0aGlzLmluaXRHYWxsZXJ5KCk7XG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0R2FsbGVyeSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbWFnZVN0b3JhZ2UuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlckltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzYXZlSW1hZ2UoZWxlbWVudDogYW55KTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuaW1hZ2VTdG9yYWdlLnB1c2goZWxlbWVudClcbiAgICAgICAgY29uc3QgaW5kZXggPSBsZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UoZWxlbWVudCwgaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySW1hZ2UoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjdXJyZW50SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmxvYWRJbWFnZShpbWFnZSwgaW5kZXgpO1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LnByZXBlbmQoY3VycmVudEltYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRJbWFnZShpbWFnZVNyYzogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlXScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgZWxlbWVudDogYW55ID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlLWVsZW1lbnRdJyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgaW1hZ2VTcmMpO1xuICAgICAgICBlbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnLCBpbmRleCk7XG4gICAgICAgIGVsZW1lbnQ/LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudCcpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxpc3RlbkV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5nYWxsZXJ5RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXg6IHN0cmluZyB8IHVuZGVmaW5lZCA9IGltYWdlLmRhdGFzZXQuaW5kZXg7XG5cbiAgICAgICAgICAgIGlmKGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzb3VyY2U6IHN0cmluZyA9IHRoaXMuaW1hZ2VTdG9yYWdlW051bWJlcihpbmRleCldXG4gICAgICAgICAgICAgICAgY29uc3QgZnVsbFNjcmVlbkltYWdlOiBIVE1MRWxlbWVudCA9IHRoaXMuZnVsbFNjcmVlbi5jcmVhdGVJbWFnZShzb3VyY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbi50b2dnbGVJbWFnZShmdWxsU2NyZWVuSW1hZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCBjbGFzcyBVcGxvYWRlciB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcmVhZG9ubHkgZWw6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBjYWxsYmFjazogYW55LFxuICAgICkge1xuXG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKHRoaXMuY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5nZXRJbWFnZVVybChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW1hZ2VVcmwoZWxlbWVudDogSFRNTElucHV0RWxlbWVudCwgY2FsbGJhY2s6IGFueSkge1xuICAgICAgICBjb25zdCBmaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgICAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgICBjYWxsYmFjayh1cmwpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgR2FsbGVyeSB9IGZyb20gJy4vZ2FsbGVyeSc7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vdXBsb2FkZXInO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vZnVsbHNjcmVlbic7XG5cbm5ldyBHYWxsZXJ5KFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWdhbGxlcnldJykgYXMgSFRNTEVsZW1lbnQsXG4gICAgRnVsbFNjcmVlbixcbiAgICBVcGxvYWRlclxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==