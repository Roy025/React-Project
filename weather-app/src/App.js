import './App.css';
import { Search } from './components/Search/search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Currentweather } from './components/current-weather/current-weather';
import { useState } from 'react';
import { openKey, openURL } from './components/api';
import Forcast from './components/Forcast/Forcast';
function App() {
	const [currentWeather, setCurrentWeather] = useState(null);
	const [forcast, setForcast] = useState(null);
	const onhandleSearchChange = (searchdata) => {
		const [lat, lon] = searchdata.value.split('');
		const currentWeatherFetch = fetch(
			`${openURL}/weather?lat=${lat}&lon=${lon}&appid=${openKey}&units=metric`
		);
		const forcastFetch = fetch(
			`${openURL}/forecast?lat=${lat}&lon=${lon}&appid=${openKey}&units=metric`
		);
		Promise.all([currentWeatherFetch, forcastFetch])
			.then(async (response) => {
				const weatherResponse = await response[0].json();
				const forcastResponse = await response[1].json();

				setCurrentWeather({ city: searchdata.label, ...weatherResponse });
				setForcast({ city: searchdata.label, ...forcastResponse });
			})
			.catch((err) => console.log(err));
		console.log(searchdata);
	};
	console.log(currentWeather);
	console.log(forcast);
	return (
		<div className="container">
			<Search onSearchChange={onhandleSearchChange} />
			{currentWeather && <Currentweather data={currentWeather} />}
			{forcast && <Forcast data={forcast} />}
		</div>
	);
}

export default App;
