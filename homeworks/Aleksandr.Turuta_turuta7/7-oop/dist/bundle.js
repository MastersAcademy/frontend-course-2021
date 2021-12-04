/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ (() => {

eval("var LoaderImage = /** @class */ (function () {\n    function LoaderImage(loaderEl) {\n        this.loaderEl = loaderEl;\n    }\n    LoaderImage.prototype.hidden = function () {\n        this.loaderEl.classList.remove('display__flex');\n    };\n    LoaderImage.prototype.visible = function () {\n        var _this = this;\n        this.loaderEl.classList.add('display__flex');\n        setTimeout(function () {\n            _this.hidden();\n        }, 1000);\n    };\n    return LoaderImage;\n}());\nvar ImageLibrary = /** @class */ (function () {\n    function ImageLibrary(el, tm, mRindow) {\n        this.el = el;\n        this.tm = tm;\n        this.mRindow = mRindow;\n        this.imageEl = el;\n        this.templateEl = tm;\n        this.modalRindow = mRindow;\n        this.listenerLoadFile();\n    }\n    ImageLibrary.prototype.listenerLoadFile = function () {\n        var _this = this;\n        this.imageEl.addEventListener('change', function (e) {\n            var element = e.target;\n            _this.getBase64(element.files[0]);\n        });\n    };\n    ImageLibrary.prototype.getBase64 = function (image) {\n        var _this = this;\n        var templateImageEl = this.tm.content.cloneNode(true);\n        var reader = new FileReader();\n        reader.readAsDataURL(image);\n        new LoaderImage(document.querySelector('[data-loader]')).visible();\n        reader.onloadend = function () {\n            var imageDateEl = templateImageEl.querySelector('[data-photo]');\n            imageDateEl.setAttribute('src', reader.result.toString());\n            _this.listenerClickImage(imageDateEl, reader.result.toString());\n        };\n    };\n    ImageLibrary.prototype.listenerClickImage = function (imageDateEl, render) {\n        var _this = this;\n        imageDateEl.addEventListener('click', function () {\n            _this.modalRindow.classList.add('display__block');\n            _this.modalRindow.querySelector('[data-modal-image]').setAttribute('src', render);\n            _this.listenerClickCancelImage();\n        });\n        this.imageEl.querySelector('[data-image-collection]').append(imageDateEl);\n    };\n    ;\n    ImageLibrary.prototype.listenerClickCancelImage = function () {\n        var _this = this;\n        this.modalRindow.querySelector('[data-cancel]').addEventListener('click', function () {\n            _this.modalRindow.classList.remove('display__block');\n        });\n    };\n    return ImageLibrary;\n}());\nnew ImageLibrary(document.querySelector('[data-main]'), document.querySelector('[data-image-template]'), document.querySelector('[data-modal]'));\n\n\n//# sourceURL=webpack://7-oop/./src/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.ts"]();
/******/ 	
/******/ })()
;