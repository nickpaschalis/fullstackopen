import React, { useState } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

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
      <Filter filter={filter} filterChangeHandler={filterChangeHandler} />

      <h2>add a new</h2>
      <PersonForm
        addContact={addContact}
        newName={newName}
        nameChangeHandler={nameChangeHandler}
        newNumber={newNumber}
        numberChangeHandler={numberChangeHandler}
      />

      <h2>Numbers</h2>
      <Persons contactsToShow={contactsToShow} />
    </div>
  );
};

export default App;
