"use strict";
(self["webpackChunkgame_10_components"] = self["webpackChunkgame_10_components"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/information-panel/information-panel.component */ 5451);
/* harmony import */ var _components_player_actions_player_actions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/player-actions/player-actions.component */ 261);




function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "use", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Player 1 turn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function AppComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "use", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Player 2 turn");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor() {
        this.dataEl = document.getElementsByClassName('icon');
        this.playersMove = true;
        this.playersWay = 0;
        this.countWinnerPlayer1 = 0;
        this.countWinnerPlayer2 = 0;
        this.state = [
            [0, 1, 2],
            [0, 1, 2],
            [0, 0, 0],
        ];
    }
    onClick(event) {
        const element = event.target;
        if (this.playersMove) {
            element.parentElement.classList.add('list__game-item--blue');
            element.firstElementChild.setAttribute('xlink:href', '../assets/svg/sprites.svg#x-icon');
            element.firstElementChild.innerHTML = 'x';
            this.playersMove = false;
        }
        else {
            element.parentElement.classList.add('list__game-item--violet');
            element.firstElementChild.setAttribute('xlink:href', '../assets/svg/sprites.svg#0-icon');
            element.firstElementChild.innerHTML = '0';
            this.playersMove = true;
        }
        this.playersWay += 1;
        this.checkWinner();
        this.addCountWinnerPlayer1();
        this.addCountWinnerPlayer2();
    }
    checkDataCross() {
        return (this.dataEl[0].innerHTML == 'x' && this.dataEl[1].innerHTML == 'x' && this.dataEl[2].innerHTML == 'x')
            || (this.dataEl[3].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[5].innerHTML == 'x')
            || (this.dataEl[6].innerHTML == 'x' && this.dataEl[7].innerHTML == 'x' && this.dataEl[8].innerHTML == 'x')
            || (this.dataEl[0].innerHTML == 'x' && this.dataEl[3].innerHTML == 'x' && this.dataEl[6].innerHTML == 'x')
            || (this.dataEl[1].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[7].innerHTML == 'x')
            || (this.dataEl[2].innerHTML == 'x' && this.dataEl[5].innerHTML == 'x' && this.dataEl[8].innerHTML == 'x')
            || (this.dataEl[0].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[8].innerHTML == 'x')
            || (this.dataEl[2].innerHTML == 'x' && this.dataEl[4].innerHTML == 'x' && this.dataEl[6].innerHTML == 'x');
    }
    checkDataZero() {
        return (this.dataEl[0].innerHTML == '0' && this.dataEl[1].innerHTML == '0' && this.dataEl[2].innerHTML == '0')
            || (this.dataEl[3].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[5].innerHTML == '0')
            || (this.dataEl[6].innerHTML == '0' && this.dataEl[7].innerHTML == '0' && this.dataEl[8].innerHTML == '0')
            || (this.dataEl[0].innerHTML == '0' && this.dataEl[3].innerHTML == '0' && this.dataEl[6].innerHTML == '0')
            || (this.dataEl[1].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[7].innerHTML == '0')
            || (this.dataEl[2].innerHTML == '0' && this.dataEl[5].innerHTML == '0' && this.dataEl[8].innerHTML == '0')
            || (this.dataEl[0].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[8].innerHTML == '0')
            || (this.dataEl[2].innerHTML == '0' && this.dataEl[4].innerHTML == '0' && this.dataEl[6].innerHTML == '0');
    }
    deadHeatGame() {
        return (9 == this.playersWay);
    }
    addCountWinnerPlayer1() {
        if (this.checkDataCross()) {
            this.countWinnerPlayer1 += 1;
        }
    }
    addCountWinnerPlayer2() {
        if (this.checkDataZero()) {
            this.countWinnerPlayer2 += 1;
        }
    }
    endOfGame() {
        this.state = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ];
        this.playersWay = 0;
    }
    resetCurrentGame() {
        this.endOfGame();
    }
    resetAll() {
        this.endOfGame();
        this.countWinnerPlayer1 = 0;
        this.countWinnerPlayer2 = 0;
    }
    checkWinner() {
        setTimeout(() => {
            if (this.checkDataCross() || this.checkDataZero() || this.deadHeatGame()) {
                this.endOfGame();
                this.playersWay = 0;
            }
        }, 3000);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 5, consts: [[1, "main-header"], ["href", "#", 1, "header__logo-link"], ["width", "25", "height", "26"], [0, "xlink", "href", "../assets/svg/sprites.svg#logo-icon"], [1, "main-header__headline"], [1, "main-section"], [1, "visually-hidden"], [1, "content-wrapper"], ["class", "content-wrapper__player-signboard content-wrapper__player-signboard--player-1", 4, "ngIf"], ["class", "content-wrapper__player-signboard content-wrapper__player-signboard--player-2", 4, "ngIf"], [1, "section-playground"], [3, "countWinnerPlayer1", "countWinnerPlayer2", "resetCurrentGame", "resetAllGame"], [3, "state", "sendClickElement"], [1, "content-wrapper__player-signboard", "content-wrapper__player-signboard--player-1"], ["width", "35", "height", "35", 1, "player-scoreboard__icon"], [0, "xlink", "href", "../assets/svg/sprites.svg#x-icon"], [1, "player-scoreboard__text"], [1, "content-wrapper__player-signboard", "content-wrapper__player-signboard--player-2"], [0, "xlink", "href", "../assets/svg/sprites.svg#0-icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "use", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Tic-Tac-Toe game");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "main", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Tic-Tac-Toe game");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppComponent_div_10_Template, 5, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_div_11_Template, 5, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "app-information-panel", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resetCurrentGame", function AppComponent_Template_app_information_panel_resetCurrentGame_13_listener() { return ctx.resetCurrentGame(); })("resetAllGame", function AppComponent_Template_app_information_panel_resetAllGame_13_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "app-player-actions", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("sendClickElement", function AppComponent_Template_app_player_actions_sendClickElement_14_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.playersMove);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.playersMove);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("countWinnerPlayer1", ctx.countWinnerPlayer1)("countWinnerPlayer2", ctx.countWinnerPlayer2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("state", ctx.state);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _components_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_0__.InformationPanelComponent, _components_player_actions_player_actions_component__WEBPACK_IMPORTED_MODULE_1__.PlayerActionsComponent], styles: [".main-header[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 100%;\n  background-color: var(--color-thema-blue);\n  display: flex;\n  align-items: center;\n}\n\n.header__logo-link[_ngcontent-%COMP%] {\n  margin-left: 25px;\n}\n\n.main-header__headline[_ngcontent-%COMP%] {\n  font-size: inherit;\n  padding-left: 45px;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  margin: 55px 0;\n}\n\n.content-wrapper__player-signboard[_ngcontent-%COMP%] {\n  width: 336px;\n  height: 56px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n\n.content-wrapper__player-signboard--player-1[_ngcontent-%COMP%] {\n  background-color: var(--color-player-blue);\n}\n\n.content-wrapper__player-signboard--player-2[_ngcontent-%COMP%] {\n  background-color: var(--color-player-violet);\n}\n\n.player-scoreboard__icon[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.player-scoreboard__text[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.section-playground[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}\n\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  -webkit-clip-path: inset(100%);\n          clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4taGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhlbWEtYmx1ZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXJfX2xvZ28tbGluayB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ubWFpbi1oZWFkZXJfX2hlYWRsaW5lIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG59XG5cbi5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIG1hcmdpbjogNTVweCAwO1xufVxuXG4uY29udGVudC13cmFwcGVyX19wbGF5ZXItc2lnbmJvYXJkIHtcbiAgd2lkdGg6IDMzNnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNvbnRlbnQtd3JhcHBlcl9fcGxheWVyLXNpZ25ib2FyZC0tcGxheWVyLTEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wbGF5ZXItYmx1ZSk7XG59XG5cbi5jb250ZW50LXdyYXBwZXJfX3BsYXllci1zaWduYm9hcmQtLXBsYXllci0yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGxheWVyLXZpb2xldCk7XG59XG5cbi5wbGF5ZXItc2NvcmVib2FyZF9faWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ucGxheWVyLXNjb3JlYm9hcmRfX3RleHQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXBsYXlncm91bmQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnZpc3VhbGx5LWhpZGRlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_player_actions_player_actions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/player-actions/player-actions.component */ 261);
/* harmony import */ var _components_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/information-panel/information-panel.component */ 5451);






// import { InformationPanelComponent } from './components/information-panel/information-panel.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_player_actions_player_actions_component__WEBPACK_IMPORTED_MODULE_2__.PlayerActionsComponent, _components_information_panel_information_panel_component__WEBPACK_IMPORTED_MODULE_3__.InformationPanelComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 5451:
/*!*****************************************************************************!*\
  !*** ./src/app/components/information-panel/information-panel.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformationPanelComponent": () => (/* binding */ InformationPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class InformationPanelComponent {
    constructor() {
        this.countWinnerPlayer1 = 0;
        this.countWinnerPlayer2 = 0;
        this.resetCurrentGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.resetAllGame = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    resetGame() {
        this.resetCurrentGame.emit();
    }
    resetAll() {
        this.resetAllGame.emit();
    }
}
InformationPanelComponent.ɵfac = function InformationPanelComponent_Factory(t) { return new (t || InformationPanelComponent)(); };
InformationPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformationPanelComponent, selectors: [["app-information-panel"]], inputs: { countWinnerPlayer1: "countWinnerPlayer1", countWinnerPlayer2: "countWinnerPlayer2" }, outputs: { resetCurrentGame: "resetCurrentGame", resetAllGame: "resetAllGame" }, decls: 21, vars: 2, consts: [[1, "information-panel"], [1, "content-row"], [1, "content-row", "content-row__information-player", "content-row__information-player--one"], ["width", "35", "height", "35", 1, "player__icon"], [0, "xlink", "href", "../assets/svg/sprites.svg#x-icon"], [1, "content-player", "content-player__text"], [1, "content-player", "content-player__count", "content-player__count--one"], [1, "content-row", "content-row__information-player", "content-row__information-player--two"], [0, "xlink", "href", "../assets/svg/sprites.svg#0-icon"], [1, "content-player", "content-player__count", "content-player__count--two"], [1, "button", "button__reset-game", 3, "click"], [1, "button", "button__resetAll", 3, "click"]], template: function InformationPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Player 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "use", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Player 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InformationPanelComponent_Template_button_click_17_listener() { return ctx.resetGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reset current game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InformationPanelComponent_Template_button_click_19_listener() { return ctx.resetAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reset all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countWinnerPlayer1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.countWinnerPlayer2);
    } }, styles: [".information-panel[_ngcontent-%COMP%] {\n  height: 265px;\n  width: 258px;\n  margin: 0 10px 55px;\n}\n\n.content-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.content-row__information-player[_ngcontent-%COMP%] {\n  height: 56px;\n  width: 186px;\n  border-radius: 5px;\n}\n\n.content-row__information-player--one[_ngcontent-%COMP%] {\n  background-color: var(--color-player-blue);\n}\n\n.content-row__information-player--two[_ngcontent-%COMP%] {\n  background-color: var(--color-player-violet);\n  margin-top: 14px;\n}\n\n.player__icon[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.content-player[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content-player__text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.content-player__count[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  width: 55px;\n  height: 56px;\n  margin-left: 16px;\n}\n\n.content-player__count--one[_ngcontent-%COMP%] {\n  background-color: var(--color-player-blue);\n}\n\n.content-player__count--two[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  background-color: var(--color-player-violet);\n}\n\n.button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  width: 100%;\n  height: 48px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--color-thema-blue);\n  color: inherit;\n  font-size: inherit;\n  font-weight: 600;\n}\n\n.button__reset-game[_ngcontent-%COMP%] {\n  margin-top: 31px;\n}\n\n.button__resetAll[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n\n.button[_ngcontent-%COMP%]:hover, .button[_ngcontent-%COMP%]:focus {\n  background-color: #34BEEC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiaW5mb3JtYXRpb24tcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbmZvcm1hdGlvbi1wYW5lbCB7XG4gIGhlaWdodDogMjY1cHg7XG4gIHdpZHRoOiAyNThweDtcbiAgbWFyZ2luOiAwIDEwcHggNTVweDtcbn1cblxuLmNvbnRlbnQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtcm93X19pbmZvcm1hdGlvbi1wbGF5ZXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHdpZHRoOiAxODZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uY29udGVudC1yb3dfX2luZm9ybWF0aW9uLXBsYXllci0tb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGxheWVyLWJsdWUpO1xufVxuXG4uY29udGVudC1yb3dfX2luZm9ybWF0aW9uLXBsYXllci0tdHdvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGxheWVyLXZpb2xldCk7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5wbGF5ZXJfX2ljb24ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb250ZW50LXBsYXllciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1wbGF5ZXJfX3RleHQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQtcGxheWVyX19jb3VudCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDU1cHg7XG4gIGhlaWdodDogNTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5jb250ZW50LXBsYXllcl9fY291bnQtLW9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBsYXllci1ibHVlKTtcbn1cblxuLmNvbnRlbnQtcGxheWVyX19jb3VudC0tdHdvIHtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGxheWVyLXZpb2xldCk7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGhlbWEtYmx1ZSk7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5idXR0b25fX3Jlc2V0LWdhbWUge1xuICBtYXJnaW4tdG9wOiAzMXB4O1xufVxuXG4uYnV0dG9uX19yZXNldEFsbCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5idXR0b246aG92ZXIsXG4uYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0QkVFQztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 261:
/*!***********************************************************************!*\
  !*** ./src/app/components/player-actions/player-actions.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerActionsComponent": () => (/* binding */ PlayerActionsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function PlayerActionsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerActionsComponent_div_0_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onClickElement($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "use", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerActionsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerActionsComponent_div_0_div_1_Template, 4, 0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", items_r1);
} }
class PlayerActionsComponent {
    constructor() {
        this.sendClickElement = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onClickElement(event) {
        this.sendClickElement.emit(event);
    }
}
PlayerActionsComponent.ɵfac = function PlayerActionsComponent_Factory(t) { return new (t || PlayerActionsComponent)(); };
PlayerActionsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerActionsComponent, selectors: [["app-player-actions"]], inputs: { state: "state" }, outputs: { sendClickElement: "sendClickElement" }, decls: 1, vars: 1, consts: [["class", "game-board", 4, "ngFor", "ngForOf"], [1, "game-board"], ["class", "game-board__item", 3, "click", 4, "ngFor", "ngForOf"], [1, "game-board__item", 3, "click"], [1, "game-board__icon"], [0, "xlink", "href", "", 1, "icon"]], template: function PlayerActionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PlayerActionsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.state);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".game-board[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.game-board__icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.game-board__item[_ngcontent-%COMP%] {\n  height: 185px;\n  width: 185px;\n  background-color: #C4C4C4;\n  margin: 0 17px 17px 0;\n  cursor: pointer;\n}\n\n.list__game-item--violet[_ngcontent-%COMP%] {\n  background-color: var(--color-player-violet);\n  overflow: visible;\n}\n\n.list__game-item--blue[_ngcontent-%COMP%] {\n  background-color: var(--color-player-blue);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllci1hY3Rpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDIiwiZmlsZSI6InBsYXllci1hY3Rpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZS1ib2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5nYW1lLWJvYXJkX19pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLWJvYXJkX19pdGVtIHtcbiAgaGVpZ2h0OiAxODVweDtcbiAgd2lkdGg6IDE4NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzRDNEM0O1xuICBtYXJnaW46IDAgMTdweCAxN3B4IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxpc3RfX2dhbWUtaXRlbS0tdmlvbGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGxheWVyLXZpb2xldCk7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubGlzdF9fZ2FtZS1pdGVtLS1ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGxheWVyLWJsdWUpO1xufVxuIl19 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map