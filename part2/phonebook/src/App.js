import React, { useState, useEffect } from "react";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Notification from "./components/Notification";
import personService from "./services/person";
// import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searched, setSearched] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then((initialData) => {
        // const data = res.data;
        setPersons(initialData);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleForm = (event) => {
    event.preventDefault();

    // console.log(`submit clicked`);
    const newPerson = { name: newName, number: newNumber };

    const personExists = persons.find((p) => p.name === newName);

    if (!personExists && newName.length > 0 && newNumber.length > 0) {
      personService.create(newPerson).then((returnedPerson) => {
        setSuccess(true);
        setSuccessMessage(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 4000);
        setPersons(persons.concat(returnedPerson));
      });
    } else if (personExists) {
      window.confirm(`there is already a number for this contact, update?`);
      personService
        .update(personExists.id, { ...personExists, number: newNumber })
        .then((returnedPerson) =>
          setPersons(
            persons.map((p) => (p.id !== personExists.id ? p : returnedPerson))
          )
        )
        .catch((error) => {
          setSuccess(false);
          setSuccessMessage(
            `information of ${personExists.name} has already been removed`
          );
          setTimeout(() => {
            setSuccessMessage(null);
          }, 4000);
        });
    } else {
      alert(`${newName} and ${newNumber} is already added to phonebook`);
    }

    setNewName("");
    setNewNumber("");
  };

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearch = (e) => {
    setSearched(e.target.value);
  };

  const searchResults = persons.filter((p) =>
    p.name.toLocaleLowerCase().includes(searched.toLocaleLowerCase())
  );

  const toShow = searchResults.length > 0 ? searchResults : persons;

  const handleDelete = (id) => {
    const person = persons.find((p) => p.id === id);

    personService.remove(id, person).then((deleted) => {
      window.confirm(`Delete ${person.name}?`);
      setPersons(persons.filter((p) => p.id !== id));
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={successMessage} success={success} />
      <Filter searched={searched} handleSearch={handleSearch} />
      <Form
        handleForm={handleForm}
        handleInput={handleInput}
        handleNumber={handleNumber}
        newName={newName}
        newNumber={newNumber}
      />
      <Contacts toShow={toShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
