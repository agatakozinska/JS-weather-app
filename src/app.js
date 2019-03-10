//eslint-disable-next-line
require('normalize.css/normalize.css');
import './main.scss';
import '@babel/polyfill';
import showMessage from './js/popup';
import Weather from './js/weather-api';
import Display from './js/display';

const weatherData = new Weather();
const displayData = new Display();
const popup = document.querySelector('.app-message');
const submitButton = document.querySelector('.input-group');


popup.addEventListener('click', e => {
	if (e.target.classList != 'card-body' && e.target.classList != 'card-text') {
		popup.style.display = 'none';
	}
});

submitButton.addEventListener('submit', e => {
	e.preventDefault();
	const searchInput = document.querySelector('.search__input');
	const city = searchInput.value;

	if (city === '') {
		showMessage('First, you have to type a city :)');
	} else {

		weatherData.getWeather(city)
			.then(data => {
				displayData.weatherData(data);
			})
			.catch(err => console.error(err));
	}
});
