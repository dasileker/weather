import showDailyReport from './daily';

const weatherApi = {
  key: '6dedb46ebef0c664b3eab37ba3f7b970',
};

const message = document.querySelector('#error2');
message.innerHTML = '';


const dailyReport = async (city) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherApi}&units=metric`,
    );

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