import 'normalize.css/normalize.css';
import './main.scss';
import "@babel/polyfill";

class Weather {
  constructor() {
    this.apiKey = '939066545737221c97315f84af3cde4f';
  }
  async getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}`;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      //display message when a city is not found
      if (data.cod == 404) {
        showMessage('Something went wrong...' + data.message);
      } else {
        return data;
      }
    } catch (err) {
      console.log(`fetch failed: ${err}`);
    }
  }
}


const popup = document.querySelector('.app-message');
const submitButton = document.querySelector('.input-group');

const showMessage = (text) => {
  const popupText = document.querySelector('.card-text');
  popup.style.display = 'block';
  popupText.textContent = text;
}

popup.addEventListener('click', e => {
  if (e.target.classList != "card-body" && e.target.classList != "card-text") {
    popup.style.display = 'none';
  }
})

submitButton.addEventListener('submit', e => {
  e.preventDefault();
  const searchInput = document.querySelector('.search__input');
  const city = searchInput.value;

  if (city === '') {
    showMessage('First, you have to type a city :)');
  } else {
    const weatherData = new Weather();
    weatherData.getWeather(city)
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  }
})
