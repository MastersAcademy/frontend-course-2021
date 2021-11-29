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

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.css?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./style.css\");\n\nvar loaderEl = document.querySelector('[data-game-loader]');\nvar accountCurrentEl = document.querySelector('[data-account-current]');\nvar circleEl = document.querySelector('[data-game-circle]');\nvar accountPlusNumberEl = document.querySelector('[data-account-plus-number]');\nvar keyEl = document.querySelector('[data-game-key]');\nvar accountMinusNumber = document.querySelector('[data-account-minus-number]');\nvar gamePopup = document.querySelector('[data-game-popup]');\nvar points = 100;\nvar layer = 150;\ndocument.addEventListener('keyup', function (event) {\n    var keyUp = event.key.toUpperCase();\n    setKey(keyUp);\n});\naccountCurrentEl.innerText = String(points);\naccountPlusNumberEl.innerText = '';\naccountMinusNumber.innerText = '';\nvar randomLetters = setInterval(function () {\n    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];\n    loaderEl.classList.add('game-loader');\n    keyEl.innerText = letters[Math.floor(Math.random() * letters.length)];\n}, 2000);\nvar setKey = function (key) {\n    if (keyEl.innerText == key) {\n        var quantityNumber = randomNumber(5, 10);\n        accountMinusNumber.innerText = '';\n        layer += 5;\n        points += quantityNumber;\n        circleEl.style.width = layer + 'px';\n        circleEl.style.height = layer + 'px';\n        accountPlusNumberEl.innerText = \"+\".concat(quantityNumber);\n        accountCurrentEl.innerText = String(points);\n        stopGame();\n    }\n    else if (keyEl.innerText !== key) {\n        var quantityNumber = randomNumber(20, 25);\n        accountPlusNumberEl.innerText = '';\n        layer -= 10;\n        points -= quantityNumber;\n        circleEl.style.width = layer + 'px';\n        circleEl.style.height = layer + 'px';\n        accountCurrentEl.innerText = String(points);\n        accountMinusNumber.innerText = \"-\".concat(quantityNumber);\n        stopGame();\n    }\n};\nfunction stopGame() {\n    if (points >= 200) {\n        elementsStopGame();\n        gamePopup.innerText = 'YOU WIN!!!';\n    }\n    else if (points <= 0) {\n        elementsStopGame();\n        gamePopup.innerText = 'GAME OVER';\n    }\n}\nfunction randomNumber(min, max) {\n    return Math.floor(min + Math.random() * (max + 1 - min));\n}\nfunction elementsStopGame() {\n    clearInterval(randomLetters);\n    loaderEl.classList.remove('game-loader');\n    circleEl.classList.add('game-circle--end');\n    accountPlusNumberEl.innerText = '';\n    accountMinusNumber.innerText = '';\n    keyEl.innerText = '';\n}\n\n\n//# sourceURL=webpack:///./index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;