/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function AddNote(props) {
  const [noteToAdd, setNoteToAdd] = useState({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState(false);

  function saveTextBoxState(e) {
    const { name, value } = e.target;
    setNoteToAdd((prev) => ({ ...prev, [name]: value }));
  }

  function submitNoteToAdd() {
    props.onAdd(noteToAdd);
    setNoteToAdd({ title: '', content: '' });
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            type="text"
            name="title"
            value={noteToAdd.title}
            placeholder="Title..."
            onChange={saveTextBoxState}
          />
        )}
        <textarea
          name="content"
          rows={isExpanded ? 3 : 1}
          value={noteToAdd.content}
          placeholder="Add some content..."
          onChange={saveTextBoxState}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNoteToAdd}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default AddNote;
