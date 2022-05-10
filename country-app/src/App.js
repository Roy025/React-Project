import React, { useState, useEffect } from "react";
import Countries from "./Components/Countries";
import "./App.css";

import Search from "./Components/Search";

const url = "https://restcountries.com/v3.1/all";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState(countries);

  const fetchData = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const remove = (name) => {
    const filter = filterCountries.filter(
      (country) => country.name.common !== name
    );
    setFilterCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountries);
  };

  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h2>Loading...</h2>}

      {error && <h2>{error.message}</h2>}

      <Search onSearch={handleSearch} />

      {countries && <Countries countries={filterCountries} onRemove={remove} />}
    </>
  );
};

export default App;
