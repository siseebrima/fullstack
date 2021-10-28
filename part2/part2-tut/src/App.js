import React, { useState } from "react";
import "./App.css";
import Note from "./components/Note";

const App = (props) => {
  const [notes, setnotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);

  const addNote = (event) => {
    event.preventDefault();
    // console.log(`button clicked`, event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setnotes(notes.concat(noteObject));
    setNewNote("");
  };

  const handleInput = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  const toggleHandler = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={toggleHandler}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleInput} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
