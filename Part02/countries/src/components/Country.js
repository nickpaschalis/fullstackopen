const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>population: {country.population.toLocaleString()}</p>
      <p>capital: {country.capital}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt='the national flag' />
    </div>
  );
};

export default Country;
