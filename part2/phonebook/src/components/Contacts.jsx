import React from "react";
import Person from "./Person";

const Contacts = ({ toShow, handleDelete }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {toShow.map((person) => (
        <Person
          person={person}
          key={person.id}
          handleDelete={() => handleDelete(person.id)}
        />
      ))}
    </div>
  );
};

export default Contacts;
