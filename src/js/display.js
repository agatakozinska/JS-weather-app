export default class DisplayData {
	constructor() {
		this.results = document.querySelector('.app-results');
		this.city = document.querySelector('.location-city');
		this.country = document.querySelector('.location-country');
		this.temp = document.querySelector('.weather-temperature');
		this.description = document.querySelector('.weather-description__text');
		this.humidity = document.querySelector('.weather-humidity');
		this.wind = document.querySelector('.weather-wind');
	}

	weatherData(data) {
		const { name, sys: {country}, main: {temp, humidity}, wind: {speed} } = data;
		const { description } = data.weather[0];

		this.results.style.display = 'block';
		this.city.textContent = name;
		this.country.textContent = country;
		this.description.textContent = description;
		this.temp.textContent = temp;
		this.humidity.textContent = humidity;
		this.wind.textContent = speed;
	}
}