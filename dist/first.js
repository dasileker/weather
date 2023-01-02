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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyc3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLE1BQU0sRUFBRSxPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDNUM7O0FBRUEsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDYjFCOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7OztBQ0hjOztBQUVwQztBQUNBLHVCQUF1QixxREFBTzs7QUFFOUIsa0JBQWtCLHFEQUFPO0FBQ3pCLGtCQUFrQixxREFBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyx5QkFBeUIsS0FBSztBQUMvRCw0QkFBNEIsb0JBQW9CLEtBQUssWUFBWSxvQkFBb0IsS0FBSztBQUMxRixNQUFNO0FBQ04saUNBQWlDLDhCQUE4QixLQUFLO0FBQ3BFLDRCQUE0QixrQ0FBa0MsS0FBSyxZQUFZLGlDQUFpQyxLQUFLO0FBQ3JIO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qk07QUFDRTs7QUFFbEM7QUFDQTtBQUNBLHNCQUFzQixhQUFhLElBQUksb0JBQW9COztBQUUzRDtBQUNBLDZCQUE2Qiw4QkFBOEIsS0FBSzs7QUFFaEU7QUFDQSx3QkFBd0Isa0NBQWtDLEtBQUssWUFBWSxpQ0FBaUMsS0FBSzs7QUFFakg7QUFDQSw2QkFBNkIsd0JBQXdCOztBQUVyRDtBQUNBLDZCQUE2Qix3QkFBd0I7O0FBRXJEO0FBQ0E7QUFDQSxtQkFBbUIsOENBQVU7QUFDN0IsRUFBRSwrQ0FBVzs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSw4RUFBOEUsc0NBQXNDO0FBQ3BIOztBQUVBLG1EQUFtRCx3QkFBd0I7QUFDM0U7O0FBRUEsaUVBQWUsaUJBQWlCOzs7Ozs7VUMzQ2hDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7O0FBRTFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxLQUFLLFNBQVMsZUFBZTtBQUN4Rjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxpREFBaUI7QUFDckIsSUFBSTtBQUNKLGdDQUFnQyxNQUFNO0FBQ3RDO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2RhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy90ZW1wZXJhdHVyZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3RvZ2xlLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRhdGVNYW5hZ2UgPSAoZGF0ZUFyZykgPT4ge1xuICBjb25zdCBkYXlzID0gWydTdW5kYXknLCAnTW9uZGF5JywgJ1RodWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXTtcblxuICBjb25zdCBtb250aHMgPSBbJ0p1bnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bicsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddO1xuXG4gIGNvbnN0IHllYXIgPSBkYXRlQXJnLmdldEZ1bGxZZWFyKCk7XG4gIGNvbnN0IG1vbnRoID0gbW9udGhzW2RhdGVBcmcuZ2V0TW9udGgoKV07XG4gIGNvbnN0IGRhdGUgPSBkYXRlQXJnLmdldERhdGUoKTtcbiAgY29uc3QgZGF5ID0gZGF5c1tkYXRlQXJnLmdldERheSgpXTtcblxuICByZXR1cm4gYCR7ZGF0ZX0gJHttb250aH0gKCR7ZGF5fSksICR7eWVhcn1gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0ZU1hbmFnZTtcbiIsIlxuY29uc3QgdGVtcFRvRiA9ICh0ZW1wKSA9PiB0ZW1wICogKDkgLyA1KSArIDMyO1xuXG5leHBvcnQgZGVmYXVsdCB0ZW1wVG9GOyIsImltcG9ydCB0ZW1wVG9GIGZyb20gJy4vdGVtcGVyYXR1cmUnO1xuXG5jb25zdCBjb252ZXJ0VGVtcCA9ICh3ZWF0aGVyKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRUZW1wRiA9IHRlbXBUb0Yod2VhdGhlci5tYWluLnRlbXApO1xuXG4gIGNvbnN0IG1pblRlbXAgPSB0ZW1wVG9GKHdlYXRoZXIubWFpbi50ZW1wX21pbik7XG4gIGNvbnN0IG1heFRlbXAgPSB0ZW1wVG9GKHdlYXRoZXIubWFpbi50ZW1wX21heCk7XG4gIGNvbnN0IHN0YW5kYXJUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlbXAnKTtcbiAgY29uc3QgbWluTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbi1tYXgnKTtcbiAgY29uc3QgbXlUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY1RvZ2dsZScpO1xuXG4gIG15VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChteVRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICBzdGFuZGFyVGVtcC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKGN1cnJlbnRUZW1wRil9JmRlZztGYDtcbiAgICAgIG1pbk1heC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKG1pblRlbXApfSZkZWc7RiAobWluKSAvICR7TWF0aC5mbG9vcihtYXhUZW1wKX0mZGVnO0YgKG1heClgO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFuZGFyVGVtcC5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKX0mZGVnO0NgO1xuICAgICAgbWluTWF4LmlubmVySFRNTCA9IGAke01hdGguZmxvb3Iod2VhdGhlci5tYWluLnRlbXBfbWluKX0mZGVnO0MgKG1pbikgLyAke01hdGguY2VpbCh3ZWF0aGVyLm1haW4udGVtcF9tYXgpfSZkZWc7QyAobWF4KWA7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnZlcnRUZW1wOyIsImltcG9ydCBkYXRlTWFuYWdlIGZyb20gJy4vZGF0ZSc7XG5pbXBvcnQgY29udmVydFRlbXAgZnJvbSAnLi90b2dsZSc7XG5cbmNvbnN0IHNob3dXZWF0aGVyUmVwb3J0ID0gKHdlYXRoZXIpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaXR5Jyk7XG4gIGNpdHkuaW5uZXJUZXh0ID0gYCR7d2VhdGhlci5uYW1lfSwgJHt3ZWF0aGVyLnN5cy5jb3VudHJ5fWA7XG5cbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcCcpO1xuICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKX0mZGVnO0NgO1xuXG4gIGNvbnN0IG1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtaW4tbWF4Jyk7XG4gIG1pbk1heC5pbm5lckhUTUwgPSBgJHtNYXRoLmZsb29yKHdlYXRoZXIubWFpbi50ZW1wX21pbil9JmRlZztDIChtaW4pIC8gJHtNYXRoLmNlaWwod2VhdGhlci5tYWluLnRlbXBfbWF4KX0mZGVnO0MgKG1heClgO1xuXG4gIGNvbnN0IHdlYXRoZXJUeXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJyk7XG4gIHdlYXRoZXJUeXBlLmlubmVyVGV4dCA9IGAke3dlYXRoZXIud2VhdGhlclswXS5tYWlufWA7XG5cbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpO1xuICB3ZWF0aGVySWNvbi5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbn1gO1xuXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpO1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgZGF0ZS5pbm5lclRleHQgPSBkYXRlTWFuYWdlKG5ld0RhdGUpO1xuICBjb252ZXJ0VGVtcCh3ZWF0aGVyKTtcblxuICBjb25zdCB3ZWF0aGVyVHlwZXMgPSB7XG4gICAgQ2xlYXI6ICdzdW4nLFxuICAgIENsb3VkczogJ2Nsb3VkeScsXG4gICAgUmFpbjogJ3JhaW4nLFxuICAgIE1pc3Q6ICdmb2cnLFxuICAgIEZvZzogJ2ZvZycsXG4gICAgU25vdzogJ3Nub3cnLFxuICAgIFRodW5kZXJzdG9ybXM6ICd0aHVuZGVyJyxcbiAgICBEcml6emxlOiAndGh1bmRlcicsXG4gICAgSGF6ZTogJ2ZvZycsXG4gIH07XG5cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJy4vaW1hZ2VzLyR7d2VhdGhlclR5cGVzW3dlYXRoZXJUeXBlLnRleHRDb250ZW50XX0uZ2lmJylgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaWNvbicpLnNyYyA9IGAuL2ljb25zLyR7d2VhdGhlckljb24udGV4dENvbnRlbnR9LnBuZ2A7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaG93V2VhdGhlclJlcG9ydDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBzaG93V2VhdGhlclJlcG9ydCBmcm9tICcuL3dlYXRoZXInO1xuXG5jb25zdCB3ZWF0aGVyQXBpID0ge1xuICBrZXk6ICcyYWMyYTIwMWY5YTI5OGZkNmNlMmI1NjliZjMwMjQ0OCcsXG59O1xuXG5jb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Vycm9yJyk7XG5tZXNzYWdlLmlubmVySFRNTCA9ICcnO1xuXG5jb25zdCBnZXRSZXBvcnQgPSBhc3luYyAoY2l0eSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPSR7d2VhdGhlckFwaS5rZXl9JnVuaXRzPW1ldHJpY2AsXG4gICAgKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zdCB3ZWF0aGVyID0gcmVzdWx0O1xuICAgIHNob3dXZWF0aGVyUmVwb3J0KHdlYXRoZXIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYHRoaXMgJHtlcnJvcn1gO1xuICB9XG59O1xuXG5cblxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Yi1idXR0b24nKTtcbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1ib3gnKS52YWx1ZTtcbiAgZ2V0UmVwb3J0KGNpdHkpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlcicpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cblxuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LWJveCcpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgZ2V0UmVwb3J0KHNlYXJjaC52YWx1ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=