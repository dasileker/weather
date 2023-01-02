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



const btn = document.querySelector('#sub-button');
btn.addEventListener('click', () => {
  const city = document.querySelector('#input-box').value;
  getReport(city);
  document.querySelector('.weather').style.display = 'block';
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksTUFBTSxFQUFFLE9BQU8sR0FBRyxJQUFJLEtBQUssS0FBSztBQUM1Qzs7QUFFQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiMUI7O0FBRUEsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7O0FDSGM7O0FBRXBDO0FBQ0EsdUJBQXVCLHFEQUFPOztBQUU5QixrQkFBa0IscURBQU87QUFDekIsa0JBQWtCLHFEQUFPO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHlCQUF5QixLQUFLO0FBQy9ELDRCQUE0QixvQkFBb0IsS0FBSyxZQUFZLG9CQUFvQixLQUFLO0FBQzFGLE1BQU07QUFDTixpQ0FBaUMsOEJBQThCLEtBQUs7QUFDcEUsNEJBQTRCLGtDQUFrQyxLQUFLLFlBQVksaUNBQWlDLEtBQUs7QUFDckg7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCTTtBQUNFOztBQUVsQztBQUNBO0FBQ0Esc0JBQXNCLGFBQWEsSUFBSSxvQkFBb0I7O0FBRTNEO0FBQ0EsNkJBQTZCLDhCQUE4QixLQUFLOztBQUVoRTtBQUNBLHdCQUF3QixrQ0FBa0MsS0FBSyxZQUFZLGlDQUFpQyxLQUFLOztBQUVqSDtBQUNBLDZCQUE2Qix3QkFBd0I7O0FBRXJEO0FBQ0EsNkJBQTZCLHdCQUF3Qjs7QUFFckQ7QUFDQTtBQUNBLG1CQUFtQiw4Q0FBVTtBQUM3QixFQUFFLCtDQUFXOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDhFQUE4RSxzQ0FBc0M7QUFDcEg7O0FBRUEsbURBQW1ELHdCQUF3QjtBQUMzRTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7OztVQzNDaEM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wQzs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEtBQUssU0FBUyxlQUFlO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlEQUFpQjtBQUNyQixJQUFJO0FBQ0osZ0NBQWdDLE1BQU07QUFDdEM7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZGF0ZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3RlbXBlcmF0dXJlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvdG9nbGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGF0ZU1hbmFnZSA9IChkYXRlQXJnKSA9PiB7XG4gIGNvbnN0IGRheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVGh1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddO1xuXG4gIGNvbnN0IG1vbnRocyA9IFsnSnVudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ107XG5cbiAgY29uc3QgeWVhciA9IGRhdGVBcmcuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBtb250aHNbZGF0ZUFyZy5nZXRNb250aCgpXTtcbiAgY29uc3QgZGF0ZSA9IGRhdGVBcmcuZ2V0RGF0ZSgpO1xuICBjb25zdCBkYXkgPSBkYXlzW2RhdGVBcmcuZ2V0RGF5KCldO1xuXG4gIHJldHVybiBgJHtkYXRlfSAke21vbnRofSAoJHtkYXl9KSwgJHt5ZWFyfWA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRlTWFuYWdlO1xuIiwiXG5jb25zdCB0ZW1wVG9GID0gKHRlbXApID0+IHRlbXAgKiAoOSAvIDUpICsgMzI7XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBUb0Y7IiwiaW1wb3J0IHRlbXBUb0YgZnJvbSAnLi90ZW1wZXJhdHVyZSc7XG5cbmNvbnN0IGNvbnZlcnRUZW1wID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgY3VycmVudFRlbXBGID0gdGVtcFRvRih3ZWF0aGVyLm1haW4udGVtcCk7XG5cbiAgY29uc3QgbWluVGVtcCA9IHRlbXBUb0Yod2VhdGhlci5tYWluLnRlbXBfbWluKTtcbiAgY29uc3QgbWF4VGVtcCA9IHRlbXBUb0Yod2VhdGhlci5tYWluLnRlbXBfbWF4KTtcbiAgY29uc3Qgc3RhbmRhclRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuICBjb25zdCBtaW5NYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWluLW1heCcpO1xuICBjb25zdCBteVRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjVG9nZ2xlJyk7XG5cbiAgbXlUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG15VG9nZ2xlLmNoZWNrZWQpIHtcbiAgICAgIHN0YW5kYXJUZW1wLmlubmVySFRNTCA9IGAke01hdGguZmxvb3IoY3VycmVudFRlbXBGKX0mZGVnO0ZgO1xuICAgICAgbWluTWF4LmlubmVySFRNTCA9IGAke01hdGguZmxvb3IobWluVGVtcCl9JmRlZztGIChtaW4pIC8gJHtNYXRoLmZsb29yKG1heFRlbXApfSZkZWc7RiAobWF4KWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YW5kYXJUZW1wLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApfSZkZWc7Q2A7XG4gICAgICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcih3ZWF0aGVyLm1haW4udGVtcF9taW4pfSZkZWc7QyAobWluKSAvICR7TWF0aC5jZWlsKHdlYXRoZXIubWFpbi50ZW1wX21heCl9JmRlZztDIChtYXgpYDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udmVydFRlbXA7IiwiaW1wb3J0IGRhdGVNYW5hZ2UgZnJvbSAnLi9kYXRlJztcbmltcG9ydCBjb252ZXJ0VGVtcCBmcm9tICcuL3RvZ2xlJztcblxuY29uc3Qgc2hvd1dlYXRoZXJSZXBvcnQgPSAod2VhdGhlcikgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbiAgY2l0eS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLm5hbWV9LCAke3dlYXRoZXIuc3lzLmNvdW50cnl9YDtcblxuICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wJyk7XG4gIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApfSZkZWc7Q2A7XG5cbiAgY29uc3QgbWluTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi1tYXgnKTtcbiAgbWluTWF4LmlubmVySFRNTCA9IGAke01hdGguZmxvb3Iod2VhdGhlci5tYWluLnRlbXBfbWluKX0mZGVnO0MgKG1pbikgLyAke01hdGguY2VpbCh3ZWF0aGVyLm1haW4udGVtcF9tYXgpfSZkZWc7QyAobWF4KWA7XG5cbiAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcbiAgd2VhdGhlclR5cGUuaW5uZXJUZXh0ID0gYCR7d2VhdGhlci53ZWF0aGVyWzBdLm1haW59YDtcblxuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uJyk7XG4gIHdlYXRoZXJJY29uLmlubmVyVGV4dCA9IGAke3dlYXRoZXIud2VhdGhlclswXS5pY29ufWA7XG5cbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBkYXRlLmlubmVyVGV4dCA9IGRhdGVNYW5hZ2UobmV3RGF0ZSk7XG4gIGNvbnZlcnRUZW1wKHdlYXRoZXIpO1xuXG4gIGNvbnN0IHdlYXRoZXJUeXBlcyA9IHtcbiAgICBDbGVhcjogJ3N1bicsXG4gICAgQ2xvdWRzOiAnY2xvdWR5JyxcbiAgICBSYWluOiAncmFpbicsXG4gICAgTWlzdDogJ2ZvZycsXG4gICAgRm9nOiAnZm9nJyxcbiAgICBTbm93OiAnc25vdycsXG4gICAgVGh1bmRlcnN0b3JtczogJ3RodW5kZXInLFxuICAgIERyaXp6bGU6ICd0aHVuZGVyJyxcbiAgICBIYXplOiAnZm9nJyxcbiAgfTtcblxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnLi9pbWFnZXMvJHt3ZWF0aGVyVHlwZXNbd2VhdGhlclR5cGUudGV4dENvbnRlbnRdfS5naWYnKWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJykuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnY292ZXInO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpY29uJykuc3JjID0gYC4vaWNvbnMvJHt3ZWF0aGVySWNvbi50ZXh0Q29udGVudH0ucG5nYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNob3dXZWF0aGVyUmVwb3J0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHNob3dXZWF0aGVyUmVwb3J0IGZyb20gJy4vd2VhdGhlcic7XG5cbmNvbnN0IHdlYXRoZXJBcGkgPSB7XG4gIGtleTogJzJhYzJhMjAxZjlhMjk4ZmQ2Y2UyYjU2OWJmMzAyNDQ4Jyxcbn07XG5cbmNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXJyb3InKTtcbm1lc3NhZ2UuaW5uZXJIVE1MID0gJyc7XG5cbmNvbnN0IGdldFJlcG9ydCA9IGFzeW5jIChjaXR5KSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHt3ZWF0aGVyQXBpLmtleX0mdW5pdHM9bWV0cmljYCxcbiAgICApO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IHdlYXRoZXIgPSByZXN1bHQ7XG4gICAgc2hvd1dlYXRoZXJSZXBvcnQod2VhdGhlcik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgbWVzc2FnZS5pbm5lckhUTUwgPSBgdGhpcyAke2Vycm9yfWA7XG4gIH1cbn07XG5cblxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3ViLWJ1dHRvbicpO1xuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWJveCcpLnZhbHVlO1xuICBnZXRSZXBvcnQoY2l0eSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxuXG5jb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtYm94Jyk7XG5cbnNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICBnZXRSZXBvcnQoc2VhcmNoLnZhbHVlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==