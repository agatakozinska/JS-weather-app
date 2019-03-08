import showMessage from './popup';

export default class Weather {
	constructor() {
		this.apiKey = '939066545737221c97315f84af3cde4f';
	}
	async getWeather(city) {
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`;
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
			throw new Error(`fetch failed: ${err}`);
		}
	}
}