// forecast.js
import dateManage from './date';

const showForecast = (forecast) => {
  const forecastContainer = document.querySelector('.forecast-container');
  forecastContainer.innerHTML = '';

  for (let i = 0; i < forecast.list.length; i ++) {
    const dayData = forecast.list[i];

    const forecastCard = document.createElement('div');
    forecastCard.classList.add('forecast-card');

    const forecastDate = document.createElement('div');
    forecastDate.classList.add('forecast-date');
    forecastDate.innerText = dateManage(new Date(dayData.dt_txt));

    const forecastIcon = document.createElement('img');
    forecastIcon.classList.add('forecast-icon');
    forecastIcon.src = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;

    const forecastTempMinMax = document.createElement('div');
    forecastTempMinMax.classList.add('forecast-temp-min-max');
    forecastTempMinMax.innerHTML = `Min: ${Math.round(dayData.main.temp_min)}°C / Max: ${Math.round(dayData.main.temp_max)}°C`;

    const forecastWind = document.createElement('div');
    forecastWind.classList.add('forecast-wind');
    forecastWind.innerText = `Wind: ${dayData.wind.speed} m/s`;

    const sunriseTime = new Date(forecast.city.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(forecast.city.sunset * 1000).toLocaleTimeString();
    const forecastSunriseSunset = document.createElement('div');
    forecastSunriseSunset.classList.add('forecast-sunrise-sunset');
    forecastSunriseSunset.innerHTML = `Sunrise: ${sunriseTime} / Sunset: ${sunsetTime}`;

    forecastCard.append(forecastDate, forecastIcon, forecastTempMinMax, forecastWind, forecastSunriseSunset);
    forecastContainer.append(forecastCard);
  }
};

export default showForecast;
