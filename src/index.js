import showWeatherReport from './weather';
import showForecast from './forcast';

const weatherApi = {
  key: '2ac2a201f9a298fd6ce2b569bf302448',
};

const message = document.querySelector('#error');
message.innerHTML = '';

const getReport = async (city) => {
  try {
    // Retrieve the current weather data for the given city
    const currentResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi.key}&units=metric`,
    );
    const currentResult = await currentResponse.json();
    const currentWeather = currentResult;

    // Retrieve the 5-day forecast for the given city
    const forecastResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApi.key}&units=metric`,
    );
    const forecastResult = await forecastResponse.json();
    const forecastWeather = forecastResult.list;

    // Display the current weather data and 5-day forecast
    
    showWeatherReport(currentWeather);
    showForecast(forecastWeather);

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
