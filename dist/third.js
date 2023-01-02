/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/daily.js":
/*!**********************!*\
  !*** ./src/daily.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

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
/*!***********************!*\
  !*** ./src/hourly.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _daily__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily */ "./src/daily.js");


const weatherApi = {
  key: '6dedb46ebef0c664b3eab37ba3f7b970',
};

const message = document.querySelector('#error2');
message.innerHTML = '';


const dailyReport = async (city) => {
  try {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${1}&appid=${weatherApi.key}&units=metric`,
    );
    console.log(dailyReport);

    const result = await response.json();
    const weather = result;
    (0,_daily__WEBPACK_IMPORTED_MODULE_0__.default)(weather);
  } catch (error) {
    message.innerHTML = `this ${error}`;
  }
};



const btn = document.querySelector('#sub-button');
btn.addEventListener('click', () => {
  const city = document.querySelector('#input-box').value;
  dailyReport(city);
  document.querySelector('.weather2').style.display = 'block';
});


const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    dailyReport(search.value);
    document.querySelector('.weather2').style.display = 'block';
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhpcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDOztBQUVoQztBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQixJQUFJLG9CQUFvQjs7QUFFaEU7QUFDQSw2QkFBNkIscUNBQXFDLEtBQUs7O0FBRXZFO0FBQ0Esd0JBQXdCLHFDQUFxQyxLQUFLLFlBQVksb0NBQW9DLEtBQUs7O0FBRXZIO0FBQ0EsNkJBQTZCLDZCQUE2Qjs7QUFFMUQ7QUFDQSw2QkFBNkIsNkJBQTZCOztBQUUxRDtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFVO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLCtFQUErRSxzQ0FBc0M7QUFDckg7O0FBRUEsb0RBQW9ELHdCQUF3Qjs7QUFFNUU7O0FBRUEsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDMUM5QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1Qzs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7VUNkMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQzs7QUFFdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxLQUFLLE9BQU8sRUFBRSxTQUFTLGVBQWU7QUFDaEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBZTtBQUNuQixJQUFJO0FBQ0osZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9kYWlseS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaG91cmx5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYXRlTWFuYWdlIGZyb20gXCIuL2RhdGVcIjtcblxuY29uc3QgU2hvd0RhaWx5UmVwb3J0ID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5MicpO1xuICBjaXR5LmlubmVyVGV4dCA9IGAke3dlYXRoZXIuY2l0eS5uYW1lfSwgJHt3ZWF0aGVyLnN5cy5jb3VudHJ5fWA7XG5cbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcDInKTtcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyLmxpc3QudGVtcFswXS5kYXkpfSZkZWc7Q2A7XG5cbiAgY29uc3QgbWluTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi1tYXgyJyk7XG4gIG1pbk1heC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKHdlYXRoZXIubGlzdC50ZW1wWzBdLm1pbil9JmRlZztDIChtaW4pIC8gJHtNYXRoLmNlaWwod2VhdGhlci5saXN0LnRlbXBbMF0ubWF4KX0mZGVnO0MgKG1heClgO1xuXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uMicpO1xuICB3ZWF0aGVyVHlwZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLmxpc3Qud2VhdGhlclswXS5tYWlufWA7XG5cbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbjInKTtcbiAgd2VhdGhlckljb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlci5saXN0LndlYXRoZXJbMF0uaWNvbn1gO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZTInKTtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuaW5uZXJUZXh0ID0gZGF0ZU1hbmFnZShuZXdEYXRlKTtcbiAgY29udmVydFRlbXAod2VhdGhlcik7XG5cbiAgY29uc3Qgd2VhdGhlclR5cGVzID0ge1xuICAgIENsZWFyOiAnc3VuJyxcbiAgICBDbG91ZHM6ICdjbG91ZHknLFxuICAgIFJhaW46ICdyYWluJyxcbiAgICBNaXN0OiAnZm9nJyxcbiAgICBGb2c6ICdmb2cnLFxuICAgIFNub3c6ICdzbm93JyxcbiAgICBUaHVuZGVyc3Rvcm1zOiAndGh1bmRlcicsXG4gICAgRHJpenpsZTogJ3RodW5kZXInLFxuICAgIEhhemU6ICdmb2cnLFxuICB9O1xuXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXIyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9pbWFnZXMvJHt3ZWF0aGVyVHlwZXNbd2VhdGhlclR5cGUudGV4dENvbnRlbnRdfS5naWYnKWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyMicpLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbjInKS5zcmMgPSBgLi9pY29ucy8ke3dlYXRoZXJJY29uLnRleHRDb250ZW50fS5wbmdgO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dEYWlseVJlcG9ydDsiLCJcbmNvbnN0IGRhdGVNYW5hZ2UgPSAoZGF0ZUFyZykgPT4ge1xuICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1RodWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcblxuICBjb25zdCBtb250aHMgPSBbJ0p1bnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bicsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG4gIGNvbnN0IHllYXIgPSBkYXRlQXJnLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGVBcmcuZ2V0TW9udGgoKV07XG4gIGNvbnN0IGRhdGUgPSBkYXRlQXJnLmdldERhdGUoKTtcbiAgY29uc3QgZGF5ID0gZGF5c1tkYXRlQXJnLmdldERheSgpXTtcblxuICByZXR1cm4gYCR7ZGF0ZX0gJHttb250aH0gKCR7ZGF5fSksICR7eWVhcn1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0ZU1hbmFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNob3dEYWlseVJlcG9ydCBmcm9tICcuL2RhaWx5JztcblxuY29uc3Qgd2VhdGhlckFwaSA9IHtcbiAga2V5OiAnNmRlZGI0NmViZWYwYzY2NGIzZWFiMzdiYTNmN2I5NzAnLFxufTtcblxuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcjInKTtcbm1lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG5cblxuY29uc3QgZGFpbHlSZXBvcnQgPSBhc3luYyAoY2l0eSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdC9kYWlseT9xPSR7Y2l0eX0mY250PSR7MX0mYXBwaWQ9JHt3ZWF0aGVyQXBpLmtleX0mdW5pdHM9bWV0cmljYCxcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGRhaWx5UmVwb3J0KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gcmVzdWx0O1xuICAgIHNob3dEYWlseVJlcG9ydCh3ZWF0aGVyKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBtZXNzYWdlLmlubmVySFRNTCA9IGB0aGlzICR7ZXJyb3J9YDtcbiAgfVxufTtcblxuXG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWItYnV0dG9uJyk7XG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtYm94JykudmFsdWU7XG4gIGRhaWx5UmVwb3J0KGNpdHkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcjInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG5cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1ib3gnKTtcblxuc2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgIGRhaWx5UmVwb3J0KHNlYXJjaC52YWx1ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXIyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==