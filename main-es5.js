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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_academics_academics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/academics/academics.component */
    "./src/app/components/academics/academics.component.ts");
    /* harmony import */


    var _components_admissions_admissions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/admissions/admissions.component */
    "./src/app/components/admissions/admissions.component.ts");
    /* harmony import */


    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");
    /* harmony import */


    var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/contact-us/contact-us.component */
    "./src/app/components/contact-us/contact-us.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/philosophy/philosophy.component */
    "./src/app/components/philosophy/philosophy.component.ts");
    /* harmony import */


    var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/about-us/about-us.component */
    "./src/app/components/about-us/about-us.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'know-us/about-us',
      component: _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_9__["AboutUsComponent"]
    }, {
      path: 'know-us/philosophy',
      component: _components_philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_8__["PhilosophyComponent"]
    }, {
      path: 'academics',
      component: _components_academics_academics_component__WEBPACK_IMPORTED_MODULE_3__["AcademicsComponent"]
    }, {
      path: 'admissions',
      component: _components_admissions_admissions_component__WEBPACK_IMPORTED_MODULE_4__["AdmissionsComponent"]
    }, {
      path: 'gallery',
      component: _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"]
    }, {
      path: 'contact-us',
      component: _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"]
    }, {
      path: '404',
      component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    }, {
      path: '**',
      redirectTo: '404'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'nath-vidyanikethan';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/__ivy_ngcc__/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-gallery/lightbox */
    "./node_modules/@ngx-gallery/lightbox/__ivy_ngcc__/fesm2015/ngx-gallery-lightbox.js");
    /* harmony import */


    var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-gallery/gallerize */
    "./node_modules/@ngx-gallery/gallerize/__ivy_ngcc__/fesm2015/ngx-gallery-gallerize.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_know_us_know_us_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/know-us/know-us.component */
    "./src/app/components/know-us/know-us.component.ts");
    /* harmony import */


    var _components_academics_academics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/academics/academics.component */
    "./src/app/components/academics/academics.component.ts");
    /* harmony import */


    var _components_admissions_admissions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/admissions/admissions.component */
    "./src/app/components/admissions/admissions.component.ts");
    /* harmony import */


    var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/gallery/gallery.component */
    "./src/app/components/gallery/gallery.component.ts");
    /* harmony import */


    var _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/contact-us/contact-us.component */
    "./src/app/components/contact-us/contact-us.component.ts");
    /* harmony import */


    var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/page-not-found/page-not-found.component */
    "./src/app/components/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/about-us/about-us.component */
    "./src/app/components/about-us/about-us.component.ts");
    /* harmony import */


    var _components_philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/philosophy/philosophy.component */
    "./src/app/components/philosophy/philosophy.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__["LightboxModule"], _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_4__["GallerizeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_know_us_know_us_component__WEBPACK_IMPORTED_MODULE_10__["KnowUsComponent"], _components_academics_academics_component__WEBPACK_IMPORTED_MODULE_11__["AcademicsComponent"], _components_admissions_admissions_component__WEBPACK_IMPORTED_MODULE_12__["AdmissionsComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_16__["AboutUsComponent"], _components_philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_17__["PhilosophyComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__["LightboxModule"], _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_4__["GallerizeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _components_know_us_know_us_component__WEBPACK_IMPORTED_MODULE_10__["KnowUsComponent"], _components_academics_academics_component__WEBPACK_IMPORTED_MODULE_11__["AcademicsComponent"], _components_admissions_admissions_component__WEBPACK_IMPORTED_MODULE_12__["AdmissionsComponent"], _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_13__["GalleryComponent"], _components_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"], _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_15__["PageNotFoundComponent"], _components_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_16__["AboutUsComponent"], _components_philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_17__["PhilosophyComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_3__["LightboxModule"], _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_4__["GallerizeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about-us/about-us.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/about-us/about-us.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutUsComponent */

  /***/
  function srcAppComponentsAboutUsAboutUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function () {
      return AboutUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutUsComponent = /*#__PURE__*/function () {
      function AboutUsComponent() {
        _classCallCheck(this, AboutUsComponent);
      }

      _createClass(AboutUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutUsComponent;
    }();

    AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) {
      return new (t || AboutUsComponent)();
    };

    AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutUsComponent,
      selectors: [["app-about-us"]],
      decls: 2,
      vars: 0,
      template: function AboutUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-us works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-us',
          templateUrl: './about-us.component.html',
          styleUrls: ['./about-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/academics/academics.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/academics/academics.component.ts ***!
    \*************************************************************/

  /*! exports provided: AcademicsComponent */

  /***/
  function srcAppComponentsAcademicsAcademicsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcademicsComponent", function () {
      return AcademicsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AcademicsComponent = /*#__PURE__*/function () {
      function AcademicsComponent() {
        _classCallCheck(this, AcademicsComponent);
      }

      _createClass(AcademicsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AcademicsComponent;
    }();

    AcademicsComponent.ɵfac = function AcademicsComponent_Factory(t) {
      return new (t || AcademicsComponent)();
    };

    AcademicsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AcademicsComponent,
      selectors: [["app-academics"]],
      decls: 2,
      vars: 0,
      template: function AcademicsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "academics works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWNhZGVtaWNzL2FjYWRlbWljcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcademicsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-academics',
          templateUrl: './academics.component.html',
          styleUrls: ['./academics.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/admissions/admissions.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/admissions/admissions.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdmissionsComponent */

  /***/
  function srcAppComponentsAdmissionsAdmissionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdmissionsComponent", function () {
      return AdmissionsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdmissionsComponent = /*#__PURE__*/function () {
      function AdmissionsComponent() {
        _classCallCheck(this, AdmissionsComponent);
      }

      _createClass(AdmissionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdmissionsComponent;
    }();

    AdmissionsComponent.ɵfac = function AdmissionsComponent_Factory(t) {
      return new (t || AdmissionsComponent)();
    };

    AdmissionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdmissionsComponent,
      selectors: [["app-admissions"]],
      decls: 2,
      vars: 0,
      template: function AdmissionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admissions works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaXNzaW9ucy9hZG1pc3Npb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdmissionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admissions',
          templateUrl: './admissions.component.html',
          styleUrls: ['./admissions.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/contact-us/contact-us.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/contact-us/contact-us.component.ts ***!
    \***************************************************************/

  /*! exports provided: ContactUsComponent */

  /***/
  function srcAppComponentsContactUsContactUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function () {
      return ContactUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactUsComponent = /*#__PURE__*/function () {
      function ContactUsComponent() {
        _classCallCheck(this, ContactUsComponent);
      }

      _createClass(ContactUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactUsComponent;
    }();

    ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) {
      return new (t || ContactUsComponent)();
    };

    ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactUsComponent,
      selectors: [["app-contact-us"]],
      decls: 2,
      vars: 0,
      template: function ContactUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact-us works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact-us',
          templateUrl: './contact-us.component.html',
          styleUrls: ['./contact-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 54,
      vars: 0,
      consts: [[1, "container-fluid", "limit", 2, "padding-bottom", "50px"], [1, "row", "justify-content-between"], [1, "sec"], ["src", "/assets/images/logo.png", "width", "104px", "height", "auto", 1, "logo"], ["routerLink", ""], ["routerLink", "/know-us/about-us"], ["routerLink", "/academics"], ["routerLink", "/admissions"], ["routerLink", "/gallery"], ["routerLink", "/contact-us"], [1, "mdi", "mdi-home"], [1, "mdi", "mdi-phone"], ["href", "tel:+914023440740"], [1, "mdi", "mdi-email"], ["href", "mailto:contact@nathvidyanikethan.com"], [1, "sicons", "d-flex"], [1, "mdi", "mdi-facebook"], [1, "mdi", "mdi-youtube"], [1, "mdi", "mdi-instagram"], [1, "w-100", "text-center", 2, "padding", "8px 15px", "color", "white", "background-color", "#111", "font-size", "0.85rem"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nath Vidya Niketan elucidation on the future challenges for the current generation of children in the light of 'Industrial Revolution 4.0' and the preparedness needed to face them.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quick Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Know Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Academics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Admissions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\xA0Andhra Pradesh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "+9140-23440740");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "contact@nathvidyanikethan.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Follow Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\xA9 All Copyrights Reserved. Nath Vidya Nikethan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".quicksand[_ngcontent-%COMP%], footer[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  background-color: #e5e5e5;\n  padding-top: 50px;\n  color: black;\n}\n\nfooter[_ngcontent-%COMP%]   .sec[_ngcontent-%COMP%] {\n  max-width: 300px;\n}\n\nfooter[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 5px solid white;\n  margin-bottom: 24px;\n  border-radius: 300px;\n}\n\nfooter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  text-transform: uppercase;\n  font-weight: 700;\n  margin-top: 15px;\n  margin-bottom: 24px;\n  cursor: default;\n}\n\nfooter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .sicons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 1.5rem;\n  color: black;\n  background-color: #f7f7f7;\n  border-radius: 100px;\n  padding: 3px 9px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usb0NBQUE7QUNMRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBQUU7RUFDRSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7QUFESjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFGSjs7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUZOOztBQUtJO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSE47O0FBTUk7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUpOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yYjogIzQzM0JFQTtcclxuJGNvbG9yYi1kYXJrOiAjMmMyNmUxO1xyXG4kY29sb3JvOiAjRUI1QTI0O1xyXG4kY29sb3JvLWRhcms6ICNlMjNmMTY7XHJcbiRjb2xvcnk6ICNGRkMxMEU7XHJcblxyXG4ucXVpY2tzYW5ke1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4iLCIucXVpY2tzYW5kLCBmb290ZXIge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5mb290ZXIgLnNlYyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5mb290ZXIgLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwMHB4O1xufVxuZm9vdGVyIHAge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5mb290ZXIgYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuZm9vdGVyIHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5mb290ZXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmZvb3RlciB1bCBsaTpmaXJzdC1jaGlsZCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbmZvb3RlciB1bCAuc2ljb25zIGRpdiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/gallery/gallery.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/gallery/gallery.component.ts ***!
    \*********************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppComponentsGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GalleryComponent = /*#__PURE__*/function () {
      function GalleryComponent() {
        _classCallCheck(this, GalleryComponent);
      }

      _createClass(GalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)();
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 2,
      vars: 0,
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "gallery works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! tippy.js */
    "./node_modules/tippy.js/dist/tippy.esm.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          jquery__WEBPACK_IMPORTED_MODULE_2__('li.menu').on('mouseenter', function (event) {
            _this.submenu = jquery__WEBPACK_IMPORTED_MODULE_2__(event.target).find('.subnav').get(0);

            if (_this.submenu) {
              var instance = Object(tippy_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event.target, {
                content: _this.submenu,
                allowHTML: true,
                interactive: true,
                theme: 'light',
                appendTo: document.body
              });
              instance.show();
            }
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 33,
      vars: 2,
      consts: [[1, "container-fluid", "biglimit", "h-100"], [1, "row", "align-items-center", "h-100"], [1, "col-6"], [1, "logo"], ["src", "/assets/images/logo.png"], [1, "col-6", "h-100"], [1, "h-100"], [1, "d-flex", "justify-content-end", "h-100"], ["routerLinkActive", "active", "routerLink", "/", 1, "menu", "d-flex", "align-items-center", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active", 1, "menu", "d-flex", "align-items-center", 2, "cursor", "default"], [1, "subnav"], ["routerLink", "/know-us/about-us", 1, "submenu"], ["routerLink", "/know-us/philosophy", 1, "submenu"], ["routerLinkActive", "active", "routerLink", "/academics", 1, "menu", "d-flex", "align-items-center"], ["routerLinkActive", "active", "routerLink", "/admissions", 1, "menu", "d-flex", "align-items-center"], ["routerLinkActive", "active", "routerLink", "/gallery", 1, "menu", "d-flex", "align-items-center"], ["routerLinkActive", "active", "routerLink", "/contact-us", 1, "menu", "d-flex", "align-items-center"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Know Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Philosophy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Academics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Admissions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".quicksand[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n  height: 100px;\n  color: white;\n  background-color: #433BEA;\n}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n}\n\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 86px;\n  height: 86px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border: 2px solid white;\n  background-color: white;\n  border-radius: 200px;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu[_ngcontent-%COMP%] {\n  font-weight: bold;\n  list-style-type: none;\n  height: 100%;\n  padding: 8px 18px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu[_ngcontent-%COMP%]:hover {\n  background-color: #2c26e1;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu.active[_ngcontent-%COMP%] {\n  cursor: default;\n  background-color: #2c26e1;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu[_ngcontent-%COMP%]:last-child {\n  background-color: #EB5A24;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu[_ngcontent-%COMP%]:last-child:hover {\n  background-color: #e23f16;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu.active[_ngcontent-%COMP%]:last-child {\n  cursor: default;\n  background-color: #e23f16;\n}\n\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   li.menu[_ngcontent-%COMP%]   .subnav[_ngcontent-%COMP%] {\n  display: none;\n}\n\n[_nghost-%COMP%] {\n  display: block;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usb0NBQUE7QUNMRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJEUE87QUNVVDs7QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFHTjs7QUFFSTtFQUNFLFNBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFETjs7QUFHTTtFQUNFLHlCRHBDTTtBQ21DZDs7QUFJTTtFQUNFLGVBQUE7RUFDQSx5QkR6Q007QUN1Q2Q7O0FBS007RUFDRSx5QkQ1Q0M7QUN5Q1Q7O0FBTU07RUFDRSx5QkQvQ007QUMyQ2Q7O0FBT007RUFDRSxlQUFBO0VBQ0EseUJEcERNO0FDK0NkOztBQVFNO0VBQ0UsYUFBQTtBQU5SOztBQVlBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQVRGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGNvbG9yYjogIzQzM0JFQTtcclxuJGNvbG9yYi1kYXJrOiAjMmMyNmUxO1xyXG4kY29sb3JvOiAjRUI1QTI0O1xyXG4kY29sb3JvLWRhcms6ICNlMjNmMTY7XHJcbiRjb2xvcnk6ICNGRkMxMEU7XHJcblxyXG4ucXVpY2tzYW5ke1xyXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4iLCIucXVpY2tzYW5kIHtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzNCRUE7XG59XG5oZWFkZXIgLmxvZ28ge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xufVxuaGVhZGVyIC5sb2dvIGltZyB7XG4gIHdpZHRoOiA4NnB4O1xuICBoZWlnaHQ6IDg2cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjAwcHg7XG59XG5oZWFkZXIgbmF2IHVsIHtcbiAgbWFyZ2luOiAwO1xufVxuaGVhZGVyIG5hdiBsaS5tZW51IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMThweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cbmhlYWRlciBuYXYgbGkubWVudTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzI2ZTE7XG59XG5oZWFkZXIgbmF2IGxpLm1lbnUuYWN0aXZlIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyNmUxO1xufVxuaGVhZGVyIG5hdiBsaS5tZW51Omxhc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUI1QTI0O1xufVxuaGVhZGVyIG5hdiBsaS5tZW51Omxhc3QtY2hpbGQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzZjE2O1xufVxuaGVhZGVyIG5hdiBsaS5tZW51LmFjdGl2ZTpsYXN0LWNoaWxkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzZjE2O1xufVxuaGVhZGVyIG5hdiBsaS5tZW51IC5zdWJuYXYge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! animejs/lib/anime.es.js */
    "./node_modules/animejs/lib/anime.es.js");
    /* harmony import */


    var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-gallery/gallerize */
    "./node_modules/@ngx-gallery/gallerize/__ivy_ngcc__/fesm2015/ngx-gallery-gallerize.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_div_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HomeComponent_div_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var testim_r4 = ctx.$implicit;
        var t_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", t_r5 === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", testim_r4.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](testim_r4.person);
      }
    }

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.galleryId = 'homegal';
        this.testSlide = 0;
        this.testims = [{
          content: 'It\'s been a long journey! A journey spanning 19 long years in earnestly making a qualitative difference to the lives of tens of thousands of children and their aspirational parents.',
          person: 'William henry smith'
        }, {
          content: 'A journey spanning 19 long years in earnestly making a qualitative difference to the lives of tens of thousands of children and their aspirational parents.',
          person: 'Henry'
        }];
        this.items = [{
          thumb: '/assets/images/gall/1.png',
          src: '/assets/images/gall/1.png'
        }, {
          thumb: '/assets/images/gall/2.png',
          src: '/assets/images/gall/2.png'
        }, {
          thumb: '/assets/images/gall/3.png',
          src: '/assets/images/gall/3.png'
        }, {
          thumb: '/assets/images/gall/4.png',
          src: '/assets/images/gall/4.png'
        }, {
          thumb: '/assets/images/gall/5.png',
          src: '/assets/images/gall/5.png'
        }, {
          thumb: '/assets/images/gall/6.png',
          src: '/assets/images/gall/6.png'
        }, {
          thumb: '/assets/images/gall/7.png',
          src: '/assets/images/gall/7.png'
        }, {
          thumb: '/assets/images/gall/8.png',
          src: '/assets/images/gall/8.png'
        }];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "prevSlide",
        value: function prevSlide() {
          var _this2 = this;

          this.testSlide--;
          jquery__WEBPACK_IMPORTED_MODULE_1__('.testim').removeClass('active');
          Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
            targets: jquery__WEBPACK_IMPORTED_MODULE_1__('.testim').get(this.testSlide),
            translateX: ['-30px', '0px'],
            opacity: [0, 1],
            duration: 700,
            begin: function begin(an) {
              jquery__WEBPACK_IMPORTED_MODULE_1__('.testim').eq(_this2.testSlide).addClass('active');
            }
          });
        }
      }, {
        key: "nextSlide",
        value: function nextSlide() {
          var _this3 = this;

          this.testSlide++;
          jquery__WEBPACK_IMPORTED_MODULE_1__('.testim').removeClass('active');
          Object(animejs_lib_anime_es_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
            targets: jquery__WEBPACK_IMPORTED_MODULE_1__('.testim').get(this.testSlide),
            translateX: ['30px', '0px'],
            opacity: [0, 1],
            duration: 1000,
            begin: function begin(an) {
              jquery__WEBPACK_IMPORTED_MODULE_1__('.testim').eq(_this3.testSlide).addClass('active');
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 86,
      vars: 6,
      consts: [["id", "home"], [1, "container-fluid", "largelimit"], [1, "row"], [1, "col-12", "banner", "p-0"], ["src", "/assets/images/banner.png"], [1, "container-fluid", "largelimit", "justify-content-center", "d-flex", 2, "background-color", "#F7F7F7"], [1, "col-12", "content1"], [1, "title1", "text-center"], [2, "color", "#EB5A24"], ["src", "/assets/images/border-image.png", 1, "imageborder", "d-block"], [1, "text-center"], [1, "container-fluid", "largelimit", "justify-content-center", "d-flex"], [1, "d-flex", "m-0", "justify-content-between"], [1, "philcard"], ["src", "/assets/images/bigicon-1.png", 1, "bigicon"], ["src", "/assets/images/bigicon-2.png", 1, "bigicon"], ["src", "/assets/images/bigicon-3.png", 1, "bigicon"], [1, "numbcard", "d-flex", "justify-content-center", "align-items-center", "flex-column"], [1, "container-fluid", "largelimit", "justify-content-center", "d-flex", 2, "background-image", "url(assets/images/polkabg.png)"], [1, "col-12", "justify-content-between"], ["gallerize", "", 1, "row"], ["class", "thumber col-3", 4, "ngFor", "ngForOf"], [1, "container-fluid", "largelimit", "justify-content-center", "d-flex", 2, "background-color", "#FFC10E"], [1, "row", "w-100", "limit"], [1, "col-12", "d-flex", "justify-content-between", "align-items-center", 2, "overflow", "hidden", "min-height", "160px"], [1, "mdi", "mdi-arrow-left-circle-outline", "left-arrow", 3, "click"], ["class", "testim contlimit text-center", 3, "active", 4, "ngFor", "ngForOf"], [1, "mdi", "mdi-arrow-right-circle-outline", "right-arrow", 3, "click"], [1, "thumber", "col-3"], [3, "src"], [1, "testim", "contlimit", "text-center"], [3, "innerHTML"], [1, "person"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Nath Vidya Nikethan, The pioneer of ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "holistic education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "It's been a long journey! A journey spanning 19 long years in earnestly making a qualitative difference to the lives of tens of thousands of children and their aspirational parents. Slate - The School is a result of Vasireddy Amarnath\u2019s intense soul searching and stirring of the conscience at the crass commercialization and defunct education system, devoid of values and relevance for the present/future. Slate - The School was started in the year 2001, by Vasireddy Educational Society, with a vision to impart quality and value based education to children; to improve the ethical standards in the field of education; to adopt a futuristic approach to promote traditional values amongst the younger generation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Our Philosophy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Holistic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Holistic Education involves a child's physical, social, moral development.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Realistic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Realistic Education addresses and builds on the rational relationship between the student and the environment.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Futuristic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Futuristic Education refers to the usage of innovative learning delivery mechanisms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Our Excellence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "800+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "STUDENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "YEARS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "CAMPUSES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, HomeComponent_div_74_Template, 2, 1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_83_listener() {
            return ctx.testSlide < 1 ? null : ctx.prevSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomeComponent_div_84_Template, 4, 4, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_span_click_85_listener() {
            return ctx.testSlide === ctx.testims.length - 1 ? null : ctx.nextSlide();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disable", ctx.testSlide < 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.testims);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disable", ctx.testSlide === ctx.testims.length - 1);
        }
      },
      directives: [_ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_3__["GallerizeDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      styles: [".quicksand[_ngcontent-%COMP%] {\n  font-family: \"Quicksand\", sans-serif;\n}\n\n#home[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100vw;\n}\n\n#home[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 70vh;\n  max-height: 600px;\n}\n\n#home[_ngcontent-%COMP%]   .banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: center center;\n     object-position: center center;\n}\n\n#home[_ngcontent-%COMP%]   .philcard[_ngcontent-%COMP%] {\n  padding: 32px;\n  width: 320px;\n  margin: 0 8px;\n  background: #FFFFFF;\n  border-radius: 18px;\n  transition: box-shadow 0.3s ease;\n  cursor: default;\n}\n\n#home[_ngcontent-%COMP%]   .philcard[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);\n}\n\n#home[_ngcontent-%COMP%]   .philcard[_ngcontent-%COMP%]   .bigicon[_ngcontent-%COMP%] {\n  width: auto;\n  height: 64px;\n  margin-bottom: 32px;\n}\n\n#home[_ngcontent-%COMP%]   .numbcard[_ngcontent-%COMP%] {\n  padding: 15px;\n  width: 320px;\n  margin: 0 8px;\n  cursor: default;\n}\n\n#home[_ngcontent-%COMP%]   .numbcard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #433BEA;\n  font-weight: bold;\n  font-size: 72px;\n}\n\n#home[_ngcontent-%COMP%]   .numbcard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n#home[_ngcontent-%COMP%]   .thumber[_ngcontent-%COMP%] {\n  position: relative;\n  height: 150px;\n  margin-bottom: 15px;\n}\n\n#home[_ngcontent-%COMP%]   .thumber[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n\n#home[_ngcontent-%COMP%]   .testim[_ngcontent-%COMP%] {\n  display: none;\n  padding: 24px;\n}\n\n#home[_ngcontent-%COMP%]   .testim[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 15px;\n  color: white;\n}\n\n#home[_ngcontent-%COMP%]   .testim[_ngcontent-%COMP%]   .person[_ngcontent-%COMP%]::before {\n  content: \"- \";\n}\n\n#home[_ngcontent-%COMP%]   .testim.active[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#home[_ngcontent-%COMP%]   .left-arrow[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .right-arrow[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  cursor: pointer;\n}\n\n#home[_ngcontent-%COMP%]   .left-arrow.disable[_ngcontent-%COMP%], #home[_ngcontent-%COMP%]   .right-arrow.disable[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvc2Nzcy9jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxvQ0FBQTtBQ0xGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlDQUFBO0tBQUEsOEJBQUE7QUFHTjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDSTtFQUNFLDJDQUFBO0FBQ047O0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQU47O0FBSUU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDRSxjRC9DRztFQ2dESCxpQkFBQTtFQUNBLGVBQUE7QUFGTjs7QUFLSTtFQUNFLGVBQUE7QUFITjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBTUk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FBSk47O0FBUUU7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQU5KOztBQU9JO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFMTjs7QUFNTTtFQUNFLGFBQUE7QUFKUjs7QUFPSTtFQUNFLGNBQUE7QUFMTjs7QUFTRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0FBUEo7O0FBUUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQU5OIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JiOiAjNDMzQkVBO1xyXG4kY29sb3JiLWRhcms6ICMyYzI2ZTE7XHJcbiRjb2xvcm86ICNFQjVBMjQ7XHJcbiRjb2xvcm8tZGFyazogI2UyM2YxNjtcclxuJGNvbG9yeTogI0ZGQzEwRTtcclxuXHJcbi5xdWlja3NhbmR7XHJcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiIsIi5xdWlja3NhbmQge1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZjtcbn1cblxuI2hvbWUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDB2dztcbn1cbiNob21lIC5iYW5uZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNzB2aDtcbiAgbWF4LWhlaWdodDogNjAwcHg7XG59XG4jaG9tZSAuYmFubmVyIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbn1cbiNob21lIC5waGlsY2FyZCB7XG4gIHBhZGRpbmc6IDMycHg7XG4gIHdpZHRoOiAzMjBweDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2U7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbiNob21lIC5waGlsY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4jaG9tZSAucGhpbGNhcmQgLmJpZ2ljb24ge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuI2hvbWUgLm51bWJjYXJkIHtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDMyMHB4O1xuICBtYXJnaW46IDAgOHB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4jaG9tZSAubnVtYmNhcmQgaDEge1xuICBjb2xvcjogIzQzM0JFQTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNzJweDtcbn1cbiNob21lIC5udW1iY2FyZCBzcGFuIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuI2hvbWUgLnRodW1iZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4jaG9tZSAudGh1bWJlciBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4jaG9tZSAudGVzdGltIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMjRweDtcbn1cbiNob21lIC50ZXN0aW0gLnBlcnNvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuI2hvbWUgLnRlc3RpbSAucGVyc29uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIi0gXCI7XG59XG4jaG9tZSAudGVzdGltLmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuI2hvbWUgLmxlZnQtYXJyb3csICNob21lIC5yaWdodC1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2hvbWUgLmxlZnQtYXJyb3cuZGlzYWJsZSwgI2hvbWUgLnJpZ2h0LWFycm93LmRpc2FibGUge1xuICBvcGFjaXR5OiAwLjE7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/know-us/know-us.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/know-us/know-us.component.ts ***!
    \*********************************************************/

  /*! exports provided: KnowUsComponent */

  /***/
  function srcAppComponentsKnowUsKnowUsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KnowUsComponent", function () {
      return KnowUsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var KnowUsComponent = /*#__PURE__*/function () {
      function KnowUsComponent() {
        _classCallCheck(this, KnowUsComponent);
      }

      _createClass(KnowUsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KnowUsComponent;
    }();

    KnowUsComponent.ɵfac = function KnowUsComponent_Factory(t) {
      return new (t || KnowUsComponent)();
    };

    KnowUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KnowUsComponent,
      selectors: [["app-know-us"]],
      decls: 2,
      vars: 0,
      template: function KnowUsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "know-us works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMva25vdy11cy9rbm93LXVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KnowUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-know-us',
          templateUrl: './know-us.component.html',
          styleUrls: ['./know-us.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/page-not-found/page-not-found.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppComponentsPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) {
      return new (t || PageNotFoundComponent)();
    };

    PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageNotFoundComponent,
      selectors: [["app-page-not-found"]],
      decls: 2,
      vars: 0,
      template: function PageNotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-not-found',
          templateUrl: './page-not-found.component.html',
          styleUrls: ['./page-not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/philosophy/philosophy.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/philosophy/philosophy.component.ts ***!
    \***************************************************************/

  /*! exports provided: PhilosophyComponent */

  /***/
  function srcAppComponentsPhilosophyPhilosophyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhilosophyComponent", function () {
      return PhilosophyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PhilosophyComponent = /*#__PURE__*/function () {
      function PhilosophyComponent() {
        _classCallCheck(this, PhilosophyComponent);
      }

      _createClass(PhilosophyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PhilosophyComponent;
    }();

    PhilosophyComponent.ɵfac = function PhilosophyComponent_Factory(t) {
      return new (t || PhilosophyComponent)();
    };

    PhilosophyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PhilosophyComponent,
      selectors: [["app-philosophy"]],
      decls: 2,
      vars: 0,
      template: function PhilosophyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "philosophy works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGhpbG9zb3BoeS9waGlsb3NvcGh5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhilosophyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-philosophy',
          templateUrl: './philosophy.component.html',
          styleUrls: ['./philosophy.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Karthikeya\Documents\Angular\nath-vidyanikethan\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map