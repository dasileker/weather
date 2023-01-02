import dateManage from "./date";


const ShowDailyReport = (weather) => {
  const city = document.querySelector('#city2');
  city.innerText = `${weather.city.name}, ${weather.sys.country}`;

  const temperature = document.querySelector('#temp2');
  temperature.innerHTML = `${Math.round(weather.list.temp[0].day)}&deg;C`;

  const minMax = document.querySelector('#min-max2');
  minMax.innerHTML = `${Math.floor(weather.list.temp[0].min)}&deg;C (min) / ${Math.ceil(weather.list.temp[0].max)}&deg;C (max)`;

  const weatherType = document.querySelector('#description2');
  weatherType.innerText = `${weather.list.weather[0].main}`;

  const weatherIcon = document.querySelector('#icon2');
  weatherIcon.innerText = `${weather.list.weather[0].icon}`;

  const date = document.querySelector('#date2');
  const newDate = new Date();
  date.innerText = dateManage(newDate);
  convertTemp(weather);

  const weatherTypes = {
    Clear: 'sun',
    Clouds: 'cloudy',
    Rain: 'rain',
    Mist: 'fog',
    Fog: 'fog',
    Snow: 'snow',
    Thunderstorms: 'thunder',
    Drizzle: 'thunder',
    Haze: 'fog',
  };


  document.querySelector('.weather2').style.backgroundImage = `url('./images/${weatherTypes[weatherType.textContent]}.gif')`;
  document.querySelector('.weather2').style.backgroundSize = 'cover';

  document.querySelector('#icon2').src = `./icons/${weatherIcon.textContent}.png`;

}

export default ShowDailyReport;