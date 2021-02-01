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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GalleryClassName = 'gallery';\r\nconst GalleryDraggableClassName = 'gallery-draggable';\r\nconst GalleryLineClassName = 'gallery-line';\r\nconst GalleryLineContainerClassName = 'gallery-line-container';\r\nconst GallerySlideClassName = 'gallery-slide';\r\nconst GalleryDotClassName = 'gallery-dot';\r\nconst GalleryDotActiveClassName = 'gallery-dot-active';\r\nconst GalleryDotsClassName = 'gallery-dots';\r\nconst GalleryDotsActiveClassName = 'gallery-dot-active';\r\nconst GalleryNavClassName = 'gallery-nav';\r\nconst GalleryNavLeftClassName = 'gallery-nav-left';\r\nconst GalleryNavRightClassName = 'gallery-nav-right';\r\nconst GalleryNavDisabledClassName = 'gallery-nav-disabled';\r\n\r\n\r\n\r\nclass Gallery {\r\n  constructor(element, options = {}) {\r\n    this.containerNode = element;\r\n    this.size = element.childElementCount;\r\n    this.currentSlideWasChanged = false;\r\n    this.settings = {\r\n      margin: options.margin || 0,\r\n      slidesToShow: options.slidesToShow,\r\n      infinity: options.infinity,\r\n      currentSlide: options.currentSlide\r\n    }\r\n\r\n    this.manageHTML = this.manageHTML.bind(this);\r\n    this.setParameters = this.setParameters.bind(this);\r\n    this.setEvents = this.setEvents.bind(this);\r\n    this.resizeGallery = this.resizeGallery.bind(this);\r\n    this.startDrag = this.startDrag.bind(this);\r\n    this.stopDrag = this.stopDrag.bind(this);\r\n    this.dragging = this.dragging.bind(this);\r\n    this.setStylePosition = this.setStylePosition.bind(this);\r\n    this.clickDots = this.clickDots.bind(this);\r\n    this.moveToLeft = this.moveToLeft.bind(this);\r\n    this.moveToRight = this.moveToRight.bind(this);\r\n    this.changeCurrentSlide = this.changeCurrentSlide.bind(this);\r\n    this.changeActiveDotClass = this.changeActiveDotClass.bind(this);\r\n    this.changeDisabledNav = this.changeDisabledNav.bind(this);\r\n    \r\n    this.manageHTML();\r\n    this.setParameters();\r\n    this.setEvents();\r\n  }\r\n  manageHTML() {\r\n\r\n    this.containerNode.classList.add(GalleryClassName); //gallery\r\n    // gallery-line-container\r\n    this.containerNode.innerHTML = `\r\n        <div class=\"${GalleryLineContainerClassName}\"> \r\n            <div class=\"${GalleryLineClassName}\">\r\n                ${this.containerNode.innerHTML}    \r\n            </div>\r\n        </div>\r\n        <div class=\"${GalleryNavClassName}\">\r\n            <button class=\"${GalleryNavLeftClassName}\">Left</button>\r\n            <button class=\"${GalleryNavRightClassName}\">Right</button>\r\n        </div>\r\n        <div class=\"${GalleryDotsClassName}\"></div>\r\n    `;\r\n// gallery-line-container\r\n    this.lineContainerNode = this.containerNode.querySelector(`.${GalleryLineContainerClassName}`);\r\n    // gallery-line\r\n    this.lineNode = this.containerNode.querySelector(`.${GalleryLineClassName}`);\r\n    // gallery-dots\r\n    this.dotsNode = this.containerNode.querySelector(`.${GalleryDotsClassName}`);\r\n\r\n    this.slideNodes = Array.from(this.lineNode.children).map((childNode) =>\r\n        wrapElementByDiv({\r\n            element: childNode,\r\n            className: GallerySlideClassName\r\n        })\r\n    );\r\n    \r\n    this.dotsNode.innerHTML = Array.from(Array(this.size).keys()).map((key) => (\r\n        `<button class=\"${GalleryDotClassName} ${key === this.settings.currentSlide ? GalleryDotActiveClassName : ''}\"></button>`\r\n    )).join('');\r\n\r\n    this.dotNodes = this.dotsNode.querySelectorAll(`.${GalleryDotClassName}`);\r\n    this.navLeft = this.containerNode.querySelector(`.${GalleryNavLeftClassName}`);\r\n    this.navRight = this.containerNode.querySelector(`.${GalleryNavRightClassName}`);\r\n\r\n  }\r\n\r\n  setParameters() {\r\n    const coordsLineContainer = this.lineContainerNode.getBoundingClientRect();\r\n    this.width = coordsLineContainer.width / this.settings.slidesToShow;\r\n    this.maximumX = -(this.size - 1) * (this.width + this.settings.margin);\r\n    this.x = -this.settings.currentSlide * (this.width + this.settings.margin);\r\n    console.log('thiswidth- ', this.settings.currentSlide);\r\n    this.resetStyleTransition();\r\n    this.settings.margin = this.settings.margin * this.settings.slidesToShow;\r\n    this.lineNode.style.width = `${this.size * (this.width + this.settings.margin)}px`;\r\n    this.setStylePosition();\r\n    this.changeActiveDotClass();\r\n    this.changeDisabledNav();\r\n\r\n    Array.from(this.slideNodes).forEach((slideNode) => {\r\n        slideNode.style.width = `${this.width}px`;\r\n        slideNode.style.marginRight = `${this.settings.margin}px`;\r\n    });\r\n  }\r\n\r\n  setEvents() {\r\n    this.debounceResizeGallery = debounce(this.resizeGallery);\r\n    window.addEventListener('resize', this.debounceResizeGallery);\r\n    this.lineNode.addEventListener('pointerdown', this.startDrag);\r\n    window.addEventListener('pointerup', this.stopDrag);\r\n    window.addEventListener('pointercancel', this.stopDrag);\r\n\r\n    this.dotsNode.addEventListener('click', this.clickDots);\r\n    this.navLeft.addEventListener('click', this.moveToLeft);\r\n    this.navRight.addEventListener('click', this.moveToRight);\r\n  }\r\n\r\n  destroyEvents() {\r\n    window.removeEventListener('resize', this.debounceResizeGallery);\r\n    this.lineNode.removeEventListener('pointerdown', this.startDrag);\r\n    window.removeEventListener('pointerup', this.stopDrag);\r\n    window.removeEventListener('pointercancel', this.stopDrag);\r\n\r\n    this.dotsNode.removeEventListener('click', this.clickDots);\r\n    this.navLeft.removeEventListener('click', this.moveToLeft);\r\n    this.navRight.removeEventListener('click', this.moveToRight);\r\n\r\n  }\r\n\r\n  resizeGallery() {\r\n    this.setParameters();\r\n  }\r\n\r\n  startDrag(evt) {\r\n    this.currentSlideWasChanged = false;\r\n    this.clickX = evt.pageX;\r\n    this.startX = this.x;\r\n\r\n    this.resetStyleTransition();\r\n\r\n    this.containerNode.classList.add(GalleryDraggableClassName);\r\n    window.addEventListener('pointermove', this.dragging);\r\n\r\n  }\r\n\r\n  stopDrag() {\r\n        window.removeEventListener('pointermove', this.dragging);\r\n\r\n        this.containerNode.classList.remove(GalleryDraggableClassName);\r\n        this.changeCurrentSlide();\r\n    }\r\n\r\n  dragging(evt) {\r\n    this.dragX = evt.pageX;\r\n    const dragShift = this.dragX -this.clickX;\r\n    const easing = dragShift / 5;\r\n    this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);\r\n\r\n    this.setStylePosition();\r\n\r\n    // Change active slide\r\n    if (\r\n        dragShift > 20 &&\r\n        dragShift > 0 &&\r\n        !this.currentSlideWasChanged &&\r\n        this.settings.currentSlide > 0\r\n    ) {\r\n        this.currentSlideWasChanged = true;\r\n        this.settings.currentSlide = this.settings.currentSlide - 1;\r\n    }\r\n\r\n    if (\r\n        dragShift < -20 &&\r\n        dragShift < 0 &&\r\n        !this.currentSlideWasChanged &&\r\n        this.settings.currentSlide < this.size - 1\r\n    ) {\r\n        this.currentSlideWasChanged = true;\r\n        this.settings.currentSlide = this.settings.currentSlide + 1;\r\n    }\r\n  }\r\n\r\n  clickDots(evt) {\r\n    const dotNode = evt.target.closest('button');\r\n    if (!dotNode) {\r\n        return;\r\n    }\r\n\r\n    let dotNumber;\r\n    for(let i = 0; i < this.dotNodes.length; i++) {\r\n        if(this.dotNodes[i] === dotNode) {\r\n            dotNumber = i;\r\n            break;\r\n        }\r\n    }\r\n\r\n    if (dotNumber === this.settings.currentSlide) {\r\n        return;\r\n    }\r\n\r\n    const countSwipes = Math.abs(this.settings.currentSlide - dotNumber);\r\n    this.settings.currentSlide = dotNumber;\r\n    this.changeCurrentSlide(countSwipes);\r\n  }\r\n\r\n  moveToLeft() {\r\n    if(this.settings.infinity) {\r\n      if (this.settings.currentSlide === 0) {\r\n        this.settings.currentSlide = this.slideToShow = 1 ? this.size - 1 : undefined;\r\n        this.changeCurrentSlide();\r\n      } else {\r\n        this.settings.currentSlide = this.settings.currentSlide - 1;\r\n        this.changeCurrentSlide();\r\n      }\r\n    \r\n    } else {\r\n      if (this.settings.currentSlide <= 0) {\r\n        return;\r\n      } \r\n      this.settings.currentSlide = this.settings.currentSlide - 1;\r\n      this.changeCurrentSlide();\r\n      \r\n    }\r\n  }\r\n\r\n  moveToRight() {\r\n    if(this.settings.infinity) {\r\n      if (this.settings.currentSlide == this.size - 1) {\r\n        console.log('infinityrght = true');\r\n        this.settings.currentSlide = 0;\r\n        console.log('hiright')\r\n        this.changeCurrentSlide();\r\n      } else {\r\n        this.settings.currentSlide = this.settings.currentSlide + 1;\r\n        this.changeCurrentSlide();\r\n      }\r\n    \r\n    } else {\r\n      console.log('infinityright = false');\r\n      if (this.settings.currentSlide >= this.size - 1) {\r\n          return;\r\n      }\r\n\r\n      this.settings.currentSlide = this.settings.currentSlide + 1;\r\n      this.changeCurrentSlide();\r\n    }\r\n  }\r\n\r\n  changeCurrentSlide(countSwipes) {\r\n    this.x = -this.settings.currentSlide * (this.width + this.settings.margin);\r\n    this.setStyleTransition(countSwipes);\r\n    this.setStylePosition();  \r\n    this.changeActiveDotClass();\r\n    this.changeDisabledNav()\r\n  }\r\n\r\n  changeActiveDotClass() {\r\n    for(let i = 0; i < this.dotNodes.length; i++) {\r\n        this.dotNodes[i].classList.remove(GalleryDotActiveClassName);\r\n    }\r\n\r\n    this.dotNodes[this.settings.currentSlide].classList.add(GalleryDotActiveClassName);\r\n  }\r\n\r\n  changeDisabledNav() {\r\n    if (this.settings.currentSlide <= 0) {\r\n      !this.settings.infinity ? this.navLeft.classList.add(GalleryNavDisabledClassName) : '';\r\n        // this.navLeft.classList.add(GalleryNavDisabledClassName);\r\n    } else {\r\n        this.navLeft.classList.remove(GalleryNavDisabledClassName);\r\n    }\r\n    \r\n    if (this.settings.currentSlide >= this.size - 1) {\r\n      !this.settings.infinity ? this.navRight.classList.add(GalleryNavDisabledClassName) : '';\r\n        // this.navRight.classList.add(GalleryNavDisabledClassName);\r\n    } else {\r\n        this.navRight.classList.remove(GalleryNavDisabledClassName);\r\n    }\r\n  }\r\n\r\n  setStylePosition() {\r\n    this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;\r\n  }\r\n\r\n  setStyleTransition(countSwipes = 1) {\r\n    this.lineNode.style.transition = `all ${0.25 * countSwipes}s ease 0s`;\r\n  }\r\n\r\n  resetStyleTransition() {\r\n    this.lineNode.style.transition = `all 0s ease 0s`;\r\n\r\n  }\r\n}\r\n\r\n// Helpers\r\nfunction wrapElementByDiv({element, className}) {\r\n  const wrapperNode = document.createElement('div');\r\n  wrapperNode.classList.add(className);\r\n\r\n  element.parentNode.insertBefore(wrapperNode, element);\r\n  wrapperNode.appendChild(element);\r\n\r\n  return wrapperNode;\r\n}\r\n\r\nfunction debounce(func, time = 100) {\r\n  let timer;\r\n  return function (event) {\r\n    clearTimeout(timer);\r\n    timer = setTimeout(func, time, event);\r\n  }\r\n}\r\n\r\n\r\nnew Gallery(document.getElementById(\"gallery\"), {\r\n  margin: 10,\r\n  slidesToShow : 1,\r\n  infinity: false,\r\n  currentSlide: 1\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });