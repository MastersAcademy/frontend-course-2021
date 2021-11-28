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

eval("var ALPHABET = \"abcdefghijklmnopqrstuvwxyz\";\nvar BIGBALLSIZE = 50;\nvar ramdomPoint = function (min, max) {\n    if (min === void 0) { min = 1; }\n    if (max === void 0) { max = 2; }\n    return Math.round(Math.random() * (max - min) + min);\n};\nvar speedTimeGame = 2000;\nvar points = 100;\nvar letterForCheck = '';\nvar keystrokeLock = true;\nvar interval;\nvar latterValueEl = document.querySelector('[data-box-letter]');\nvar ballEl = document.querySelector('[data-ball]');\nvar textInfoEl = document.querySelector('[data-info]');\nvar ballBoxEl = document.querySelector('[data-box-from-letter]');\nvar buttonNewGameEl = document.querySelector('[data-button-new-game]');\nvar buttonStopGameEl = document.querySelector('[data-button-stop-game]');\nvar maingameEl = document.querySelector('[data-main]');\nvar newLetter = function (str) {\n    return (str[Math.floor(Math.random() * str.length)]).toLocaleUpperCase();\n};\nvar resetCssBackground = function () {\n    maingameEl.classList.remove('background__box-letter');\n    maingameEl.classList.remove('background__lost-menu');\n    maingameEl.classList.remove('background__start-menu');\n    maingameEl.classList.remove('background__win-menu');\n};\nvar ballSizeUpdate = function (point) {\n    ballEl.style.width = \"\".concat(point + BIGBALLSIZE, \"px\");\n    ballEl.style.height = \"\".concat(point + BIGBALLSIZE, \"px\");\n};\nvar decrementNotPressKeyPoints = function () {\n    var decrement = ramdomPoint(10, 15);\n    points -= decrement;\n    latterValueEl.textContent = \"-\".concat(decrement);\n    ballSizeUpdate(points);\n};\nvar endGameStatus = function (textStatus, classBackground) {\n    keystrokeLock = true;\n    resetCssBackground();\n    maingameEl.classList.add(classBackground);\n    textInfoEl.textContent = textStatus;\n    clearInterval(interval);\n};\nvar start = function () {\n    textInfoEl.textContent = \"\".concat(points, \" points\");\n    letterForCheck = newLetter(ALPHABET);\n    latterValueEl.textContent = letterForCheck;\n    ballBoxEl.classList.add('background__box-letter');\n    interval = setInterval(function () {\n        letterForCheck = newLetter(ALPHABET);\n        latterValueEl.textContent = letterForCheck;\n        if (!keystrokeLock && points > 0 && points < 200)\n            decrementNotPressKeyPoints();\n        else if (points > 0 && points < 200) {\n            keystrokeLock = false;\n        }\n        textInfoEl.textContent = \"\".concat(points, \" points\");\n        setTimeout(function () {\n            latterValueEl.textContent = letterForCheck;\n        }, 200);\n        if (points >= 200)\n            endGameStatus('You win Game!', 'background__win-menu');\n        else if (points <= 0)\n            endGameStatus('You lost Game!', 'background__lost-menu');\n    }, speedTimeGame);\n};\nvar correctKeyPressed = function () {\n    var increment = ramdomPoint(5, 10);\n    latterValueEl.textContent = \"+\".concat(increment);\n    points += increment;\n    textInfoEl.textContent = \"\".concat(points, \" points\");\n    ballBoxEl.classList.remove('background-box-letter-lost');\n    ballBoxEl.classList.add('background__box-letter-win');\n    keystrokeLock = true;\n};\nvar errorKeyPressed = function () {\n    var decrement = ramdomPoint(20, 25);\n    latterValueEl.textContent = \"-\".concat(decrement);\n    points -= decrement;\n    textInfoEl.textContent = \"\".concat(points, \" points\");\n    ballBoxEl.classList.remove('background__box-letter');\n    ballBoxEl.classList.add('background-box-letter-lost');\n    keystrokeLock = true;\n};\ndocument.addEventListener('keyup', function (letter) {\n    if (letter.key.toLocaleUpperCase() == letterForCheck && !keystrokeLock && points)\n        correctKeyPressed();\n    else if (!keystrokeLock && points)\n        errorKeyPressed();\n    ballSizeUpdate(points);\n});\nbuttonNewGameEl.addEventListener('click', function () {\n    keystrokeLock = false;\n    clearInterval(interval);\n    points = 100;\n    resetCssBackground();\n    maingameEl.classList.add('background__start-menu');\n    start();\n});\nbuttonStopGameEl.addEventListener('click', function () {\n    clearInterval(interval);\n    textInfoEl.textContent = 'You lost Game!';\n    keystrokeLock = true;\n    resetCssBackground();\n    maingameEl.classList.add('background__lost-menu');\n});\n\n\n//# sourceURL=webpack://6-typescript/./src/script.ts?");

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