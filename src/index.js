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