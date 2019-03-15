
export default class DisplayData {
	constructor() {
		this.results = document.querySelector('.app-results');
		this.date = document.querySelector('.date');
		this.city = document.querySelector('.location-city');
		this.country = document.querySelector('.location-country');
		this.temp = document.querySelector('.weather-temperature');
		this.icon = document.querySelector('.weather-description__icon');
		this.description = document.querySelector('.weather-description__text');
		this.humidity = document.querySelector('.weather-humidity');
		this.wind = document.querySelector('.weather-wind');
	}

	weatherData(data) {
		const { name, sys: {country}, main: {temp, humidity}, wind: {speed} } = data;
		const { description } = data.weather[0];
		let { icon } = data.weather[0];

		//select icon from folder - depends on icons (day/night) from weather api
		switch(icon) {
		case('01n'):
		case('02n'):
		case('09n'):
			icon;
			break;
		default:
			icon = icon.slice(0,2);
			break;
		}
		//eslint-disable-next-line
		const src= require(`../img/${icon}.svg`);

		//date
		let today = (new Date()).toString().split(' ').splice(0,3);
		const day = today.shift();
		const date = today.reverse().join(' ');
		today = [day, date];

		this.icon.src = src;
		this.date.textContent = today;
		this.city.textContent = name;
		this.country.textContent = `(${country})`;
		this.description.textContent = description;
		this.temp.textContent = `${Math.round(temp)}°c`;
		this.humidity.textContent = `${humidity} %`;
		this.wind.textContent = `${Math.round(speed * 3.6)} km/h`;
	}
}