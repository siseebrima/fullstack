import React, { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";
import noteService from "./services/notes";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
// import axios from "axios";

const App = (props) => {
  const [notes, setnotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    noteService
      .getAll()
      .then((initialData) => {
        // const data = res.data;
        setnotes(initialData);
      })
      .catch((err) => console.error(err));
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    // console.log(`button clicked`, event.target);
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    noteService
      .create(noteObject)
      .then((initialData) => {
        setnotes(notes.concat(initialData));
        setNewNote("");
      })
      .catch((err) => console.error(err));
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

  const handleImportance = (id) => {
    // console.log("importance of", id, "needs to be toggled");
    // const url = `http://10.1.1.162:3001/notes/${id}`;

    const note = notes.find((n) => n.id === id);

    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then((initialData) => {
        setnotes(notes.map((note) => (note.id !== id ? note : initialData)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${note.content}' was already removed from server`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);

        setnotes(notes.filter((n) => n.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={toggleHandler}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            note={note}
            key={note.id}
            toggleImportance={() => handleImportance(note.id)}
            // label={note.important}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={handleInput} />
        <button type="submit">save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
