webpackJsonp([0,4],{

/***/ 1125:
/***/ function(module, exports) {

module.exports = "app-layout > body > div > app-root:empty + .loading {\n    opacity: 1;\n    z-index: 100;\n}\napp-layout > body > div > app-root:empty + .loading h1 {\n    color: black;\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n}"

/***/ },

/***/ 1126:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1127:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1128:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1129:
/***/ function(module, exports) {

module.exports = "app-layout > body > div > app-login:empty + .loading {\n    opacity: 1;\n    z-index: 100;\n}\napp-layout > body > div > app-login:empty + .loading h1 {\n    color: black;\n    position: absolute;\n    top: 50%;\n    width: 100%;\n    text-align: center;\n    -webkit-transform: translate(0, -50%);\n            transform: translate(0, -50%);\n}"

/***/ },

/***/ 1130:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1131:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1132:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1133:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 1134:
/***/ function(module, exports) {

module.exports = "\n<app-header>{{ 'LOADING' | translate }} header...</app-header>\n\n<app-menu-aside>{{ 'LOADING' | translate }} menu...</app-menu-aside>\n\n<!-- Content Wrapper. Contains page content -->\n<div class=\"content-wrapper\">\n\t<!-- Content Header (Page header) -->\n\t<!--<toaster-container [toasterconfig]=\"toastrConfig\"></toaster-container>-->\n\t<app-breadcrumb></app-breadcrumb>\n\n\t<!-- Main content -->\n\t<section class=\"content\">\n\t\t<div class=\"box box-default\">\n\t\t\t<div class=\"box-body\">\n\t\t\t\t<router-outlet></router-outlet>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- /.content -->\n</div>\n<!-- /.content-wrapper -->\n<app-footer>{{ 'LOADING' | translate }} footer...</app-footer>"

/***/ },

/***/ 1135:
/***/ function(module, exports) {

module.exports = "<body [ngClass]=\"{'hold-transition':true,'skin-blue': auth.isAuthenticated(),'sidebar-mini': auth.isAuthenticated(),'login-page':!auth.isAuthenticated() }\">\n\t<div class=\"wrapper\">\n\t\t<app-root *ngIf=\"auth.isAuthenticated()\"></app-root>\n\t\t<app-login *ngIf=\"!auth.isAuthenticated()\"></app-login>\n\t\t<div class=\"loading\">\n\t\t\t<div class=\"sk-cube-grid\">\n\t\t\t\t<div class=\"sk-cube sk-cube1\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube2\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube3\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube4\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube5\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube6\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube7\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube8\"></div>\n\t\t\t\t<div class=\"sk-cube sk-cube9\"></div>\n\t\t\t</div>\n\t\t\t<h1>Please wait a few seconds</h1>\n\t\t</div>\n\n\t\t<!-- Control Sidebar -->\n\t\t\n\t\t<!-- /.control-sidebar -->\n\t\t<!-- Add the sidebar's background. This div must be placed\n               immediately after the control sidebar -->\n\t\t<div class=\"control-sidebar-bg\"></div>\n\t</div>\n\t<!-- ./wrapper -->\n\n</body>\n"

/***/ },

/***/ 1136:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12\" style=\"margin-bottom: 10px;\">\n\t\t<button class=\"btn btn-success pull-right\" (click)=\"add()\">\n\t\t\t<i class=\"fa fa-plus\"></i> Add Client\n\t\t</button>\n\t</div>\n\t<div class=\"col-md-3\" *ngFor='let client of clients | async'>\n\t\t<div class=\"well\">\n\t\t\t<form>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"id\">Id</label> <input type=\"text\" disabled=\"disabled\"\n\t\t\t\t\t\t[(ngModel)]=\"client.clientId\" name=\"clientId\" class=\"form-control\"\n\t\t\t\t\t\tid=\"id\" required>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"name\">Name</label> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control\" (keyup.enter)=\"save(client)\"\n\t\t\t\t\t\t[(ngModel)]=\"client.name\" id=\"name\" name=\"name\" required>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"address\">Address</label> <input type=\"text\"\n\t\t\t\t\t\tclass=\"form-control\" (keyup.enter)=\"save(client)\"\n\t\t\t\t\t\t[(ngModel)]=\"client.address\" name=\"address\" id=\"address\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"save(client)\">Save</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-danger\"\n\t\t\t\t\t(click)=\"delete(client)\">Delete</button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ },

/***/ 1137:
/***/ function(module, exports) {

module.exports = "<p>\n\thome works!\n\n\t<alert type=\"info\">Hello from ng2-bootstrap {{\n\tdate.toDateString() }}</alert>\n\n\t<datepicker [(ngModel)]=\"date\" showWeeks=\"true\"></datepicker>\n</p>"

/***/ },

/***/ 1138:
/***/ function(module, exports) {

module.exports = "<!--<body class=\"hold-transition login-page\">-->\n<div class=\"login-box\">\n  <div class=\"login-logo\">\n    <a href=\"#\"><b>Test</b>API</a>\n  </div>\n  <!-- /.login-logo -->\n  <div class=\"login-box-body\">\n    <p class=\"login-box-msg\">Sign in to start your session</p>\n\n    <form method=\"post\" [formGroup]=\"loginForm\" novalidate (ngSubmit)=\"login(loginForm.value, loginForm.valid)\">\n      <div [ngClass]=\"{'form-group':true,'has-feedback':true,'has-error': (submitted && loginForm.controls.email.errors?.email)}\">\n        <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        <span *ngIf=\"(submitted && loginForm.controls.email.errors?.email)\" class=\"help-block\">Enter Valid Email</span>\n      </div>\n     \n      <div [ngClass]=\"{'form-group':true,'has-feedback':true,'has-error': (submitted && loginForm.controls.password.errors)}\">\n        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        <span *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"help-block\">Password Is Required</span>\n      </div>\n      \n      <div class=\"row\">\n\n        <!-- /.col -->\n        <div class=\"col-xs-4\">\n          <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary btn-block btn-flat\">Sign In</button>\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n  </div>\n  <!-- /.login-box-body -->\n</div>\n<!-- /.login-box -->\n<!--</body>-->"

/***/ },

/***/ 1139:
/***/ function(module, exports) {

module.exports = "<p>page {{id}} works!</p>\n"

/***/ },

/***/ 1140:
/***/ function(module, exports) {

module.exports = "<!-- Main Footer -->\n<footer class=\"main-footer\">\n\t<!-- To the right -->\n\t<div class=\"pull-right hidden-xs\">Anything you want</div>\n\t<!-- Default to the left -->\n\t<strong>Copyright &copy; 2016 <a href=\"#\" routerLink=\"/\">Company</a>.\n\t</strong> All rights reserved.\n</footer>\n"

/***/ },

/***/ 1141:
/***/ function(module, exports) {

module.exports = "<!-- Main Header -->\n<header class=\"main-header\">\n\t<!-- Logo -->\n\t<a href=\"#\" routerLink=\"/\" class=\"logo\">\n\t\t<!-- mini logo for sidebar mini 50x50 pixels -->\n\t\t<span class=\"logo-mini\"><b>A</b>LT</span>\n\t\t<!-- logo for regular state and mobile devices -->\n\t\t<span class=\"logo-lg\"><b>Test</b>API</span>\n\t</a>\n\t<!-- Header Navbar -->\n\t<nav class=\"navbar navbar-static-top\" role=\"navigation\">\n\t\t<!-- Sidebar toggle button-->\n\t\t<a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\"> <span class=\"sr-only\">Toggle navigation</span>\n\t\t</a>\n\t\t<!-- Navbar Right Menu -->\n\t\t<div class=\"navbar-custom-menu\">\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"auth.isAuthenticated()\">\n\t\t\t\t<!-- Messages: style can be found in dropdown.less-->\n\t\t\t\t<li class=\"dropdown messages-menu messagesBox\"></li>\n\t\t\t\t<!-- Notifications Menu -->\n\t\t\t\t<li class=\"dropdown notifications-menu notificationsBox\"></li>\n\t\t\t\t<!-- Tasks Menu -->\n\t\t\t\t<li class=\"dropdown tasks-menu tasksBox\"></li>\n\t\t\t\t<!-- User Account Menu -->\n\t\t\t\t<li class=\"dropdown user user-menu userBox\"></li>\n\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"!auth.isAuthenticated()\">\n\t\t\t\t<li><a href=\"#\" routerLink=\"/login\"><i class=\"fa fa-sign-in\"></i> Login</a></li>\n\t\t\t</ul>\n\t\t\t<ul class=\"nav navbar-nav\" *ngIf=\"auth.isAuthenticated()\">\n\t\t\t\t<li><a href=\"#\" (click)=\"auth.logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a></li> \n\t\t\t</ul>\n\t\t</div>\n\t</nav>\n</header>\n"

/***/ },

/***/ 1142:
/***/ function(module, exports) {

module.exports = "<section class=\"content-header\" *ngIf=\"display\">\n  <h1>\n    {{ header }}\n    <small>{{ description }}</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <template let-item ngFor [ngForOf]=\"levels\">\n      <li [class.active]=\"item.active\">\n        <a [routerLink]=\"item.link\">\n          <i class=\"fa fa-{{item.icon}}\"></i> {{ item.title }}\n        </a>\n      </li>\n    </template>\n  </ol>\n</section>\n"

/***/ },

/***/ 1143:
/***/ function(module, exports) {

module.exports = "<!-- Left side column. contains the logo and sidebar -->\n<aside class=\"main-sidebar\">\n\t<!-- sidebar: style can be found in sidebar.less -->\n\t<section class=\"sidebar\" *ngIf=\"auth.isAuthenticated()\">\n\t\t<!-- Sidebar user panel (optional) -->\n\t\t<div class=\"user-panel\">\n\t\t\t<div class=\"pull-left image\">\n\t\t\t\t<img [src]=\"auth.getUserPicture()\" class=\"img-circle\"\n\t\t\t\t\t[alt]=\"auth.getUserName()\">\n\t\t\t</div>\n\t\t\t<div class=\"pull-left info\">\n\t\t\t\t<p>{{auth.getUserName()}}</p>\n\t\t\t\t<!-- Status -->\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- search form (Optional) -->\n\t\t<form action=\"#\" method=\"get\" class=\"sidebar-form\">\n\t\t\t<div class=\"input-group\">\n\t\t\t\t<input type=\"text\" name=\"q\" class=\"form-control\"\n\t\t\t\t\tplaceholder=\"Search...\"> <span class=\"input-group-btn\">\n\t\t\t\t\t<button type=\"submit\" name=\"search\" id=\"search-btn\"\n\t\t\t\t\t\tclass=\"btn btn-flat\">\n\t\t\t\t\t\t<i class=\"fa fa-search\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</form>\n\t\t<!-- /.search form -->\n\t\t<!-- Sidebar Menu -->\n\t\t<ul class=\"sidebar-menu\">\n\t\t\t<li class=\"header\">NAVIGATION</li>\n\t\t\t<template ngFor let-item [ngForOf]=\"links\"> <template\n\t\t\t\t[ngIf]=\"!item.sublinks\">\n\t\t\t<li [class.active]=\"item.link[0] === current_url\"><a\n\t\t\t\t*ngIf=\"!item.external\" [routerLink]=\"item.link\"> <i\n\t\t\t\t\tclass=\"fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span>\n\t\t\t</a> <a *ngIf=\"item.external\" [href]=\"item.link\" [target]=\"item.target\">\n\t\t\t\t\t<i class=\"fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span>\n\t\t\t</a></li>\n\t\t\t</template> <template [ngIf]=\"item.sublinks\">\n\t\t\t<li class=\"treeview\"><a href=\"#\"> <i *ngIf=\"item.icon\"\n\t\t\t\t\tclass=\"fa fa-{{item.icon}}\"></i> <span>{{item.title}}</span> <i\n\t\t\t\t\tclass=\"fa fa-angle-left pull-right\"></i>\n\t\t\t</a>\n\t\t\t\t<ul class=\"treeview-menu\">\n\t\t\t\t\t<template ngFor let-subitem [ngForOf]=\"item.sublinks\">\n\t\t\t\t\t<li [class.active]=\"subitem.link[0] === current_url\"><a\n\t\t\t\t\t\t*ngIf=\"!subitem.external\" [routerLink]=\"subitem.link\"> <i\n\t\t\t\t\t\t\t*ngIf=\"subitem.icon\" class=\"fa fa-{{subitem.icon}}\"></i> <span>{{subitem.title}}</span>\n\t\t\t\t\t</a> <a *ngIf=\"subitem.external\" [href]=\"subitem.link\"\n\t\t\t\t\t\t[target]=\"subitem.target\"> <i *ngIf=\"subitem.icon\"\n\t\t\t\t\t\t\tclass=\"fa fa-{{subitem.icon}}\"></i> <span>{{subitem.title}}</span>\n\t\t\t\t\t</a></li>\n\t\t\t\t\t</template>\n\t\t\t\t</ul></li>\n\t\t\t</template> </template>\n\t\t</ul>\n\t\t<!-- /.sidebar-menu -->\n\t</section>\n\t<!-- /.sidebar -->\n</aside>\n"

/***/ },

/***/ 1499:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 1499;


/***/ },

/***/ 1500:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 1501:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(678);


/***/ },

/***/ 170:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BreadcrumbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.initialData = {
            description: '',
            display: false,
            header: '',
            levels: [
                {
                    icon: 'clock-o',
                    link: ['/'],
                    title: 'Default'
                }
            ]
        };
        this.current = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["ReplaySubject"](1);
        this.clear();
    }
    BreadcrumbService.prototype.set = function (data) {
        this.current.next(data);
    };
    BreadcrumbService.prototype.clear = function () {
        this.set(this.initialData);
    };
    BreadcrumbService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbService);
    return BreadcrumbService;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/breadcrumb.service.js.map

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        // TODO
    }
    UserService.prototype.setCurrentUser = function (user) {
        this.currentUser.next(user);
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/user.service.js.map

/***/ },

/***/ 228:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    // THIS ARE TESTING CONFIG! DONT USE THAT IN PROD! CHANGE THAT!
    auth0: {
        clientID: 'HEkxSwd54g8LXfr3P8g72tvmckSIF0KC',
        domain: 'ng2-admin-lte.eu.auth0.com'
    },
    firebase: {
        apiKey: 'AIzaSyC4mOkOIiMfgzrKE5oIMvI51FJaMZ7DwKA',
        authDomain: 'ng2-admin-lte-a3958.firebaseapp.com',
        databaseURL: 'https://ng2-admin-lte-a3958.firebaseio.com',
        messagingSenderId: '201342590340',
        storageBucket: 'ng2-admin-lte-a3958.appspot.com'
    },
    api: {
        grantType: 'password',
        clientID: 3,
        clientSecret: 'GeB7h2QHrwn4EgA1VSVENloYEFZNcNTJ2AaMFVF1',
        scope: '',
        domain: 'http://testapi.dev/api'
    },
    production: false,
    silent: false
};
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/environment.js.map

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(227);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AdminLTETranslateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var langs = ['en', 'fr', 'ru', 'he', 'zh'];
var langmatch = /en|fr|ru|he|zh/;
var AdminLTETranslateService = (function () {
    function AdminLTETranslateService(userServ, translate) {
        var _this = this;
        this.userServ = userServ;
        this.translate = translate;
        this.lang = 'us';
        translate.addLangs(langs);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        this.userServ.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // the lang to use, if the lang isn't available, it will use the current loader to get them
            var browserLang = _this.translate.getBrowserLang();
            var browserCultureLang = _this.translate.getBrowserCultureLang();
            console.log('Detected browser language: "' + browserCultureLang + '"');
            // check if current User has a Preferred Language set, and it differs from his browser lang
            var useLang = 'en';
            var prefLang = (_this.currentUser) ? _this.currentUser.preferredLang : null;
            if (!prefLang) {
                useLang = browserLang.match(langmatch) ? browserLang : 'en';
            }
            else {
                console.log('Detected User preferred language: "' + prefLang + '"');
                useLang = prefLang.match(langmatch) ? prefLang : 'en';
            }
            _this.translate.use(useLang);
            console.log('Translation language has been set to: "' + useLang + '"');
            // translate.use( 'ru' );
        });
    }
    AdminLTETranslateService.prototype.ngOnInit = function () {
        // TODO
    };
    AdminLTETranslateService.prototype.getTranslate = function () {
        return this.translate;
    };
    AdminLTETranslateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["d" /* TranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_translate__["d" /* TranslateService */]) === 'function' && _b) || Object])
    ], AdminLTETranslateService);
    return AdminLTETranslateService;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/translate.service.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_client__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dal_client_dal__ = __webpack_require__(799);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_breadcrumb_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientComponent = (function () {
    function ClientComponent(dal, breadServ) {
        var _this = this;
        this.dal = dal;
        this.breadServ = breadServ;
        this.save = function (client) {
            _this.dal.update(client.clientId, new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */](client.name, client.clientId, client.address));
        };
        this.delete = function (client) {
            _this.dal.delete(client);
        };
        this.add = function () {
            _this.dal.create(new __WEBPACK_IMPORTED_MODULE_1__models_client__["a" /* Client */]());
        };
        // TODO
    }
    ClientComponent.prototype.ngOnInit = function () {
        this.clients = this.dal.readAll();
        this.breadServ.set({
            description: 'This is our Client page',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                },
                {
                    icon: 'clock-o',
                    link: ['/client'],
                    title: 'Client'
                }
            ]
        });
    };
    ClientComponent.prototype.ngOnDestroy = function () {
        this.breadServ.clear();
        this.clients = null;
    };
    ClientComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            providers: [__WEBPACK_IMPORTED_MODULE_2__dal_client_dal__["a" /* ClientDAL */]],
            selector: 'app-client',
            styles: [__webpack_require__(1127)],
            template: __webpack_require__(1136)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__dal_client_dal__["a" /* ClientDAL */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__dal_client_dal__["a" /* ClientDAL */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_breadcrumb_service__["a" /* BreadcrumbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_breadcrumb_service__["a" /* BreadcrumbService */]) === 'function' && _b) || Object])
    ], ClientComponent);
    return ClientComponent;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/client.component.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_breadcrumb_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(breadServ, auth) {
        this.breadServ = breadServ;
        this.auth = auth;
        this.date = new Date();
        // TODO
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (!this.auth.isAuthenticated()) {
            this.auth.showLogin();
        }
        // setttings the header for the home
        this.breadServ.set({
            description: 'HomePage',
            display: true,
            header: 'Dashboard',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: 'Home'
                }
            ]
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            styles: [__webpack_require__(1128)],
            template: __webpack_require__(1137)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_breadcrumb_service__["a" /* BreadcrumbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_breadcrumb_service__["a" /* BreadcrumbService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/home.component.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(renderer, formBuilder, authenticationService, router) {
        this.renderer = renderer;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.router = router;
        this.events = []; // use later to display form changes
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.renderer.setElementClass(document.body, 'skin-blue', false);
        this.renderer.setElementClass(document.body, 'sidebar-mini', false);
        this.renderer.setElementClass(document.body, 'login-page', true);
        this.loginForm = this.formBuilder.group({
            email: ['jaffar.techsupportone@nxvt.com', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].email],
            password: ['123456', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    LoginComponent.prototype.login = function (model, isValid) {
        var _this = this;
        this.model = model;
        this.submitted = true; // set form submit to true
        // check if model is valid
        // if valid, call API to save customer
        console.log(model, isValid);
        if (isValid) {
            this.loading = true;
            this.authenticationService.login(this.model.email, this.model.password)
                .subscribe(function (result) {
                console.log(result);
                if (result === true) {
                    _this.router.navigate(['/']);
                }
                else {
                    _this.error = 'Username or password is incorrect';
                    _this.loading = false;
                }
            }, function (error) {
                _this.loading = false;
                console.log(error);
            });
        }
    };
    LoginComponent.prototype.show = function () {
        this.router.navigate(['/']);
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(1138),
            styles: [__webpack_require__(1129)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/login.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_breadcrumb_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNumComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNumComponent = (function () {
    function PageNumComponent(route, breadServ) {
        this.route = route;
        this.breadServ = breadServ;
        this.id = 0;
        // TODO
    }
    PageNumComponent.prototype.ngOnInit = function () {
        var _this = this;
        // when calling routes change
        var idkey = 'id';
        this.sub = this.route.params.subscribe(function (data) {
            _this.id = data[idkey];
            // changing header
            _this.breadServ.set({
                description: 'This is our ' + _this.id + ' page',
                display: true,
                levels: [
                    {
                        icon: 'dashboard',
                        link: ['/'],
                        title: 'Home'
                    },
                    {
                        icon: 'clock-o',
                        link: ['/page/' + _this.id],
                        title: 'Page ' + _this.id
                    }
                ]
            });
        });
    };
    PageNumComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.breadServ.clear();
        this.route = null;
    };
    PageNumComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-num',
            styles: [__webpack_require__(1130)],
            template: __webpack_require__(1139)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_breadcrumb_service__["a" /* BreadcrumbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_breadcrumb_service__["a" /* BreadcrumbService */]) === 'function' && _b) || Object])
    ], PageNumComponent);
    return PageNumComponent;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/page-num.component.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CanActivateGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateGuard = (function () {
    function CanActivateGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function () {
        var isAuth = this.auth.isAuthenticated();
        if (isAuth !== true) {
        }
        return isAuth;
    };
    CanActivateGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], CanActivateGuard);
    return CanActivateGuard;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/guard.service.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MessagesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var initialMessages = [];
var MessagesService = (function () {
    // public markThreadAsRead: Subject<any> = new Subject<any>();
    function MessagesService() {
        var _this = this;
        this.messagesList = [];
        // a stream that publishes new messages only once
        this.newMessages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        // `messages` is a stream that emits an array of the most up to date messages
        this.messages = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["ReplaySubject"](1);
        // `updates` receives _operations_ to be applied to our `messages`
        // it's a way we can perform changes on *all* messages (that are currently
        // stored in `messages`)
        this.updates = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        // action streams
        this.create = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
        // recois des operation, et les fais sur la liste interne, puis diffuse le resultat sur messages
        this.updates.subscribe(function (ope) {
            _this.messagesList = ope(_this.messagesList);
            console.log(_this.messagesList);
            _this.messages.next(_this.messagesList);
        });
        this.newMessages
            .map(function (message) {
            return function (messages) {
                return messages.concat(message);
            };
        })
            .subscribe(this.updates);
    }
    // an imperative function call to this action stream
    MessagesService.prototype.addMessage = function (message) {
        this.newMessages.next(message);
    };
    MessagesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], MessagesService);
    return MessagesService;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/messages.service.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__ = __webpack_require__(814);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(toastr) {
        var _this = this;
        this.toastr = toastr;
        this.success = function (body, title) {
            if (title === void 0) { title = 'Operation successful'; }
            _this.toastr.pop({ body: body, title: title, type: 'success' });
        };
        this.error = function (body, title) {
            if (title === void 0) { title = 'An error occured'; }
            _this.toastr.pop({ body: body, title: title, type: 'error' });
        };
        this.warning = function (body, title) {
            if (title === void 0) { title = 'Something went wrong'; }
            _this.toastr.pop({ body: body, title: title, type: 'warning' });
        };
    }
    NotificationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["ToasterService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_toaster_angular2_toaster__["ToasterService"]) === 'function' && _a) || Object])
    ], NotificationService);
    return NotificationService;
    var _a;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/notification.service.js.map

/***/ },

/***/ 677:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 677;


/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(812);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(797);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/main.js.map

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var auth0Lock = __webpack_require__(529).default;




var AuthService = (function () {
    function AuthService(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.isAuthenticated = function () {
            return localStorage.getItem('currentUser') ? true : false;
            // return tokenNotExpired();
        };
        this.getUserEmail = function () {
            return _this.profile ? _this.profile.email : '';
        };
        this.getUserPicture = function () {
            return _this.profile ? _this.profile.picture : '';
        };
        this.getUserName = function () {
            if (_this.profile) {
                if (_this.profile.user_metadata) {
                    return _this.profile.user_metadata.name;
                }
                return _this.profile.name || _this.profile.email;
            }
            return '';
        };
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.profile = (currentUser && currentUser.username) ? { email: currentUser.username } : {};
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]();
        // headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: headers };
        var body = "grant_type=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api.grantType
            + "&client_id=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api.clientID
            + "&client_secret=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api.clientSecret
            + "&username=" + username
            + "&password=" + password
            + "&scope=" + __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api.scope;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].api.domain + '/user/token', body, options).
            map(function (response) {
            // login successful if there's a jwt token in the response
            var token = response.json() && response.json().access_token;
            if (token) {
                // set token property
                _this.token = token;
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().message || 'Server error'); }); //...errors if any
    };
    AuthService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
        //  this.router.navigate(['login']);
    };
    AuthService.prototype.showLogin = function () {
        this.router.navigate(['login']);
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/auth.service.js.map

/***/ },

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_service__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_translate_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(userServ, msgServ, 
        // private toastr: ToasterService, 
        translate, auth) {
        this.userServ = userServ;
        this.msgServ = msgServ;
        this.translate = translate;
        this.auth = auth;
        this.title = 'app works!';
        // this.toastrConfig = new ToasterConfig({
        //     newestOnTop: true,
        //     showCloseButton: true,
        //     tapToDismiss: false
        // });
        // this.translate = translate.getTranslate();
        // this.logger = new LoggerService( this.translate );
    }
    AppComponent.prototype.ngOnInit = function () {
        //  sedding the resize event, for AdminLTE to place the height
        var ie = this.detectIE();
        if (!ie) {
            window.dispatchEvent(new Event('resize'));
        }
        else {
            // solution for IE from @hakonamatata
            var event = document.createEvent('Event');
            event.initEvent('resize', false, true);
            window.dispatchEvent(event);
        }
        // defining some test users
        // let user1 = new User({
        //     avatarUrl: 'public/assets/img/user2-160x160.jpg',
        //     email: 'weber.antoine.pro@gmail.com',
        //     firstname: 'WEBER',
        //     lastname: 'Antoine'
        // });
        // let user2 = new User({
        //     avatarUrl: 'public/assets/img/user2-160x160.jpg',
        //     email: 'EMAIL',
        //     firstname: 'FIRSTNAME',
        //     lastname: 'LASTNAME'
        // });
        // this.userServ.setCurrentUser(user1);
        // // sending a test message
        // this.msgServ.addMessage(new Message({
        //     author: user2,
        //     content: 'le contenu d\'un message d\'une importance extreme',
        //     destination: user1,
        //     title: 'un message super important'
        // }));
    };
    AppComponent.prototype.detectIE = function () {
        var ua = window.navigator.userAgent;
        // Test values; Uncomment to check result …
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // IE 12 / Spartan
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // Edge (IE 12+)
        // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)
        // Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(1134),
            styles: [__webpack_require__(1125)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessagesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessagesService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_translate_service__["a" /* AdminLTETranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_translate_service__["a" /* AdminLTETranslateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/app.component.js.map

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_ng2_bootstrap__ = __webpack_require__(1087);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_ng2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_ng2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_translate__ = __webpack_require__(605);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(796);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widgets_app_header__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__widgets_app_footer__ = __webpack_require__(805);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__widgets_menu_aside__ = __webpack_require__(810);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__widgets_breadcrumb__ = __webpack_require__(809);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_messages_service__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_guard_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_notification_service__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_breadcrumb_service__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_translate_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_logger_service__ = __webpack_require__(803);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_home_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_page_num_page_num_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_client_client_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routes__ = __webpack_require__(798);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_login_login_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__layout_layout_component__ = __webpack_require__(801);
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["a" /* TranslateStaticLoader */](http, '../public/assets/i18n', '.json');
}
var modules = [
    __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_ng2_bootstrap__["AlertModule"],
    __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_ng2_bootstrap__["DatepickerModule"],
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
    __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase),
    __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["b" /* TranslateModule */].forRoot({
        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]],
        provide: __WEBPACK_IMPORTED_MODULE_8_ng2_translate__["c" /* TranslateLoader */],
        useFactory: (createTranslateLoader)
    }),
];





var widgets = [
    __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_13__widgets_breadcrumb__["a" /* BreadcrumbComponent */],
    __WEBPACK_IMPORTED_MODULE_10__widgets_app_header__["a" /* AppHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_11__widgets_app_footer__["a" /* AppFooterComponent */],
    __WEBPACK_IMPORTED_MODULE_12__widgets_menu_aside__["a" /* MenuAsideComponent */],
];








var services = [
    __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */],
    __WEBPACK_IMPORTED_MODULE_19__services_breadcrumb_service__["a" /* BreadcrumbService */],
    __WEBPACK_IMPORTED_MODULE_15__services_messages_service__["a" /* MessagesService */],
    __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
    __WEBPACK_IMPORTED_MODULE_17__services_guard_service__["a" /* CanActivateGuard */],
    __WEBPACK_IMPORTED_MODULE_18__services_notification_service__["a" /* NotificationService */],
    __WEBPACK_IMPORTED_MODULE_20__services_translate_service__["a" /* AdminLTETranslateService */],
    __WEBPACK_IMPORTED_MODULE_21__services_logger_service__["a" /* LoggerService */]
];



var pages = [
    __WEBPACK_IMPORTED_MODULE_22__pages_home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_23__pages_page_num_page_num_component__["a" /* PageNumComponent */],
    __WEBPACK_IMPORTED_MODULE_24__pages_client_client_component__["a" /* ClientComponent */],
];



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            bootstrap: [__WEBPACK_IMPORTED_MODULE_27__layout_layout_component__["a" /* LayoutComponent */]],
            declarations: widgets.concat(pages, [
                __WEBPACK_IMPORTED_MODULE_26__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__layout_layout_component__["a" /* LayoutComponent */]
            ]),
            imports: modules.concat([
                __WEBPACK_IMPORTED_MODULE_25__app_routes__["a" /* routing */]
            ]),
            providers: services.slice()
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/app.module.js.map

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_guard_service__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_page_num_page_num_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_client_client_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });






var routes = [
    // Root
    {
        component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home_component__["a" /* HomeComponent */],
        path: '',
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_guard_service__["a" /* CanActivateGuard */]],
    },
    {
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_guard_service__["a" /* CanActivateGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_3__pages_page_num_page_num_component__["a" /* PageNumComponent */],
        path: 'page/:id'
    },
    {
        canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_guard_service__["a" /* CanActivateGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__pages_client_client_component__["a" /* ClientComponent */],
        path: 'client'
    },
    {
        component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login_component__["a" /* LoginComponent */],
        path: 'login',
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/app.routes.js.map

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_notification_service__ = __webpack_require__(513);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ClientDAL; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDAL = (function () {
    function ClientDAL(af, notif) {
        var _this = this;
        this.af = af;
        this.notif = notif;
        this.readAll = function () {
            return _this.af.database.list('clients');
        };
        this.read = function (id) {
            return _this.af.database.list('clients', {
                query: {
                    equalTo: id,
                    orderByChild: 'clientId'
                }
            });
        };
        this.create = function (newClient) {
            _this.af.database.list('clients').push(newClient).then(function (resp) {
                return _this.notif.success('New client has been added');
            });
        };
        this.update = function (id, client) {
            _this.af.database.list('clients').update(id, client).then(function (resp) {
                return _this.notif.success('Client ' + client.name + ' has been updated');
            });
        };
        this.delete = function (client) {
            _this.af.database.list('clients').remove(client).then(function (resp) {
                return _this.notif.success('Client ' + client.name + ' has been deleted');
            });
        };
    }
    ClientDAL = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_notification_service__["a" /* NotificationService */]) === 'function' && _b) || Object])
    ], ClientDAL);
    return ClientDAL;
    var _a, _b;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/client.dal.js.map

/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__ = __webpack_require__(816);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_uuid__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return GuidHelper; });

var GuidHelper = (function () {
    function GuidHelper() {
    }
    GuidHelper.generateGUID = function () {
        return __WEBPACK_IMPORTED_MODULE_0_angular2_uuid__["UUID"].UUID();
    };
    return GuidHelper;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/guid.helper.js.map

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LayoutComponent = (function () {
    function LayoutComponent(auth) {
        this.auth = auth;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        console.log(this.auth);
    };
    LayoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(1135),
            styles: [__webpack_require__(1126)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], LayoutComponent);
    return LayoutComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/layout.component.js.map

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_guid_helper__ = __webpack_require__(800);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Client; });

var Client = (function () {
    function Client(name, clientId, adress) {
        this.name = name || '';
        this.clientId = clientId || __WEBPACK_IMPORTED_MODULE_0__helpers_guid_helper__["a" /* GuidHelper */].generateGUID();
        this.address = adress || '';
    }
    return Client;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/client.js.map

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__translate_service__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(228);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoggerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggerService = (function () {
    function LoggerService(translate) {
        this.translate = translate;
        // TODO
    }
    LoggerService.prototype.log = function (component, msg, i18nRef, data) {
        if (!__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].silent) {
            if (i18nRef) {
                var params = {};
                if (data) {
                    params = (data[0]) ? { 0: data[0] } : params;
                    params = (data[1]) ? { 0: data[0], 1: data[1] } : params;
                    params = (data[2]) ? { 0: data[0], 1: data[1], 2: data[2] } : params;
                }
                this.translate.getTranslate().get(i18nRef, params).subscribe(function (res) {
                    console.log(component + ': ' + res);
                });
            }
            else {
                console.log(component + ': ' + msg);
            }
        }
    };
    LoggerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__translate_service__["a" /* AdminLTETranslateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__translate_service__["a" /* AdminLTETranslateService */]) === 'function' && _a) || Object])
    ], LoggerService);
    return LoggerService;
    var _a;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/logger.service.js.map

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppFooterComponent = (function () {
    function AppFooterComponent(auth) {
        this.auth = auth;
        // TODO
    }
    AppFooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            styles: [__webpack_require__(1131)],
            template: __webpack_require__(1140)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppFooterComponent);
    return AppFooterComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/app-footer.component.js.map

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_footer_component__ = __webpack_require__(804);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_footer_component__["a"]; });

//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/index.js.map

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppHeaderComponent = (function () {
    function AppHeaderComponent(auth) {
        this.auth = auth;
        // TODO
    }
    AppHeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            styles: [__webpack_require__(1132)],
            template: __webpack_require__(1141)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], AppHeaderComponent);
    return AppHeaderComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/app-header.component.js.map

/***/ },

/***/ 807:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_header_component__ = __webpack_require__(806);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_header_component__["a"]; });

//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/index.js.map

/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_breadcrumb_service__ = __webpack_require__(170);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BreadcrumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadServ) {
        var _this = this;
        this.breadServ = breadServ;
        this.display = false;
        this.header = '';
        this.description = '';
        this.levels = [];
        // getting the data from the services
        this.breadServ.current.subscribe(function (data) {
            _this.display = data.display;
            _this.header = data.header;
            _this.description = data.description;
            _this.levels = data.levels;
        });
    }
    BreadcrumbComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(1142)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_breadcrumb_service__["a" /* BreadcrumbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_breadcrumb_service__["a" /* BreadcrumbService */]) === 'function' && _a) || Object])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
    var _a;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/breadcrumb.component.js.map

/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breadcrumb_component__ = __webpack_require__(808);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__breadcrumb_component__["a"]; });

//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/index.js.map

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_aside_component__ = __webpack_require__(811);
/* harmony reexport (binding) */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__menu_aside_component__["a"]; });

//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/index.js.map

/***/ },

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuAsideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuAsideComponent = (function () {
    function MenuAsideComponent(userServ, router, auth) {
        var _this = this;
        this.userServ = userServ;
        this.router = router;
        this.auth = auth;
        this.links = [
            {
                'title': 'Home',
                'icon': 'dashboard',
                'link': ['/']
            },
            {
                'title': 'Client',
                'icon': 'usd',
                'link': ['/client']
            },
            {
                'title': 'Sub menu',
                'icon': 'link',
                'sublinks': [
                    {
                        'title': 'Page 2',
                        'link': ['/page/2'],
                    },
                    {
                        'title': 'Page 3',
                        'link': ['/page/3'],
                    }
                ]
            },
            {
                'title': 'External Link',
                'icon': 'google',
                'link': ['http://google.com'],
                'external': true,
                'target': '_blank'
            },
            {
                'title': 'External Links',
                'icon': 'link',
                'sublinks': [
                    {
                        'title': 'Github',
                        'link': ['http://github.com'],
                        'icon': 'github',
                        'external': true,
                        'target': '_blank'
                    },
                    {
                        'title': 'Yahoo',
                        'link': ['http://yahoo.com'],
                        'icon': 'yahoo',
                        'external': true,
                        'target': '_blank'
                    }
                ]
            }
        ];
        // getting the current url
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () {
        // TODO
    };
    MenuAsideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu-aside',
            styles: [__webpack_require__(1133)],
            template: __webpack_require__(1143)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], MenuAsideComponent);
    return MenuAsideComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/menu-aside.component.js.map

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(892);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(888);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(894);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(893);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(891);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(887);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(886);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(889);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/var/www/html/tutorials/testapi/resources/angular/src/polyfills.js.map

/***/ }

},[1501]);
//# sourceMappingURL=main.bundle.map