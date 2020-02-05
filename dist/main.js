/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar */ \"./src/modules/navbar.js\");\n/* harmony import */ var _modules_jumbotron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/jumbotron */ \"./src/modules/jumbotron.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n// import gallery from \"./modules/gallery\";\r\n// import contact from \"./modules/contact\";\r\n// import socialMedia from \"./modules/socialMedia\";\r\n// import footer from \"./modules/footer\";\r\n\r\nconst filling = document.getElementById('content');\r\nfilling.appendChild(Object(_modules_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\nfilling.appendChild(Object(_modules_jumbotron__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\nfilling.appendChild(Object(_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/jumbotron.js":
/*!**********************************!*\
  !*** ./src/modules/jumbotron.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst jumbotron = () => {\r\n  const home = document.createElement('a');\r\n  home.setAttribute('name', 'home');\r\n  const jumbo = document.createElement('div');\r\n  jumbo.id = 'home';\r\n  jumbo.classList.add('jumbotron', 'jumbotron-fluid');\r\n  jumbo.innerHTML = `\r\n  <video autoplay muted loop poster=\"media/flaming-wok.png\">    \r\n    <source src=\"media/wok-fire.mp4\" type=\"video/mp4\">\r\n  </video>`;\r\n\r\n  const container = document.createElement('div');\r\n  container.classList.add('container', 'text-white');\r\n  container.innerHTML = `\r\n  <h1 class=\"display-4\">Hungry?</h1>\r\n  <p class=\"lead\"><strong>Wok this way!</strong></p>\r\n  <hr class=\"my-4\">\r\n  <p>Authentic Wok Stirred Fried Chinese Cuisine.</p>\r\n  <a class=\"btn btn-primary btn-lg\" href=\"#contact\" role=\"button\">Make a Reservation</a>`;\r\n\r\n  jumbo.appendChild(container);\r\n\r\n  return home, jumbo;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (jumbotron);\n\n//# sourceURL=webpack:///./src/modules/jumbotron.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unterminated template (19:20)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|   const row2 = document.createElement('div');\\n|   row2.classList.add('row');\\n>   row2.innerHTML = `\\n| \\n|   foodlist.appendChild(container);\");\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navbar = () => {\r\n  const head = document.createElement('nav');\r\n  head.classList.add('navbar', 'navbar-expand-lg', 'navbar', 'bg-white', 'static-top');\r\n  const container = document.createElement('div');\r\n  container.classList.add('container');\r\n  const logo = document.createElement('a');\r\n  logo.classList.add('nav-brand');\r\n  logo.setAttribute('href', 'home');\r\n  logo.innerHTML = `<img src=\"media/wok-logo-small.png\" alt=\"Logo\">`;\r\n\r\n  const siteMenu = document.createElement('div');\r\n  siteMenu.classList.add('collapse', 'navbar-collapse');\r\n  siteMenu.id = 'navbar-collapse';\r\n\r\n  const unlist = document.createElement('ul');\r\n  unlist.classList.add('navbar-nav', 'ml-auto');\r\n\r\n  \r\n  const navLinks = ['Home', 'Menu', 'Gallery', 'Contact'];\r\n  const navArr = [];\r\n  for (var i = 0; i < 4; i++) {\r\n    const aTag = document.createElement('a');\r\n    const liTag = document.createElement('li');\r\n    if (i == 1) {\r\n      aTag.setAttribute('href', '#menu');\r\n    } else if (i == 2) {\r\n      aTag.setAttribute('href', '#gallery');\r\n    } else if (i == 3) {\r\n      aTag.setAttribute('href', '#contact');\r\n    } else {\r\n      aTag.setAttribute('href', '#home');\r\n    }    \r\n\r\n    aTag.classList.add('nav-link');\r\n    aTag.innerHTML = navLinks[i];\r\n    liTag.classList.add('nav-item');\r\n    liTag.appendChild(aTag);\r\n    navArr.push(liTag);\r\n  };\r\n\r\n  head.appendChild(container);\r\n  container.appendChild(logo);\r\n  container.appendChild(siteMenu);\r\n  unlist.appendChild(...navArr)\r\n  siteMenu.appendChild(unlist);\r\n\r\n  return head;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/modules/navbar.js?");

/***/ })

/******/ });