import showWeatherReport from './weather';
import showForecastReport from './forecast';

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
    showWeatherReport(weather);
  } catch (error) {
    message.innerHTML = `this ${error}`;
  }
};

const getForecast = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApi.key}&units=metric`,
    );

    const result = await response.json();
    const forecast = result;
    showForecastReport(forecast);
  } catch (error) {
    message.innerHTML = `this ${error}`;
  }
};


const search = document.querySelector('#input-box');
const navSearch = document.querySelector('#nav-search-box');
const navSearchBtn = document.querySelector('#nav-search-btn');
const inputSearchBtn = document.querySelector('#input-search-btn');

navSearchBtn.addEventListener('click', () => {
  getReport(navSearch.value);
  getForecast(navSearch.value);
  document.querySelector('.weather').style.display = 'block';
});

navSearch.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(navSearch.value);
    getForecast(navSearch.value);
    document.querySelector('.weather').style.display = 'block';
  }
});

inputSearchBtn.addEventListener('click', () => {
  getReport(search.value);
  getForecast(search.value);
  document.querySelector('.weather').style.display = 'block';
});

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(search.value);
    getForecast(search.value);
    document.querySelector('.weather').style.display = 'block';
  }
});
