import showWeatherReport from './weather';

const weatherApi = {
  key: '2ac2a201f9a298fd6ce2b569bf302448',
  baseUrl: 'http://api.openweathermap.org/data/2.5/weather',
};

function getReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => weather.json()).then(showWeatherReport);
}

const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(search.value);
    document.querySelector('.weather').style.display = 'block';
  }
});
