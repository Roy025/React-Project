import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import './Forcast.css';
const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];
const Forcast = ({ data }) => {
	const today = new Date().getDay();
	const forcastDay = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, today)
	);
	console.log(forcastDay);

	return (
		<>
			<h4 style={{ marginLeft: '5px' }}>Forecast</h4>
			<Accordion allowZeroExpanded>
				{data.list.slice(0, 7).map((item, idx) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className="daily card">
									<div className="daily-item row">
										<img
											src={`icons/${item.weather[0].icon}.png`}
											className="icon-small"
											alt="weather"
										/>
										<div className="day col-sm-7">{forcastDay[idx]}</div>
										<div className="day-description col-sm-3 text-end">
											{item.weather[0].description}
										</div>
										<div className="min-max col-sm-1 ms-auto">
											{Math.round(item.main.temp_max)}°C /
											{Math.round(item.main.temp_min)}°C
										</div>
									</div>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className="daily-details-grid row">
								<div className="col-md-6 text-end">
									<div className="daily-details-grid-item">
										<label>Pressure:</label>
										<label>{item.main.pressure}</label>
									</div>
									<div className="daily-details-grid-item">
										<label>Humidity:</label>
										<label>{item.main.humidity}</label>
									</div>
									<div className="daily-details-grid-item">
										<label>Clouds:</label>
										<label>{item.clouds.all}%</label>
									</div>
								</div>
								<div className="col-md-6">
									<div className="daily-details-grid-item">
										<label>Wind speed:</label>
										<label>{item.wind.speed} m/s</label>
									</div>
									<div className="daily-details-grid-item">
										<label>Sea level:</label>
										<label>{item.main.sea_level}m</label>
									</div>
									<div className="daily-details-grid-item">
										<label>Feels like:</label>
										<label>{item.main.feels_like}°C</label>
									</div>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>
		</>
	);
};

export default Forcast;
