import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Country = ({ country }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`
      )
      .then(response => {
        setWeather(response.data);
      });
  }, [country, api_key]);

  return (
    <div>
      <h1>{country.name}</h1>
      <p>population: {country.population.toLocaleString()}</p>
      <p>capital: {country.capital}</p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt='the national flag' />
      {weather && (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>
            <b>Temperature:</b> {weather.current.temperature} °C
          </p>
          <img src={weather.current.weather_icons} alt='' />
          <p>
            <b> wind: </b>
            {weather.current.wind_speed} mph direction{' '}
            {weather.current.wind_dir}
          </p>
        </div>
      )}
    </div>
  );
};

export default Country;
