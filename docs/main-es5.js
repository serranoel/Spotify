(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overflow\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"player\">\r\n    <app-c-player></app-c-player>\r\n</div> \r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-cd-info/c-cd-info.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-cd-info/c-cd-info.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"album-info-container\">\n    <img class=\"album-info-image\" src=\"{{album['image']}}\" alt=\"album-image\">\n    <h1 class=\"album-info-title\">{{album['title']}}</h1>\n    <p class=\"album-info-artist\"><span>{{album['artist']}}</span></p>\n    <button class=\"rep-button\">REPRODUCIR</button>\n    <p class=\"extra-info\">{{album['year']}}  -  {{album['canciones'].length}} canciones</p>\n    <div class=\"fav-more-buttons\">\n        <i class=\"fas fa-heart float-left\"></i>\n        <i class=\"fas fa-ellipsis-h float-right\" (click) = \"addAlbumToPlaylists(id)\"></i>\n    </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-horinzontal-menu/c-horinzontal-menu.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-horinzontal-menu/c-horinzontal-menu.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-menu-container\">\n    <ul>\n        <li>SELECCIONADOS</li>\n        <li>PODCASTS</li>\n        <li>LISTAS DE ÉXITO</li>\n        <li>GÉNEROS Y ESTADOS DE ÁNIMO</li>\n        <li>NOVEDADES</li>\n        <li>DESCUBRIR</li>\n    </ul>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-logo/c-logo.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-logo/c-logo.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<img class=\"spotify-logo\" src=\"../assets/spotifyLogo.png\" alt=\"Spotify-Logo\">\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-menu/c-menu.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-menu/c-menu.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu-container w-100\">\n    <div class=\"row home selected w-100\">\n        <div class=\"col-12\">\n            <p class=\"menu-text\" routerLink = \"/home\"><i class=\"fab fa-houzz mr-4 menu-icon\"></i>Inicio</p>\n        </div>\n    </div>\n    <div class=\"row search\">\n        <div class=\"col-12\">\n            <p class=\"search-text\"><i class=\"fas fa-search mr-4 menu-icon\"></i>Buscar</p>\n        </div>\n    </div>\n    <div class=\"row library\">\n        <div class=\"col-12\">\n            <p class=\"library-text\"><i class=\"fas fa-compact-disc mr-4 menu-icon\"></i>Tu biblioteca</p>\n        </div>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-player/c-player.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-player/c-player.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player-container\">\n    <div class=\"row\">\n        <div class=\"col-3 info-playing-song\">\n            <div class=\"\" *ngIf = \"sData.sClickedSong === true\">\n                <img class=\"player-image float-left\" src=\"{{sData.sAlbum['image']}}\">\n                <div class=\"info-track float-left\">\n                    <p class=\"player-track-name m-0 text-left\"><span>{{sData.sSong['name']}}</span></p>\n                    <p class=\"player-track-artist m-0 text-left\"><span class=\"\">{{sData.sAlbum['artist']}}</span><span>{{sData.sSong['feat']}}</span> </p>                   \n                </div>        \n            </div>\n        </div>\n        \n        <div class=\"col-6 playing-song-commmands\">\n            <!-- <audio id=\"player\" src=\"../../assets/cds/{{sData.sSong['link']}}\" autoplay></audio> -->\n            <audio id=\"player\" src=\"./assets/cds/{{truquitoTemporal()}}\" autoplay></audio>\n            <div  class=\"player-buttons\" style=\"height: 13.4vh d-inline-flex\">\n                <div class=\"row button-commands\">\n                    <div class=\"col-5\">\n                        <p class=\"player-button float-right\" onclick=\"document.getElementById('player').volume += 0.1\"><i class=\"fas fa-backward icon-command\"></i></p>\n                    </div>\n                    <div class=\"col-2 play-pause-container\">\n                        <p class=\"player-button play-button text-center\" (click) = \"playSong()\"><i class=\"far fa-play-circle icon-command\"></i></p>\n                        <p class=\"player-button pause-button d-none\" (click) = \"pauseSong()\"><i class=\"far fa-pause-circle icon-command\"></i></p>\n                    </div>\n                    <div class=\"col-5\">\n                        <p class=\"player-button float-left\" onclick=\"document.getElementById('player').volume -= 0.1\"><i class=\"fas fa-forward icon-command\"></i></p>\n                    </div>             \n                </div>\n                <!-- <div class=\"row progress-barr-commands\">\n                    <div class=\"py-5\">\n                        <div class=\"progress\">\n                            <div id=\"barra\" class=\"progress-bar progress-bar-black end animation\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    \n                            </div>\n                        </div>\n                    </div>\n                </div> -->\n            </div>    \n        </div>\n        <div class=\"col-3 volume-commands\">\n\n        </div>\n\n    </div>\n    \n    \n    \n</div>\n\n<!--  -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-playlists/c-playlists.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-playlists/c-playlists.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"playlist-text\">PLAYLISTS</p>\n<div class=\"add-playlist\" data-toggle=\"modal\" data-target=\"#modalCookie1\">\n    <p><i class=\"fas fa-plus-square add-playlist-button\"></i><span>Crear playlist</span> </p>\n</div>\n<div class=\"playlist-list\" (click) = \"hideDropdown(false)\">\n    <div class=\"single-playlist\" *ngFor = \"let playlist of arrPlaylist\">\n        <p class=\"playlist-name\" (contextmenu) = \"showDropdown($event, true, playlist['id'] )\" routerLink = \"album/{{playlist['id']}}\">{{playlist[\"title\"]}}</p>\n        <div id=\"context-menu\" *ngIf = \"clicked === true\" [ngStyle] = \"styleProperties\">   <!--Dropdown-->\n            <div class=\"context-menu\">\n                <div class=\"row dropdown-item-row\" (click) = \"deletePlaylist(playlist['id'])\">\n                    <div class=\"col-12 dropdown-item-column\">\n                        <a class=\"dp-item  delete-playlist-button\">Eliminar</a>\n                    </div>\n                </div> \n                <div class=\"row dropdown-item-row\">\n                    <div class=\"col-12 dropdown-item-column\">\n                        <a class=\"dp-item\" >Renombrar</a>\n                    </div>\n                </div>\n            </div>                  \n        </div>\n    </div>\n</div>\n  \n ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-section/c-section.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-section/c-section.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"single-section\" *ngFor = \"let section of sectionTitles\">\n    <h1 class=\"text-left ml-5 section-text\">{{section}}</h1>\n    <app-c-single-cd></app-c-single-cd>\n</div>\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-single-cd/c-single-cd.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-single-cd/c-single-cd.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-row single-album-container\">\n    <div class= \"single-cd text-center\" *ngFor = \"let cd of arrCds\" routerLink = \"album/{{cd['id']}}\">\n        <img class=\"album-img\" src=\"{{cd['image']}}\" alt=\"cd-image\">\n        <p class=\"album-name\">{{cd['title']}}</p>\n        <p class=\"artist-name\"><span>{{cd[\"artist\"]}}</span></p>\n    </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-tracklist/c-tracklist.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/c-tracklist/c-tracklist.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tracklist\">\n    <div class=\"track-container\" (click) = \"setSong(id, song['name'])\" *ngFor = \"let song of album['canciones']\">\n        <div class=\"row\">\n            <div class=\"col-12 ml-0 song-container\">\n                <i class=\"fas fa-music float-left mr-3 track-icon\"></i>\n                <p class=\"float-left track-name\">{{song[\"name\"]}}</p>\n                <p class=\"float-right track-duration\">{{song[\"duration\"]}}</p>\n                <i class=\"fas fa-ellipsis-h float-right more-tools-icon\"></i>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12 track-artist-name\">\n                <p class=\"track-artist float-left\"><span class=\"span-artist\">{{album[\"artist\"]}} </span><span class=\" span-feat p-0\">{{song[\"feat\"]}}</span> </p>\n            </div>\n        </div> \n    </div>       \n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-home/v-home.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-home/v-home.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-view d-flex flex-row\">\n    <div class=\"side-bar-navigator d-none d-md-block\">\n        <div class=\"sidebar-container\">\n            <div class=\"row logo-container w-100\">\n                <div class=\"col-12 w-100\">\n                    <app-c-logo></app-c-logo>\n                </div>\n            </div>\n            <div class=\"row menu\">\n                <div class=\"col-12\"> \n                    <app-c-menu></app-c-menu>\n                </div>\n            </div>\n            <div class=\"row playlists-container\">\n                <div class=\"col-12\">\n                    <app-c-playlists></app-c-playlists>\n                </div>\n            </div>\n        </div>        \n    </div>\n    <div class=\"main-home-container\">\n        <div class=\"main-home\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <app-c-horinzontal-menu></app-c-horinzontal-menu>\n                </div>\n            </div>\n            <div class=\"sections-container\">\n                <div class=\"row\">\n                    <div class=\"col-12 text-center\">\n                        <app-c-section></app-c-section>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>     \n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-single-cd/v-single-cd.component.html": 
        /*!**********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/v-single-cd/v-single-cd.component.html ***!
          \**********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"single-album-container home-view d-flex flex-row\">\n    <div class=\"side-bar-navigator d-none d-md-block\">\n        <div class=\"sidebar-container\">\n            <div class=\"row logo-container w-100\">\n                <div class=\"col-12 w-100\">\n                    <app-c-logo></app-c-logo>\n                </div>\n            </div>\n            <div class=\"row menu\">\n                <div class=\"col-12\">\n                    <app-c-menu></app-c-menu>\n                </div>\n            </div>\n            <div class=\"row playlists-container\">\n                <div class=\"col-12\">\n                    <app-c-playlists></app-c-playlists>\n                </div>\n            </div>\n        </div>        \n    </div>\n    <div class=\"main-home-container\">\n        <div class=\"main-home\">\n            <div class=\"row prueba\">\n                <div class=\"col-12 col-xl-5 left-home\">\n                    <app-c-cd-info></app-c-cd-info>\n                </div>\n                <div class=\"col-12 col-xl-7 text-center right-home\">\n                    <app-c-tracklist></app-c-tracklist>    \n                </div>\n            </div>\n        </div>\n    </div>      \n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".overflow {\r\n    overflow-x: hidden;\r\n}\r\n.player {\r\n    width: 100vw;\r\n    height: 100px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgb(40, 40, 40);\r\n    z-index: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJmbG93IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4ucGxheWVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Spotify';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v-home/v-home.component */ "./src/app/v-home/v-home.component.ts");
            /* harmony import */ var _v_single_cd_v_single_cd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./v-single-cd/v-single-cd.component */ "./src/app/v-single-cd/v-single-cd.component.ts");
            /* harmony import */ var _c_logo_c_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./c-logo/c-logo.component */ "./src/app/c-logo/c-logo.component.ts");
            /* harmony import */ var _c_menu_c_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./c-menu/c-menu.component */ "./src/app/c-menu/c-menu.component.ts");
            /* harmony import */ var _c_playlists_c_playlists_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./c-playlists/c-playlists.component */ "./src/app/c-playlists/c-playlists.component.ts");
            /* harmony import */ var _c_horinzontal_menu_c_horinzontal_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./c-horinzontal-menu/c-horinzontal-menu.component */ "./src/app/c-horinzontal-menu/c-horinzontal-menu.component.ts");
            /* harmony import */ var _c_section_c_section_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./c-section/c-section.component */ "./src/app/c-section/c-section.component.ts");
            /* harmony import */ var _c_single_cd_c_single_cd_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./c-single-cd/c-single-cd.component */ "./src/app/c-single-cd/c-single-cd.component.ts");
            /* harmony import */ var _c_player_c_player_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./c-player/c-player.component */ "./src/app/c-player/c-player.component.ts");
            /* harmony import */ var _c_tracklist_c_tracklist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./c-tracklist/c-tracklist.component */ "./src/app/c-tracklist/c-tracklist.component.ts");
            /* harmony import */ var _c_cd_info_c_cd_info_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./c-cd-info/c-cd-info.component */ "./src/app/c-cd-info/c-cd-info.component.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
            var routerConfig = [
                { "path": "", "component": _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_5__["VHomeComponent"] },
                { "path": "home", "component": _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_5__["VHomeComponent"] },
                { "path": "album/:id", "component": _v_single_cd_v_single_cd_component__WEBPACK_IMPORTED_MODULE_6__["VSingleCdComponent"] },
                { "path": "**", "component": _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_5__["VHomeComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _v_home_v_home_component__WEBPACK_IMPORTED_MODULE_5__["VHomeComponent"],
                        _v_single_cd_v_single_cd_component__WEBPACK_IMPORTED_MODULE_6__["VSingleCdComponent"],
                        _c_logo_c_logo_component__WEBPACK_IMPORTED_MODULE_7__["CLogoComponent"],
                        _c_menu_c_menu_component__WEBPACK_IMPORTED_MODULE_8__["CMenuComponent"],
                        _c_playlists_c_playlists_component__WEBPACK_IMPORTED_MODULE_9__["CPlaylistsComponent"],
                        _c_horinzontal_menu_c_horinzontal_menu_component__WEBPACK_IMPORTED_MODULE_10__["CHorinzontalMenuComponent"],
                        _c_section_c_section_component__WEBPACK_IMPORTED_MODULE_11__["CSectionComponent"],
                        _c_single_cd_c_single_cd_component__WEBPACK_IMPORTED_MODULE_12__["CSingleCdComponent"],
                        _c_player_c_player_component__WEBPACK_IMPORTED_MODULE_13__["CPlayerComponent"],
                        _c_tracklist_c_tracklist_component__WEBPACK_IMPORTED_MODULE_14__["CTracklistComponent"],
                        _c_cd_info_c_cd_info_component__WEBPACK_IMPORTED_MODULE_15__["CCdInfoComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routerConfig, { useHash: true })
                    ],
                    providers: [_service_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/c-cd-info/c-cd-info.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/c-cd-info/c-cd-info.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".album-info-container {\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n.album-info-image {\r\n    width: 60%;\r\n    margin-top: 30px;\r\n}\r\n@media (max-width: 1200px) {\r\n    .album-info-image {\r\n        width: 350px;\r\n        margin-bottom: 22px;\r\n    }\r\n}\r\n.album-info-title {\r\n    color: #ffffff;\r\n    font-size: 26px;\r\n    margin: 12px 0 3px 0;\r\n    font-weight: bold;\r\n}\r\n.album-info-artist {\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n    margin-top: 3px;\r\n    font-size: 16px;\r\n    width: auto;\r\n}\r\n.album-info-artist:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.album-info-artist >span:hover {\r\n    padding-bottom: 2px;\r\n    border-bottom: 1px solid;\r\n}\r\n.rep-button {\r\n    color: #ffffff;\r\n    background-color: rgb(29, 185, 84);\r\n    border: none;\r\n    font-size: 14px;\r\n    padding: 8px 45px;\r\n    border-radius: 20%;\r\n    border-radius: 90px 90px 90px 90px;\r\n    -moz-border-radius: 90px 90px 90px 90px;\r\n    -webkit-border-radius: 90px 90px 90px 90px;\r\n    margin-top: 20px;\r\n    transition: .1s;\r\n}\r\n.rep-button:hover {\r\n    background-color: rgb(30, 215, 96);\r\n    transform: scale(1.025);\r\n}\r\n.rep-button:focus {\r\n    outline: none;\r\n}\r\n.extra-info {\r\n    color: #b3b3b3;\r\n    font-size: 14px;\r\n    font-weight: bold;    \r\n    margin-top: 8px;\r\n}\r\n.dot {\r\n    font-size: 3px;\r\n    margin: 0 10px 5px 10px;\r\n    padding-bottom: 30px;\r\n}\r\n.fav-more-buttons {\r\n    margin: 0 auto;\r\n    margin-top: 45px;\r\n    width: 75px;\r\n}\r\n.fav-more-buttons > i{\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    transition: .1s\r\n}\r\n.fav-more-buttons > i:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1jZC1pbmZvL2MtY2QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtJQUNmLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2Q7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYy1jZC1pbmZvL2MtY2QtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFsYnVtLWluZm8tY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFsYnVtLWluZm8taW1hZ2Uge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gICAgLmFsYnVtLWluZm8taW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMnB4O1xyXG4gICAgfVxyXG59XHJcbi5hbGJ1bS1pbmZvLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDAgM3B4IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYWxidW0taW5mby1hcnRpc3Qge1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5hbGJ1bS1pbmZvLWFydGlzdDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWxidW0taW5mby1hcnRpc3QgPnNwYW46aG92ZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxufVxyXG4ucmVwLWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMTg1LCA4NCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwcHggOTBweCA5MHB4IDkwcHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDkwcHggOTBweCA5MHB4IDkwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDkwcHggOTBweCA5MHB4IDkwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogLjFzO1xyXG59XHJcbi5yZXAtYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjE1LCA5Nik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcclxufVxyXG4ucmVwLWJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5leHRyYS1pbmZvIHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcbi5kb3Qge1xyXG4gICAgZm9udC1zaXplOiAzcHg7XHJcbiAgICBtYXJnaW46IDAgMTBweCA1cHggMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi5mYXYtbW9yZS1idXR0b25zIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIHdpZHRoOiA3NXB4O1xyXG59XHJcbi5mYXYtbW9yZS1idXR0b25zID4gaXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogLjFzXHJcbn1cclxuLmZhdi1tb3JlLWJ1dHRvbnMgPiBpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/c-cd-info/c-cd-info.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/c-cd-info/c-cd-info.component.ts ***!
          \**************************************************/
        /*! exports provided: CCdInfoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CCdInfoComponent", function () { return CCdInfoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CCdInfoComponent = /** @class */ (function () {
                function CCdInfoComponent(sPath, sData) {
                    this.sPath = sPath;
                    this.sData = sData;
                    this.arrCds = this.sData.sArrCds;
                    this.id = this.sPath.snapshot.params.id;
                    this.album = this.sData.sSetAlbum(this.id);
                }
                CCdInfoComponent.prototype.ngOnInit = function () {
                };
                CCdInfoComponent.prototype.addAlbumToPlaylists = function (id) {
                    this.sData.sAddAlbumToPlaylists(id);
                };
                return CCdInfoComponent;
            }());
            CCdInfoComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            CCdInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-cd-info',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-cd-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-cd-info/c-cd-info.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-cd-info.component.css */ "./src/app/c-cd-info/c-cd-info.component.css")).default]
                })
            ], CCdInfoComponent);
            /***/ 
        }),
        /***/ "./src/app/c-horinzontal-menu/c-horinzontal-menu.component.css": 
        /*!*********************************************************************!*\
          !*** ./src/app/c-horinzontal-menu/c-horinzontal-menu.component.css ***!
          \*********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".h-menu-container > ul > li{\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n    list-style: none;\r\n    display: inline-block;\r\n    font-size: 13px;\r\n    margin: 30px 25px;\r\n}\r\n@media (max-width: 1260px) {\r\n    .h-menu-container {\r\n      display: none;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1ob3JpbnpvbnRhbC1tZW51L2MtaG9yaW56b250YWwtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSTtNQUNFLGFBQWE7SUFDZjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvYy1ob3JpbnpvbnRhbC1tZW51L2MtaG9yaW56b250YWwtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgtbWVudS1jb250YWluZXIgPiB1bCA+IGxpe1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDMwcHggMjVweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI2MHB4KSB7XHJcbiAgICAuaC1tZW51LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/c-horinzontal-menu/c-horinzontal-menu.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/c-horinzontal-menu/c-horinzontal-menu.component.ts ***!
          \********************************************************************/
        /*! exports provided: CHorinzontalMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHorinzontalMenuComponent", function () { return CHorinzontalMenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CHorinzontalMenuComponent = /** @class */ (function () {
                function CHorinzontalMenuComponent() {
                }
                CHorinzontalMenuComponent.prototype.ngOnInit = function () {
                };
                return CHorinzontalMenuComponent;
            }());
            CHorinzontalMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-horinzontal-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-horinzontal-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-horinzontal-menu/c-horinzontal-menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-horinzontal-menu.component.css */ "./src/app/c-horinzontal-menu/c-horinzontal-menu.component.css")).default]
                })
            ], CHorinzontalMenuComponent);
            /***/ 
        }),
        /***/ "./src/app/c-logo/c-logo.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/c-logo/c-logo.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".spotify-logo {\r\n    width: 60%;\r\n    margin: 30px 0 0 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1sb2dvL2MtbG9nby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2MtbG9nby9jLWxvZ28uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcG90aWZ5LWxvZ28ge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogMzBweCAwIDAgMjBweDtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/c-logo/c-logo.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/c-logo/c-logo.component.ts ***!
          \********************************************/
        /*! exports provided: CLogoComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLogoComponent", function () { return CLogoComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CLogoComponent = /** @class */ (function () {
                function CLogoComponent() {
                }
                CLogoComponent.prototype.ngOnInit = function () {
                };
                return CLogoComponent;
            }());
            CLogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-logo',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-logo/c-logo.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-logo.component.css */ "./src/app/c-logo/c-logo.component.css")).default]
                })
            ], CLogoComponent);
            /***/ 
        }),
        /***/ "./src/app/c-menu/c-menu.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/c-menu/c-menu.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".menu-container p {\r\n    color: #B3B3B3;\r\n    font-weight: bold;\r\n    font-size: 13px;\r\n}\r\n.menu-container p:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.menu-icon {\r\n    font-size: 22px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1tZW51L2MtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2MtbWVudS9jLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW5lciBwIHtcclxuICAgIGNvbG9yOiAjQjNCM0IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuLm1lbnUtY29udGFpbmVyIHA6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1lbnUtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/c-menu/c-menu.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/c-menu/c-menu.component.ts ***!
          \********************************************/
        /*! exports provided: CMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CMenuComponent", function () { return CMenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CMenuComponent = /** @class */ (function () {
                function CMenuComponent() {
                }
                CMenuComponent.prototype.ngOnInit = function () {
                };
                return CMenuComponent;
            }());
            CMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-menu/c-menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-menu.component.css */ "./src/app/c-menu/c-menu.component.css")).default]
                })
            ], CMenuComponent);
            /***/ 
        }),
        /***/ "./src/app/c-player/c-player.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/c-player/c-player.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".player-container {\r\n    height: 100%;\r\n    width: 96%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n#player {\r\n\r\n}\r\n.player-buttons {\r\n    padding-top: 0px;\r\n    height: 100px;\r\n\r\n}\r\n.player-button {\r\n    display: inline-block;\r\n    color: #ffffff;\r\n}\r\n.play-pause-container {\r\n    position: relative;\r\n}\r\n.play-button,\r\n.pause-button {\r\n    position: absolute;\r\n    left: 51px;\r\n}\r\n/* .end {\r\n    width: 0%;\r\n}\r\n.start {\r\n    width: 100%;\r\n} */\r\n.py-4 {\r\n    padding: 0 !important;\r\n}\r\n.player-image {\r\n    width: 60px;\r\n    margin-top: 19px;\r\n}\r\n.info-track {\r\n    margin: 28px 0 0 17px;\r\n}\r\n.player-track-name {\r\n    color: #ffffff;\r\n    font-size: 14px;\r\n}\r\n.player-track-name > span:hover {\r\n    border-bottom: 1px solid #ffffff;\r\n    cursor: pointer;\r\n}\r\n.player-track-artist {\r\n    color: rgb(179, 179, 179);\r\n    font-size: 12px;\r\n}\r\n.player-track-artist:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.span-margin {\r\n    margin-left: -13px;\r\n    text-align: left;\r\n}\r\n.icon-command {\r\n    padding-top: 40px;\r\n    font-size: 25px;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1wbGF5ZXIvYy1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkO0FBQ0E7Ozs7O0dBS0c7QUFDSDtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvYy1wbGF5ZXIvYy1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5NiU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcGxheWVyIHtcclxuXHJcbn1cclxuLnBsYXllci1idXR0b25zIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxufVxyXG4ucGxheWVyLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucGxheS1wYXVzZS1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wbGF5LWJ1dHRvbixcclxuLnBhdXNlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA1MXB4O1xyXG59XHJcbi8qIC5lbmQge1xyXG4gICAgd2lkdGg6IDAlO1xyXG59XHJcbi5zdGFydCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG4ucHktNCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBsYXllci1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE5cHg7XHJcbn1cclxuLmluZm8tdHJhY2sge1xyXG4gICAgbWFyZ2luOiAyOHB4IDAgMCAxN3B4O1xyXG59XHJcbi5wbGF5ZXItdHJhY2stbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucGxheWVyLXRyYWNrLW5hbWUgPiBzcGFuOmhvdmVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wbGF5ZXItdHJhY2stYXJ0aXN0IHtcclxuICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnBsYXllci10cmFjay1hcnRpc3Q6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNwYW4tbWFyZ2luIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmljb24tY29tbWFuZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuXHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/c-player/c-player.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/c-player/c-player.component.ts ***!
          \************************************************/
        /*! exports provided: CPlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPlayerComponent", function () { return CPlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CPlayerComponent = /** @class */ (function () {
                function CPlayerComponent(sPath, sData) {
                    this.sPath = sPath;
                    this.sData = sData;
                    // playing: boolean = this.sData.sPlaying;
                    this.playing = this.sData.sPlaying;
                    this.clickedSong = this.sData.sClickedSong;
                    this.id = this.sPath.snapshot.params.id;
                    this.album = this.sData.sSetAlbum(this.id);
                }
                CPlayerComponent.prototype.isPlaying = function () {
                    this.sData.sIsPLaying();
                };
                CPlayerComponent.prototype.playSong = function () {
                    document.getElementById('player').play();
                    document.querySelectorAll(".play-button")[0].className += " d-none";
                    document.querySelectorAll(".pause-button")[0].className = "player-button pause-button";
                    console.log("De pausa a play");
                };
                CPlayerComponent.prototype.pauseSong = function () {
                    document.getElementById('player').pause();
                    document.querySelectorAll(".play-button")[0].className = "player-button play-button";
                    document.querySelectorAll(".pause-button")[0].className += " d-none";
                    console.log("De play a pausa");
                };
                CPlayerComponent.prototype.turnUpVolum = function () {
                    document.getElementById('player').volume += 0.1;
                };
                CPlayerComponent.prototype.turnDownVolum = function () {
                    document.getElementById('player').volume -= 0.1;
                };
                CPlayerComponent.prototype.truquitoTemporal = function () {
                    return this.sData.sSong['link'];
                };
                return CPlayerComponent;
            }());
            CPlayerComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            CPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-player/c-player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-player.component.css */ "./src/app/c-player/c-player.component.css")).default]
                })
            ], CPlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/c-playlists/c-playlists.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/c-playlists/c-playlists.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".playlist-text {\r\n    margin: 15px 0 0 20px;\r\n    color: #B3B3B3;\r\n    font-size: 12px;\r\n}\r\n.add-playlist {\r\n    margin: 15px 0 0 24px;\r\n    color: #B3B3B3;\r\n    position: relative;\r\n}\r\n.add-playlist:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.add-playlist > p > span {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    margin: 0 0 0 15px;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    top: 10px;\r\n}\r\n.add-playlist-button {\r\n    font-size: 38px;\r\n}\r\n.playlist-list {\r\n    width: 75%;\r\n    margin: 20px 0 20px 22px;\r\n    height: 320px;\r\n    overflow: scroll;\r\n}\r\n.playlist-list::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n.playlist-name { \r\n    color: #ffffff;\r\n}\r\n.playlist-name {\r\n    font-size: 13.5px;\r\n    color: #b3b3b3;\r\n    /* font-weight: bold; */\r\n    margin: 0px 0 8px 2px;\r\n}\r\n.playlist-name:hover {\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n}\r\n.playlist-name:focus {\r\n    outline: none;\r\n}\r\n/* Dropdown */\r\n#context-menu {\r\n    z-index: 100;\r\n    height: 0;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    width: 211px;\r\n}\r\n.context-menu {\r\n    background-color: rgb(40, 40, 40);\r\n    height: 79px;\r\n    font-size: 13px !important;\r\n    color: #b3b3b3 !important;\r\n}\r\n.dropdown-item-row {\r\n    width: 100%;\r\n    margin-left: 0px;\r\n}\r\n.dropdown-item-column {\r\n    height: 100%;\r\n    padding: 10px 20px\r\n}\r\n.dp-item:hover::after {\r\n    content:\"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; \r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff;\r\n    opacity: 0.1;\r\n    z-index: 1;\r\n}\r\n.dp-item {\r\n    font-size: 13px !important;\r\n    color: #b3b3b3 !important;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/* .context-menu > .dropdown-item:nth-child(1) {\r\n    padding-top: 15px;\r\n} */\r\n/* Modal */\r\n.modal-playlist{\r\n    z-index: 0;\r\n}\r\n.modal-style {\r\n    margin: 190px auto 0 auto;\r\n}\r\n.close-modal-button > p {\r\n    font-size: 50px;\r\n    color: #ffffff; \r\n    margin: 0 auto;  \r\n}\r\n.close-modal-button > p:hover {\r\n    color: red;\r\n}\r\n.title-modal {\r\n    margin: 10px auto;\r\n}\r\n.title-modal > h1 {\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 0 auto 20px auto;\r\n    font-size: 49px;\r\n}\r\n.main-modal {\r\n    height: 150px;\r\n    background-color: rgb(40, 40, 40);\r\n    width: 450%;\r\n    margin-left: -1000px;\r\n}\r\n.main-modal-container {\r\n    margin-left: 900px;\r\n    background-color: rgb(40, 40, 40);\r\n    width: 100%;\r\n}\r\n.main-modal-container > p {\r\n    color: #ffffff;\r\n    margin-top: 20px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.main-modal-container > input {\r\n    background-color: rgb(40, 40, 40);\r\n    border: none;\r\n    height: 70px;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n.modal-create-button > button{\r\n    margin: 25px auto;  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1wbGF5bGlzdHMvYy1wbGF5bGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsYUFBYTtBQUViO0lBQ0ksWUFBWTtJQUNaLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaO0FBQ0o7QUFDQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osVUFBVTtBQUNkO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7O0dBRUc7QUFFSCxVQUFVO0FBRVY7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jLXBsYXlsaXN0cy9jLXBsYXlsaXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlsaXN0LXRleHQge1xyXG4gICAgbWFyZ2luOiAxNXB4IDAgMCAyMHB4O1xyXG4gICAgY29sb3I6ICNCM0IzQjM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmFkZC1wbGF5bGlzdCB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwIDI0cHg7XHJcbiAgICBjb2xvcjogI0IzQjNCMztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uYWRkLXBsYXlsaXN0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hZGQtcGxheWxpc3QgPiBwID4gc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCAwIDAgMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG4uYWRkLXBsYXlsaXN0LWJ1dHRvbiB7XHJcbiAgICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuLnBsYXlsaXN0LWxpc3Qge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMjBweCAwIDIwcHggMjJweDtcclxuICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcbi5wbGF5bGlzdC1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wbGF5bGlzdC1uYW1lIHsgXHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4ucGxheWxpc3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEzLjVweDtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgICBtYXJnaW46IDBweCAwIDhweCAycHg7XHJcbn1cclxuLnBsYXlsaXN0LW5hbWU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnBsYXlsaXN0LW5hbWU6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4vKiBEcm9wZG93biAqL1xyXG5cclxuI2NvbnRleHQtbWVudSB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiAyMTFweDtcclxufVxyXG4uY29udGV4dC1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcclxuICAgIGhlaWdodDogNzlweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNiM2IzYjMgIWltcG9ydGFudDtcclxufVxyXG4uZHJvcGRvd24taXRlbS1yb3cge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbi5kcm9wZG93bi1pdGVtLWNvbHVtbiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHhcclxufVxyXG4uZHAtaXRlbTpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDsgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBvcGFjaXR5OiAwLjE7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59IFxyXG4uZHAtaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjYjNiM2IzICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4vKiAuY29udGV4dC1tZW51ID4gLmRyb3Bkb3duLWl0ZW06bnRoLWNoaWxkKDEpIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59ICovXHJcblxyXG4vKiBNb2RhbCAqL1xyXG5cclxuLm1vZGFsLXBsYXlsaXN0e1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLm1vZGFsLXN0eWxlIHtcclxuICAgIG1hcmdpbjogMTkwcHggYXV0byAwIGF1dG87XHJcbn1cclxuLmNsb3NlLW1vZGFsLWJ1dHRvbiA+IHAge1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgbWFyZ2luOiAwIGF1dG87ICBcclxufVxyXG4uY2xvc2UtbW9kYWwtYnV0dG9uID4gcDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi50aXRsZS1tb2RhbCB7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG4udGl0bGUtbW9kYWwgPiBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMjBweCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA0OXB4O1xyXG59XHJcbi5tYWluLW1vZGFsIHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XHJcbiAgICB3aWR0aDogNDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTAwMHB4O1xyXG59XHJcbi5tYWluLW1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubWFpbi1tb2RhbC1jb250YWluZXIgPiBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tYWluLW1vZGFsLWNvbnRhaW5lciA+IGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tb2RhbC1jcmVhdGUtYnV0dG9uID4gYnV0dG9ue1xyXG4gICAgbWFyZ2luOiAyNXB4IGF1dG87ICBcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/c-playlists/c-playlists.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/c-playlists/c-playlists.component.ts ***!
          \******************************************************/
        /*! exports provided: CPlaylistsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CPlaylistsComponent", function () { return CPlaylistsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var CPlaylistsComponent = /** @class */ (function () {
                function CPlaylistsComponent(sData) {
                    this.sData = sData;
                    this.arrPlaylist = this.sData.sArrPlaylist;
                    this.clicked = false;
                }
                CPlaylistsComponent.prototype.ngOnInit = function () {
                };
                CPlaylistsComponent.prototype.deletePlaylist = function (id) {
                    this.sData.sDeletePlaylist(id);
                    this.clicked = false;
                };
                CPlaylistsComponent.prototype.showDropdown = function (event, activation, id) {
                    this.styleProperties = {
                        "top": event.pageY - 216 + "px",
                        "left": event.pageX + 13 + "px",
                        "position": "absolute"
                    };
                    this.clicked = activation;
                    event.preventDefault();
                };
                CPlaylistsComponent.prototype.hideDropdown = function (desactivation) {
                    this.clicked = desactivation;
                };
                return CPlaylistsComponent;
            }());
            CPlaylistsComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            CPlaylistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-playlists',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-playlists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-playlists/c-playlists.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-playlists.component.css */ "./src/app/c-playlists/c-playlists.component.css")).default]
                })
            ], CPlaylistsComponent);
            /***/ 
        }),
        /***/ "./src/app/c-section/c-section.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/c-section/c-section.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".single-section {\r\n    margin: 10px 0 42px 0;\r\n}\r\n.section-text {\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-left: 30px !important;\r\n    margin-bottom: 25px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1zZWN0aW9uL2Mtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2Mtc2VjdGlvbi9jLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMCA0MnB4IDA7XHJcbn1cclxuLnNlY3Rpb24tdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcblxyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/c-section/c-section.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/c-section/c-section.component.ts ***!
          \**************************************************/
        /*! exports provided: CSectionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSectionComponent", function () { return CSectionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var CSectionComponent = /** @class */ (function () {
                function CSectionComponent(sData) {
                    this.sData = sData;
                    this.sectionTitles = this.sData.sSectionTitles;
                }
                CSectionComponent.prototype.ngOnInit = function () {
                };
                return CSectionComponent;
            }());
            CSectionComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            CSectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-section',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-section/c-section.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-section.component.css */ "./src/app/c-section/c-section.component.css")).default]
                })
            ], CSectionComponent);
            /***/ 
        }),
        /***/ "./src/app/c-single-cd/c-single-cd.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/c-single-cd/c-single-cd.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".single-album-container {\r\n    margin-left: 30px;\r\n}\r\n.single-cd {\r\n    margin-right: 14px;\r\n}\r\n.single-cd:focus {\r\n    outline: none;\r\n}\r\n.album-img {\r\n    width: 192px;\r\n}\r\n.album-name {\r\n    font-size: 13px;\r\n    color: #ffffff;\r\n    width: 80%;\r\n    font-weight: bold;\r\n    margin: 14px auto 0 auto;\r\n}\r\n.album-name {\r\n    cursor: pointer;\r\n}\r\n.artist-name {\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n    margin-top: 7px;\r\n    font-size: 13px;\r\n    width: auto;\r\n    transition: 0.1s;\r\n}\r\n.artist-name:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.artist-name > span:hover {\r\n    padding-bottom: 2px;\r\n    border-bottom: 1px solid\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1zaW5nbGUtY2QvYy1zaW5nbGUtY2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYy1zaW5nbGUtY2QvYy1zaW5nbGUtY2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtYWxidW0tY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcbi5zaW5nbGUtY2Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xyXG59XHJcbi5zaW5nbGUtY2Q6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYWxidW0taW1nIHtcclxuICAgIHdpZHRoOiAxOTJweDtcclxufVxyXG4uYWxidW0tbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMTRweCBhdXRvIDAgYXV0bztcclxufVxyXG4uYWxidW0tbmFtZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFydGlzdC1uYW1lIHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcbn1cclxuLmFydGlzdC1uYW1lOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hcnRpc3QtbmFtZSA+IHNwYW46aG92ZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZFxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/c-single-cd/c-single-cd.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/c-single-cd/c-single-cd.component.ts ***!
          \******************************************************/
        /*! exports provided: CSingleCdComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSingleCdComponent", function () { return CSingleCdComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var CSingleCdComponent = /** @class */ (function () {
                function CSingleCdComponent(sData) {
                    this.sData = sData;
                    this.arrCds = this.sData.sArrCds;
                }
                CSingleCdComponent.prototype.ngOnInit = function () {
                };
                return CSingleCdComponent;
            }());
            CSingleCdComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            CSingleCdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-single-cd',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-single-cd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-single-cd/c-single-cd.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-single-cd.component.css */ "./src/app/c-single-cd/c-single-cd.component.css")).default]
                })
            ], CSingleCdComponent);
            /***/ 
        }),
        /***/ "./src/app/c-tracklist/c-tracklist.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/c-tracklist/c-tracklist.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".tracklist {\r\n    background-color: rgb(24, 24, 24);\r\n    padding-top: 40px;\r\n}\r\n.track-container {\r\n    width: 90%;\r\n    height: 65px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.track-container:hover {\r\n    cursor: pointer;\r\n}\r\n.track-container:hover .more-tools-icon {\r\n    color: #ffffff;\r\n    margin: 7px 40px 0 0;\r\n}\r\n.track-container:hover::before {\r\n    content:\"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; \r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #ffffff;\r\n    opacity: 0.1;\r\n    z-index: 1;\r\n}\r\n.song-container {\r\n    margin-top: 8px;\r\n    padding-left: 30px;\r\n    padding-right: 31px;\r\n}\r\n@media (max-width: 1200px) {\r\n    .track-container {\r\n        width: 60%;\r\n        margin: 0 auto;  \r\n        padding: 0 0 20px 0;     \r\n    }\r\n}\r\n.track-icon {\r\n    color: #b3b3b3;\r\n    margin-top: 5px;\r\n}\r\n.track-name {\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n}\r\n.track-duration {\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n}\r\n.track-artist {\r\n    color: #b3b3b3;\r\n    padding-left: 33px;\r\n    margin-top: -15px;\r\n    font-size: 14px;\r\n    transition: 0.1s;\r\n\r\n}\r\n.track-artist:hover {\r\n    cursor: pointer;\r\n}\r\n.track-artist > span {\r\n    padding-left: 15px;\r\n}\r\n.track-artist > span:hover {\r\n    padding-bottom: 2px;\r\n    border-bottom: 1px solid;\r\n    color: #ffffff;\r\n}\r\n.track-artist-name {\r\n   \r\n}\r\n.span-artist:hover {\r\n    color: #ffffff;\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n.span-feat:hover {\r\n    color: #ffffff;\r\n    border-bottom: 1px solid #ffffff;\r\n}\r\n.more-tools-icon {\r\n    color: rgb(24, 24, 24);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy10cmFja2xpc3QvYy10cmFja2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLFVBQVU7UUFDVixjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2MtdHJhY2tsaXN0L2MtdHJhY2tsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2tsaXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi50cmFjay1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnRyYWNrLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRyYWNrLWNvbnRhaW5lcjpob3ZlciAubW9yZS10b29scy1pY29uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luOiA3cHggNDBweCAwIDA7XHJcbn0gICAgXHJcbi50cmFjay1jb250YWluZXI6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OlwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwOyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIG9wYWNpdHk6IDAuMTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn0gXHJcbi5zb25nLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMXB4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC50cmFjay1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87ICBcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMjBweCAwOyAgICAgXHJcbiAgICB9XHJcbn0gXHJcbi50cmFjay1pY29uIHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi50cmFjay1uYW1lIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi50cmFjay1kdXJhdGlvbiB7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50cmFjay1hcnRpc3Qge1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRyYW5zaXRpb246IDAuMXM7XHJcblxyXG59XHJcbi50cmFjay1hcnRpc3Q6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFjay1hcnRpc3QgPiBzcGFuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4udHJhY2stYXJ0aXN0ID4gc3Bhbjpob3ZlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLnRyYWNrLWFydGlzdC1uYW1lIHtcclxuICAgXHJcbn1cclxuLnNwYW4tYXJ0aXN0OmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XHJcbn1cclxuLnNwYW4tZmVhdDpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmZmZmO1xyXG59XHJcbi5tb3JlLXRvb2xzLWljb24ge1xyXG4gICAgY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/c-tracklist/c-tracklist.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/c-tracklist/c-tracklist.component.ts ***!
          \******************************************************/
        /*! exports provided: CTracklistComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CTracklistComponent", function () { return CTracklistComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var CTracklistComponent = /** @class */ (function () {
                function CTracklistComponent(sPath, sData) {
                    this.sPath = sPath;
                    this.sData = sData;
                    this.song = this.sData.sSong;
                    this.id = this.sPath.snapshot.params.id;
                    this.album = this.sData.sSetAlbum(this.id);
                }
                CTracklistComponent.prototype.ngOnInit = function () {
                };
                CTracklistComponent.prototype.setSong = function (id, songName) {
                    this.sData.sSetSong(id, songName);
                };
                return CTracklistComponent;
            }());
            CTracklistComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            CTracklistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-c-tracklist',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./c-tracklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/c-tracklist/c-tracklist.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./c-tracklist.component.css */ "./src/app/c-tracklist/c-tracklist.component.css")).default]
                })
            ], CTracklistComponent);
            /***/ 
        }),
        /***/ "./src/app/service/data.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.service.ts ***!
          \*****************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                    this.sSectionTitles = ["Tu música de uso intensivo", "Vuelve a escuchar"];
                    this.sArrPlaylist = [];
                    this.sArrCds = [
                        {
                            id: 1,
                            artist: "Rels B",
                            title: "Happy Birthday Flakko",
                            year: 2019,
                            image: "./assets/albumCover/happybirthdayflakko.jpg",
                            canciones: [
                                { name: "Happy  Birthday Flakko", duration: "0:29", feat: "", link: "RelsB/happybirthdayflakko.mp3" },
                                { name: "¿Y tú qué?", duration: "3:06", feat: "", link: "RelsB/ytuque.mp3" },
                                { name: "Orgullo", duration: "3:06", feat: "", link: "RelsB/orgullo.mp3" },
                                { name: "Sin mirar las señales", duration: "3:01", feat: "", link: "RelsB/sinmirarlasseñales.mp3" },
                                { name: "¿Cómo te va, querida?", duration: "3:28", feat: ", Don Patricio", link: "RelsB/comotevaquerida.mp3" },
                                { name: "La latina", duration: "3:06", feat: "", link: "RelsB/lalatina.mp3" },
                                { name: "Otro cheke", duration: "3:00", feat: ", Duki", link: "RelsB/otrocheke.mp3" },
                                { name: "Si no te veo", duration: "3:27", feat: "", link: "RelsB/sinoteveo.mp3" },
                                { name: "Quédate, te quiero", duration: "1:57", feat: "", link: "RelsB/quedatetequiero.mp3" }
                            ]
                        },
                        {
                            id: 2,
                            artist: "Natos y Waor, Recycled J",
                            title: "Hijos de la Ruina, vol. 2",
                            year: 2019,
                            image: "./assets/albumCover/hijosdelaruina.jpg",
                            canciones: [
                                { name: "Carretera", duration: "3:34", feat: "", link: "NatosyWaor/carretera.mp3" },
                                { name: "In love", duration: "5:28", feat: "", link: "NatosyWaor/inlove.mp3" },
                                { name: "Speed", duration: "4:15", feat: "", link: "NatosyWaor/speed.mp3" },
                                { name: "Agua y aceite", duration: "3:50", feat: "", link: "NatosyWaor/aguayaceite.mp3" },
                                { name: "Carne de cañón", duration: "4:22", feat: "", link: "NatosyWaor/carnedecañon.mp3" },
                                { name: "J'suis HDLR", duration: "3:25", feat: "", link: "NatosyWaor/jsuishdlr.mp3" }
                            ]
                        },
                        {
                            id: 3,
                            artist: "Moonkey",
                            title: "Fuck the World",
                            year: 2019,
                            image: "./assets/albumCover/fucktheworld.jpg",
                            canciones: [
                                { name: "Blood", duration: "3:12", feat: ", Nake", link: "Moonkey/blood.mp3" },
                                { name: "Envidia", duration: "3:12", feat: ", Cypher", link: "Moonkey/envidia.mp3" },
                                { name: "Bad boys", duration: "2:48", feat: ", Goa", link: "Moonkey/badboys.mp3" },
                                { name: "El diablo me aviso", duration: "3:32", feat: ", Marvin Cruz", link: "Moonkey/eldiablomeaviso.mp3" },
                                { name: "Happy Love", duration: "2:08", feat: ", Nake", link: "Moonkey/happylove.mp3" },
                                { name: "Guau guau", duration: "2:43", feat: ", Rare Culture", link: "Moonkey/guauguau.mp3" },
                                { name: "Lil baby", duration: "3:02", feat: ", Sticky M.A.", link: "Moonkey/lilbaby.mp3" },
                                { name: "A veces", duration: "2:53", feat: ", Raul Nadal", link: "Moonkey/aveces.mp3" }
                            ]
                        },
                        {
                            id: 4,
                            artist: "Guitarricadelafuente",
                            title: "Recopilatorio Andaluz",
                            year: 2019,
                            image: "./assets/albumCover/recopilatorioandaluz.jpg",
                            canciones: [
                                { name: "ABC", duration: "2:49", feat: "", link: "Guitarricadelafuente/abc.mp3" },
                                { name: "Vas a encontrarte", duration: "3:31", feat: "", link: "Guitarricadelafuente/vasaencontrarte.mp3" },
                                { name: "Guantanamera", duration: "3:11", feat: "", link: "Guitarricadelafuente/guantanamera.mp3" },
                                { name: "Nana triste", duration: "3:07", feat: "", link: "Guitarricadelafuente/nanatriste.mp3" },
                                { name: "Agua y mezcal", duration: "3:32", feat: "", link: "Guitarricadelafuente/aguaymezcal.mp3" },
                                { name: "Nacido pa ganar", duration: "3:10", feat: "", link: "Guitarricadelafuente/nacidopaganar.mp3" }
                            ]
                        },
                        {
                            id: 5,
                            artist: "Paulo Londra",
                            title: "Home Run",
                            year: 2019,
                            image: "./assets/albumCover/homerun.jpg",
                            canciones: [
                                { name: "Homerun (Intro)", duration: "2:29", feat: "", link: "PauloLondra/homerun.mp3" },
                                { name: "Tal vez", duration: "4:23", feat: "", link: "PauloLondra/talvez.mp3" },
                                { name: "No puedo", duration: "2:55", feat: "", link: "PauloLondra/nopuedo.mp3" },
                                { name: "Adan y Eva", duration: "4:16", feat: "", link: "PauloLondra/adanyeva.mp3" },
                                { name: "Demasiado loco", duration: "2:46", feat: "", link: "PauloLondra/demasiadoloco.mp3" },
                                { name: "Maldita abusadora", duration: "4:10", feat: "", link: "PauloLondra/malditaabusadora.mp3" },
                                { name: "Y yo no sé", duration: "3:10", feat: "", link: "PauloLondra/yyonose.mp3" },
                                { name: "So fresh", duration: "2:47", feat: "", link: "PauloLondra/sofresh.mp3" },
                                { name: "Querido amigo", duration: "3:48", feat: "", link: "PauloLondra/queridoamigo.mp3" },
                                { name: "Romeo y Julieta", duration: "3:01", feat: "", link: "PauloLondra/romeoyjulieta.mp3" },
                                { name: "Por eso vine", duration: "2:58", feat: "", link: "PauloLondra/poresovine.mp3" },
                                { name: "Solo pienso en ti", duration: "4:28", feat: ", Justin Quiles", link: "PauloLondra/solopiensoenti.mp3" },
                                { name: "Forever alone", duration: "3:34", feat: "", link: "PauloLondra/foreveralone.mp3" },
                                { name: "Condenado para el millón", duration: "3:42", feat: "", link: "PauloLondra/condenadoparaelmillon.mp3" },
                                { name: "Nena maldición", duration: "3:47", feat: ", Lenny Tavárez", link: "PauloLondra/nenamaldicion.mp3" },
                                { name: "Dímelo", duration: "3:32", feat: "", link: "PauloLondra/dimelo.mp3" },
                                { name: "Chica paranormal", duration: "3:41", feat: "", link: "PauloLondra/chicaparanormal.mp3" },
                                { name: "Sigan hablando de mi", duration: "2:40", feat: "", link: "PauloLondra/siganhablandodemi.mp3" }
                            ]
                        },
                        {
                            id: 6,
                            artist: "Nicki Nicole",
                            title: "Recuerdos",
                            year: 2019,
                            image: "./assets/albumCover/recuerdos.jpg",
                            canciones: [
                                { name: "7 Lunas", duration: "3:27", feat: "", link: "NickiNicole/7lunas.mp3" },
                                { name: "Cómo Dímelo", duration: "3:20", feat: ", Cazzu", link: "NickiNicole/comodimelo.mp3" },
                                { name: "Nos Encontramos", duration: "2:37", feat: "", link: "NickiNicole/nosencontramos.mp3" },
                                { name: "Tras Vos", duration: "2:50", feat: "", link: "NickiNicole/trasvos.mp3" },
                                { name: "Diva", duration: "3:20", feat: "", link: "NickiNicole/diva.mp3" },
                                { name: "Shorty", duration: "3:25", feat: ", Duki", link: "NickiNicole/shorty.mp3" },
                                { name: "Recuerdos", duration: "2:50", feat: "", link: "NickiNicole/recuerdos.mp3" },
                                { name: "Me Gusta", duration: "3:08", feat: "", link: "NickiNicole/megusta.mp3" },
                                { name: "Plegarias", duration: "3:18", feat: "", link: "NickiNicole/plegarias.mp3" }
                            ]
                        }
                    ];
                    this.sPlaying = false;
                    this.sClickedSong = false;
                    /* Guardo en localStorage toda la informacion necesaria al recargar la pagina */
                    var dataLocalStorage = JSON.parse(localStorage.getItem("data"));
                    this.sArrPlaylist = (dataLocalStorage !== null ? dataLocalStorage : []);
                }
                /* Funcion que me devuelve el album concreto y lo inyecta en */
                DataService.prototype.sSetAlbum = function (id) {
                    for (var i = 0; i < this.sArrCds.length; i++) {
                        if (id == this.sArrCds[i]["id"]) {
                            this.sAlbum = this.sArrCds[i];
                        }
                    }
                    return this.sAlbum;
                };
                /* Funcion que me devuelve la cancion concreta y lo inyecta en c-player para que se reproduzca */
                DataService.prototype.sSetSong = function (id, songName) {
                    var _this = this;
                    this.sArrCds.forEach(function (cd) {
                        if (id == cd["id"]) {
                            cd["canciones"].forEach(function (singleSong) {
                                if (songName == singleSong["name"]) {
                                    _this.sSong = singleSong;
                                    _this.sPlaying = true;
                                }
                            });
                        }
                    });
                    this.sIsPLaying();
                    this.sClickedSong = true;
                };
                /* Duncion que sirve para que el boton de play pause alternen en funcion de si esta sonando o no la musica */
                DataService.prototype.sIsPLaying = function () {
                    if (this.sPlaying === true) {
                        console.log("hola");
                        document.querySelectorAll(".play-button")[0].className += " d-none";
                        document.querySelectorAll(".pause-button")[0].className = "player-button pause-button";
                    }
                };
                /* Funcion que añade un album concreto a la lista de playlists */
                DataService.prototype.sAddAlbumToPlaylists = function (id) {
                    var _loop_1 = function (i) {
                        if (id == this_1.sArrCds[i]["id"]) {
                            if (this_1.sArrPlaylist.length === 0) {
                                this_1.sArrPlaylist.push(this_1.sArrCds[i]);
                                localStorage.setItem("data", JSON.stringify(this_1.sArrPlaylist));
                            }
                            else {
                                var repeatedPlaylist_1 = false;
                                this_1.sArrPlaylist.forEach(function (playlist) {
                                    if (playlist["id"] == id) {
                                        repeatedPlaylist_1 = true;
                                    }
                                });
                                console.log(repeatedPlaylist_1);
                                if (repeatedPlaylist_1 === false) {
                                    this_1.sArrPlaylist.push(this_1.sArrCds[i]);
                                    localStorage.setItem("data", JSON.stringify(this_1.sArrPlaylist));
                                }
                            }
                        }
                    };
                    var this_1 = this;
                    for (var i = 0; i < this.sArrCds.length; i++) {
                        _loop_1(i);
                    }
                };
                /* Funcion que detecta que playlist debe ser borrado y lo elimina tanto de playlists como de localStorage */
                DataService.prototype.sDeletePlaylist = function (id) {
                    var _this = this;
                    this.sArrPlaylist.forEach(function (playlist) {
                        if (id == playlist["id"]) {
                            var index = _this.sArrPlaylist.indexOf(playlist);
                            _this.sArrPlaylist.splice(index, 1);
                            localStorage.setItem("data", JSON.stringify(_this.sArrPlaylist));
                        }
                    });
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/v-home/v-home.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/v-home/v-home.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".home-view {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    font-family: 'Montserrat', sans-serif;\r\n    overflow: hidden;\r\n}\r\n.side-bar-navigator {\r\n    width: 230px;\r\n    background-color: #000000;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.menu {\r\n    padding-top: 30px;\r\n    margin: 0;\r\n}\r\n.menu > div {\r\n    padding-left: 25px;\r\n}\r\n/* Main */\r\n.main-home-container {\r\n    background-color: rgb(24, 24, 24);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n.main-home {\r\n    margin-left: 222px;\r\n}\r\n@media (max-width: 768px) {\r\n    .main-home {\r\n        margin-left: 0;\r\n    }\r\n}\r\n.sections-container {\r\n    margin-left: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1ob21lL3YtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEsU0FBUztBQUVUO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC92LWhvbWUvdi1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS12aWV3IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2lkZS1iYXItbmF2aWdhdG9yIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ubWVudSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubWVudSA+IGRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi8qIE1haW4gKi9cclxuXHJcbi5tYWluLWhvbWUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuLm1haW4taG9tZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjIycHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubWFpbi1ob21lIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG4uc2VjdGlvbnMtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/v-home/v-home.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/v-home/v-home.component.ts ***!
          \********************************************/
        /*! exports provided: VHomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VHomeComponent", function () { return VHomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var VHomeComponent = /** @class */ (function () {
                function VHomeComponent() {
                }
                VHomeComponent.prototype.ngOnInit = function () {
                };
                return VHomeComponent;
            }());
            VHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-v-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-home/v-home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-home.component.css */ "./src/app/v-home/v-home.component.css")).default]
                })
            ], VHomeComponent);
            /***/ 
        }),
        /***/ "./src/app/v-single-cd/v-single-cd.component.css": 
        /*!*******************************************************!*\
          !*** ./src/app/v-single-cd/v-single-cd.component.css ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".home-view {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    font-family: 'Montserrat', sans-serif;\r\n    overflow: hidden;\r\n}\r\n.side-bar-navigator {\r\n    width: 230px;\r\n    background-color: #000000;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.menu {\r\n    padding-top: 30px;\r\n    margin: 0;\r\n}\r\n.menu > div {\r\n    padding-left: 25px;\r\n}\r\n/* Main */\r\n.main-home-container {\r\n    background-color: rgb(24, 24, 24);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-x: hidden;\r\n}\r\n.main-home {\r\n    margin-left: 222px;\r\n}\r\n@media (max-width: 768px) {\r\n    .main-home {\r\n        margin-left: 0;\r\n    }\r\n}\r\n.sections-container {\r\n    margin-left: 15px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1zaW5nbGUtY2Qvdi1zaW5nbGUtY2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBLFNBQVM7QUFFVDtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdi1zaW5nbGUtY2Qvdi1zaW5nbGUtY2QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lLXZpZXcge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5zaWRlLWJhci1uYXZpZ2F0b3Ige1xyXG4gICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcbi5tZW51IHtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5tZW51ID4gZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxufVxyXG5cclxuLyogTWFpbiAqL1xyXG5cclxuLm1haW4taG9tZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0LCAyNCwgMjQpO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG4ubWFpbi1ob21lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjJweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5tYWluLWhvbWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcbi5zZWN0aW9ucy1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/v-single-cd/v-single-cd.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/v-single-cd/v-single-cd.component.ts ***!
          \******************************************************/
        /*! exports provided: VSingleCdComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VSingleCdComponent", function () { return VSingleCdComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var VSingleCdComponent = /** @class */ (function () {
                function VSingleCdComponent(sPath, sData) {
                    this.sPath = sPath;
                    this.sData = sData;
                    this.arrCds = this.sData.sArrCds;
                    this.idmmm = this.sPath.snapshot.params.id;
                }
                VSingleCdComponent.prototype.ngOnInit = function () {
                };
                return VSingleCdComponent;
            }());
            VSingleCdComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            VSingleCdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-v-single-cd',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./v-single-cd.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/v-single-cd/v-single-cd.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./v-single-cd.component.css */ "./src/app/v-single-cd/v-single-cd.component.css")).default]
                })
            ], VSingleCdComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\serra\Desktop\Ejercicios\Spotify\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map