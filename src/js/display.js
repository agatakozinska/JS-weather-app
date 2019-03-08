
export default class DisplayData {
	constructor() {
		this.results = document.querySelector('.app-results');
		this.city = document.querySelector('.location-city');
		this.country = document.querySelector('.location-country');
		this.temp = document.querySelector('.weather-temperature');
		this.icon = document.querySelector('.weather-description__icon');
		// this.icon = document.querySelector('.weather-description');
		this.description = document.querySelector('.weather-description__text');
		this.humidity = document.querySelector('.weather-humidity');
		this.wind = document.querySelector('.weather-wind');
		this.test = '';
	}

	weatherData(data) {
		const { name, sys: {country}, main: {temp, humidity}, wind: {speed} } = data;
		const { description, icon } = data.weather[0];
	
		console.log(data.weather[0]);
		// this.test = require(`./src/img/${icon}.svg`);

		//eslint-disable-next-line
		const src= require(`../img/${icon}.svg`); 

		console.log(src);
		// const tag = `<img class="weather-description__icon" src="${ico}" />`;
		// console.log(tag);
		this.icon.src = src;


		this.results.style.display = 'block';
		this.city.textContent = name;
		this.country.textContent = country;
		this.description.textContent = description;
		this.temp.textContent = `${Math.round(temp)}°c`;
		this.humidity.textContent = `${humidity}%`;
		this.wind.textContent = `${Math.round(speed * 3.6)}km/h`;
	}
}