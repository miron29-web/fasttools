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

/***/ "./src/js/components/auth.js":
/*!***********************************!*\
  !*** ./src/js/components/auth.js ***!
  \***********************************/
/***/ (() => {

eval("const authBtn = document.querySelector('.header__actions-auth');\r\nconst authOverlay = document.querySelector('.header__auth');\r\nconst authClose = document.querySelector('.header__auth-close');\r\n\r\nconst btnReg = document.querySelector('.header__auth-link-reg');\r\nconst btnAuth = document.querySelector('.header__auth-link-auth');\r\n\r\nconst login = document.querySelector('.header__auth-login');\r\nconst reg = document.querySelector('.header__auth-register');\r\n\r\nauthBtn.addEventListener('click', () => {\r\n  authOverlay.classList.add('is-active');\r\n});\r\n\r\nauthClose.addEventListener('click', () => {\r\n  authOverlay.classList.remove('is-active');\r\n});\r\n\r\nbtnReg.addEventListener('click', () => {\r\n  login.classList.remove('is-active');\r\n  reg.classList.add('is-active');\r\n});\r\n\r\nbtnAuth.addEventListener('click', () => {\r\n  reg.classList.remove('is-active');\r\n  login.classList.add('is-active');\r\n});\n\n//# sourceURL=webpack://gulp-project/./src/js/components/auth.js?");

/***/ }),

/***/ "./src/js/components/catalog_slider.js":
/*!*********************************************!*\
  !*** ./src/js/components/catalog_slider.js ***!
  \*********************************************/
/***/ (() => {

eval("let currentCard = null;\r\nlet currentSlider = null;\r\n\r\nconst cardthumbs = document.querySelectorAll('.product-card__thumbnail');\r\n\r\ncardthumbs.forEach(th => {\r\n  th.addEventListener('click', () => {\r\n    currentCard = th.closest('.catalog__card');\r\n    currentSlider = currentCard.querySelector('.product-card__slider');\r\n    currentSlider.classList.add('is-active');\r\n  })\r\n});\r\n\r\nconst btnsClose = document.querySelectorAll('.product-slider__close');\r\nbtnsClose.forEach(btn => {\r\n  btn.addEventListener('click', () => {\r\n    currentSlider.classList.remove('is-active');\r\n  });\r\n});\r\n\r\nconst sliderThumbs = document.querySelectorAll('.product-slider__thumb');\r\n\r\nsliderThumbs.forEach(th => {\r\n  th.addEventListener('click', () => {\r\n    const allThumbs = currentSlider.querySelectorAll('.product-slider__thumb');\r\n    allThumbs.forEach(thumb => thumb.classList.remove('is-active'));\r\n\r\n    th.classList.add('is-active');\r\n\r\n\r\n    const mainImg = currentSlider.querySelector('.product-slider__main-img');\r\n    mainImg.classList.add('fade-out');\r\n\r\n    setTimeout(() => {\r\n      mainImg.src = th.src;\r\n      mainImg.classList.remove('fade-out');\r\n      mainImg.classList.add('fade-in');\r\n\r\n      setTimeout(() => {\r\n        mainImg.classList.remove('fade-in');\r\n      }, 300);\r\n    }, 300);\r\n  });\r\n});\n\n//# sourceURL=webpack://gulp-project/./src/js/components/catalog_slider.js?");

/***/ }),

/***/ "./src/js/components/mobile_menu.js":
/*!******************************************!*\
  !*** ./src/js/components/mobile_menu.js ***!
  \******************************************/
/***/ (() => {

eval("\r\nconst burgerBtn = document.querySelector('.actions__burger.burger');\r\nconst mobileWindow = document.querySelector('.header__menu-mobile');\r\nconst closeBtn = document.querySelector('.mobile-menu__button-close');\r\n\r\nburgerBtn.addEventListener('click', () => {\r\n  mobileWindow.classList.add('is-active');\r\n});\r\n\r\ncloseBtn.addEventListener('click', () => {\r\n  mobileWindow.classList.remove('is-active');\r\n});\r\n\r\n\n\n//# sourceURL=webpack://gulp-project/./src/js/components/mobile_menu.js?");

/***/ }),

/***/ "./src/js/components/slider.js":
/*!*************************************!*\
  !*** ./src/js/components/slider.js ***!
  \*************************************/
/***/ (() => {

eval("const slidesContainer = document.querySelector('.slider__slides');\r\nconst slides = document.querySelectorAll('.slide__image');\r\nconst controlsContainer = document.querySelector('.slider__controls');\r\n\r\nlet currentIndex = 0;\r\nconst slideCount = slides.length;\r\nconst intervalTime = 10000;\r\nlet interval;\r\n\r\nslides.forEach((_, index) => {\r\n  const btn = document.createElement('span');\r\n  btn.classList.add('slider__controls-btn');\r\n  if(index === 0) btn.classList.add('is-active');\r\n  btn.dataset.slide = index;\r\n  controlsContainer.appendChild(btn);\r\n});\r\n\r\nconst controlsBtn = document.querySelectorAll('.slider__controls-btn');\r\n\r\nfunction goToSlide(index) {\r\n  const allContents = document.querySelectorAll('.slide__content');\r\n  allContents.forEach(content => content.classList.remove('is-active'));\r\n\r\n  slidesContainer.style.transform = `translateX(-${index * 100}%)`;\r\n\r\n  controlsBtn.forEach(btn => btn.classList.remove('is-active'));\r\n  controlsBtn[index].classList.add('is-active');\r\n\r\n  setTimeout(() => {\r\n    const currentSlide = document.querySelectorAll('.slider__slide')[index];\r\n    const content = currentSlide.querySelector('.slide__content');\r\n    content.classList.add('is-active');\r\n    currentIndex = index;\r\n  }, 300);\r\n}\r\n\r\ncontrolsBtn.forEach(btn => {\r\n  btn.addEventListener('click', () => {\r\n    const index = parseInt(btn.dataset.slide);\r\n    goToSlide(index);\r\n    resetInterval();\r\n  });\r\n});\r\n\r\nfunction nextSlide() {\r\n  const nextIndex = (currentIndex + 1) % slideCount;\r\n  goToSlide(nextIndex);\r\n}\r\n\r\nfunction startInterval() {\r\n  interval = setInterval(nextSlide, intervalTime);\r\n}\r\n\r\nfunction resetInterval() {\r\n  clearInterval(interval);\r\n  startInterval();\r\n}\r\n\r\nlet startX = 0;\r\nlet endX = 0;\r\nconst swipeThreshold = 50; // Минимальное расстояние для свайпа в пикселях\r\n\r\nslidesContainer.addEventListener('touchstart', (e) => {\r\n  startX = e.touches[0].clientX;\r\n});\r\n\r\nslidesContainer.addEventListener('touchmove', (e) => {\r\n  endX = e.touches[0].clientX;\r\n});\r\n\r\nslidesContainer.addEventListener('touchend', () => {\r\n  const distance = endX - startX;\r\n\r\nif (Math.abs(distance) > swipeThreshold) {\r\n  if (distance < 0) {\r\n    // свайп влево — следующий слайд\r\n    const nextIndex = (currentIndex + 1) % slideCount;\r\n    goToSlide(nextIndex);\r\n  } else {\r\n    // свайп вправо — предыдущий слайд\r\n    const prevIndex = (currentIndex - 1 + slideCount) % slideCount;\r\n    goToSlide(prevIndex);\r\n  }\r\n\r\n  resetInterval(); // сбрасываем автоперелистывание\r\n}\r\n});\r\n\r\n\r\n// Старт\r\nstartInterval();\n\n//# sourceURL=webpack://gulp-project/./src/js/components/slider.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/mobile_menu */ \"./src/js/components/mobile_menu.js\");\n/* harmony import */ var _components_mobile_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_mobile_menu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/slider */ \"./src/js/components/slider.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_slider__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_catalog_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/catalog_slider */ \"./src/js/components/catalog_slider.js\");\n/* harmony import */ var _components_catalog_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_catalog_slider__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth */ \"./src/js/components/auth.js\");\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_auth__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://gulp-project/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;