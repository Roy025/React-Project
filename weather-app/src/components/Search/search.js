import React, { useState } from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';
import { geoURL, geoOptions } from '../api';

export const Search = ({ onSearchChange }) => {
	const [search, setSearch] = useState(null);
	const handleChange = (searchdata) => {
		setSearch(searchdata);
		onSearchChange(searchdata);
	};
	const onLoadOptions = (inputvalue) => {
		return fetch(
			`${geoURL}/cities?minPopulation=1000000&namePrefix=${inputvalue}`,
			geoOptions
		)
			.then((response) => response.json())
			.then((response) => {
				return {
					options: response.data.map((city) => {
						return {
							value: `${city.latitude}, ${city.longitude}`,
							label: `${city.name}, ${city.countryCode}`,
						};
					}),
				};
			})
			.catch((err) => console.error(err));
	};
	return (
		<AsyncPaginate
			placeholder="Search Cities"
			debounceTimeout={600}
			value={search}
			onChange={handleChange}
			loadOptions={onLoadOptions}
		/>
	);
};
