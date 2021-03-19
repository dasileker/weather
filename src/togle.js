import tempToF from './temperature';

const convertTemp = (weather) => {
  const currentTempF = tempToF(weather.main.temp);

  const minTemp = tempToF(weather.main.temp_min);
  const maxTemp = tempToF(weather.main.temp_max);
  const standarTemp = document.querySelector('#temp');
  const minMax = document.querySelector('#min-max');
  const myToggle = document.querySelector('.box');

  myToggle.addEventListener('click', () => {
    if (myToggle.checked) {
      standarTemp.innerHTML = `${Math.floor(currentTempF)}&deg;F`;
      minMax.innerHTML = `${Math.floor(minTemp)}&deg;F (min) / ${Math.floor(maxTemp)}&deg;F (max)`;
    } else {
      standarTemp.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
      minMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;
    }
  });
};

export default convertTemp;