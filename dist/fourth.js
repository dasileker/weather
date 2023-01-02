/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/date.js":
/*!*********************!*\
  !*** ./src/date.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const dateManage = (dateArg) => {
  const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const months = ['Junuary', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

  const year = dateArg.getFullYear();
  const month = months[dateArg.getMonth()];
  const date = dateArg.getDate();
  const day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dateManage);


/***/ }),

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

/***/ }),

/***/ "./src/togle.js":
/*!**********************!*\
  !*** ./src/togle.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/date.js");
/* harmony import */ var _togle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./togle */ "./src/togle.js");



const showWeatherReport = (weather) => {
  const city = document.querySelector('#city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  const temperature = document.querySelector('#temp');
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  const minMax = document.querySelector('#min-max');
  minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  const weatherType = document.querySelector('#description');
  weatherType.innerText = `${weather.weather[0].main}`;

  const weatherIcon = document.querySelector('#icon');
  weatherIcon.innerText = `${weather.weather[0].icon}`;

  const date = document.querySelector('#date');
  const newDate = new Date();
  date.innerText = (0,_date__WEBPACK_IMPORTED_MODULE_0__.default)(newDate);
  (0,_togle__WEBPACK_IMPORTED_MODULE_1__.default)(weather);

  const weatherTypes = {
    Clear: 'sun',
    Clouds: 'cloudy',
    Rain: 'rain',
    Mist: 'fog',
    Fog: 'fog',
    Snow: 'snow',
    Thunderstorms: 'thunder',
    Drizzle: 'thunder',
    Haze: 'fog',
  };


  document.querySelector('.weather').style.backgroundImage = `url('./images/${weatherTypes[weatherType.textContent]}.gif')`;
  document.querySelector('.weather').style.backgroundSize = 'cover';

  document.querySelector('#icon').src = `./icons/${weatherIcon.textContent}.png`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showWeatherReport);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91cnRoLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVDOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2IxQjs7QUFFQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNIYzs7QUFFcEM7QUFDQSx1QkFBdUIscURBQU87O0FBRTlCLGtCQUFrQixxREFBTztBQUN6QixrQkFBa0IscURBQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMseUJBQXlCLEtBQUs7QUFDL0QsNEJBQTRCLG9CQUFvQixLQUFLLFlBQVksb0JBQW9CLEtBQUs7QUFDMUYsTUFBTTtBQUNOLGlDQUFpQyw4QkFBOEIsS0FBSztBQUNwRSw0QkFBNEIsa0NBQWtDLEtBQUssWUFBWSxpQ0FBaUMsS0FBSztBQUNySDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUN0QjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0U7O0FBRWxDO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYSxJQUFJLG9CQUFvQjs7QUFFM0Q7QUFDQSw2QkFBNkIsOEJBQThCLEtBQUs7O0FBRWhFO0FBQ0Esd0JBQXdCLGtDQUFrQyxLQUFLLFlBQVksaUNBQWlDLEtBQUs7O0FBRWpIO0FBQ0EsNkJBQTZCLHdCQUF3Qjs7QUFFckQ7QUFDQSw2QkFBNkIsd0JBQXdCOztBQUVyRDtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFVO0FBQzdCLEVBQUUsK0NBQVc7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsOEVBQThFLHNDQUFzQztBQUNwSDs7QUFFQSxtREFBbUQsd0JBQXdCO0FBQzNFOztBQUVBLGlFQUFlLGlCQUFpQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy90b2dsZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy93ZWF0aGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGF0ZU1hbmFnZSA9IChkYXRlQXJnKSA9PiB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVGh1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gIGNvbnN0IG1vbnRocyA9IFsnSnVudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgY29uc3QgeWVhciA9IGRhdGVBcmcuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZUFyZy5nZXRNb250aCgpXTtcbiAgY29uc3QgZGF0ZSA9IGRhdGVBcmcuZ2V0RGF0ZSgpO1xuICBjb25zdCBkYXkgPSBkYXlzW2RhdGVBcmcuZ2V0RGF5KCldO1xuXG4gIHJldHVybiBgJHtkYXRlfSAke21vbnRofSAoJHtkYXl9KSwgJHt5ZWFyfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRlTWFuYWdlO1xuIiwiXG5jb25zdCB0ZW1wVG9GID0gKHRlbXApID0+IHRlbXAgKiAoOSAvIDUpICsgMzI7XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBUb0Y7IiwiaW1wb3J0IHRlbXBUb0YgZnJvbSAnLi90ZW1wZXJhdHVyZSc7XG5cbmNvbnN0IGNvbnZlcnRUZW1wID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgY3VycmVudFRlbXBGID0gdGVtcFRvRih3ZWF0aGVyLm1haW4udGVtcCk7XG5cbiAgY29uc3QgbWluVGVtcCA9IHRlbXBUb0Yod2VhdGhlci5tYWluLnRlbXBfbWluKTtcbiAgY29uc3QgbWF4VGVtcCA9IHRlbXBUb0Yod2VhdGhlci5tYWluLnRlbXBfbWF4KTtcbiAgY29uc3Qgc3RhbmRhclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuICBjb25zdCBtaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLW1heCcpO1xuICBjb25zdCBteVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjVG9nZ2xlJyk7XG5cbiAgbXlUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG15VG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgIHN0YW5kYXJUZW1wLmlubmVySFRNTCA9IGAke01hdGguZmxvb3IoY3VycmVudFRlbXBGKX0mZGVnO0ZgO1xuICAgICAgbWluTWF4LmlubmVySFRNTCA9IGAke01hdGguZmxvb3IobWluVGVtcCl9JmRlZztGIChtaW4pIC8gJHtNYXRoLmZsb29yKG1heFRlbXApfSZkZWc7RiAobWF4KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YW5kYXJUZW1wLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApfSZkZWc7Q2A7XG4gICAgICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcih3ZWF0aGVyLm1haW4udGVtcF9taW4pfSZkZWc7QyAobWluKSAvICR7TWF0aC5jZWlsKHdlYXRoZXIubWFpbi50ZW1wX21heCl9JmRlZztDIChtYXgpYDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFRlbXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF0ZU1hbmFnZSBmcm9tICcuL2RhdGUnO1xuaW1wb3J0IGNvbnZlcnRUZW1wIGZyb20gJy4vdG9nbGUnO1xuXG5jb25zdCBzaG93V2VhdGhlclJlcG9ydCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICBjaXR5LmlubmVyVGV4dCA9IGAke3dlYXRoZXIubmFtZX0sICR7d2VhdGhlci5zeXMuY291bnRyeX1gO1xuXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCl9JmRlZztDYDtcblxuICBjb25zdCBtaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLW1heCcpO1xuICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcih3ZWF0aGVyLm1haW4udGVtcF9taW4pfSZkZWc7QyAobWluKSAvICR7TWF0aC5jZWlsKHdlYXRoZXIubWFpbi50ZW1wX21heCl9JmRlZztDIChtYXgpYDtcblxuICBjb25zdCB3ZWF0aGVyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICB3ZWF0aGVyVHlwZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbn1gO1xuXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKTtcbiAgd2VhdGhlckljb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlci53ZWF0aGVyWzBdLmljb259YDtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuaW5uZXJUZXh0ID0gZGF0ZU1hbmFnZShuZXdEYXRlKTtcbiAgY29udmVydFRlbXAod2VhdGhlcik7XG5cbiAgY29uc3Qgd2VhdGhlclR5cGVzID0ge1xuICAgIENsZWFyOiAnc3VuJyxcbiAgICBDbG91ZHM6ICdjbG91ZHknLFxuICAgIFJhaW46ICdyYWluJyxcbiAgICBNaXN0OiAnZm9nJyxcbiAgICBGb2c6ICdmb2cnLFxuICAgIFNub3c6ICdzbm93JyxcbiAgICBUaHVuZGVyc3Rvcm1zOiAndGh1bmRlcicsXG4gICAgRHJpenpsZTogJ3RodW5kZXInLFxuICAgIEhhemU6ICdmb2cnLFxuICB9O1xuXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcuL2ltYWdlcy8ke3dlYXRoZXJUeXBlc1t3ZWF0aGVyVHlwZS50ZXh0Q29udGVudF19LmdpZicpYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKS5zcmMgPSBgLi9pY29ucy8ke3dlYXRoZXJJY29uLnRleHRDb250ZW50fS5wbmdgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1dlYXRoZXJSZXBvcnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9