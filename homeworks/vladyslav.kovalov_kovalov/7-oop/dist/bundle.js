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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTSxVQUFVO0lBQ25CLFlBQ1ksaUJBQXFDLEVBQ3JDLHNCQUEwQyxFQUMxQyxzQkFBMEM7UUFGMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtRQUNyQywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQW9CO1FBQzFDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBb0I7UUFHbEQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXhCLENBQUM7SUFDTyxZQUFZOztRQUNoQixVQUFJLENBQUMsaUJBQWlCLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsRUFBRTs7WUFDdEQsTUFBTSxLQUFLLEdBQWlCLEtBQUssQ0FBQyxNQUFzQixDQUFDO1lBQ3pELE1BQU0sSUFBSSxHQUFpQixLQUFLLENBQUMsT0FBTyxDQUFDO1lBRXpDLElBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZCLFVBQUksQ0FBQyxpQkFBaUIsMENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuRDtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBSSxDQUFDLHNCQUFzQiwwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFOztZQUN4RCxVQUFJLENBQUMsaUJBQWlCLDBDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQWM7O1FBQ3hCLFVBQUksQ0FBQyxzQkFBc0IsMENBQUUsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxVQUFJLENBQUMsaUJBQWlCLDBDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUMzQk0sTUFBTSxPQUFPO0lBR2hCLFlBQ1ksT0FBaUIsRUFDakIsY0FBa0MsRUFDbEMsVUFBdUIsRUFDdkIsUUFBbUI7UUFIbkIsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBb0I7UUFDbEMsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQUN2QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRzNCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBQ08sSUFBSTtRQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQWEsRUFBRSxLQUFhLEVBQVEsRUFBRTtZQUMvRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUM7SUFDTixDQUFDO0lBRU8sTUFBTSxDQUFDLEtBQWEsRUFBRSxLQUFhOztRQUN2QyxNQUFNLFFBQVEsR0FBcUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0QsVUFBSSxDQUFDLGNBQWMsMENBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTyxNQUFNLENBQUMsTUFBYyxFQUFFLEtBQWE7UUFDeEMsTUFBTSxLQUFLLEdBQXFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQztRQUNuQixLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTSxJQUFJLENBQUMsS0FBYTtRQUNyQixNQUFNLE1BQU0sR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxNQUFNLEtBQUssR0FBVyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxZQUFZOztRQUNoQixVQUFJLENBQUMsY0FBYywwQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbkQsTUFBTSxLQUFLLEdBQWlCLEtBQUssQ0FBQyxNQUFzQixDQUFDO1lBQ3pELE1BQU0sRUFBQyxLQUFLLEVBQUMsR0FBaUIsS0FBSyxDQUFDLE9BQU8sQ0FBQztZQUU1QyxJQUFHLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ3BCLE1BQU0sTUFBTSxHQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7QUN2RE0sTUFBTSxPQUFPO0lBR2hCO1FBRk8sV0FBTSxHQUFhLEVBQUUsQ0FBQztRQUd6QixJQUFJLENBQUMsTUFBTSxHQUFHO1lBQ1YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7U0FDbEIsQ0FBQztJQUNOLENBQUM7SUFFTSxJQUFJLENBQUMsS0FBYTtRQUNyQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDaEJNLE1BQU0sUUFBUTtJQUNqQixZQUNZLFlBQWdDLEVBQ2hDLHNCQUEwQztRQUQxQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUFvQjtJQUVuRCxDQUFDO0lBRUcsWUFBWSxDQUFDLFFBQTBCOztRQUMxQyxVQUFJLENBQUMsWUFBWSwwQ0FBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbEQsTUFBTSxPQUFPLEdBQXNCLEtBQUssQ0FBQyxNQUEyQixDQUFDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLE1BQU0sQ0FBQyxPQUF5QixFQUFFLFFBQTBCOztRQUNoRSxNQUFNLElBQUksR0FBVSxPQUFPLENBQUMsS0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLGtCQUFrQixHQUFhLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU5RSxJQUFHLElBQUksSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUU7WUFDbEQsVUFBSSxDQUFDLHNCQUFzQiwwQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXhELE1BQU0sT0FBTyxHQUFXLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFOztnQkFDM0MsTUFBTSxHQUFHLEdBQVcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JELFVBQUksQ0FBQyxzQkFBc0IsMENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDckQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7Q0FDSjs7Ozs7OztVQy9CRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ007QUFDSjtBQUNHO0FBRXpDLE1BQU0sY0FBYyxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFjLGdCQUFnQixDQUFDLENBQUM7QUFDakcsTUFBTSxpQkFBaUIsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBYyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3hHLE1BQU0sc0JBQXNCLEdBQXVCLFFBQVEsQ0FBQyxhQUFhLENBQWMsMEJBQTBCLENBQUMsQ0FBQztBQUNuSCxNQUFNLGVBQWUsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBYywwQkFBMEIsQ0FBQyxDQUFDO0FBQzVHLE1BQU0sWUFBWSxHQUF1QixRQUFRLENBQUMsYUFBYSxDQUFjLDZCQUE2QixDQUFDLENBQUM7QUFDNUcsTUFBTSxzQkFBc0IsR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBYyxtQ0FBbUMsQ0FBQyxDQUFDO0FBRTVILElBQUksNkNBQU8sQ0FDUCxJQUFJLGtEQUFPLEVBQUUsRUFDYixjQUFjLEVBRWQsSUFBSSxtREFBVSxDQUNWLGlCQUFpQixFQUNqQixzQkFBc0IsRUFDdEIsZUFBZSxDQUNsQixFQUVELElBQUksK0NBQVEsQ0FDUixZQUFZLEVBQ1osc0JBQXNCLENBQ3pCLENBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9GdWxsU2NyZWVuLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9HYWxsZXJ5LnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9JbWFnZVN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vNi10eXBlc2NyaXB0Ly4vc3JjL1VwbG9hZGVyLnRzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly82LXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLzYtdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLzYtdHlwZXNjcmlwdC8uL3NyYy9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUZ1bGxTY3JlZW4gfSBmcm9tICcuL0Z1bGxTY3JlZW4udHlwZXMnO1xuXG5leHBvcnQgY2xhc3MgRnVsbFNjcmVlbiBpbXBsZW1lbnRzIElGdWxsU2NyZWVuIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuRWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICAgICAgcHJpdmF0ZSBmdWxsU2NyZWVuSW1hZ2VFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGxcblxuICAgICkge1xuICAgICAgICB0aGlzLmxpc3RlbkV2ZW50cygpO1xuXG4gICAgfVxuICAgIHByaXZhdGUgbGlzdGVuRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5FbGVtZW50Py5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlOiBIVE1MRWxlbWVudCA9IChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xuICAgICAgICAgICAgY29uc3QgZGF0YTogRE9NU3RyaW5nTWFwID0gaW1hZ2UuZGF0YXNldDtcblxuICAgICAgICAgICAgaWYoZGF0YS5mdWxsU2NyZWVuID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5mdWxsU2NyZWVuRWxlbWVudD8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGUoc291cmNlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mdWxsU2NyZWVuSW1hZ2VFbGVtZW50Py5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNvdXJjZSk7XG4gICAgICAgIHRoaXMuZnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElTdG9yYWdlIH0gZnJvbSAnLi9JbWFnZVN0b3JhZ2UudHlwZXMnO1xuaW1wb3J0IHsgSUZ1bGxTY3JlZW4gfSBmcm9tICcuL0Z1bGxTY3JlZW4udHlwZXMnO1xuaW1wb3J0IHsgSVVwbG9hZGVyIH0gZnJvbSAnLi9VcGxvYWRlci50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBHYWxsZXJ5IHtcbiAgICBwdWJsaWMgb25JbWFnZUxvYWRlZDogQ2FsbGFibGVGdW5jdGlvbjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHN0b3JhZ2U6IElTdG9yYWdlLFxuICAgICAgICBwcml2YXRlIGdhbGxlcnlFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwsXG4gICAgICAgIHByaXZhdGUgZnVsbFNjcmVlbjogSUZ1bGxTY3JlZW4sXG4gICAgICAgIHByaXZhdGUgVXBsb2FkZXI6IElVcGxvYWRlcixcblxuICAgICkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5FdmVudHMoKTtcbiAgICAgICAgdGhpcy5vbkltYWdlTG9hZGVkID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuVXBsb2FkZXIubGlzdGVuRXZlbnRzKHRoaXMub25JbWFnZUxvYWRlZCk7XG5cbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnN0b3JhZ2UuaW1hZ2VzLmZvckVhY2goKGltYWdlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKGltYWdlLCBpbmRleCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZW5kZXIoaW1hZ2U6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBjb25zdCBuZXdJbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IHRoaXMuY3JlYXRlKGltYWdlLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQ/LnByZXBlbmQobmV3SW1hZ2UpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlKHNvdXJjZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogSFRNTEltYWdlRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ3Bob3RvLWdyaWRfX2l0ZW0nKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gc291cmNlO1xuICAgICAgICBpbWFnZS5kYXRhc2V0LmdhbGxlcnlJdGVtID0gJyc7XG4gICAgICAgIGltYWdlLmRhdGFzZXQuaW5kZXggPSBTdHJpbmcoaW5kZXgpO1xuICAgICAgICByZXR1cm4gaW1hZ2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNhdmUoaW1hZ2U6IHN0cmluZykge1xuICAgICAgICBjb25zdCBsZW5ndGg6IG51bWJlciA9IHRoaXMuc3RvcmFnZS5zYXZlKGltYWdlKTtcbiAgICAgICAgY29uc3QgaW5kZXg6IG51bWJlciA9IGxlbmd0aCAtIDE7XG4gICAgICAgIHRoaXMucmVuZGVyKGltYWdlLCBpbmRleCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsaXN0ZW5FdmVudHMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZ2FsbGVyeUVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2U6IEhUTUxFbGVtZW50ID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICBjb25zdCB7aW5kZXh9OiBET01TdHJpbmdNYXAgPSBpbWFnZS5kYXRhc2V0O1xuXG4gICAgICAgICAgICBpZihpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc291cmNlOiBzdHJpbmcgPSB0aGlzLnN0b3JhZ2UuaW1hZ2VzW051bWJlcihpbmRleCldO1xuICAgICAgICAgICAgICAgIHRoaXMuZnVsbFNjcmVlbi50b2dnbGUoc291cmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSVN0b3JhZ2UgfSBmcm9tICcuL0ltYWdlU3RvcmFnZS50eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBTdG9yYWdlIGltcGxlbWVudHMgSVN0b3JhZ2Uge1xuICAgIHB1YmxpYyBpbWFnZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbWFnZXMgPSBbXG4gICAgICAgICAgICAnaW1nL2ltZy0wLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0xLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0yLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy0zLmpwZycsXG4gICAgICAgICAgICAnaW1nL2ltZy00LmpwZydcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2F2ZShpbWFnZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1hZ2VzLnB1c2goaW1hZ2UpO1xuICAgIH1cbn1cblxuXG4iLCJpbXBvcnQgeyBJVXBsb2FkZXIgfSBmcm9tICcuL1VwbG9hZGVyLnR5cGVzJ1xuXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIgaW1wbGVtZW50cyBJVXBsb2FkZXIge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGlucHV0RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgICAgICBwcml2YXRlIGlucHV0RnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCxcblxuICAgICkge31cblxuICAgIHB1YmxpYyBsaXN0ZW5FdmVudHMoY2FsbGJhY2s6IENhbGxhYmxlRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnQ/LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5nZXRVcmwoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFVybChlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50LCBjYWxsYmFjazogQ2FsbGFibGVGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjb25zdCBmaWxlOiBGaWxlID0gKGVsZW1lbnQuZmlsZXMgYXMgRmlsZUxpc3QpWzBdO1xuICAgICAgICBjb25zdCBhY2NlcHRlZEltYWdlVHlwZXM6IHN0cmluZ1tdID0gWydpbWFnZS9naWYnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9wbmcnXTtcblxuICAgICAgICBpZihmaWxlICYmIGFjY2VwdGVkSW1hZ2VUeXBlcy5pbmNsdWRlcyhmaWxlWyd0eXBlJ10pKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0OiBudW1iZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0RnVsbFNjcmVlbkVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVybCk7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdhbGxlcnkgfSBmcm9tICcuL0dhbGxlcnknO1xuaW1wb3J0IHsgRnVsbFNjcmVlbiB9IGZyb20gJy4vRnVsbFNjcmVlbic7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vVXBsb2FkZXInO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJy4vSW1hZ2VTdG9yYWdlJztcblxuY29uc3QgZ2FsbGVyeUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1nYWxsZXJ5XScpO1xuY29uc3QgZnVsbFNjcmVlbkVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbl0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KCdbZGF0YS1mdWxsLXNjcmVlbi1jbG9zZV0nKTtcbmNvbnN0IGZ1bGxTY3JlZW5JbWFnZTogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oJ1tkYXRhLWZ1bGwtc2NyZWVuLWltYWdlXScpO1xuY29uc3QgaW5wdXRFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtaW1hZ2UtdXBsb2FkZXItaW5wdXRdJyk7XG5jb25zdCBpbnB1dEZ1bGxTY3JlZW5FbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignW2RhdGEtaW1hZ2UtdXBsb2FkZXItZnVsbC1zY3JlZW5dJyk7XG5cbm5ldyBHYWxsZXJ5KFxuICAgIG5ldyBTdG9yYWdlKCksXG4gICAgZ2FsbGVyeUVsZW1lbnQsXG5cbiAgICBuZXcgRnVsbFNjcmVlbihcbiAgICAgICAgZnVsbFNjcmVlbkVsZW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW5DbG9zZUVsZW1lbnQsXG4gICAgICAgIGZ1bGxTY3JlZW5JbWFnZVxuICAgICksXG5cbiAgICBuZXcgVXBsb2FkZXIoXG4gICAgICAgIGlucHV0RWxlbWVudCxcbiAgICAgICAgaW5wdXRGdWxsU2NyZWVuRWxlbWVudCxcbiAgICApXG4pO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9