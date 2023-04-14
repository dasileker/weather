import dateManage from './date';

const showForecastReport = (forecast) => {
  for (let i = 1; i <= 5; i++) {
    const forecastDate = new Date(forecast.list[i * 8 - 1].dt * 1000);
    const sunrise = new Date(forecast.city.sunrise * 1000);
    const sunset = new Date(forecast.city.sunset * 1000);
    const forecastDay = document.querySelector(`#day${i}`);
    forecastDay.innerHTML = `
      <div class="forecast-card">
        <div class="forecast-date">${dateManage(forecastDate)}</div>
        <div class="forecast-temp">${Math.round(forecast.list[i * 8 - 1].main.temp)}&deg;C</div>
        <div class="forecast-description">${forecast.list[i * 8 - 1].weather[0].main}</div>
        <div class="forecast-wind">Wind: ${forecast.list[i * 8 - 1].wind.speed} m/s</div>
        <div class="forecast-sunrise">Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}</div>
        <div class="forecast-sunset">Sunset: ${sunset.getHours()}:${sunset.getMinutes()}</div>
        <img src="./icons/${forecast.list[i * 8 - 1].weather[0].icon}.png" alt="Weather icon">
      </div>
    `;
  }
};



export default showForecastReport;
