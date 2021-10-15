import Country from './Country';

const Countries = ({ filter, filteredCountries }) => {
  if (filter === '') {
    return null;
  } else if (filteredCountries.length > 10) {
    return <p> Too many matches, specify another filter </p>;
  } else if (filteredCountries.length === 1) {
    return <Country country={filteredCountries[0]} />;
  } else {
    return (
      <ul>
        {filteredCountries.map(country => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }
};

export default Countries;
