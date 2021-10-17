import React, { useState } from 'react';

import Country from './Country';

const ShowCountries = ({ filteredCountries }) => {
  const [countryClicked, setCountryClicked] = useState();

  const clickHandler = event => {
    const selected = filteredCountries.filter(
      filtCountry => filtCountry.name === event.target.id
    );
    setCountryClicked(selected[0]);
  };

  return (
    <div>
      {!countryClicked ? (
        <ul>
          {filteredCountries.map(filCountry => (
            <li key={filCountry.name}>
              {filCountry.name}
              <button
                key={filCountry.name}
                id={filCountry.name}
                onClick={clickHandler}
              >
                show
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <Country country={countryClicked} />
      )}
    </div>
  );
};

export default ShowCountries;
