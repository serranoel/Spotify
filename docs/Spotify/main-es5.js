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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"overflow\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"album-info-container\">\n    <img class=\"album-info-image\" src=\"{{album['image']}}\" alt=\"album-image\">\n    <h1 class=\"album-info-title\">{{album['title']}}</h1>\n    <p class=\"album-info-artist\"><span>{{album['artist']}}</span></p>\n    <button class=\"play-button\">REPRODUCIR</button>\n    <p class=\"extra-info\">{{album['year']}}  -  {{album['canciones'].length}} canciones</p>\n    <div class=\"fav-more-buttons\">\n        <i class=\"fas fa-heart float-left\"></i>\n        <i class=\"fas fa-ellipsis-h float-right\"></i>\n    </div>\n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu-container w-100\">\n    <div class=\"row home selected w-100\">\n        <div class=\"col-12\">\n            <p class=\"menu-text\"><i class=\"fab fa-houzz mr-4 menu-icon\"></i>Inicio</p>\n        </div>\n    </div>\n    <div class=\"row search\">\n        <div class=\"col-12\">\n            <p class=\"search-text\"><i class=\"fas fa-search mr-4 menu-icon\"></i>Buscar</p>\n        </div>\n    </div>\n    <div class=\"row library\">\n        <div class=\"col-12\">\n            <p class=\"library-text\"><i class=\"fas fa-compact-disc mr-4 menu-icon\"></i>Tu biblioteca</p>\n        </div>\n    </div>\n</div>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"player-container\">\n    <audio class=\"player\" src=\"../../assets/cds/{{sData.sSong}}\" controls autoplay></audio>\n</div>\n\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<p class=\"playlist-text\">PLAYLISTS</p>\n<div class=\"add-playlist\" data-toggle=\"modal\" data-target=\"#modalCookie1\">\n    <p><i class=\"fas fa-plus-square add-playlist-button\"></i><span>Crear playlist</span> </p>\n</div>\n<div class=\"playlist-list\">\n\n</div>\n\n<!--Modal-->\n<!--Modal: modalCookie-->\n<div class=\"modal fade top modal-playlist\" id=\"modalCookie1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\" data-backdrop=\"true\">\n  <div class=\"modal-dialog modal-frame modal-top modal-notify modal-info modal-style w-100\" role=\"document\">\n    <!--Content-->\n    <div class=\"add-playlist-modal\">\n        <div class=\"row close-modal-button\">\n            <p (click) = \"prueba()\"><i class=\"fas fa-times\"></i></p>\n        </div>\n        <div class=\"row title-modal\">\n            <h1>Crear nueva playlist</h1>\n        </div>\n        <div class=\"row main-modal\">\n            <div class=\"main-modal-container\">\n                <p class=\"main-modal-container-text\">Nombre de tu playlist</p>\n                <input type=\"text\" placeholder=\"Nueva playlist\" autofocus>\n            </div>\n        </div>\n        <div class=\"row modal-create-button\">\n            <button>Crear</button>\n        </div>    \n    </div>\n    <!--/.Content-->\n  </div>\n</div>\n<!--Modal: modalCookie-->\n<!--Section: Live preview-->\n\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tracklist\">\n    <div class=\"track-container\" (click) = \"setSong(id, song['name'])\" *ngFor = \"let song of album['canciones']\">\n        <div class=\"row\">\n            <div class=\"col-12 ml-0\">\n                <i class=\"fas fa-music float-left mr-3 track-icon\"></i>\n                <p class=\"float-left track-name\">{{song[\"name\"]}}</p>\n                <p class=\"float-right track-duration\">{{song[\"duration\"]}}</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <p class=\"track-artist float-left\">{{album[\"artist\"]}}</p>\n            </div>\n        </div>\n    </div>       \n</div>\n\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-view d-flex flex-row\">\n    <div class=\"side-bar-navigator\">\n        <div class=\"sidebar-container\">\n            <div class=\"row logo-container w-100\">\n                <div class=\"col-12 w-100\">\n                    <app-c-logo></app-c-logo>\n                </div>\n            </div>\n            <div class=\"row menu\">\n                <div class=\"col-12\">\n                    <app-c-menu></app-c-menu>\n                </div>\n            </div>\n            <div class=\"row playlists-container\">\n                <div class=\"col-12\">\n                    <app-c-playlists></app-c-playlists>\n                </div>\n            </div>\n        </div>        \n    </div>\n    <div class=\"main-home-container\">\n        <div class=\"main-home\">\n            <div class=\"row\">\n                <div class=\"col-12\">\n                    <app-c-horinzontal-menu></app-c-horinzontal-menu>\n                </div>\n            </div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-12 text-center\">\n                        <app-c-section></app-c-section>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"player\">\n        <app-c-player></app-c-player>\n    </div>       \n</div>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"single-album-container\">\n    <div class=\"side-bar-navigator\">\n        <div class=\"sidebar-container\">\n            <div class=\"row logo-container w-100\">\n                <div class=\"col-12 w-100\">\n                    <app-c-logo></app-c-logo>\n                </div>\n            </div>\n            <div class=\"row menu\">\n                <div class=\"col-12\">\n                    <app-c-menu></app-c-menu>\n                </div>\n            </div>\n            <div class=\"row playlists-container\">\n                <div class=\"col-12\">\n                    <app-c-playlists></app-c-playlists>\n                </div>\n            </div>\n        </div>        \n    </div>\n    <div class=\"main-home-container\">\n        <div class=\"main-home\">\n            <div class=\"row\">\n                <div class=\"col-12 col-xl-5\">\n                    <app-c-cd-info></app-c-cd-info>\n                </div>\n                <div class=\"col-12 col-xl-7 text-center\">\n                    <app-c-tracklist></app-c-tracklist>    \n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"player\">\n        <app-c-player></app-c-player>\n    </div>       \n</div>");
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
            /* harmony default export */ __webpack_exports__["default"] = (".overflow {\r\n    overflow-x: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVyZmxvdyB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn0iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".album-info-container {\r\n    height: 100vh;\r\n    text-align: center;\r\n}\r\n.album-info-image {\r\n    width: 60%;\r\n    margin-top: 30px;\r\n}\r\n.album-info-title {\r\n    color: #ffffff;\r\n    font-size: 26px;\r\n    margin: 12px 0 3px 0;\r\n    font-weight: bold;\r\n}\r\n.album-info-artist {\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n    margin-top: 3px;\r\n    font-size: 16px;\r\n    width: auto;\r\n}\r\n.album-info-artist:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.album-info-artist >span:hover {\r\n    padding-bottom: 2px;\r\n    border-bottom: 1px solid;\r\n}\r\n.play-button {\r\n    color: #ffffff;\r\n    background-color: rgb(29, 185, 84);\r\n    border: none;\r\n    font-size: 14px;\r\n    padding: 8px 45px;\r\n    border-radius: 20%;\r\n    border-radius: 90px 90px 90px 90px;\r\n    -moz-border-radius: 90px 90px 90px 90px;\r\n    -webkit-border-radius: 90px 90px 90px 90px;\r\n    margin-top: 20px;\r\n    transition: .1s;\r\n}\r\n.play-button:hover {\r\n    background-color: rgb(30, 215, 96);\r\n    transform: scale(1.025);\r\n}\r\n.play-button:focus {\r\n    outline: none;\r\n}\r\n.extra-info {\r\n    color: #b3b3b3;\r\n    font-size: 14px;\r\n    font-weight: bold;    \r\n    margin-top: 8px;\r\n}\r\n.dot {\r\n    font-size: 3px;\r\n    margin: 0 10px 5px 10px;\r\n    padding-bottom: 30px;\r\n}\r\n.fav-more-buttons {\r\n    margin: 0 auto;\r\n    margin-top: 45px;\r\n    width: 75px;\r\n}\r\n.fav-more-buttons > i{\r\n    font-size: 20px;\r\n    color: #ffffff;\r\n    transition: .1s\r\n}\r\n.fav-more-buttons > i:hover {\r\n    transform: scale(1.1);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1jZC1pbmZvL2MtY2QtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QywwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jLWNkLWluZm8vYy1jZC1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxidW0taW5mby1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYWxidW0taW5mby1pbWFnZSB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uYWxidW0taW5mby10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbjogMTJweCAwIDNweCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmFsYnVtLWluZm8tYXJ0aXN0IHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG4uYWxidW0taW5mby1hcnRpc3Q6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFsYnVtLWluZm8tYXJ0aXN0ID5zcGFuOmhvdmVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbn1cclxuLnBsYXktYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI5LCAxODUsIDg0KTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDhweCA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTBweCA5MHB4IDkwcHggOTBweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOTBweCA5MHB4IDkwcHggOTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOTBweCA5MHB4IDkwcHggOTBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMXM7XHJcbn1cclxuLnBsYXktYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMCwgMjE1LCA5Nik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDI1KTtcclxufVxyXG4ucGxheS1idXR0b246Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uZXh0cmEtaW5mbyB7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgICBcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxufVxyXG4uZG90IHtcclxuICAgIGZvbnQtc2l6ZTogM3B4O1xyXG4gICAgbWFyZ2luOiAwIDEwcHggNXB4IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG4uZmF2LW1vcmUtYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxufVxyXG4uZmF2LW1vcmUtYnV0dG9ucyA+IGl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRyYW5zaXRpb246IC4xc1xyXG59XHJcbi5mYXYtbW9yZS1idXR0b25zID4gaTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".player-container {\r\n    height: 100%;\r\n    width: 50%;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\n.player {\r\n    margin-top: 23px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1wbGF5ZXIvYy1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYy1wbGF5ZXIvYy1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucGxheWVyIHtcclxuICAgIG1hcmdpbi10b3A6IDIzcHg7XHJcbn0iXX0= */");
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
            var CPlayerComponent = /** @class */ (function () {
                function CPlayerComponent(sData) {
                    this.sData = sData;
                }
                CPlayerComponent.prototype.changeSong = function () {
                };
                return CPlayerComponent;
            }());
            CPlayerComponent.ctorParameters = function () { return [
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
            /* harmony default export */ __webpack_exports__["default"] = (".playlist-text {\r\n    margin: 15px 0 0 20px;\r\n    color: #B3B3B3;\r\n    font-size: 12px;\r\n}\r\n.add-playlist {\r\n    margin: 15px 0 0 24px;\r\n    color: #B3B3B3;\r\n    position: relative;\r\n}\r\n.add-playlist:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.add-playlist > p > span {\r\n    font-size: 12px;\r\n    font-weight: bold;\r\n    margin: 0 0 0 15px;\r\n    font-size: 13px;\r\n    position: absolute;\r\n    top: 10px;\r\n}\r\n.add-playlist-button {\r\n    font-size: 38px;\r\n}\r\n.playlist-list {\r\n    border: 1px solid red;\r\n    width: 75%;\r\n    margin: 20px 0 20px 22px;\r\n    height: 320px;\r\n}\r\n/* Modal */\r\n.modal-playlist{\r\n    z-index: 0;\r\n}\r\n.modal-style {\r\n    margin: 190px auto 0 auto;\r\n}\r\n.close-modal-button > p {\r\n    font-size: 50px;\r\n    color: #ffffff; \r\n    margin: 0 auto;  \r\n}\r\n.close-modal-button > p:hover {\r\n    color: red;\r\n}\r\n.title-modal {\r\n    margin: 10px auto;\r\n}\r\n.title-modal > h1 {\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    margin: 0 auto 20px auto;\r\n    font-size: 49px;\r\n}\r\n.main-modal {\r\n    height: 150px;\r\n    background-color: rgb(40, 40, 40);\r\n    width: 450%;\r\n    margin-left: -1000px;\r\n}\r\n.main-modal-container {\r\n    margin-left: 900px;\r\n    background-color: rgb(40, 40, 40);\r\n    width: 100%;\r\n}\r\n.main-modal-container > p {\r\n    color: #ffffff;\r\n    margin-top: 20px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n}\r\n.main-modal-container > input {\r\n    background-color: rgb(40, 40, 40);\r\n    border: none;\r\n    height: 70px;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n.modal-create-button > button{\r\n    margin: 25px auto;  \r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1wbGF5bGlzdHMvYy1wbGF5bGlzdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsYUFBYTtBQUNqQjtBQUVBLFVBQVU7QUFFVjtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2MtcGxheWxpc3RzL2MtcGxheWxpc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3QtdGV4dCB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XHJcbiAgICBjb2xvcjogI0IzQjNCMztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYWRkLXBsYXlsaXN0IHtcclxuICAgIG1hcmdpbjogMTVweCAwIDAgMjRweDtcclxuICAgIGNvbG9yOiAjQjNCM0IzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hZGQtcGxheWxpc3Q6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmFkZC1wbGF5bGlzdCA+IHAgPiBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwIDAgMCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcbi5hZGQtcGxheWxpc3QtYnV0dG9uIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxufVxyXG4ucGxheWxpc3QtbGlzdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMjBweCAyMnB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxufVxyXG5cclxuLyogTW9kYWwgKi9cclxuXHJcbi5tb2RhbC1wbGF5bGlzdHtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5tb2RhbC1zdHlsZSB7XHJcbiAgICBtYXJnaW46IDE5MHB4IGF1dG8gMCBhdXRvO1xyXG59XHJcbi5jbG9zZS1tb2RhbC1idXR0b24gPiBwIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmOyBcclxuICAgIG1hcmdpbjogMCBhdXRvOyAgXHJcbn1cclxuLmNsb3NlLW1vZGFsLWJ1dHRvbiA+IHA6aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG4udGl0bGUtbW9kYWwge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbn1cclxuLnRpdGxlLW1vZGFsID4gaDEge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDIwcHggYXV0bztcclxuICAgIGZvbnQtc2l6ZTogNDlweDtcclxufVxyXG4ubWFpbi1tb2RhbCB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xyXG4gICAgd2lkdGg6IDQ1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwMDBweDtcclxufVxyXG4ubWFpbi1tb2RhbC1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1haW4tbW9kYWwtY29udGFpbmVyID4gcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubWFpbi1tb2RhbC1jb250YWluZXIgPiBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDAsIDQwLCA0MCk7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubW9kYWwtY3JlYXRlLWJ1dHRvbiA+IGJ1dHRvbntcclxuICAgIG1hcmdpbjogMjVweCBhdXRvOyAgXHJcbn1cclxuXHJcbiJdfQ== */");
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
                }
                CPlaylistsComponent.prototype.ngOnInit = function () {
                };
                CPlaylistsComponent.prototype.addPlaylist = function () {
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
            /* harmony default export */ __webpack_exports__["default"] = (".single-section {\r\n    margin-top: 10px;\r\n}\r\n.section-text {\r\n    color: #ffffff;\r\n    font-weight: bold;\r\n    font-size: 30px;\r\n    margin-left: 30px !important;\r\n    margin-bottom: 25px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1zZWN0aW9uL2Mtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsbUJBQW1COztBQUV2QiIsImZpbGUiOiJzcmMvYXBwL2Mtc2VjdGlvbi9jLXNlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaW5nbGUtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5zZWN0aW9uLXRleHQge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG5cclxufSJdfQ== */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".single-album-container {\r\n    margin-left: 30px;\r\n}\r\n.single-cd {\r\n    margin-right: 14px;\r\n}\r\n.single-cd:focus {\r\n    outline: none;\r\n}\r\n.album-img {\r\n    width: 160px;\r\n}\r\n.album-name {\r\n    font-size: 13px;\r\n    color: #ffffff;\r\n    width: 80%;\r\n    font-weight: bold;\r\n    margin: 14px auto 0 auto;\r\n}\r\n.album-name {\r\n    cursor: pointer;\r\n}\r\n.artist-name {\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n    margin-top: 7px;\r\n    font-size: 13px;\r\n    width: auto;\r\n}\r\n.artist-name:hover {\r\n    color: #ffffff;\r\n    cursor: pointer;\r\n}\r\n.artist-name > span:hover {\r\n    padding-bottom: 2px;\r\n    border-bottom: 1px solid\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy1zaW5nbGUtY2QvYy1zaW5nbGUtY2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jLXNpbmdsZS1jZC9jLXNpbmdsZS1jZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1hbGJ1bS1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuLnNpbmdsZS1jZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE0cHg7XHJcbn1cclxuLnNpbmdsZS1jZDpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5hbGJ1bS1pbWcge1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG59XHJcbi5hbGJ1bS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAxNHB4IGF1dG8gMCBhdXRvO1xyXG59XHJcbi5hbGJ1bS1uYW1lIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYXJ0aXN0LW5hbWUge1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG59XHJcbi5hcnRpc3QtbmFtZTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYXJ0aXN0LW5hbWUgPiBzcGFuOmhvdmVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWRcclxufVxyXG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".tracklist {\r\n    height: 90vh;\r\n    background-color: rgb(24, 24, 24);\r\n    padding-top: 40px;\r\n}\r\n.track-container {\r\n    width: 90%;\r\n    height: 60px;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n.track-container:hover {\r\n    cursor: pointer;\r\n}\r\n/* .track-container:hover::after {\r\n    content:\"\";\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%;\r\n    background: #ffffff;\r\n    opacity: 0.3;\r\n    z-index:-1;\r\n  } */\r\n@media (max-width: 1200px) {\r\n    .track-container {\r\n        width: 60%;\r\n        margin: 0 auto;       \r\n    }\r\n}\r\n.track-icon {\r\n    color: #b3b3b3;\r\n    margin-top: 5px;\r\n}\r\n.track-name {\r\n    color: #ffffff;\r\n    font-size: 18px;\r\n}\r\n.track-duration {\r\n    color: #b3b3b3;\r\n    font-weight: bold;\r\n}\r\n.track-artist {\r\n    color: #b3b3b3;\r\n    padding-left: 33px;\r\n    margin-top: -15px;\r\n    font-size: 14px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYy10cmFja2xpc3QvYy10cmFja2xpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7Ozs7Ozs7OztLQVVLO0FBQ0w7SUFDSTtRQUNJLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2MtdHJhY2tsaXN0L2MtdHJhY2tsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2tsaXN0IHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG59XHJcbi50cmFjay1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLnRyYWNrLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyogLnRyYWNrLWNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgei1pbmRleDotMTtcclxuICB9ICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIC50cmFjay1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87ICAgICAgIFxyXG4gICAgfVxyXG59IFxyXG4udHJhY2staWNvbiB7XHJcbiAgICBjb2xvcjogI2IzYjNiMztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4udHJhY2stbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4udHJhY2stZHVyYXRpb24ge1xyXG4gICAgY29sb3I6ICNiM2IzYjM7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udHJhY2stYXJ0aXN0IHtcclxuICAgIGNvbG9yOiAjYjNiM2IzO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */");
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
                    this.sArrPlaylist = {
                        "playlists": [],
                    };
                    this.sArrCds = [
                        {
                            id: 1,
                            artist: "Rels B",
                            title: "Happy Birthday Flakko",
                            year: 2019,
                            image: "../../assets/albumCover/happybirthdayflakko.jpg",
                            canciones: [
                                { name: "Happy  Birthday Flakko", duration: "0:29", link: "RelsB/happybirthdayflakko.mp3" },
                                { name: "¿Y tú qué?", duration: "3:06", link: "RelsB/ytuque.mp3" },
                                { name: "Orgullo", duration: "3:06", link: "RelsB/orgullo.mp3" },
                                { name: "Sin mirar las señales", duration: "3:01", link: "RelsB/sinmirarlasseñales.mp3" },
                                { name: "¿Cómo te va, querida?", duration: "3:28", link: "RelsB/comotevaquerida.mp3" },
                                { name: "La latina", duration: "3:06", link: "RelsB/lalatina.mp3" },
                                { name: "Otro cheke", duration: "3:00", link: "RelsB/otrocheke.mp3" },
                                { name: "Si no te veo", duration: "3:27", link: "RelsB/sinoteveo.mp3" },
                                { name: "Quédate, te quiero", duration: "1:57", link: "RelsB/quedatetequiero.mp3" }
                            ]
                        },
                        {
                            id: 2,
                            artist: "Natos y Waor, Recycled J",
                            title: "Hijos de la Ruina, vol. 2",
                            year: 2019,
                            image: "../../assets/albumCover/hijosdelaruina.jpg",
                            canciones: [
                                { name: "Carretera", duration: "3:34", link: "NatosyWaor/carretera.mp3" },
                                { name: "In love", duration: "5:28", link: "NatosyWaor/inlove.mp3" },
                                { name: "Speed", duration: "4:15", link: "NatosyWaor/speed.mp3" },
                                { name: "Agua y aceite", duration: "3:50", link: "NatosyWaor/aguayaceite.mp3" },
                                { name: "Carne de cañón", duration: "4:22", link: "NatosyWaor/carnedecañon.mp3" },
                                { name: "J'suis HDLR", duration: "3:25", link: "NatosyWaor/jsuishdlr.mp3" }
                            ]
                        },
                        {
                            id: 3,
                            artist: "Moonkey",
                            title: "Fuck the World",
                            year: 2019,
                            image: "../../assets/albumCover/fucktheworld.jpg",
                            canciones: [
                                { name: "Blood", duration: "3:12", link: "Moonkey/blood.mp3" },
                                { name: "Envidia", duration: "3:12", link: "Moonkey/envidia.mp3" },
                                { name: "Bad boys", duration: "2:48", link: "Moonkey/badboys.mp3" },
                                { name: "El diablo me aviso", duration: "3:32", link: "Moonkey/eldiablomeaviso.mp3" },
                                { name: "Happy Love", duration: "2:08", link: "Moonkey/happylove.mp3" },
                                { name: "Guau guau", duration: "2:43", link: "Moonkey/guauguau.mp3" },
                                { name: "Lil baby", duration: "3:02", link: "Moonkey/lilbaby.mp3" },
                                { name: "A veces", duration: "2:53", link: "Moonkey/aveces.mp3" }
                            ]
                        },
                        {
                            id: 4,
                            artist: "Guitarricadelafuente",
                            title: "Recopilatorio Andaluz",
                            year: 2019,
                            image: "../../assets/albumCover/recopilatorioandaluz.jpg",
                            canciones: [
                                { name: "ABC", duration: "2:49", link: "Guitarricadelafuente/abc.mp3" },
                                { name: "Vas a encontrarte", duration: "3:31", link: "Guitarricadelafuente/vasaencontrarte.mp3" },
                                { name: "Guantanamera", duration: "3:11", link: "Guitarricadelafuente/guantanamera.mp3" },
                                { name: "Nana triste", duration: "3:07", link: "Guitarricadelafuente/nanatriste.mp3" },
                                { name: "Agua y mezcal", duration: "3:32", link: "Guitarricadelafuente/aguaymezcal.mp3" },
                                { name: "Nacido pa ganar", duration: "3:10", link: "Guitarricadelafuente/nacidopaganar.mp3" }
                            ]
                        },
                        {
                            id: 5,
                            artist: "Paulo Londra",
                            title: "Home Run",
                            year: 2019,
                            image: "../../assets/albumCover/homerun.jpg",
                            canciones: [
                                { name: "Homerun (Intro)", duration: "2:29", link: "PauloLondra/.mp3" },
                                { name: "Tal vez", duration: "4:23", link: "PauloLondra/.mp3" },
                                { name: "No puedo", duration: "2:55", link: "PauloLondra/.mp3" },
                                { name: "Adan y Eva", duration: "4:16", link: "PauloLondra/.mp3" },
                                { name: "Demasiado loco", duration: "2:46", link: "PauloLondra/.mp3" },
                                { name: "Maldita abusadora", duration: "4:10", link: "PauloLondra/.mp3" },
                                { name: "Y yo no sé", duration: "3:10", link: "PauloLondra/.mp3" },
                                { name: "So fresh", duration: "2:47", link: "PauloLondra/.mp3" },
                                { name: "Querido amigo", duration: "3:48", link: "PauloLondra/.mp3" },
                                { name: "Romeo y Julieta", duration: "3:01", link: "PauloLondra/.mp3" },
                                { name: "Por eso vine", duration: "2:58", link: "PauloLondra/.mp3" },
                                { name: "Solo pienso en ti", duration: "4:28", link: "PauloLondra/.mp3" },
                                { name: "Forever alone", duration: "3:34", link: "PauloLondra/.mp3" },
                                { name: "Condenado para el millón", duration: "3:42", link: "PauloLondra/.mp3" },
                                { name: "Nena maldición", duration: "3:47", link: "PauloLondra/.mp3" },
                                { name: "Dímelo", duration: "3:32", link: "PauloLondra/.mp3" },
                                { name: "Chica paranormal", duration: "3:41", link: "PauloLondra/.mp3" },
                                { name: "Sigan hablando de mi", duration: "2:40", link: "PauloLondra/.mp3" }
                            ]
                        }
                    ];
                    var dataLocalStorage = JSON.parse(localStorage.getItem("data"));
                    this.sArrPlaylist = (dataLocalStorage !== null ? dataLocalStorage : []);
                }
                DataService.prototype.sSetAlbum = function (id) {
                    for (var i = 0; i < this.sArrCds.length; i++) {
                        if (id == this.sArrCds[i]["id"]) {
                            this.sAlbum = this.sArrCds[i];
                        }
                    }
                    return this.sAlbum;
                };
                DataService.prototype.sSetSong = function (id, songName) {
                    var _this = this;
                    this.sArrCds.forEach(function (cd) {
                        if (id == cd["id"]) {
                            cd["canciones"].forEach(function (singleSong) {
                                if (songName == singleSong["name"]) {
                                    _this.sSong = singleSong["link"];
                                    console.log(_this.sSong);
                                }
                            });
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
            /* harmony default export */ __webpack_exports__["default"] = (".home-view {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    font-family: 'Montserrat', sans-serif;\r\n    overflow: hidden;\r\n}\r\n.side-bar-navigator {\r\n    width: 230px;\r\n    background-color: #000000;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.menu {\r\n    padding-top: 30px;\r\n    margin: 0;\r\n}\r\n.menu > div {\r\n    padding-left: 25px;\r\n}\r\n/* Main */\r\n.main-home-container {\r\n    background-color: rgb(24, 24, 24);\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: scroll;\r\n   \r\n}\r\n.main-home {\r\n    margin-left: 222px;\r\n}\r\n/* Player */\r\n.player {\r\n    width: 100vw;\r\n    height: 100px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgb(40, 40, 40);\r\n    z-index: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1ob21lL3YtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEsU0FBUztBQUVUO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUEsV0FBVztBQUVYO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU87SUFDUCxpQ0FBaUM7SUFDakMsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdi1ob21lL3YtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtdmlldyB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnNpZGUtYmFyLW5hdmlnYXRvciB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLm1lbnUge1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm1lbnUgPiBkaXYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcblxyXG4ubWFpbi1ob21lLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQsIDI0LCAyNCk7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICBcclxufVxyXG4ubWFpbi1ob21lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjJweDtcclxufVxyXG5cclxuLyogUGxheWVyICovXHJcblxyXG4ucGxheWVyIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQwLCA0MCwgNDApO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4iXX0= */");
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
            /* harmony default export */ __webpack_exports__["default"] = (".home-view {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    font-family: 'Montserrat', sans-serif;\r\n    overflow: hidden;\r\n}\r\n.side-bar-navigator {\r\n    width: 230px;\r\n    background-color: #000000;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n.menu {\r\n    padding-top: 30px;\r\n    margin: 0;\r\n}\r\n.menu > div {\r\n    padding-left: 25px;\r\n}\r\n/* Main */\r\n.main-home-container {\r\n    background-color: rgb(24, 24, 24);\r\n    width: 100vw;\r\n}\r\n.main-home {\r\n    margin-left: 222px;\r\n    height: 100vh;\r\n}\r\n/* Player */\r\n.player {\r\n    width: 100vw;\r\n    height: 100px;\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: rgb(40, 40, 40);\r\n    z-index: 2;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdi1zaW5nbGUtY2Qvdi1zaW5nbGUtY2QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBLFNBQVM7QUFFVDtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUVBLFdBQVc7QUFFWDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxPQUFPO0lBQ1AsaUNBQWlDO0lBQ2pDLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Ytc2luZ2xlLWNkL3Ytc2luZ2xlLWNkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS12aWV3IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uc2lkZS1iYXItbmF2aWdhdG9yIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ubWVudSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ubWVudSA+IGRpdiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi8qIE1haW4gKi9cclxuXHJcbi5tYWluLWhvbWUtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNCwgMjQsIDI0KTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxufVxyXG4ubWFpbi1ob21lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMjJweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIFBsYXllciAqL1xyXG5cclxuLnBsYXllciB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuIl19 */");
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