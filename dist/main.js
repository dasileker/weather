/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

//('http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2ac2a201f9a298fd6ce2b569bf302448}');
// api.openweathermap.org / data / 2.5 / weather ? q = { city name } & appid={ API key }


const weatherApi  = {
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

  const city = document.querySelector('#city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  const temperature = document.querySelector("#temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  const minMax = document.querySelector("#min-max");
  minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

  const weatherType = document.querySelector("#description");
  weatherType.innerText = `${weather.weather[0].main}`;
}

//  manage date



//  Event listner function
const search = document.querySelector("#input-box");

search.addEventListener("keypress", (event) => {
  
  if (event.keyCode == 13) {
    console.log(search.value);
    getReport(search.value);
  }

});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHNEQUFzRCxVQUFVLFFBQVEsaUNBQWlDO0FBQ3pHLHdEQUF3RCxZQUFZLFVBQVU7OztBQUc5RTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CLEtBQUssS0FBSyxTQUFTLGVBQWU7QUFDaEU7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGFBQWEsSUFBSSxvQkFBb0I7O0FBRTNEO0FBQ0EsNkJBQTZCLDhCQUE4QixLQUFLOztBQUVoRTtBQUNBLHdCQUF3QixrQ0FBa0MsS0FBSyxZQUFZLGlDQUFpQyxLQUFLOztBQUVqSDtBQUNBLDZCQUE2Qix3QkFBd0I7QUFDckQ7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8oJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT17Y2l0eSBuYW1lfSZhcHBpZD17MmFjMmEyMDFmOWEyOThmZDZjZTJiNTY5YmYzMDI0NDh9Jyk7XG4vLyBhcGkub3BlbndlYXRoZXJtYXAub3JnIC8gZGF0YSAvIDIuNSAvIHdlYXRoZXIgPyBxID0geyBjaXR5IG5hbWUgfSAmIGFwcGlkPXsgQVBJIGtleSB9XG5cblxuY29uc3Qgd2VhdGhlckFwaSAgPSB7XG4gIGtleTogXCIyYWMyYTIwMWY5YTI5OGZkNmNlMmI1NjliZjMwMjQ0OFwiLFxuICBiYXNlVXJsOiBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXJcIlxufVxuICBcblxuLy8gZGlzcGxheSB0aGUgZGF0YSB3ZWF0aGVyIHJlcG9ydFxuZnVuY3Rpb24gZ2V0UmVwb3J0KGNpdHkpIHtcbiAgZmV0Y2goYCR7d2VhdGhlckFwaS5iYXNlVXJsfT9xPSR7Y2l0eX0mYXBwaWQ9JHt3ZWF0aGVyQXBpLmtleX0mdW5pdHM9bWV0cmljYClcbiAgICAudGhlbih3ZWF0aGVyID0+IHtcbiAgICAgIHJldHVybiB3ZWF0aGVyLmpzb24oKTtcbiAgICB9KS50aGVuKHNob3dXZWF0aGVyUmVwb3J0KTtcbn1cblxuLy8gZmV0Y2ggdGhlIHJlcG9ydFxuZnVuY3Rpb24gc2hvd1dlYXRoZXJSZXBvcnQod2VhdGhlcikge1xuXG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpO1xuICBjaXR5LmlubmVyVGV4dCA9IGAke3dlYXRoZXIubmFtZX0sICR7d2VhdGhlci5zeXMuY291bnRyeX1gO1xuICBcbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RlbXBcIik7XG4gIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGAke01hdGgucm91bmQod2VhdGhlci5tYWluLnRlbXApfSZkZWc7Q2A7XG5cbiAgY29uc3QgbWluTWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtaW4tbWF4XCIpO1xuICBtaW5NYXguaW5uZXJIVE1MID0gYCR7TWF0aC5mbG9vcih3ZWF0aGVyLm1haW4udGVtcF9taW4pfSZkZWc7QyAobWluKSAvICR7TWF0aC5jZWlsKHdlYXRoZXIubWFpbi50ZW1wX21heCl9JmRlZztDIChtYXgpYDtcblxuICBjb25zdCB3ZWF0aGVyVHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIik7XG4gIHdlYXRoZXJUeXBlLmlubmVyVGV4dCA9IGAke3dlYXRoZXIud2VhdGhlclswXS5tYWlufWA7XG59XG5cbi8vICBtYW5hZ2UgZGF0ZVxuXG5cblxuLy8gIEV2ZW50IGxpc3RuZXIgZnVuY3Rpb25cbmNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtYm94XCIpO1xuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChldmVudCkgPT4ge1xuICBcbiAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICBjb25zb2xlLmxvZyhzZWFyY2gudmFsdWUpO1xuICAgIGdldFJlcG9ydChzZWFyY2gudmFsdWUpO1xuICB9XG5cbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==