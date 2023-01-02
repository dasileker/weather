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
  !*** ./src/daily.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./date */ "./src/date.js");


const ShowDailyReport = (weather) => {
  const city = document.querySelector('#city2');
  city.innerText = `${weather.city.name}, ${weather.sys.country}`;

  const temperature = document.querySelector('#temp2');
  temperature.innerHTML = `${Math.round(weather.list.temp[0].day)}&deg;C`;

  const minMax = document.querySelector('#min-max2');
  minMax.innerHTML = `${Math.floor(weather.list.temp[0].min)}&deg;C (min) / ${Math.ceil(weather.list.temp[0].max)}&deg;C (max)`;

  const weatherType = document.querySelector('#description2');
  weatherType.innerText = `${weather.list.weather[0].main}`;

  const weatherIcon = document.querySelector('#icon2');
  weatherIcon.innerText = `${weather.list.weather[0].icon}`;

  const date = document.querySelector('#date2');
  const newDate = new Date();
  date.innerText = (0,_date__WEBPACK_IMPORTED_MODULE_0__.default)(newDate);
  convertTemp(weather);

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


  document.querySelector('.weather2').style.backgroundImage = `url('./images/${weatherTypes[weatherType.textContent]}.gif')`;
  document.querySelector('.weather2').style.backgroundSize = 'cover';

  document.querySelector('#icon2').src = `./icons/${weatherIcon.textContent}.png`;

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowDailyReport);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxNQUFNLEVBQUUsT0FBTyxHQUFHLElBQUksS0FBSyxLQUFLO0FBQzVDOztBQUVBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7OztVQ2QxQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDOztBQUVoQztBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQixJQUFJLG9CQUFvQjs7QUFFaEU7QUFDQSw2QkFBNkIscUNBQXFDLEtBQUs7O0FBRXZFO0FBQ0Esd0JBQXdCLHFDQUFxQyxLQUFLLFlBQVksb0NBQW9DLEtBQUs7O0FBRXZIO0FBQ0EsNkJBQTZCLDZCQUE2Qjs7QUFFMUQ7QUFDQSw2QkFBNkIsNkJBQTZCOztBQUUxRDtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFVO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLCtFQUErRSxzQ0FBc0M7QUFDckg7O0FBRUEsb0RBQW9ELHdCQUF3Qjs7QUFFNUU7O0FBRUEsaUVBQWUsZUFBZSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2RhaWx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGF0ZU1hbmFnZSA9IChkYXRlQXJnKSA9PiB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVGh1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gIGNvbnN0IG1vbnRocyA9IFsnSnVudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgY29uc3QgeWVhciA9IGRhdGVBcmcuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZUFyZy5nZXRNb250aCgpXTtcbiAgY29uc3QgZGF0ZSA9IGRhdGVBcmcuZ2V0RGF0ZSgpO1xuICBjb25zdCBkYXkgPSBkYXlzW2RhdGVBcmcuZ2V0RGF5KCldO1xuXG4gIHJldHVybiBgJHtkYXRlfSAke21vbnRofSAoJHtkYXl9KSwgJHt5ZWFyfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRlTWFuYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZGF0ZU1hbmFnZSBmcm9tIFwiLi9kYXRlXCI7XG5cbmNvbnN0IFNob3dEYWlseVJlcG9ydCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eTInKTtcbiAgY2l0eS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLmNpdHkubmFtZX0sICR7d2VhdGhlci5zeXMuY291bnRyeX1gO1xuXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAyJyk7XG4gIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlci5saXN0LnRlbXBbMF0uZGF5KX0mZGVnO0NgO1xuXG4gIGNvbnN0IG1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tbWF4MicpO1xuICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcih3ZWF0aGVyLmxpc3QudGVtcFswXS5taW4pfSZkZWc7QyAobWluKSAvICR7TWF0aC5jZWlsKHdlYXRoZXIubGlzdC50ZW1wWzBdLm1heCl9JmRlZztDIChtYXgpYDtcblxuICBjb25zdCB3ZWF0aGVyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbjInKTtcbiAgd2VhdGhlclR5cGUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlci5saXN0LndlYXRoZXJbMF0ubWFpbn1gO1xuXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24yJyk7XG4gIHdlYXRoZXJJY29uLmlubmVyVGV4dCA9IGAke3dlYXRoZXIubGlzdC53ZWF0aGVyWzBdLmljb259YDtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUyJyk7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLmlubmVyVGV4dCA9IGRhdGVNYW5hZ2UobmV3RGF0ZSk7XG4gIGNvbnZlcnRUZW1wKHdlYXRoZXIpO1xuXG4gIGNvbnN0IHdlYXRoZXJUeXBlcyA9IHtcbiAgICBDbGVhcjogJ3N1bicsXG4gICAgQ2xvdWRzOiAnY2xvdWR5JyxcbiAgICBSYWluOiAncmFpbicsXG4gICAgTWlzdDogJ2ZvZycsXG4gICAgRm9nOiAnZm9nJyxcbiAgICBTbm93OiAnc25vdycsXG4gICAgVGh1bmRlcnN0b3JtczogJ3RodW5kZXInLFxuICAgIERyaXp6bGU6ICd0aHVuZGVyJyxcbiAgICBIYXplOiAnZm9nJyxcbiAgfTtcblxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyMicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vaW1hZ2VzLyR7d2VhdGhlclR5cGVzW3dlYXRoZXJUeXBlLnRleHRDb250ZW50XX0uZ2lmJylgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcjInKS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24yJykuc3JjID0gYC4vaWNvbnMvJHt3ZWF0aGVySWNvbi50ZXh0Q29udGVudH0ucG5nYDtcblxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG93RGFpbHlSZXBvcnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9