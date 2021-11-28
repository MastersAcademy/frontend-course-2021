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

eval("var ALPHABET = \"abcdefghijklmnopqrstuvwxyz\";\nvar BIGBALL = 50;\nvar decrement_not_press_key_points = function (min, max) {\n    if (min === void 0) { min = 20; }\n    if (max === void 0) { max = 25; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar decrement_points = function (min, max) {\n    if (min === void 0) { min = 20; }\n    if (max === void 0) { max = 25; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar increment_points = function (min, max) {\n    if (min === void 0) { min = 5; }\n    if (max === void 0) { max = 10; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar speedTimeGame = 2000;\nvar points = 100;\nvar letterForCheck = '';\nvar keystrokeLock = true;\nvar interval;\nvar latterValueEl = document.querySelector('[data-box-letter]');\nvar ballEl = document.querySelector('[data-ball]');\nvar textInfoEl = document.querySelector('[data-info]');\nvar ballBoxEl = document.querySelector('[data-box-from-letter]');\nvar buttonNewGameEl = document.querySelector('[data-button-new-game]');\nvar buttonStopGameEl = document.querySelector('[data-button-stop-game]');\nvar maingameEl = document.querySelector('[data-main]');\nvar newLetter = function (str) {\n    var randomLetter = (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();\n    return randomLetter;\n};\nvar resetCssBackground = function () {\n    maingameEl.classList.remove('background-AAA');\n    maingameEl.classList.remove('background-F5ADAD');\n    maingameEl.classList.remove('background-F8F4C2');\n    maingameEl.classList.remove('background-F8F4C2');\n};\nvar ballSizeUpdate = function (point) {\n    ballEl.style.width = \"\".concat(point + BIGBALL, \"px\");\n    ballEl.style.height = \"\".concat(point + BIGBALL, \"px\");\n};\nvar decrementNotPressKeyPoints = function () {\n    var decrement = decrement_not_press_key_points();\n    points -= decrement;\n    latterValueEl.textContent = \"-\".concat(decrement);\n    ballSizeUpdate(points);\n};\nvar winGame = function () {\n    keystrokeLock = true;\n    resetCssBackground();\n    maingameEl.classList.add('background-B6F3B6');\n    textInfoEl.textContent = 'You win Game!';\n    clearInterval(interval);\n};\nvar lostGame = function () {\n    keystrokeLock = true;\n    resetCssBackground();\n    maingameEl.classList.add('background-F5ADAD');\n    textInfoEl.textContent = 'You lost Game!';\n    clearInterval(interval);\n};\nvar start = function () {\n    textInfoEl.textContent = \"\".concat(points, \" points\");\n    letterForCheck = newLetter(ALPHABET);\n    latterValueEl.textContent = letterForCheck;\n    interval = setInterval(function () {\n        ballBoxEl.classList.add('background-AAA');\n        letterForCheck = newLetter(ALPHABET);\n        latterValueEl.textContent = letterForCheck;\n        if (!keystrokeLock && points > 0 && points < 200)\n            decrementNotPressKeyPoints();\n        else if (points > 0 && points < 200) {\n            keystrokeLock = false;\n        }\n        textInfoEl.textContent = \"\".concat(points, \" points\");\n        setTimeout(function () {\n            latterValueEl.textContent = letterForCheck;\n        }, 200);\n        if (points >= 200)\n            winGame();\n        else if (points <= 0)\n            lostGame();\n    }, speedTimeGame);\n};\nvar correctKeyPressed = function () {\n    var increment = increment_points();\n    latterValueEl.textContent = \"+\".concat(increment);\n    points += increment;\n    textInfoEl.textContent = \"\".concat(points, \" points\");\n    ballBoxEl.classList.remove('background-box-8F0F0F');\n    ballBoxEl.classList.add('background-box-07AC15');\n    keystrokeLock = true;\n};\nvar errorKeyPressed = function () {\n    var decrement = decrement_points();\n    latterValueEl.textContent = \"-\".concat(decrement);\n    points -= decrement;\n    textInfoEl.textContent = \"\".concat(points, \" points\");\n    ballBoxEl.classList.remove('background-box-07AC15');\n    ballBoxEl.classList.add('background-box-8F0F0F');\n    keystrokeLock = true;\n};\ndocument.addEventListener('keyup', function (letter) {\n    if (letter.key.toLocaleUpperCase() == letterForCheck && !keystrokeLock && points)\n        correctKeyPressed();\n    else if (!keystrokeLock && points)\n        errorKeyPressed();\n    ballSizeUpdate(points);\n});\nbuttonNewGameEl.addEventListener('click', function () {\n    keystrokeLock = false;\n    clearInterval(interval);\n    points = 100;\n    resetCssBackground();\n    maingameEl.classList.add('background-F8F4C2');\n    start();\n});\nbuttonStopGameEl.addEventListener('click', function () {\n    clearInterval(interval);\n    textInfoEl.textContent = 'You lost Game!';\n    keystrokeLock = true;\n    resetCssBackground();\n    maingameEl.classList.add('background-F5ADAD');\n});\n\n\n//# sourceURL=webpack://6-typescript/./src/script.ts?");

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