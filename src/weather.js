import { dateManage } from './date';

const tempToF = (temp) => temp * (9 / 5) + 32;
const convertTemp = (weather) => {
  const currentTempF = tempToF(weather.main.temp);

  const minTemp= tempToF(weather.main.temp_min);
  const maxTemp = tempToF(weather.main.temp_max);
  const standarTemp = document.querySelector('#temp');
  const minMax = document.querySelector("#min-max");
  const myToggle = document.querySelector('.box');

  myToggle.addEventListener('click', (event) => {
    if (myToggle.checked) {
      standarTemp.innerHTML = `${Math.floor(currentTempF)}&deg;F`;
      minMax.innerHTML = `${Math.floor(minTemp)}&deg;F (min) / ${Math.floor(maxTemp)}&deg;F (max)`;
    } else {
      standarTemp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
      minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    }
  });
};

const showWeatherReport = (weather) => {
  console.log(weather);

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
  date.innerText = dateManage(newDate);
  convertTemp(weather);

  const weatherTypes = {
    Clear: 'sun',
    Clouds: 'cloudy',
    Rain: 'rain',
    Mist: 'fog',
    Snow: 'snow',
    Thunderstorms: 'thunder',
    Haze: 'fog',
  };

  document.body.style.backgroundImage = `url('./images/${weatherTypes[weatherType.textContent]}.gif')`;

  document.querySelector('#icon').src = `./icons/${weatherIcon.textContent}.png`;
}

export { showWeatherReport };