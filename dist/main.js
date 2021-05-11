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

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    Snow: 'snow',
    Thunderstorms: 'thunder',
    Haze: 'fog',
  };

  document.body.style.backgroundImage = `url('./images/${weatherTypes[weatherType.textContent]}.gif')`;

  document.querySelector('#icon').src = `./icons/${weatherIcon.textContent}.png`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showWeatherReport);

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
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ "./src/weather.js");


const weatherApi = {
  key: '2ac2a201f9a298fd6ce2b569bf302448',
};

const message = document.querySelector('#error');
message.innerHTML = '';

const getReport = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi.key}&units=metric`,
    );

    const result = await response.json();
    const weather = result;
    (0,_weather__WEBPACK_IMPORTED_MODULE_0__.default)(weather);
  } catch (error) {
    message.innerHTML = `this ${error}`;
  }
};

const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(search.value);
    document.querySelector('.weather').style.display = 'block';
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy90ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3RvZ2xlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksS0FBSyxHQUFHLE1BQU0sSUFBSSxJQUFJLEtBQUssS0FBSztBQUM1Qzs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNIYzs7QUFFcEM7QUFDQSx1QkFBdUIscURBQU87O0FBRTlCLGtCQUFrQixxREFBTztBQUN6QixrQkFBa0IscURBQU87QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMseUJBQXlCLEtBQUs7QUFDL0QsNEJBQTRCLG9CQUFvQixLQUFLLFlBQVksb0JBQW9CLEtBQUs7QUFDMUYsS0FBSztBQUNMLGlDQUFpQyw4QkFBOEIsS0FBSztBQUNwRSw0QkFBNEIsa0NBQWtDLEtBQUssWUFBWSxpQ0FBaUMsS0FBSztBQUNySDtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxXQUFXLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qk07QUFDRTs7QUFFbEM7QUFDQTtBQUNBLHNCQUFzQixhQUFhLElBQUksb0JBQW9COztBQUUzRDtBQUNBLDZCQUE2Qiw4QkFBOEIsS0FBSzs7QUFFaEU7QUFDQSx3QkFBd0Isa0NBQWtDLEtBQUssWUFBWSxpQ0FBaUMsS0FBSzs7QUFFakg7QUFDQSw2QkFBNkIsd0JBQXdCOztBQUVyRDtBQUNBLDZCQUE2Qix3QkFBd0I7O0FBRXJEO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0IsRUFBRSwrQ0FBVzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseURBQXlELHNDQUFzQzs7QUFFL0YsbURBQW1ELHdCQUF3QjtBQUMzRTs7QUFFQSxpRUFBZSxpQkFBaUIsRTs7Ozs7O1VDdkNoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUssU0FBUyxlQUFlO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFpQjtBQUNyQixHQUFHO0FBQ0gsZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkYXRlTWFuYWdlID0gKGRhdGVBcmcpID0+IHtcbiAgY29uc3QgZGF5cyA9IFsnU3VuZGF5JywgJ01vbmRheScsICdUaHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbiAgY29uc3QgbW9udGhzID0gWydKdW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW4nLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXTtcblxuICBjb25zdCB5ZWFyID0gZGF0ZUFyZy5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlQXJnLmdldE1vbnRoKCldO1xuICBjb25zdCBkYXRlID0gZGF0ZUFyZy5nZXREYXRlKCk7XG4gIGNvbnN0IGRheSA9IGRheXNbZGF0ZUFyZy5nZXREYXkoKV07XG5cbiAgcmV0dXJuIGAke2RhdGV9ICR7bW9udGh9ICgke2RheX0pLCAke3llYXJ9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGVNYW5hZ2U7XG4iLCJcbmNvbnN0IHRlbXBUb0YgPSAodGVtcCkgPT4gdGVtcCAqICg5IC8gNSkgKyAzMjtcblxuZXhwb3J0IGRlZmF1bHQgdGVtcFRvRjsiLCJpbXBvcnQgdGVtcFRvRiBmcm9tICcuL3RlbXBlcmF0dXJlJztcblxuY29uc3QgY29udmVydFRlbXAgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBjdXJyZW50VGVtcEYgPSB0ZW1wVG9GKHdlYXRoZXIubWFpbi50ZW1wKTtcblxuICBjb25zdCBtaW5UZW1wID0gdGVtcFRvRih3ZWF0aGVyLm1haW4udGVtcF9taW4pO1xuICBjb25zdCBtYXhUZW1wID0gdGVtcFRvRih3ZWF0aGVyLm1haW4udGVtcF9tYXgpO1xuICBjb25zdCBzdGFuZGFyVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG4gIGNvbnN0IG1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tbWF4Jyk7XG4gIGNvbnN0IG15VG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NUb2dnbGUnKTtcblxuICBteVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobXlUb2dnbGUuY2hlY2tlZCkge1xuICAgICAgc3RhbmRhclRlbXAuaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcihjdXJyZW50VGVtcEYpfSZkZWc7RmA7XG4gICAgICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcihtaW5UZW1wKX0mZGVnO0YgKG1pbikgLyAke01hdGguZmxvb3IobWF4VGVtcCl9JmRlZztGIChtYXgpYDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhbmRhclRlbXAuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCl9JmRlZztDYDtcbiAgICAgIG1pbk1heC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKHdlYXRoZXIubWFpbi50ZW1wX21pbil9JmRlZztDIChtaW4pIC8gJHtNYXRoLmNlaWwod2VhdGhlci5tYWluLnRlbXBfbWF4KX0mZGVnO0MgKG1heClgO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb252ZXJ0VGVtcDsiLCJpbXBvcnQgZGF0ZU1hbmFnZSBmcm9tICcuL2RhdGUnO1xuaW1wb3J0IGNvbnZlcnRUZW1wIGZyb20gJy4vdG9nbGUnO1xuXG5jb25zdCBzaG93V2VhdGhlclJlcG9ydCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICBjaXR5LmlubmVyVGV4dCA9IGAke3dlYXRoZXIubmFtZX0sICR7d2VhdGhlci5zeXMuY291bnRyeX1gO1xuXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbiAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7TWF0aC5yb3VuZCh3ZWF0aGVyLm1haW4udGVtcCl9JmRlZztDYDtcblxuICBjb25zdCBtaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLW1heCcpO1xuICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcih3ZWF0aGVyLm1haW4udGVtcF9taW4pfSZkZWc7QyAobWluKSAvICR7TWF0aC5jZWlsKHdlYXRoZXIubWFpbi50ZW1wX21heCl9JmRlZztDIChtYXgpYDtcblxuICBjb25zdCB3ZWF0aGVyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICB3ZWF0aGVyVHlwZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbn1gO1xuXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKTtcbiAgd2VhdGhlckljb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlci53ZWF0aGVyWzBdLmljb259YDtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuaW5uZXJUZXh0ID0gZGF0ZU1hbmFnZShuZXdEYXRlKTtcbiAgY29udmVydFRlbXAod2VhdGhlcik7XG5cbiAgY29uc3Qgd2VhdGhlclR5cGVzID0ge1xuICAgIENsZWFyOiAnc3VuJyxcbiAgICBDbG91ZHM6ICdjbG91ZHknLFxuICAgIFJhaW46ICdyYWluJyxcbiAgICBNaXN0OiAnZm9nJyxcbiAgICBTbm93OiAnc25vdycsXG4gICAgVGh1bmRlcnN0b3JtczogJ3RodW5kZXInLFxuICAgIEhhemU6ICdmb2cnLFxuICB9O1xuXG4gIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9pbWFnZXMvJHt3ZWF0aGVyVHlwZXNbd2VhdGhlclR5cGUudGV4dENvbnRlbnRdfS5naWYnKWA7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKS5zcmMgPSBgLi9pY29ucy8ke3dlYXRoZXJJY29uLnRleHRDb250ZW50fS5wbmdgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2hvd1dlYXRoZXJSZXBvcnQ7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgc2hvd1dlYXRoZXJSZXBvcnQgZnJvbSAnLi93ZWF0aGVyJztcblxuY29uc3Qgd2VhdGhlckFwaSA9IHtcbiAga2V5OiAnMmFjMmEyMDFmOWEyOThmZDZjZTJiNTY5YmYzMDI0NDgnLFxufTtcblxuY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlcnJvcicpO1xubWVzc2FnZS5pbm5lckhUTUwgPSAnJztcblxuY29uc3QgZ2V0UmVwb3J0ID0gYXN5bmMgKGNpdHkpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD0ke3dlYXRoZXJBcGkua2V5fSZ1bml0cz1tZXRyaWNgLFxuICAgICk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3Qgd2VhdGhlciA9IHJlc3VsdDtcbiAgICBzaG93V2VhdGhlclJlcG9ydCh3ZWF0aGVyKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBtZXNzYWdlLmlubmVySFRNTCA9IGB0aGlzICR7ZXJyb3J9YDtcbiAgfVxufTtcblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWJveCcpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgZ2V0UmVwb3J0KHNlYXJjaC52YWx1ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9