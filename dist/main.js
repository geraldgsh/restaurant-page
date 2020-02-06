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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\r\n\r\n  const starterItem = [\r\n    {\r\n      link: 'https://thewoksoflife.com/hot-sour-soup/',\r\n      img: 'media/szechuan.png',\r\n      title: 'Szechuan Soup',\r\n      meta: 'Hot / Sour / Mushroom',\r\n      price: '$10'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/chinese-chicken-mushroom-soup/',\r\n      img: 'media/chicken-mushroom.png',\r\n      title: 'Chicken Mushroom Soup',\r\n      meta: 'Chicken / Mushroom / Rice Wine',\r\n      price: '$8'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/lotus-root-pork-soup/',\r\n      img: 'media/lotus-pork.png',\r\n      title: 'Lotus Pork Soup',\r\n      meta: 'lotus root / pork',\r\n      price: '$8'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/oxtail-soup/',\r\n      img: 'media/oxtail.png',\r\n      title: 'Oxtail Soup',\r\n      meta: 'oxtail / radish',\r\n      price: '$12'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/red-vegetable-soup-shanghai-luo-song-tang/',\r\n      img: 'media/red-soup.png',\r\n      title: 'Red Vegetable Soup',\r\n      meta: 'Oxtail / Tomato',\r\n      price: '$13'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/chinese-winter-melon-soup-meatballs/',\r\n      img: 'media/winter-melon.png',\r\n      title: 'Winter Melon Soup',\r\n      meta: 'Winter Melon / Meatball',\r\n      price: '$9'\r\n    }\r\n  ];\r\n\r\n  const mainItem = [\r\n    {\r\n      link: 'https://thewoksoflife.com/steak-stir-fry/',\r\n      img: 'media/steak-choi.png',\r\n      title: 'STEAK STIR FRY',\r\n      meta: 'beef / bok choy',\r\n      price: '$15'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/garlic-chives-pork-cang-ying-tou/',\r\n      img: 'media/chives-pork.png',\r\n      title: 'CHIVE STIR FRY PORK',\r\n      meta: 'Chives / pork',\r\n      price: '$14'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/pork-belly-stir-fry-with-leeks/',\r\n      img: 'media/pork-leek.png',\r\n      title: 'Stir Fry Pork Leeks',\r\n      meta: 'Leeks / Pork',\r\n      price: '$9'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/beef-tofu-stir-fry/',\r\n      img: 'media/beef-tofu.png',\r\n      title: 'Stir Fry Beef Tofu',\r\n      meta: 'Beef / Tofu',\r\n      price: '$11'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/cashew-shrimp-stir-fry/',\r\n      img: 'media/cashew-shrimp.png',\r\n      title: 'Cashew Shrimp Stir Fry',\r\n      meta: 'Cashew Nuts / Shrimp / Celery',\r\n      price: '$13'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/sweet-sour-fish-fillet/',\r\n      img: 'media/sweet-sour-fish.png',\r\n      title: 'Sweet Sour Fish Fillet',\r\n      meta: 'Fish Fillet / Pineapple / vinegar',\r\n      price: '$12'\r\n    }\r\n  ];\r\n\r\n  const dessertItem = [\r\n    {\r\n      link: 'https://thewoksoflife.com/red-bean-soup/',\r\n      img: 'media/red-bean.png',\r\n      title: 'Red Bean Soup',\r\n      meta: 'Red Bean',\r\n      price: '$5'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/snow-fungus-soup-pears/',\r\n      img: 'media/fungus.png',\r\n      title: 'Snow Fungus Soup',\r\n      meta: 'Fungus / Asian Pear',\r\n      price: '$11'\r\n    },\r\n    {\r\n      link: 'https://thewoksoflife.com/baobing-chinese-shaved-ice/',\r\n      img: 'media/shaved-ice.png',\r\n      title: 'Baobing Shaved Ice',\r\n      meta: 'Mango / Taro / Red Bean',\r\n      price: '$7'\r\n    }\r\n  ];\r\n\r\n  const amenu = document.createElement('a');\r\n  amenu.setAttribute('name', 'menu');\r\n  const foodlist = document.createElement('div');\r\n  foodlist.id = 'menu';\r\n  foodlist.classList.add('foodlist', 'content');\r\n  \r\n  const container = document.createElement('div');\r\n  container.classList.add('container');\r\n  foodlist.appendChild(container);\r\n  \r\n  const row1 = document.createElement('div');\r\n  row1.classList.add('row');\r\n  container.appendChild(row1);\r\n\r\n  const col1 = document.createElement('div');\r\n  col1.classList.add('col-lg-12', 'col-md-12', 'col-sm-12', 'col-xs-12', 'text-center');\r\n  row1.appendChild(col1);\r\n\r\n  const pageSection = document.createElement('div');\r\n  pageSection.classList.add('page-section');\r\n  col1.appendChild(pageSection);\r\n\r\n  const pageTitle = document.createElement('h1');\r\n  pageTitle.classList.add('page-title');\r\n  pageTitle.innerHTML = 'Food Menu';\r\n  pageSection.appendChild(pageTitle);\r\n\r\n  const row2 = document.createElement('div');\r\n  row2.classList.add('row');\r\n  container.appendChild(row2);\r\n\r\n  const col2 = document.createElement('div');\r\n  col2.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');\r\n  row2.appendChild(col2);\r\n\r\n  const menuBlock1 =  document.createElement('div');\r\n  menuBlock1.classList.add('menu-block');\r\n  col2.appendChild(menuBlock1);\r\n\r\n  const menuTitle1 = document.createElement('h3');\r\n  menuTitle1.classList.add('menu-title');\r\n  menuTitle1.innerHTML = 'Starter';\r\n  menuBlock1.appendChild(menuTitle1);\r\n\r\n  starterItem.forEach(soup=> {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.classList.add('menu-content');\r\n    menuBlock1.appendChild(menuContent);\r\n\r\n    const row = document.createElement('div');\r\n    row.classList.add('row');\r\n    menuContent.appendChild(row);\r\n\r\n    const col3 = document.createElement('div');\r\n    col3.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12');\r\n    row.appendChild(col3);\r\n\r\n    const dishImg = document.createElement('div');\r\n    dishImg.classList.add('dish-img');\r\n    col3.appendChild(dishImg);\r\n\r\n    const aTag = document.createElement('a');\r\n    aTag.setAttribute('href', soup.link);\r\n    dishImg.appendChild(aTag);\r\n\r\n    const img = document.createElement('img');\r\n    img.setAttribute('src', soup.img)\r\n    img.setAttribute('alt', soup.title);\r\n    img.classList.add('img-circle')\r\n    aTag.appendChild(img);\r\n\r\n    const col4 = document.createElement('div');\r\n    col4.classList.add('col-lg-9', 'col-md-9', 'col-sm-9', 'col-xs-12');\r\n    row.appendChild(col4);\r\n    const dishContent = document.createElement('div');\r\n    dishContent.classList.add('dish-content');\r\n    col4.appendChild(dishContent);\r\n\r\n    const dishTitle = document.createElement('h5');\r\n    dishTitle.classList.add('dish-title');\r\n    dishTitle.innerHTML = `<a href='#'>${soup.title}</a>`\r\n    dishContent.appendChild(dishTitle);\r\n    const dishLink = document.createElement('a');\r\n    dishLink.setAttribute('href', '#')\r\n    dishLink.inner = soup.title;\r\n    dishTitle.appendChild(dishLink);\r\n\r\n    const dishMeta = document.createElement('span');\r\n    dishMeta.classList.add('dish-meta');\r\n    dishMeta.innerHTML = soup.meta\r\n    dishContent.appendChild(dishMeta);\r\n\r\n    const dishPrice = document.createElement('div');\r\n    dishPrice.classList.add('dish-price');\r\n    dishContent.appendChild(dishPrice);\r\n\r\n    const priceTag =  document.createElement('p');\r\n    priceTag.innerHTML = soup.price;\r\n    dishPrice.appendChild(priceTag);    \r\n\r\n  });\r\n\r\n  \r\n  const col5 = document.createElement('div');\r\n  col5.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');\r\n  row2.appendChild(col5);\r\n\r\n  const menuBlock2 =  document.createElement('div');\r\n  menuBlock2.classList.add('menu-block');\r\n  col5.appendChild(menuBlock2);\r\n\r\n  const menuTitle2 = document.createElement('h3');\r\n  menuTitle2.classList.add('menu-title');\r\n  menuTitle2.innerHTML = 'Main Course';\r\n  menuBlock2.appendChild(menuTitle2);\r\n\r\n  mainItem.forEach(main=> {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.classList.add('menu-content');\r\n    menuBlock2.appendChild(menuContent);\r\n\r\n    const row = document.createElement('div');\r\n    row.classList.add('row');\r\n    menuContent.appendChild(row);\r\n\r\n    const col6 = document.createElement('div');\r\n    col6.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12');\r\n    row.appendChild(col6);\r\n\r\n    const dishImg = document.createElement('div');\r\n    dishImg.classList.add('dish-img');\r\n    col6.appendChild(dishImg);\r\n\r\n    const aTag = document.createElement('a');\r\n    aTag.setAttribute('href', main.link);\r\n    dishImg.appendChild(aTag);\r\n\r\n    const img = document.createElement('img');\r\n    img.setAttribute('src', main.img)\r\n    img.setAttribute('alt', main.title);\r\n    img.classList.add('img-circle')\r\n    aTag.appendChild(img);\r\n\r\n    const col7 = document.createElement('div');\r\n    col7.classList.add('col-lg-9', 'col-md-9', 'col-sm-9', 'col-xs-12');\r\n    row.appendChild(col7);\r\n    const dishContent = document.createElement('div');\r\n    dishContent.classList.add('dish-content');\r\n    col7.appendChild(dishContent);\r\n\r\n    const dishTitle = document.createElement('h5');\r\n    dishTitle.classList.add('dish-title');\r\n    dishTitle.innerHTML = `<a href='#'>${main.title}</a>`\r\n    dishContent.appendChild(dishTitle);\r\n    const dishLink = document.createElement('a');\r\n    dishLink.setAttribute('href', '#')\r\n    dishLink.inner = main.title;\r\n    dishTitle.appendChild(dishLink);\r\n\r\n    const dishMeta = document.createElement('span');\r\n    dishMeta.classList.add('dish-meta');\r\n    dishMeta.innerHTML = main.meta\r\n    dishContent.appendChild(dishMeta);\r\n\r\n    const dishPrice = document.createElement('div');\r\n    dishPrice.classList.add('dish-price');\r\n    dishContent.appendChild(dishPrice);\r\n\r\n    const priceTag =  document.createElement('p');\r\n    priceTag.innerHTML = main.price;\r\n    dishPrice.appendChild(priceTag);    \r\n\r\n  });\r\n\r\n  const col8 = document.createElement('div');\r\n  col8.classList.add('col-lg-4', 'col-md-4', 'col-sm-6', 'col-xs-12', 'mb40');\r\n  row2.appendChild(col8);\r\n\r\n  const menuBlock3 =  document.createElement('div');\r\n  menuBlock3.classList.add('menu-block');\r\n  col8.appendChild(menuBlock3);\r\n\r\n  const menuTitle3 = document.createElement('h3');\r\n  menuTitle3.classList.add('menu-title');\r\n  menuTitle3.innerHTML = 'Dessert';\r\n  menuBlock3.appendChild(menuTitle3);\r\n\r\n  dessertItem.forEach(dessert => {\r\n    const menuContent = document.createElement('div');\r\n    menuContent.classList.add('menu-content');\r\n    menuBlock3.appendChild(menuContent);\r\n\r\n    const row = document.createElement('div');\r\n    row.classList.add('row');\r\n    menuContent.appendChild(row);\r\n\r\n    const col9 = document.createElement('div');\r\n    col9.classList.add('col-lg-3', 'col-md-3', 'col-sm-3', 'col-xs-12');\r\n    row.appendChild(col9);\r\n\r\n    const dishImg = document.createElement('div');\r\n    dishImg.classList.add('dish-img');\r\n    col9.appendChild(dishImg);\r\n\r\n    const aTag = document.createElement('a');\r\n    aTag.setAttribute('href', dessert.link);\r\n    dishImg.appendChild(aTag);\r\n\r\n    const img = document.createElement('img');\r\n    img.setAttribute('src', dessert.img)\r\n    img.setAttribute('alt', dessert.title);\r\n    img.classList.add('img-circle')\r\n    aTag.appendChild(img);\r\n\r\n    const col10 = document.createElement('div');\r\n    col10.classList.add('col-lg-9', 'col-md-9', 'col-sm-9', 'col-xs-12');\r\n    row.appendChild(col10);\r\n    const dishContent = document.createElement('div');\r\n    dishContent.classList.add('dish-content');\r\n    col10.appendChild(dishContent);\r\n\r\n    const dishTitle = document.createElement('h5');\r\n    dishTitle.classList.add('dish-title');\r\n    dishTitle.innerHTML = `<a href='#'>${dessert.title}</a>`\r\n    dishContent.appendChild(dishTitle);\r\n    const dishLink = document.createElement('a');\r\n    dishLink.setAttribute('href', '#')\r\n    dishLink.inner = dessert.title;\r\n    dishTitle.appendChild(dishLink);\r\n\r\n    const dishMeta = document.createElement('span');\r\n    dishMeta.classList.add('dish-meta');\r\n    dishMeta.innerHTML = dessert.meta\r\n    dishContent.appendChild(dishMeta);\r\n\r\n    const dishPrice = document.createElement('div');\r\n    dishPrice.classList.add('dish-price');\r\n    dishContent.appendChild(dishPrice);\r\n\r\n    const priceTag =  document.createElement('p');\r\n    priceTag.innerHTML = dessert.price;\r\n    dishPrice.appendChild(priceTag);    \r\n\r\n  });\r\n\r\n\r\n  return foodlist;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/modules/menu.js?");

/***/ }),

/***/ "./src/modules/navbar.js":
/*!*******************************!*\
  !*** ./src/modules/navbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navbar = () => {\r\n  const head = document.createElement('nav');\r\n  head.classList.add('navbar', 'navbar-expand', 'bg-white', 'navbar-default', 'fixed-top');\r\n  const container = document.createElement('div');\r\n  container.classList.add('container');\r\n  const logo = document.createElement('a');\r\n  logo.classList.add('nav-brand');\r\n  logo.setAttribute('href', 'home');\r\n  logo.innerHTML = `<img src=\"media/wok-logo-small.png\" alt=\"Logo\">`;\r\n\r\n  const siteMenu = document.createElement('div');\r\n  siteMenu.classList.add('collapse', 'navbar-collapse');\r\n  siteMenu.id = 'navbar-collapse';\r\n\r\n  const unlist = document.createElement('ul');\r\n  unlist.classList.add('navbar-nav', 'ml-auto');\r\n\r\n  \r\n  const navLinks = ['Home', 'Menu', 'Gallery', 'Contact'];\r\n  const navArr = [];\r\n  for (var i = 0; i < 4; i++) {\r\n    const aTag = document.createElement('a');\r\n    const liTag = document.createElement('li');\r\n    if (i == 1) {\r\n      aTag.setAttribute('href', '#menu');\r\n    } else if (i == 2) {\r\n      aTag.setAttribute('href', '#gallery');\r\n    } else if (i == 3) {\r\n      aTag.setAttribute('href', '#contact');\r\n    } else {\r\n      aTag.setAttribute('href', '#home');\r\n    }    \r\n\r\n    aTag.classList.add('nav-link');\r\n    aTag.innerHTML = navLinks[i];\r\n    liTag.classList.add('nav-item');\r\n    liTag.appendChild(aTag);\r\n    navArr.push(liTag);\r\n  };\r\n\r\n  head.appendChild(container);\r\n  container.appendChild(logo);\r\n  container.appendChild(siteMenu);\r\n  unlist.appendChild(...navArr)\r\n  siteMenu.appendChild(unlist);\r\n\r\n  return head;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/modules/navbar.js?");

/***/ })

/******/ });