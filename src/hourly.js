// import showDailyReport from './daily';

const weatherApi = {
  key: '6dedb46ebef0c664b3eab37ba3f7b970',
};

const message = document.querySelector('#error2');
message.innerHTML = '';


const dailyReport = async (city) => {
  try {
    const response = await fetch(
      `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${1}&appid=${weatherApi.key}&units=metric`,
    );
    console.log(dailyReport);

    const result = await response.json();
    const weather = result;
    showDailyReport(weather);
  } catch (error) {
    message.innerHTML = `this ${error}`;
  }
};



const btn = document.querySelector('#sub-button');
btn.addEventListener('click', () => {
  const city = document.querySelector('#input-box').value;
  dailyReport(city);
  document.querySelector('.weather2').style.display = 'block';
});


const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    dailyReport(search.value);
    document.querySelector('.weather2').style.display = 'block';
  }
});


// display the data in the UI function 

const showHourlyReport = (weather) => {
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

};

export default showHourlyReport;
