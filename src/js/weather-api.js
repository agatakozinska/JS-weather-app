import showMessage from './popup';

export default class Weather {
	constructor() {
		this.apiKey = '939066545737221c97315f84af3cde4f';
	}
	async getWeather(city) {
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.apiKey}&units=metric`;
		try {
			const resp = await fetch(url);
			if (resp.ok) {
				const data = await resp.json();
				return data;
			}
			if (!resp.ok && resp.status === 404) {
				showMessage('Something went wrong...' + (await resp.json()).message);
			} else {
				throw new Error(`Request rejected with status ${resp.status}`);
			}
		} catch (err) {
			throw new Error(`fetch failed: ${err}`);
		}
	}
}