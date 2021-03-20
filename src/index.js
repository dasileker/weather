import showWeatherReport from './weather';

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

const search = document.querySelector('#input-box');

search.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    getReport(search.value);
    document.querySelector('.weather').style.display = 'block';
  }
});
