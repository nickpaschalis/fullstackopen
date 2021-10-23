import React, { useState, useEffect } from 'react';

import contactService from './services/contacts';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Person from './components/Person';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState('');
  const [notificationColor, setNotificationColor] = useState('green');

  useEffect(() => {
    contactService
      .getAll()
      .then(initialContacts => setPersons(initialContacts));    
  }, []);

  const addContact = event => {
    event.preventDefault();
    const contact = persons.find(p => p.name === newName);
    const changedContact = {...contact, number: newNumber};
    if (contact) {
      let toUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (toUpdate) {
        contactService
          .update(contact.id, changedContact)
          .then(returnedContact => {
            setPersons(persons.map(p => p.id !== contact.id ? p : returnedContact ));
          })
          .catch(error => {
            setNotification(`Information of ${newName} has already been removed from server`);
            setNotificationColor('red');
            setTimeout(() => {
              setNotification('')
              setNotificationColor('green');
            }, 3000);
          })
      }

    } else {
      contactService
        .create({ name: newName, number: newNumber, id: persons[persons.length-1].id + 1 })
        .then(returnedContact => {
          setPersons(persons.concat(returnedContact));
          setNotification(`Added ${newName}`);
          setTimeout(() => setNotification(''), 3000);
          setNewName('');
          setNewNumber('');
        });
      }
  }

  const filterChangeHandler = event => {
    setFilter(event.target.value);
  };

  const nameChangeHandler = event => {
    setNewName(event.target.value);
  };

  const numberChangeHandler = event => {
    setNewNumber(event.target.value);
  };

  const deleteHandler = person => {
    let toDelete = window.confirm(`Delete ${person.name}?`);
    if (toDelete) {
      contactService
        .remove(person.id)
        .then(() =>
          setPersons(persons.filter(p => p.id !== person.id)))
    } 
  };

  const contactsToShow = persons.filter(person =>
    person.name.toUpperCase().includes(filter.toUpperCase())
  );
 
  return (
    <div>
      <h2>Phonebook</h2>
      {notification && <Notification notification={notification} notificationColor={notificationColor} />}
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
      <ul>
        {contactsToShow.map(
          person => 
            <Person 
              key={person.id}
              person={person}
              deletePerson={() => deleteHandler(person)}
            />   
        )}
      </ul>
    </div>
  );
};
export default App;
