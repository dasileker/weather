/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

// (https://api.openweathermap.org/data/2.5/weather?q={fes}&appid={2ac2a201f9a298fd6ce2b569bf302448})

const weatherApi = {
  key: "2ac2a201f9a298fd6ce2b569bf302448",
  baseUrl: "http://api.openweathermap.org/data/2.5/weather"
}
  

// display the data weather report
function getReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
      return weather.json();
    }).then(showWeatherReport);
}

// fetch the report
function showWeatherReport(weather) {
  console.log(weather);

  const city = document.querySelector('#city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  const temperature = document.querySelector("#temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  const minMax = document.querySelector("#min-max");
  minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  const weatherType = document.querySelector("#description");
  weatherType.innerText = `${weather.weather[0].main}`;

  const weatherIcon = document.querySelector('#icon');
  weatherIcon.innerText = `${weather.weather[0].icon}`;

  const date = document.querySelector("#date");
  const newDate = new Date();
  date.innerText = dateManage(newDate);


  if (weatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('./images/sun.gif')";

  } else if (weatherType.textContent == 'Clouds') {
    document.body.style.backgroundImage = "url('./images/cloudy.gif')";

  } else if (weatherType.textContent == 'Rain') {
    document.body.style.backgroundImage = "url('./images/rain.gif')";

  } else if (weatherType.textContent == 'Mist') {
    document.body.style.backgroundImage = "url('./images/fog.gif')";

  } else if (weatherType.textContent == 'Snow') {
    document.body.style.backgroundImage = "url('./images/snow.gif')";

  } else if (weatherType.textContent == 'Thunderstorms') {
    document.body.style.backgroundImage = "url('./images/thunder.gif')";

  } else if (weatherType.textContent == 'Haze') {
    document.body.style.backgroundImage = "url('./images/fog.gif')";
  }


  if (weatherIcon.textContent == "01d") {
    document.querySelector("#icon").src = './icons/01d.png';
  } else if (weatherIcon.textContent == "01n") {
    document.querySelector("#icon").src = './icons/01n.png';
  } else if (weatherIcon.textContent == "02d") {
    document.querySelector("#icon").src = './icons/02d.png';
  } else if (weatherIcon.textContent == "02n") {
    document.querySelector("#icon").src = './icons/02n.png';
  } else if (weatherIcon.textContent == "03d") {
    document.querySelector("#icon").src = './icons/03d.png';
  } else if (weatherIcon.textContent == "03n") {
    document.querySelector("#icon").src = './images/03n.png';
  } else if (weatherIcon.textContent == "04d") {
    document.querySelector("#icon").src = './images/04d.png';
  } else if (weatherIcon.textContent == "04n") {
    document.querySelector("#icon").src = './icons/04n.png';
  } else if (weatherIcon.textContent == "09d") {
    document.querySelector("#icon").src = './icons/09d.png';
  } else if (weatherIcon.textContent == "09n") {
    document.querySelector("#icon").src = './icons/09n.png';
  } else if (weatherIcon.textContent == "10d") {
    document.querySelector("#icon").src = './icons/10d.png';
  } else if (weatherIcon.textContent == "10n") {
    document.querySelector("#icon").src = './icons/10n.png';
  } else if (weatherIcon.textContent == "11d") {
    document.querySelector("#icon").src = './icons/11d.png';
  } else if (weatherIcon.textContent == "11n") {
    document.querySelector("#icon").src = './icons/11n.png';
  } else if (weatherIcon.textContent == "13d") {
    document.querySelector("#icon").src = './icons/13d.png';
  } else if (weatherIcon.textContent == "13n") {
    document.querySelector("#icon").src = './icons/13n.png';
  } else if (weatherIcon.textContent == "50d") {
    document.querySelector("#icon").src = './icons/50d.png';
  } else if (weatherIcon.textContent == "50n") {
    document.querySelector("#icon").src = './icons/50n.png';
  }
}

//  manage date

function dateManage(dateArg) {
  const days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const months = ["Junuary", "February", "March", "April", "May", "Jun", "July", "August", "September", "October", "November", "December"];

  const year = dateArg.getFullYear();
  const month = months[dateArg.getMonth()];
  const date = dateArg.getDate();
  const day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}

//  Event listner function
const search = document.querySelector("#input-box");

search.addEventListener("keypress", (event) => {
  // console.log(search.value);
  if (event.keyCode == 13) {
    console.log(search.value);
    getReport(search.value);
    document.querySelector(".weather").style.display = "block";
  }

});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHVEQUF1RCxJQUFJLFFBQVEsaUNBQWlDOztBQUVwRztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CLEtBQUssS0FBSyxTQUFTLGVBQWU7QUFDaEU7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsYUFBYSxJQUFJLG9CQUFvQjs7QUFFM0Q7QUFDQSw2QkFBNkIsOEJBQThCLEtBQUs7O0FBRWhFO0FBQ0Esd0JBQXdCLGtDQUFrQyxLQUFLLFlBQVksaUNBQWlDLEtBQUs7O0FBRWpIO0FBQ0EsNkJBQTZCLHdCQUF3Qjs7QUFFckQ7QUFDQSw2QkFBNkIsd0JBQXdCOztBQUVyRDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxHQUFHO0FBQ0g7O0FBRUEsR0FBRztBQUNIOztBQUVBLEdBQUc7QUFDSDs7QUFFQSxHQUFHO0FBQ0g7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLEtBQUssR0FBRyxNQUFNLElBQUksSUFBSSxLQUFLLEtBQUs7QUFDNUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIChodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPXtmZXN9JmFwcGlkPXsyYWMyYTIwMWY5YTI5OGZkNmNlMmI1NjliZjMwMjQ0OH0pXG5cbmNvbnN0IHdlYXRoZXJBcGkgPSB7XG4gIGtleTogXCIyYWMyYTIwMWY5YTI5OGZkNmNlMmI1NjliZjMwMjQ0OFwiLFxuICBiYXNlVXJsOiBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXJcIlxufVxuICBcblxuLy8gZGlzcGxheSB0aGUgZGF0YSB3ZWF0aGVyIHJlcG9ydFxuZnVuY3Rpb24gZ2V0UmVwb3J0KGNpdHkpIHtcbiAgZmV0Y2goYCR7d2VhdGhlckFwaS5iYXNlVXJsfT9xPSR7Y2l0eX0mYXBwaWQ9JHt3ZWF0aGVyQXBpLmtleX0mdW5pdHM9bWV0cmljYClcbiAgICAudGhlbih3ZWF0aGVyID0+IHtcbiAgICAgIHJldHVybiB3ZWF0aGVyLmpzb24oKTtcbiAgICB9KS50aGVuKHNob3dXZWF0aGVyUmVwb3J0KTtcbn1cblxuLy8gZmV0Y2ggdGhlIHJlcG9ydFxuZnVuY3Rpb24gc2hvd1dlYXRoZXJSZXBvcnQod2VhdGhlcikge1xuICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcblxuICBjb25zdCBjaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NpdHknKTtcbiAgY2l0eS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLm5hbWV9LCAke3dlYXRoZXIuc3lzLmNvdW50cnl9YDtcbiAgXG4gIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZW1wXCIpO1xuICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHtNYXRoLnJvdW5kKHdlYXRoZXIubWFpbi50ZW1wKX0mZGVnO0NgO1xuXG4gIGNvbnN0IG1pbk1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWluLW1heFwiKTtcbiAgbWluTWF4LmlubmVySFRNTCA9IGAke01hdGguZmxvb3Iod2VhdGhlci5tYWluLnRlbXBfbWluKX0mZGVnO0MgKG1pbikgLyAke01hdGguY2VpbCh3ZWF0aGVyLm1haW4udGVtcF9tYXgpfSZkZWc7QyAobWF4KWA7XG5cbiAgY29uc3Qgd2VhdGhlclR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpO1xuICB3ZWF0aGVyVHlwZS5pbm5lclRleHQgPSBgJHt3ZWF0aGVyLndlYXRoZXJbMF0ubWFpbn1gO1xuXG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ljb24nKTtcbiAgd2VhdGhlckljb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlci53ZWF0aGVyWzBdLmljb259YDtcblxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlXCIpO1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgZGF0ZS5pbm5lclRleHQgPSBkYXRlTWFuYWdlKG5ld0RhdGUpO1xuXG5cbiAgaWYgKHdlYXRoZXJUeXBlLnRleHRDb250ZW50ID09ICdDbGVhcicpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlcy9zdW4uZ2lmJylcIjtcblxuICB9IGVsc2UgaWYgKHdlYXRoZXJUeXBlLnRleHRDb250ZW50ID09ICdDbG91ZHMnKSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnLi9pbWFnZXMvY2xvdWR5LmdpZicpXCI7XG5cbiAgfSBlbHNlIGlmICh3ZWF0aGVyVHlwZS50ZXh0Q29udGVudCA9PSAnUmFpbicpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlcy9yYWluLmdpZicpXCI7XG5cbiAgfSBlbHNlIGlmICh3ZWF0aGVyVHlwZS50ZXh0Q29udGVudCA9PSAnTWlzdCcpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCcuL2ltYWdlcy9mb2cuZ2lmJylcIjtcblxuICB9IGVsc2UgaWYgKHdlYXRoZXJUeXBlLnRleHRDb250ZW50ID09ICdTbm93Jykge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL3Nub3cuZ2lmJylcIjtcblxuICB9IGVsc2UgaWYgKHdlYXRoZXJUeXBlLnRleHRDb250ZW50ID09ICdUaHVuZGVyc3Rvcm1zJykge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL3RodW5kZXIuZ2lmJylcIjtcblxuICB9IGVsc2UgaWYgKHdlYXRoZXJUeXBlLnRleHRDb250ZW50ID09ICdIYXplJykge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy4vaW1hZ2VzL2ZvZy5naWYnKVwiO1xuICB9XG5cblxuICBpZiAod2VhdGhlckljb24udGV4dENvbnRlbnQgPT0gXCIwMWRcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKS5zcmMgPSAnLi9pY29ucy8wMWQucG5nJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVySWNvbi50ZXh0Q29udGVudCA9PSBcIjAxblwiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpLnNyYyA9ICcuL2ljb25zLzAxbi5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiMDJkXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaWNvbnMvMDJkLnBuZyc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckljb24udGV4dENvbnRlbnQgPT0gXCIwMm5cIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKS5zcmMgPSAnLi9pY29ucy8wMm4ucG5nJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVySWNvbi50ZXh0Q29udGVudCA9PSBcIjAzZFwiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpLnNyYyA9ICcuL2ljb25zLzAzZC5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiMDNuXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaW1hZ2VzLzAzbi5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiMDRkXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaW1hZ2VzLzA0ZC5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiMDRuXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaWNvbnMvMDRuLnBuZyc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckljb24udGV4dENvbnRlbnQgPT0gXCIwOWRcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKS5zcmMgPSAnLi9pY29ucy8wOWQucG5nJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVySWNvbi50ZXh0Q29udGVudCA9PSBcIjA5blwiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpLnNyYyA9ICcuL2ljb25zLzA5bi5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiMTBkXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaWNvbnMvMTBkLnBuZyc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckljb24udGV4dENvbnRlbnQgPT0gXCIxMG5cIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKS5zcmMgPSAnLi9pY29ucy8xMG4ucG5nJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVySWNvbi50ZXh0Q29udGVudCA9PSBcIjExZFwiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpLnNyYyA9ICcuL2ljb25zLzExZC5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiMTFuXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaWNvbnMvMTFuLnBuZyc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckljb24udGV4dENvbnRlbnQgPT0gXCIxM2RcIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKS5zcmMgPSAnLi9pY29ucy8xM2QucG5nJztcbiAgfSBlbHNlIGlmICh3ZWF0aGVySWNvbi50ZXh0Q29udGVudCA9PSBcIjEzblwiKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpY29uXCIpLnNyYyA9ICcuL2ljb25zLzEzbi5wbmcnO1xuICB9IGVsc2UgaWYgKHdlYXRoZXJJY29uLnRleHRDb250ZW50ID09IFwiNTBkXCIpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25cIikuc3JjID0gJy4vaWNvbnMvNTBkLnBuZyc7XG4gIH0gZWxzZSBpZiAod2VhdGhlckljb24udGV4dENvbnRlbnQgPT0gXCI1MG5cIikge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaWNvblwiKS5zcmMgPSAnLi9pY29ucy81MG4ucG5nJztcbiAgfVxufVxuXG4vLyAgbWFuYWdlIGRhdGVcblxuZnVuY3Rpb24gZGF0ZU1hbmFnZShkYXRlQXJnKSB7XG4gIGNvbnN0IGRheXMgPSBbXCJTdW5kYXlcIiwgXCJNb25kYXlcIiwgXCJUaHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl07XG5cbiAgY29uc3QgbW9udGhzID0gW1wiSnVudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1blwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXTtcblxuICBjb25zdCB5ZWFyID0gZGF0ZUFyZy5nZXRGdWxsWWVhcigpO1xuICBjb25zdCBtb250aCA9IG1vbnRoc1tkYXRlQXJnLmdldE1vbnRoKCldO1xuICBjb25zdCBkYXRlID0gZGF0ZUFyZy5nZXREYXRlKCk7XG4gIGNvbnN0IGRheSA9IGRheXNbZGF0ZUFyZy5nZXREYXkoKV07XG5cbiAgcmV0dXJuIGAke2RhdGV9ICR7bW9udGh9ICgke2RheX0pLCAke3llYXJ9YDtcbn1cblxuLy8gIEV2ZW50IGxpc3RuZXIgZnVuY3Rpb25cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtYm94XCIpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldmVudCkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhzZWFyY2gudmFsdWUpO1xuICBpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xuICAgIGNvbnNvbGUubG9nKHNlYXJjaC52YWx1ZSk7XG4gICAgZ2V0UmVwb3J0KHNlYXJjaC52YWx1ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9