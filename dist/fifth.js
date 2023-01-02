/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/temperature.js":
/*!****************************!*\
  !*** ./src/temperature.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const tempToF = (temp) => temp * (9 / 5) + 32;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tempToF);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/togle.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _temperature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./temperature */ "./src/temperature.js");


const convertTemp = (weather) => {
  const currentTempF = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.default)(weather.main.temp);

  const minTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.default)(weather.main.temp_min);
  const maxTemp = (0,_temperature__WEBPACK_IMPORTED_MODULE_0__.default)(weather.main.temp_max);
  const standarTemp = document.querySelector('#temp');
  const minMax = document.querySelector('#min-max');
  const myToggle = document.querySelector('#cToggle');

  myToggle.addEventListener('click', () => {
    if (myToggle.checked) {
      standarTemp.innerHTML = `${Math.floor(currentTempF)}&deg;F`;
      minMax.innerHTML = `${Math.floor(minTemp)}&deg;F (min) / ${Math.floor(maxTemp)}&deg;F (max)`;
    } else {
      standarTemp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
      minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (convertTemp);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlmdGguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7O1VDSHRCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDO0FBQ0EsdUJBQXVCLHFEQUFPOztBQUU5QixrQkFBa0IscURBQU87QUFDekIsa0JBQWtCLHFEQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHlCQUF5QixLQUFLO0FBQy9ELDRCQUE0QixvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQixLQUFLO0FBQzFGLE1BQU07QUFDTixpQ0FBaUMsOEJBQThCLEtBQUs7QUFDcEUsNEJBQTRCLGtDQUFrQyxLQUFLLFlBQVksaUNBQWlDLEtBQUs7QUFDckg7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy90ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy90b2dsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHRlbXBUb0YgPSAodGVtcCkgPT4gdGVtcCAqICg5IC8gNSkgKyAzMjtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcFRvRjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0ZW1wVG9GIGZyb20gJy4vdGVtcGVyYXR1cmUnO1xuXG5jb25zdCBjb252ZXJ0VGVtcCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUZW1wRiA9IHRlbXBUb0Yod2VhdGhlci5tYWluLnRlbXApO1xuXG4gIGNvbnN0IG1pblRlbXAgPSB0ZW1wVG9GKHdlYXRoZXIubWFpbi50ZW1wX21pbik7XG4gIGNvbnN0IG1heFRlbXAgPSB0ZW1wVG9GKHdlYXRoZXIubWFpbi50ZW1wX21heCk7XG4gIGNvbnN0IHN0YW5kYXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbiAgY29uc3QgbWluTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi1tYXgnKTtcbiAgY29uc3QgbXlUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY1RvZ2dsZScpO1xuXG4gIG15VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChteVRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICBzdGFuZGFyVGVtcC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKGN1cnJlbnRUZW1wRil9JmRlZztGYDtcbiAgICAgIG1pbk1heC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKG1pblRlbXApfSZkZWc7RiAobWluKSAvICR7TWF0aC5mbG9vcihtYXhUZW1wKX0mZGVnO0YgKG1heClgO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFuZGFyVGVtcC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKX0mZGVnO0NgO1xuICAgICAgbWluTWF4LmlubmVySFRNTCA9IGAke01hdGguZmxvb3Iod2VhdGhlci5tYWluLnRlbXBfbWluKX0mZGVnO0MgKG1pbikgLyAke01hdGguY2VpbCh3ZWF0aGVyLm1haW4udGVtcF9tYXgpfSZkZWc7QyAobWF4KWA7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRUZW1wOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==