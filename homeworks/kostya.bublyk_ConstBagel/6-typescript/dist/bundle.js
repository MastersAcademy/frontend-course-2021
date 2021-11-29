/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
var scoresFieldEl = document.querySelector('[data-role="scores"]');
var letterFieldEl = document.querySelector('[data-role="random-letter"]');
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.getRandomItem = function (dataSet) {
        return dataSet[Math.floor(Math.random() * dataSet.length)];
    };
    Helper.displayScores = function (scores) {
        if (!!scores) {
            scoresFieldEl.textContent = scores > 0 ? "+".concat(scores) : "".concat(scores);
        }
    };
    Helper.displayLetter = function (letter) {
        letterFieldEl.textContent = letter;
    };
    Helper.displayGameResult = function (isWin, totalScore) {
        document.body.innerHTML = "\n            <div class=\"page__popup\">\n                <p class=\"popup__message ".concat(isWin ? 'popup__message--win' : 'popup__message--lose', "\">\n                    ").concat(isWin ? 'Congrats!' : 'Game over', "\n                </p>\n                <p class=\"popup__score ").concat(isWin ? 'popup__score--win' : 'popup__score--lose', "\">\n                    Total score: ").concat(totalScore, "\n                </p>\n            </div>");
    };
    return Helper;
}());
var Game = /** @class */ (function () {
    function Game() {
        this._letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
            this._correctKeyScores = [5, 6, 7, 8, 9, 10];
        this._passKeyScores = [-10, -11, -12, -13, -14, -15];
        this._wrongKeyScores = [-20, -21, -22, -23, -24, -25];
        this._totalScore = 100;
        this._isPlayerWin = false;
        this.isAllowPressAction = false;
        this.randomLetter = '';
        this.gainedPoints = 0;
    }
    Object.defineProperty(Game.prototype, "letters", {
        get: function () {
            return this._letters.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "correctKeyScores", {
        get: function () {
            return this._correctKeyScores.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "passKeyScores", {
        get: function () {
            return this._passKeyScores.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "wrongKeyScores", {
        get: function () {
            return this._wrongKeyScores.slice();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "totalScore", {
        get: function () {
            return this._totalScore;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "isPlayerWin", {
        get: function () {
            return this._isPlayerWin;
        },
        enumerable: false,
        configurable: true
    });
    Game.prototype.addToTotalScore = function (points) {
        this._totalScore += points;
    };
    Game.prototype.isGameOver = function () {
        this._isPlayerWin = this._totalScore > 200;
        return this._isPlayerWin || this._totalScore < 0;
    };
    return Game;
}());
(function (game) {
    function playGame() {
        var scores = game.isAllowPressAction ?
            Helper.getRandomItem(game.passKeyScores) :
            game.gainedPoints;
        Helper.displayScores(scores);
        game.addToTotalScore(scores);
        if (game.isGameOver()) {
            Helper.displayGameResult(game.isPlayerWin, game.totalScore);
            return;
        }
        game.randomLetter = Helper.getRandomItem(game.letters);
        Helper.displayLetter(game.randomLetter);
        game.isAllowPressAction = true;
        setTimeout(playGame, 2000);
    }
    window.addEventListener('keydown', function (event) {
        if (game.isAllowPressAction) {
            game.gainedPoints = event.key.toUpperCase() === game.randomLetter ?
                Helper.getRandomItem(game.correctKeyScores) :
                Helper.getRandomItem(game.wrongKeyScores);
            game.isAllowPressAction = false;
        }
    });
    playGame();
})(new Game());

/******/ })()
;