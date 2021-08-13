/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import Footer from './Footer';
import AddNote from './AddNote';
import Note from './Note';
import Header from './Header';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(noteToAdd) {
    setNotes((prev) => [...prev, noteToAdd]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <AddNote onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
