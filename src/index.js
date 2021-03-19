
// (https://api.openweathermap.org/data/2.5/weather?q={fes}&appid={2ac2a201f9a298fd6ce2b569bf302448})

const weatherApi = {
  key: '2ac2a201f9a298fd6ce2b569bf302448',
  baseUrl: 'http://api.openweathermap.org/data/2.5/weather',
};

function dateManage(dateArg) {
  const days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const months = ['Junuary', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];

  const year = dateArg.getFullYear();
  const month = months[dateArg.getMonth()];
  const date = dateArg.getDate();
  const day = days[dateArg.getDay()];

  return `${date} ${month} (${day}), ${year}`;
}

function showWeatherReport(weather) {
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

  const weatherTypes = {
    'Clear': 'sun',
    'Clouds': 'cloudy',
    'Rain': 'rain',
    'Mist': 'fog',
    'Snow': 'snow',
    'Thunderstorms': 'thunder',
    'Haze': 'fog'
  }

  document.body.style.backgroundImage = `url('./images/${weatherTypes[weatherType.textContent]}.gif')`;

  document.querySelector('#icon').src = `./icons/${weatherIcon.textContent}.png`;
}

// display the data weather report
function getReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => weather.json()).then(showWeatherReport);
}

//  Event listner function
const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(search.value);
    document.querySelector('.weather').style.display = 'block';
  }
});
