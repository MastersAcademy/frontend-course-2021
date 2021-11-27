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

eval("var ALPHABET = \"abcdefghijklmnopqrstuvwxyz\";\nvar INCREMENT_NOT_PRESS_KEY_POINTS = function (min, max) {\n    if (min === void 0) { min = 20; }\n    if (max === void 0) { max = 25; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar INCREMENT_POINTS = function (min, max) {\n    if (min === void 0) { min = 20; }\n    if (max === void 0) { max = 25; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar DECREMENT_POINTS = function (min, max) {\n    if (min === void 0) { min = 5; }\n    if (max === void 0) { max = 10; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar speedTimeGame = 2000;\nvar POINTS = 100;\nvar letterForCheck = '';\nvar triger = false;\nvar interval;\n;\nvar BIGBALL = 50;\nvar latterValueEl = document.querySelector('[data-box-letter]');\nvar ballEl = document.querySelector('[data-ball]');\nvar textInfoEl = document.querySelector('[data-info]');\nvar ballBoxEl = document.querySelector('[data-box-from-letter]');\nvar buttonNewGameEl = document.querySelector('[data-button-new-game]');\nvar buttonStopGameEl = document.querySelector('[data-button-stop-game]');\nvar maingameEl = document.querySelector('[data-main]');\nvar newLetter = function (str) {\n    var randomLetter = (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();\n    return randomLetter;\n};\nvar start = function () {\n    textInfoEl.textContent = \"\".concat(POINTS, \" points\");\n    letterForCheck = newLetter(ALPHABET);\n    latterValueEl.textContent = letterForCheck;\n    interval = setInterval(function () {\n        ballBoxEl.style.background = '#AAA';\n        letterForCheck = newLetter(ALPHABET);\n        latterValueEl.textContent = letterForCheck;\n        if (triger && POINTS > 0 && POINTS < 200) {\n            var increment = INCREMENT_NOT_PRESS_KEY_POINTS();\n            POINTS -= increment;\n            latterValueEl.textContent = \"-\".concat(increment);\n            ballEl.style.width = \"\".concat(POINTS + BIGBALL, \"px\");\n            ballEl.style.height = \"\".concat(POINTS + BIGBALL, \"px\");\n        }\n        else if (POINTS > 0 && POINTS < 200) {\n            triger = true;\n        }\n        textInfoEl.textContent = \"\".concat(POINTS, \" points\");\n        setTimeout(function () {\n            latterValueEl.textContent = letterForCheck;\n        }, 200);\n        if (POINTS >= 200) {\n            triger = false;\n            maingameEl.style.background = '#b6f3b6';\n            textInfoEl.textContent = 'You win Game!';\n            clearInterval(interval);\n        }\n        else if (POINTS <= 0) {\n            triger = false;\n            maingameEl.style.background = '#f5adad';\n            textInfoEl.textContent = 'You lost Game!';\n            clearInterval(interval);\n        }\n    }, speedTimeGame);\n};\ndocument.addEventListener('keyup', function (letter) {\n    if (letter.key.toLocaleUpperCase() == letterForCheck && triger && POINTS) {\n        var decrement = DECREMENT_POINTS();\n        latterValueEl.textContent = \"+\".concat(decrement);\n        POINTS += decrement;\n        textInfoEl.textContent = \"\".concat(POINTS, \" points\");\n        ballBoxEl.style.background = '#07ac15';\n        triger = false;\n    }\n    else if (triger && POINTS) {\n        var increment = INCREMENT_POINTS();\n        latterValueEl.textContent = \"-\".concat(increment);\n        POINTS -= increment;\n        textInfoEl.textContent = \"\".concat(POINTS, \" points\");\n        ballBoxEl.style.background = '#8f0f0f';\n        triger = false;\n    }\n    ballEl.style.width = \"\".concat(POINTS + BIGBALL, \"px\");\n    ballEl.style.height = \"\".concat(POINTS + BIGBALL, \"px\");\n});\nbuttonNewGameEl.addEventListener('click', function () {\n    triger = true;\n    clearInterval(interval);\n    POINTS = 100;\n    maingameEl.style.background = '#F8F4C2';\n    start();\n});\nbuttonStopGameEl.addEventListener('click', function () {\n    clearInterval(interval);\n    textInfoEl.textContent = 'You lost Game!';\n    triger = false;\n    maingameEl.style.background = '#f5adad';\n});\n\n\n//# sourceURL=webpack://6-typescript/./src/script.ts?");

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