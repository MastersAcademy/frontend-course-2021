/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Class/Base64.ts":
/*!*****************************!*\
  !*** ./src/Class/Base64.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Base64\": () => (/* binding */ Base64)\n/* harmony export */ });\nvar Base64 = /** @class */ (function () {\n    function Base64() {\n    }\n    Base64.prototype.getBase64 = function (image) {\n        return new Promise(function (resolve) {\n            var reader = new FileReader();\n            reader.readAsDataURL(image);\n            reader.onloadend = function () {\n                resolve(reader.result.toString());\n            };\n        });\n    };\n    return Base64;\n}());\n\n\n\n//# sourceURL=webpack://7-oop/./src/Class/Base64.ts?");

/***/ }),

/***/ "./src/Class/Hidden.ts":
/*!*****************************!*\
  !*** ./src/Class/Hidden.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Hidden\": () => (/* binding */ Hidden)\n/* harmony export */ });\nvar Hidden = /** @class */ (function () {\n    function Hidden() {\n    }\n    Hidden.prototype.hidden = function (dataEl, dataClass) {\n        dataEl.classList.remove(\"\".concat(dataClass));\n    };\n    Hidden.prototype.visible = function (dataEl, dataClass) {\n        dataEl.classList.add(\"\".concat(dataClass));\n    };\n    return Hidden;\n}());\n\n\n\n//# sourceURL=webpack://7-oop/./src/Class/Hidden.ts?");

/***/ }),

/***/ "./src/script.ts":
/*!***********************!*\
  !*** ./src/script.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Class_Hidden__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Class/Hidden */ \"./src/Class/Hidden.ts\");\n/* harmony import */ var _Class_Base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Class/Base64 */ \"./src/Class/Base64.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar ImageLibrary = /** @class */ (function () {\n    function ImageLibrary(imageEl, templateEl, modalRindow, hidden) {\n        this.imageEl = imageEl;\n        this.templateEl = templateEl;\n        this.modalRindow = modalRindow;\n        this.hidden = hidden;\n        this.listenerLoadFile();\n    }\n    ImageLibrary.prototype.listenerLoadFile = function () {\n        var _this = this;\n        this.imageEl.addEventListener('change', function (e) {\n            var element = e.target;\n            _this.getBase64(element.files[0]);\n        });\n    };\n    ImageLibrary.prototype.getBase64 = function (image) {\n        return __awaiter(this, void 0, void 0, function () {\n            var templateImageEl, imageDateEl, getFileBase64;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        templateImageEl = this.templateEl.content.cloneNode(true);\n                        imageDateEl = templateImageEl.querySelector('[data-photo]');\n                        this.hidden.visible(document.querySelector('[data-loader]'), 'display__flex');\n                        setTimeout(function () { return _this.hidden.hidden(document.querySelector('[data-loader]'), 'display__flex'); }, 2000);\n                        return [4 /*yield*/, base64.getBase64(image)];\n                    case 1:\n                        getFileBase64 = _a.sent();\n                        imageDateEl.setAttribute('src', getFileBase64.toString());\n                        this.listenerClickImage(templateImageEl.querySelector('[data-button]'), getFileBase64.toString());\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ImageLibrary.prototype.listenerClickImage = function (imageDateEl, render) {\n        var _this = this;\n        imageDateEl.addEventListener('click', function () {\n            _this.modalRindow.classList.add('display__flex');\n            _this.hidden.visible(document.querySelector('[data-loader]'), 'display__flex');\n            setTimeout(function () { return _this.hidden.hidden(document.querySelector('[data-loader]'), 'display__flex'); }, 2000);\n            _this.hidden.visible(_this.modalRindow.querySelector('[data-modal-container]'), 'display__flex');\n            _this.hidden.visible(_this.modalRindow.querySelector('[data-cancel-button]'), 'display__flex');\n            _this.modalRindow.querySelector('[data-modal-image]').setAttribute('src', render);\n            _this.listenerClickCancelImage();\n        });\n        this.imageEl.querySelector('[data-image-collection]').after(imageDateEl);\n    };\n    ImageLibrary.prototype.listenerClickCancelImage = function () {\n        var _this = this;\n        this.modalRindow.querySelector('[data-cancel-button]').addEventListener('click', function () {\n            _this.modalRindow.classList.remove('display__flex');\n            _this.hidden.hidden(_this.modalRindow.querySelector('[data-modal-container]'), 'display__flex');\n            _this.hidden.hidden(_this.modalRindow.querySelector('[data-cancel-button]'), 'display__flex');\n        });\n    };\n    return ImageLibrary;\n}());\nvar base64 = new _Class_Base64__WEBPACK_IMPORTED_MODULE_1__.Base64();\nnew ImageLibrary(document.querySelector('[data-main]'), document.querySelector('[data-image-template]'), document.querySelector('[data-modal]'), new _Class_Hidden__WEBPACK_IMPORTED_MODULE_0__.Hidden());\n\n\n//# sourceURL=webpack://7-oop/./src/script.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.ts");
/******/ 	
/******/ })()
;