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
                if (this.containerElement.children)
                    this.containerElement.innerHTML = '';
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
            this.containerElement.append(element);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sa0JBQWtCLEdBQWEsQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBRTlFLElBQUcsSUFBSSxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRTtZQUNsRCxNQUFNLEdBQUcsR0FBVyxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDakI7SUFDTCxDQUFDO0NBQ0o7Ozs7Ozs7VUN6QkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ0U7QUFDSTtBQUUxQyxJQUFJLDZDQUFPLENBQ1AsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBZ0IsRUFDdkQsbURBQVUsRUFDViwrQ0FBUSxDQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZnVsbHNjcmVlbi50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvZ2FsbGVyeS50cyIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvLi9zcmMvdXBsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL2FwcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRnVsbFNjcmVlbiB7XG4gICAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGlubmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBjbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogSFRNTEVsZW1lbnQsXG4gICAgKSB7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyRWxlbWVudDogSFRNTERpdkVsZW1lbnQgfCBudWxsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxEaXZFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tY29udGFpbmVyXScpO1xuICAgICAgICBjb25zdCB0ZW1wbGF0ZUVsZW1lbnQ6IEhUTUxUZW1wbGF0ZUVsZW1lbnQgfCBudWxsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxUZW1wbGF0ZUVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKTtcbiAgICAgICAgY29uc3Qgc3Bpbm5lckVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50IHwgbnVsbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcjxIVE1MRGl2RWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLXNwaW5uZXJdJyk7XG4gICAgICAgIGNvbnN0IGNsb3NlRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtZnVsbC1zY3JlZW4tY2xvc2VdJyk7XG5cbiAgICAgICAgaWYoIXRlbXBsYXRlRWxlbWVudCkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVsZW1lbnQgd2l0aCBbZGF0YS1mdWxsLXNjcmVlbi10ZW1wbGF0ZV0nKTtcbiAgICAgICAgaWYoIXNwaW5uZXJFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLXNwaW5uZXJdJyk7XG4gICAgICAgIGlmKCFjbG9zZUVsZW1lbnQpIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBlbGVtZW50IHdpdGggW2RhdGEtZnVsbC1zY3JlZW4tY2xvc2VdJyk7XG4gICAgICAgIGlmKCFjb250YWluZXJFbGVtZW50KSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZWxlbWVudCB3aXRoIFtkYXRhLWZ1bGwtc2NyZWVuLWNvbnRhaW5lcl0nKTtcblxuICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXJFbGVtZW50O1xuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IHRlbXBsYXRlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudCA9IHNwaW5uZXJFbGVtZW50O1xuICAgICAgICB0aGlzLmNsb3NlRWxlbWVudCA9IGNsb3NlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhOiBET01TdHJpbmdNYXAgPSBpbWFnZS5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihkYXRhLmZ1bGxTY3JlZW4gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvbnRhaW5lckVsZW1lbnQuY2hpbGRyZW4pIHRoaXMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jbG9zZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUltYWdlKHNvdXJjZTogc3RyaW5nKTogRWxlbWVudCB8IG51bGwge1xuICAgICAgICBjb25zdCBjb250ZW50OiBhbnkgPSB0aGlzLnRlbXBsYXRlRWxlbWVudC5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gKGNvbnRlbnQgYXMgSFRNTEltYWdlRWxlbWVudCkucXVlcnlTZWxlY3RvcignW2RhdGEtZnVsbC1zY3JlZW4taW1hZ2VdJyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0b2dnbGVJbWFnZShlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgICAgICB0aGlzLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICB0aGlzLnNwaW5uZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5zcGlubmVyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXBsb2FkZXIgfSBmcm9tICcuL3VwbG9hZGVyJztcbmltcG9ydCB7IEZ1bGxTY3JlZW4gfSBmcm9tICcuL2Z1bGxzY3JlZW4nO1xuXG5leHBvcnQgY2xhc3MgR2FsbGVyeSB7XG4gICAgcHJpdmF0ZSBpbWFnZVN0b3JhZ2U6IHN0cmluZ1tdID0gW107XG4gICAgcHJpdmF0ZSBvbkltYWdlVXBsb2FkZWQ6IENhbGxhYmxlRnVuY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBnYWxsZXJ5RWxlbWVudDpIVE1MRWxlbWVudCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuOiBhbnksXG4gICAgICAgIHByaXZhdGUgaW1hZ2VVcGxvYWRlcjogYW55LFxuICAgICl7XG5cbiAgICAgICAgdGhpcy5vbkltYWdlVXBsb2FkZWQgPSB0aGlzLnNhdmVJbWFnZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW4gPSBuZXcgRnVsbFNjcmVlbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mdWxsLXNjcmVlbl0nKSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgIHRoaXMuaW1hZ2VVcGxvYWRlciA9IG5ldyBVcGxvYWRlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pbWFnZS11cGxvYWRdJykgYXMgSFRNTEVsZW1lbnQsIHRoaXMub25JbWFnZVVwbG9hZGVkKTtcblxuICAgICAgICB0aGlzLmltYWdlU3RvcmFnZSA9IFtcbiAgICAgICAgICAgICdpbWcvaW1nLTAuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTEuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTIuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTMuanBnJyxcbiAgICAgICAgICAgICdpbWcvaW1nLTQuanBnJ1xuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuaW5pdEdhbGxlcnkoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRHYWxsZXJ5KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmltYWdlU3RvcmFnZS5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVySW1hZ2UoaW1hZ2UsIGluZGV4KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBwcml2YXRlIHNhdmVJbWFnZShlbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoOiBudW1iZXIgPSB0aGlzLmltYWdlU3RvcmFnZS5wdXNoKGVsZW1lbnQpXG4gICAgICAgIGNvbnN0IGluZGV4OiBudW1iZXIgPSBsZW5ndGggLSAxO1xuXG4gICAgICAgIHRoaXMucmVuZGVySW1hZ2UoZWxlbWVudCwgaW5kZXgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVuZGVySW1hZ2UoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBjdXJyZW50SW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSB0aGlzLmxvYWRJbWFnZShpbWFnZSwgaW5kZXgpO1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LnByZXBlbmQoY3VycmVudEltYWdlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRJbWFnZShpbWFnZVNyYzogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHRlbXBsYXRlOiBIVE1MVGVtcGxhdGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtbmV3LWltYWdlLXRlbXBsYXRlXScpIGFzIEhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQ6IGFueSA9IHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSAoY29udGVudCBhcyBIVE1MSW1hZ2VFbGVtZW50KS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXctaW1hZ2UtdGVtcGxhdGUtZWxlbWVudF0nKTtcbiAgICAgICAgZWxlbWVudD8uc2V0QXR0cmlidXRlKCdzcmMnLCBpbWFnZVNyYyk7XG4gICAgICAgIGVsZW1lbnQ/LnNldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcsIGluZGV4KTtcbiAgICAgICAgZWxlbWVudD8ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLW5ldy1pbWFnZS10ZW1wbGF0ZS1lbGVtZW50Jyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmdhbGxlcnlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleDogc3RyaW5nIHwgdW5kZWZpbmVkID0gaW1hZ2UuZGF0YXNldC5pbmRleDtcblxuICAgICAgICAgICAgaWYoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNvdXJjZTogc3RyaW5nID0gdGhpcy5pbWFnZVN0b3JhZ2VbTnVtYmVyKGluZGV4KV1cbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsU2NyZWVuSW1hZ2U6IEhUTUxFbGVtZW50ID0gdGhpcy5mdWxsU2NyZWVuLmNyZWF0ZUltYWdlKHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuLnRvZ2dsZUltYWdlKGZ1bGxTY3JlZW5JbWFnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSByZWFkb25seSBlbDogYW55LFxuICAgICAgICBwcml2YXRlIGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uLFxuICAgICkge1xuXG4gICAgICAgIHRoaXMubGlzdGVuRXZlbnRzKHRoaXMuY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0SW1hZ2VVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEltYWdlVXJsKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNhbGxiYWNrOiBDYWxsYWJsZUZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGZpbGU6IEZpbGUgPSAoZWxlbWVudC5maWxlcyBhcyBGaWxlTGlzdClbMF07XG4gICAgICAgIGNvbnN0IGFjY2VwdGVkSW1hZ2VUeXBlczogc3RyaW5nW10gPSBbJ2ltYWdlL2dpZicsICdpbWFnZS9qcGVnJywgJ2ltYWdlL3BuZyddO1xuXG4gICAgICAgIGlmKGZpbGUgJiYgYWNjZXB0ZWRJbWFnZVR5cGVzLmluY2x1ZGVzKGZpbGVbJ3R5cGUnXSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybDogc3RyaW5nID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICAgICAgICBjYWxsYmFjayh1cmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBHYWxsZXJ5IH0gZnJvbSAnLi9nYWxsZXJ5JztcbmltcG9ydCB7IFVwbG9hZGVyIH0gZnJvbSAnLi91cGxvYWRlcic7XG5pbXBvcnQgeyBGdWxsU2NyZWVuIH0gZnJvbSAnLi9mdWxsc2NyZWVuJztcblxubmV3IEdhbGxlcnkoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtZ2FsbGVyeV0nKSBhcyBIVE1MRWxlbWVudCxcbiAgICBGdWxsU2NyZWVuLFxuICAgIFVwbG9hZGVyXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9