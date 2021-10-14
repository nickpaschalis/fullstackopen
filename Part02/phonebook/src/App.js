import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addContact = event => {
    event.preventDefault();
    if (persons.filter(person => person.name === newName).length > 0) {
      alert(`${newName} is already added to phonebook`);
    } else {
      setPersons(
        persons.concat([
          { name: newName, number: newNumber, id: persons.length + 1 }
        ])
      );
      setNewName('');
      setNewNumber('');
    }
  };

  const filterChangeHandler = event => {
    setFilter(event.target.value);
  };

  const nameChangeHandler = event => {
    setNewName(event.target.value);
  };

  const numberChangeHandler = event => {
    setNewNumber(event.target.value);
  };

  const contactsToShow = persons.filter(person =>
    person.name.toUpperCase().includes(filter.toUpperCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:{' '}
        <input value={filter} onChange={filterChangeHandler} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={nameChangeHandler} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChangeHandler} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {contactsToShow.map(person => (
          <li key={person.name}>
            {person.name} {person.number}{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
