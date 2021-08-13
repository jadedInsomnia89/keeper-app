/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

function AddNote(props) {
  const [noteToAdd, setNoteToAdd] = useState({ title: '', content: '' });

  function saveTextBoxState(e) {
    const { name, value } = e.target;
    setNoteToAdd((prev) => ({ ...prev, [name]: value }));
  }

  function submitNoteToAdd() {
    props.onAdd(noteToAdd);
    setNoteToAdd({ title: '', content: '' });
  }

  return (
    <div>
      <form>
        <input type="text" name="title" value={noteToAdd.title} placeholder="Title..." onChange={saveTextBoxState} />
        <textarea name="content" rows="3" value={noteToAdd.content} placeholder="Add some content..." onChange={saveTextBoxState} />
        <button type="button" onClick={submitNoteToAdd}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
