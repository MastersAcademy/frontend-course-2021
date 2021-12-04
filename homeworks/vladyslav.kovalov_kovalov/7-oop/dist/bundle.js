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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUUsV0FBVyxDQUFDLENBQUM7UUFFOUUsSUFBRyxJQUFJLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQ2xELE1BQU0sR0FBRyxHQUFXLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNqQjtJQUNMLENBQUM7Q0FDSjs7Ozs7OztVQ3pCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7QUFDRTtBQUNJO0FBRTFDLElBQUksNkNBQU8sQ0FDUCxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFnQixFQUN2RCxtREFBVSxFQUNWLCtDQUFRLENBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9mdWxsc2NyZWVuLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9nYWxsZXJ5LnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy91cGxvYWRlci50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGdWxsU2NyZWVuIHtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHRlbXBsYXRlRWxlbWVudDogSFRNTFRlbXBsYXRlRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwaW5uZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IGNsb3NlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQsXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgdGVtcGxhdGVFbGVtZW50OiBIVE1MVGVtcGxhdGVFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MVGVtcGxhdGVFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG4gICAgICAgIGNvbnN0IHNwaW5uZXJFbGVtZW50OiBIVE1MRGl2RWxlbWVudCB8IG51bGwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3I8SFRNTERpdkVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpO1xuICAgICAgICBjb25zdCBjbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWNsb3NlXScpO1xuXG4gICAgICAgIGlmKCF0ZW1wbGF0ZUVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50IHdpdGggW2RhdGEtZnVsbC1zY3JlZW4tdGVtcGxhdGVdJyk7XG4gICAgICAgIGlmKCFzcGlubmVyRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi1zcGlubmVyXScpXG4gICAgICAgIGlmKCFjbG9zZUVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50IHdpdGggW2RhdGEtZnVsbC1zY3JlZW4tY2xvc2VdJylcblxuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IHRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudCA9IHNwaW5uZXJFbGVtZW50O1xuICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCA9IGNsb3NlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBET01TdHJpbmdNYXAgPSBpbWFnZS5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihkYXRhLmZ1bGxTY3JlZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmKGNoaWxkRWxlbWVudCkgdGhpcy5lbC5yZW1vdmVDaGlsZChjaGlsZEVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNsb3NlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICB0aGlzLmVsLnJlbW92ZUNoaWxkKGNoaWxkRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlSW1hZ2Uoc291cmNlOiBzdHJpbmcpOiBFbGVtZW50IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ6IGFueSA9IHRoaXMudGVtcGxhdGVFbGVtZW50LmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbi1pbWFnZV0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBzb3VyY2UpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHRvZ2dsZUltYWdlKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIHRoaXMuc3Bpbm5lckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgICAgICAgY29uc3QgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWwuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XG4gICAgcHJpdmF0ZSBpbWFnZVN0b3JhZ2U6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBvbkltYWdlVXBsb2FkZWQ6IENhbGxhYmxlRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDpIVE1MRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuOiBhbnksXG4gICAgICAgIHByaXZhdGUgaW1hZ2VVcGxvYWRlcjogYW55LFxuICAgICl7XG5cbiAgICAgICAgdGhpcy5vbkltYWdlVXBsb2FkZWQgPSB0aGlzLnNhdmVJbWFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbl0nKSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW1hZ2VVcGxvYWRlciA9IG5ldyBVcGxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbWFnZS11cGxvYWRdJykgYXMgSFRNTEVsZW1lbnQsIHRoaXMub25JbWFnZVVwbG9hZGVkKTtcblxuICAgICAgICB0aGlzLmltYWdlU3RvcmFnZSA9IFtcbiAgICAgICAgICAgICdpbWcvaW1nLTAuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTEuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTIuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTMuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTQuanBnJ1xuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuaW5pdEdhbGxlcnkoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRHYWxsZXJ5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlU3RvcmFnZS5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW1hZ2UoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmVJbWFnZShlbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmltYWdlU3RvcmFnZS5wdXNoKGVsZW1lbnQpXG4gICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBsZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UoZWxlbWVudCwgaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySW1hZ2UoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjdXJyZW50SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmxvYWRJbWFnZShpbWFnZSwgaW5kZXgpO1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LnByZXBlbmQoY3VycmVudEltYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRJbWFnZShpbWFnZVNyYzogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlXScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ6IGFueSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudF0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50Jyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleDogc3RyaW5nIHwgdW5kZWZpbmVkID0gaW1hZ2UuZGF0YXNldC5pbmRleDtcblxuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gdGhpcy5pbWFnZVN0b3JhZ2VbTnVtYmVyKGluZGV4KV1cbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsU2NyZWVuSW1hZ2U6IEhUTUxFbGVtZW50ID0gdGhpcy5mdWxsU2NyZWVuLmNyZWF0ZUltYWdlKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuLnRvZ2dsZUltYWdlKGZ1bGxTY3JlZW5JbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogYW55LFxuICAgICAgICBwcml2YXRlIGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uLFxuICAgICkge1xuXG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKHRoaXMuY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEltYWdlVXJsKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZpbGU6IEZpbGUgPSAoZWxlbWVudC5maWxlcyBhcyBGaWxlTGlzdClbMF07XG4gICAgICAgIGNvbnN0IGFjY2VwdGVkSW1hZ2VUeXBlczogc3RyaW5nW10gPSBbJ2ltYWdlL2dpZicsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xuXG4gICAgICAgIGlmKGZpbGUgJiYgYWNjZXB0ZWRJbWFnZVR5cGVzLmluY2x1ZGVzKGZpbGVbJ3R5cGUnXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybDogc3RyaW5nID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICBjYWxsYmFjayh1cmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSAnLi9nYWxsZXJ5JztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi91cGxvYWRlcic7XG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnLi9mdWxsc2NyZWVuJztcblxubmV3IEdhbGxlcnkoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FsbGVyeV0nKSBhcyBIVE1MRWxlbWVudCxcbiAgICBGdWxsU2NyZWVuLFxuICAgIFVwbG9hZGVyXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9