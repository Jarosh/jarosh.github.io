function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<main>\n  <h1>Display Rules</h1>\n  <app-rules-group\n    title=\"Inclusion Rules\"\n    subtitle=\"Where would you like to display your campaign?\"\n  ></app-rules-group>\n  <app-rules-group\n    blacklisted=\"true\"\n    title=\"Exclusion Rules\"\n    subtitle=\"Where would you like to NOT display your campaign?\"\n  ></app-rules-group>\n</main>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rule-entry/rule-entry.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rule-entry/rule-entry.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRuleEntryRuleEntryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [formGroup]=\"ruleForm\">\n  <div class=\"location\">\n    <select formControlName=\"location\" (change)=\"changeLocation(ruleForm.controls.location.value)\">\n      <option *ngFor=\"let location of RuleLocation | keyvalue: keepEnumSorting\" [ngValue]=\"location.value\">\n        {{ RuleLocationNames[location.value] }}\n      </option>\n    </select>\n  </div>\n  <div *ngIf=\"ruleForm.controls.location.value === RuleLocation.custom\" class=\"matching\">\n    <select formControlName=\"matching\">\n      <option *ngFor=\"let matching of RuleMatching | keyvalue: keepEnumSorting\" [ngValue]=\"matching.value\">\n        {{ RuleMatchingNames[matching.value] }}\n      </option>\n    </select>\n  </div>\n  <div *ngIf=\"ruleForm.controls.location.value === RuleLocation.custom\" class=\"pattern\">\n    <input\n      type=\"text\"\n      formControlName=\"pattern\"\n      placeholder=\"Type a full or partial URL\"\n      [ngClass]=\"{ 'is-invalid': submitted && ticket.controls.name.errors }\"\n    />\n    <div class=\"error\" [hidden]=\"ruleForm.controls.pattern.valid || ruleForm.controls.pattern.untouched\">\n      URL is Missing\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button type=\"button\" class=\"remove\" (click)=\"removeRule()\">\n      &times;\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rules-group/rules-group.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/rules-group/rules-group.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRulesGroupRulesGroupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"rulesForm\">\n  <h3>{{ title }}</h3>\n  <p>{{ subtitle }}</p>\n  <ng-container *ngFor=\"let rule of rulesForm.controls; let i = index\">\n    <app-rule-entry\n      [index]=\"i\"\n      [ruleForm]=\"rule\"\n      (onRemoveRule)=\"removeRule($event)\"\n    ></app-rule-entry>\n    <div *ngIf=\"i < rulesForm.controls.length - 1\" class=\"rules-divider\">OR</div>\n  </ng-container>\n  <button type=\"button\" (click)=\"appendRule()\">\n    New Rule\n  </button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

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

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
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

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  box-shadow: 0 0 8px #CCC;\n  display: block;\n  max-width: 1000px;\n  margin: auto;\n  border-radius: 5px;\n  background: #FFF;\n}\n:host > main {\n  padding-bottom: 1em;\n}\n:host > main h1 {\n  margin: 0 0 1em;\n  padding: 1.2em 1.2em 1.6em;\n  border-bottom: 1px solid #EEE;\n  font-size: 15px;\n  font-weight: 500;\n  color: #555;\n}\n:host > main app-rules-group {\n  box-shadow: 1px 1px 5px #DDD;\n  display: block;\n  margin: 1.2em 1em 0;\n  padding: 1.2em;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL0pEL21vcnBoZXVzb25lLXRlc3QtdGFzay9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL0pEL21vcnBoZXVzb25lLXRlc3QtdGFzay9zcmMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQ01JLHdCQUFBO0VESkYsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUVDRjtBRkNFO0VBQ0UsbUJBQUE7QUVDSjtBRkNJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FFQ047QUZFSTtFQ2RBLDRCQUFBO0VEZ0JFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRUVOIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vbWl4aW5zJztcblxuOmhvc3Qge1xuICBAaW5jbHVkZSBib3gtc2hhZG93KDAsIDAsIDhweCwgI0NDQyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG5cbiAgPiBtYWluIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuXG4gICAgaDEge1xuICAgICAgbWFyZ2luOiAwIDAgMWVtO1xuICAgICAgcGFkZGluZzogMS4yZW0gMS4yZW0gMS42ZW07XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VFRTtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICB9XG5cbiAgICBhcHAtcnVsZXMtZ3JvdXAge1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdygxcHgsIDFweCwgNXB4LCAjREREKTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiAxLjJlbSAxZW0gMDtcbiAgICAgIHBhZGRpbmc6IDEuMmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGJveC1zaGFkb3coJHRvcCwgJGxlZnQsICRibHVyLCAkY29sb3IsICRpbnNldDogZmFsc2UpIHtcbiAgQGlmICRpbnNldCB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAkdG9wICRsZWZ0ICRibHVyICRjb2xvcjtcbiAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6IGluc2V0ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICB9IEBlbHNlIHtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR0b3AgJGxlZnQgJGJsdXIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHRvcCAkbGVmdCAkYmx1ciAkY29sb3I7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgOHB4ICNDQ0M7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDhweCAjQ0NDO1xuICBib3gtc2hhZG93OiAwIDAgOHB4ICNDQ0M7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG59XG46aG9zdCA+IG1haW4ge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuOmhvc3QgPiBtYWluIGgxIHtcbiAgbWFyZ2luOiAwIDAgMWVtO1xuICBwYWRkaW5nOiAxLjJlbSAxLjJlbSAxLjZlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFRUU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM1NTU7XG59XG46aG9zdCA+IG1haW4gYXBwLXJ1bGVzLWdyb3VwIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDVweCAjREREO1xuICAtbW96LWJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNEREQ7XG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICNEREQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEuMmVtIDFlbSAwO1xuICBwYWRkaW5nOiAxLjJlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'morpheusone-test-task';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_rules_group_rules_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/rules-group/rules-group.component */
    "./src/app/components/rules-group/rules-group.component.ts");
    /* harmony import */


    var _components_rule_entry_rule_entry_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/rule-entry/rule-entry.component */
    "./src/app/components/rule-entry/rule-entry.component.ts");
    /* harmony import */


    var _services_rules_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./services/rules.service */
    "./src/app/services/rules.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_rules_group_rules_group_component__WEBPACK_IMPORTED_MODULE_6__["RulesGroupComponent"], _components_rule_entry_rule_entry_component__WEBPACK_IMPORTED_MODULE_7__["RuleEntryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: [_services_rules_service__WEBPACK_IMPORTED_MODULE_8__["RulesService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/rule-entry/rule-entry.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/rule-entry/rule-entry.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRuleEntryRuleEntryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host > div {\n  display: flex;\n  position: relative;\n  max-width: 800px;\n  padding-right: 1em;\n}\n:host > div > div {\n  padding-right: 1.2em;\n}\n:host > div > div.location, :host > div > div.matching {\n  width: 25%;\n}\n:host > div > div.pattern {\n  width: 45%;\n}\n:host > div > div.actions {\n  width: 5%;\n  padding: 0.4em 0;\n}\n:host > div > div > .error {\n  padding: 1em 1.5em;\n  border-radius: 4px;\n  font-size: 85%;\n  font-weight: 500;\n  color: #85464F;\n  background: #F9D1D4;\n}\n:host > div button.remove {\n  width: 1.2em;\n  height: 1.2em;\n  padding: 0;\n  border: 2px solid #999;\n  border-radius: 50%;\n  line-height: 1.1em;\n  font-size: 110%;\n  text-align: center;\n  color: #888;\n  background: #FFF;\n}\n@media (max-width: 800px) {\n  :host > div {\n    display: block;\n    max-width: none;\n    padding: 0 1em 0 0;\n  }\n  :host > div > div:not(.actions) {\n    width: 100%;\n    padding: 0.3em 0;\n  }\n  :host > div > div.actions {\n    position: absolute;\n    top: 0.3em;\n    right: -0.7em;\n    width: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL0pEL21vcnBoZXVzb25lLXRlc3QtdGFzay9zcmMvYXBwL2NvbXBvbmVudHMvcnVsZS1lbnRyeS9ydWxlLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3J1bGUtZW50cnkvcnVsZS1lbnRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBRElJO0VBQ0Usb0JBQUE7QUNGTjtBRElNO0VBRUUsVUFBQTtBQ0hSO0FETU07RUFDRSxVQUFBO0FDSlI7QURPTTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtBQ0xSO0FEUU07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDTlI7QURVSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1JOO0FEWUU7RUFDRTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNWSjtFRFlJO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0VDVk47RURhSTtJQUNFLGtCQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VDWE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnVsZS1lbnRyeS9ydWxlLWVudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xuXG46aG9zdCB7XG4gID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcblxuICAgID4gZGl2IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMmVtO1xuXG4gICAgICAmLmxvY2F0aW9uLFxuICAgICAgJi5tYXRjaGluZyB7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICB9XG5cbiAgICAgICYucGF0dGVybiB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aW9ucyB7XG4gICAgICAgIHdpZHRoOiA1JTtcbiAgICAgICAgcGFkZGluZzogMC40ZW0gMDtcbiAgICAgIH1cblxuICAgICAgPiAuZXJyb3Ige1xuICAgICAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiA4NSU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjODU0NjRGO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjlEMUQ0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbi5yZW1vdmUge1xuICAgICAgd2lkdGg6IDEuMmVtO1xuICAgICAgaGVpZ2h0OiAxLjJlbTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjOTk5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICAgICAgZm9udC1zaXplOiAxMTAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICM4ODg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYShtYXgtd2lkdGg6ICRicmVha3BvaW50LW1vYmlsZSkge1xuICAgID4gZGl2IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgcGFkZGluZzogMCAxZW0gMCAwO1xuXG4gICAgICA+IGRpdjpub3QoLmFjdGlvbnMpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDAuM2VtIDA7XG4gICAgICB9XG4gICAgICBcbiAgICAgID4gZGl2LmFjdGlvbnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMC4zZW07XG4gICAgICAgIHJpZ2h0OiAtMC43ZW07XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgPiBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcbn1cbjpob3N0ID4gZGl2ID4gZGl2IHtcbiAgcGFkZGluZy1yaWdodDogMS4yZW07XG59XG46aG9zdCA+IGRpdiA+IGRpdi5sb2NhdGlvbiwgOmhvc3QgPiBkaXYgPiBkaXYubWF0Y2hpbmcge1xuICB3aWR0aDogMjUlO1xufVxuOmhvc3QgPiBkaXYgPiBkaXYucGF0dGVybiB7XG4gIHdpZHRoOiA0NSU7XG59XG46aG9zdCA+IGRpdiA+IGRpdi5hY3Rpb25zIHtcbiAgd2lkdGg6IDUlO1xuICBwYWRkaW5nOiAwLjRlbSAwO1xufVxuOmhvc3QgPiBkaXYgPiBkaXYgPiAuZXJyb3Ige1xuICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjODU0NjRGO1xuICBiYWNrZ3JvdW5kOiAjRjlEMUQ0O1xufVxuOmhvc3QgPiBkaXYgYnV0dG9uLnJlbW92ZSB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAycHggc29saWQgIzk5OTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMS4xZW07XG4gIGZvbnQtc2l6ZTogMTEwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzg4ODtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICA6aG9zdCA+IGRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBhZGRpbmc6IDAgMWVtIDAgMDtcbiAgfVxuICA6aG9zdCA+IGRpdiA+IGRpdjpub3QoLmFjdGlvbnMpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwLjNlbSAwO1xuICB9XG4gIDpob3N0ID4gZGl2ID4gZGl2LmFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuM2VtO1xuICAgIHJpZ2h0OiAtMC43ZW07XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/rule-entry/rule-entry.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/rule-entry/rule-entry.component.ts ***!
    \***************************************************************/

  /*! exports provided: RuleEntryComponent */

  /***/
  function srcAppComponentsRuleEntryRuleEntryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuleEntryComponent", function () {
      return RuleEntryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../interfaces/IRule */
    "./src/app/interfaces/IRule.ts");

    var RuleEntryComponent = /*#__PURE__*/function () {
      function RuleEntryComponent() {
        _classCallCheck(this, RuleEntryComponent);

        this.onRemoveRule = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.RuleLocation = _interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__["RuleLocation"];
        this.RuleMatching = _interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__["RuleMatching"];
        this.RuleLocationNames = _interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__["RuleLocationNames"];
        this.RuleMatchingNames = _interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__["RuleMatchingNames"];

        this.keepEnumSorting = function () {
          return 0;
        };
      }

      _createClass(RuleEntryComponent, [{
        key: "changeLocation",
        value: function changeLocation(location) {
          if (location === _interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__["RuleLocation"].custom) {
            this.ruleForm.addControl('matching', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_interfaces_IRule__WEBPACK_IMPORTED_MODULE_3__["RuleMatching"].contains));
            this.ruleForm.addControl('pattern', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required));
          } else {
            this.ruleForm.removeControl('matching');
            this.ruleForm.removeControl('pattern');
          }
        }
      }, {
        key: "removeRule",
        value: function removeRule() {
          this.onRemoveRule.emit(this.index);
        }
      }]);

      return RuleEntryComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleEntryComponent.prototype, "index", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RuleEntryComponent.prototype, "ruleForm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], RuleEntryComponent.prototype, "onRemoveRule", void 0);
    RuleEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rule-entry',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rule-entry.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rule-entry/rule-entry.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rule-entry.component.scss */
      "./src/app/components/rule-entry/rule-entry.component.scss"))["default"]]
    })], RuleEntryComponent);
    /***/
  },

  /***/
  "./src/app/components/rules-group/rules-group.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/rules-group/rules-group.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRulesGroupRulesGroupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  margin: 0;\n  padding: 0;\n  font-size: 110%;\n  font-weight: 500;\n}\n\np {\n  margin: 0.6em 0 1em;\n  font-size: 85%;\n  color: #666;\n}\n\nbutton {\n  display: inline-block;\n  margin-top: 2em;\n  padding: 0.8em 1.2em;\n  border: 2px solid #89A2C0;\n  border-radius: 4px;\n  font-weight: 500;\n  text-transform: uppercase;\n  background: white;\n}\n\nbutton:before {\n  content: \"+\";\n  padding-right: 0.3em;\n  font-size: 120%;\n  font-weight: normal;\n}\n\nbutton:hover, button:focus {\n  border: 2px solid #89A2C0;\n}\n\nbutton:hover {\n  background: #DDD;\n}\n\nbutton:active {\n  border-color: transparent;\n}\n\n.rules-divider {\n  padding: 0.5em 2em;\n  font-weight: bold;\n  color: #CCC;\n}\n\n@media (max-width: 800px) {\n  .rules-divider {\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL0pEL21vcnBoZXVzb25lLXRlc3QtdGFzay9zcmMvYXBwL2NvbXBvbmVudHMvcnVsZXMtZ3JvdXAvcnVsZXMtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcnVsZXMtZ3JvdXAvcnVsZXMtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0RGOztBRElBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDREY7O0FER0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUVFLHlCQUFBO0FDSEo7O0FETUU7RUFDRSxnQkFBQTtBQ0pKOztBRE9FO0VBQ0UseUJBQUE7QUNMSjs7QURTQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDTkY7O0FEUUU7RUFMRjtJQU1JLGtCQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnVsZXMtZ3JvdXAvcnVsZXMtZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzXCI7XG5cbmgzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDExMCU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICBtYXJnaW46IDAuNmVtIDAgMWVtO1xuICBmb250LXNpemU6IDg1JTtcbiAgY29sb3I6ICM2NjY7XG59XG5cbmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogMmVtO1xuICBwYWRkaW5nOiAwLjhlbSAxLjJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzg5QTJDMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogXCIrXCI7XG4gICAgcGFkZGluZy1yaWdodDogMC4zZW07XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAmOmhvdmVyLFxuICAmOmZvY3VzIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODlBMkMwO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI0RERDtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5ydWxlcy1kaXZpZGVyIHtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNDQ0M7XG5cbiAgQG1lZGlhKG1heC13aWR0aDogJGJyZWFrcG9pbnQtbW9iaWxlKSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCJoMyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAxMTAlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwLjZlbSAwIDFlbTtcbiAgZm9udC1zaXplOiA4NSU7XG4gIGNvbG9yOiAjNjY2O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDJlbTtcbiAgcGFkZGluZzogMC44ZW0gMS4yZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OUEyQzA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5idXR0b246YmVmb3JlIHtcbiAgY29udGVudDogXCIrXCI7XG4gIHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xuICBmb250LXNpemU6IDEyMCU7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5idXR0b246aG92ZXIsIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4OUEyQzA7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjREREO1xufVxuYnV0dG9uOmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5ydWxlcy1kaXZpZGVyIHtcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNDQ0M7XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnJ1bGVzLWRpdmlkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/rules-group/rules-group.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/rules-group/rules-group.component.ts ***!
    \*****************************************************************/

  /*! exports provided: RulesGroupComponent */

  /***/
  function srcAppComponentsRulesGroupRulesGroupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesGroupComponent", function () {
      return RulesGroupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _interfaces_IRule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../interfaces/IRule */
    "./src/app/interfaces/IRule.ts");
    /* harmony import */


    var _services_rules_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/rules.service */
    "./src/app/services/rules.service.ts");

    var AUTOSAVE_TIMEOUT_MS = 2000;

    var RulesGroupComponent = /*#__PURE__*/function () {
      function RulesGroupComponent(formBuilder, rulesService) {
        _classCallCheck(this, RulesGroupComponent);

        this.formBuilder = formBuilder;
        this.rulesService = rulesService;
        this.blacklisted = false;
        this.rulesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]);
      }

      _createClass(RulesGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.appendRule();
          this.rulesForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (prev, curr) {
            return JSON.stringify(prev) === JSON.stringify(curr);
          }), // too lazy to install lodash :)
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(AUTOSAVE_TIMEOUT_MS)).subscribe(function (val) {
            if (_this.rulesForm.valid) {
              _this.rulesService.saveRuleSet(val, _this.blacklisted);
            }
          });
        }
      }, {
        key: "appendRule",
        value: function appendRule() {
          this.rulesForm.push(this.formBuilder.group({
            location: [_interfaces_IRule__WEBPACK_IMPORTED_MODULE_4__["RuleLocation"].home]
          }));
        }
      }, {
        key: "removeRule",
        value: function removeRule(index) {
          this.rulesForm.removeAt(index);
        }
      }]);

      return RulesGroupComponent;
    }();

    RulesGroupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_rules_service__WEBPACK_IMPORTED_MODULE_5__["RulesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RulesGroupComponent.prototype, "blacklisted", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RulesGroupComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RulesGroupComponent.prototype, "subtitle", void 0);
    RulesGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rules-group',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rules-group.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/rules-group/rules-group.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rules-group.component.scss */
      "./src/app/components/rules-group/rules-group.component.scss"))["default"]]
    })], RulesGroupComponent);
    /***/
  },

  /***/
  "./src/app/interfaces/IRule.ts":
  /*!*************************************!*\
    !*** ./src/app/interfaces/IRule.ts ***!
    \*************************************/

  /*! exports provided: RuleMatching, RuleMatchingNames, RuleLocation, RuleLocationNames */

  /***/
  function srcAppInterfacesIRuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _Object$freeze, _Object$freeze2;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuleMatching", function () {
      return RuleMatching;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuleMatchingNames", function () {
      return RuleMatchingNames;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuleLocation", function () {
      return RuleLocation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RuleLocationNames", function () {
      return RuleLocationNames;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var RuleMatching;

    (function (RuleMatching) {
      RuleMatching["contains"] = "contains";
      RuleMatching["exact"] = "exact";
    })(RuleMatching || (RuleMatching = {}));

    var RuleMatchingNames = Object.freeze((_Object$freeze = {}, _defineProperty(_Object$freeze, RuleMatching.contains, 'Contains'), _defineProperty(_Object$freeze, RuleMatching.exact, 'Exact match'), _Object$freeze));
    var RuleLocation;

    (function (RuleLocation) {
      RuleLocation["home"] = "home";
      RuleLocation["product"] = "product";
      RuleLocation["custom"] = "custom";
    })(RuleLocation || (RuleLocation = {}));

    var RuleLocationNames = Object.freeze((_Object$freeze2 = {}, _defineProperty(_Object$freeze2, RuleLocation.home, 'Home'), _defineProperty(_Object$freeze2, RuleLocation.product, 'Product'), _defineProperty(_Object$freeze2, RuleLocation.custom, 'Custom'), _Object$freeze2));
    /***/
  },

  /***/
  "./src/app/services/rules.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/rules.service.ts ***!
    \*******************************************/

  /*! exports provided: RulesService */

  /***/
  function srcAppServicesRulesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RulesService", function () {
      return RulesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var RulesService = /*#__PURE__*/function () {
      function RulesService() {
        _classCallCheck(this, RulesService);
      }

      _createClass(RulesService, [{
        key: "saveRuleSet",
        value: function saveRuleSet(rules) {
          var blacklisted = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          // do something more meaningful IRL
          console.log("".concat(blacklisted ? 'Exclusion' : 'Inclusion', " rules:"), rules);
        }
      }]);

      return RulesService;
    }();

    RulesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], RulesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/JD/morpheusone-test-task/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map