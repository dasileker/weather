/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// const input = document.querySelector('');
// const query = document.querySelector('');
// const input = document.querySelector('');

window.addEventListener('load', () => {
  let long;
  let lat;
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      lang = position.coords.longitude;
      lat = position.coords.latitude;

      const weather = `http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2ac2a201f9a298fd6ce2b569bf302448}`;
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={2ac2a201f9a298fd6ce2b569bf302448}');
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBeUUsVUFBVSxRQUFRLGlDQUFpQztBQUM1SCxLQUFLOztBQUVMLDZEQUE2RCxVQUFVLFFBQVEsaUNBQWlDO0FBQ2hIO0FBQ0EsQ0FBQyxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJycpO1xuLy8gY29uc3QgcXVlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcnKTtcbi8vIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignJyk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBsZXQgbG9uZztcbiAgbGV0IGxhdDtcbiAgXG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKHBvc2l0aW9uID0+IHtcbiAgICAgIGxhbmcgPSBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlO1xuICAgICAgbGF0ID0gcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlO1xuXG4gICAgICBjb25zdCB3ZWF0aGVyID0gYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT17Y2l0eSBuYW1lfSZhcHBpZD17MmFjMmEyMDFmOWEyOThmZDZjZTJiNTY5YmYzMDI0NDh9YDtcbiAgICB9KTtcblxuICAgIGZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9e2NpdHkgbmFtZX0mYXBwaWQ9ezJhYzJhMjAxZjlhMjk4ZmQ2Y2UyYjU2OWJmMzAyNDQ4fScpO1xuICB9XG59KTsiXSwic291cmNlUm9vdCI6IiJ9