# Weather app 
This app can display current weather for different location and it is responsive. It fetches data from openweathermap.org/current however some data was changed -> for example the icons which I didn't like and replaced them with the icons from Freepik. Also added date for the app.

The purpose was to create a simple app with vanilla JavaScript (ES6) and Webpack. It displays:
* a city,
* a country,
* temperature,
* weather conditions: icon with description, wind speed and humidity,
* current date,
* messages errors: when empty string was submitted & when a city can't be found

<hr/>
<img src="https://i.gyazo.com/18a2384f2af50292968c6313cc6b0ea2.png" />
<hr/>

## Available Scripts

To run this project first you must type:
### `npm install` / `yarn install`

Then you can run:
### `npm start` / `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm build`/ `yarn start`

Builds the app for production to the `dist` folder.<br>
In production mode all files are optimized for the best performance, they are minified and the filenames include the hashes (excluding svg to find required icon to display).<br>

<hr/>

Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>

The main pic in header is from open-source illustrations page - unDraw.

<hr/>

#Personal notes:
* there is also an option to use `require.context` to dynamically load the images
* svg without hashes -> file-loader not url-loader
* to use async await, you have to add @babel/polyfill -> there were also comments about `babel-plugin-transform-runtime` and it needs `babel-runtime` and was a problem with that package