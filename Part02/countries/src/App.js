import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState('');

  const filterHandler = event => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toUpperCase().includes(filter.toUpperCase())
  );

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      find countries:
      <input value={filter} onChange={filterHandler} />
      <Countries filter={filter} filteredCountries={filteredCountries} />
    </div>
  );
};

export default App;
