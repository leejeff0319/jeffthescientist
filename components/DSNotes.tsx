import { useState } from 'react';

function NotesComponent() {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState('');
  
    const handleAddNote = () => {
      setNotes([...notes, currentNote]);
      setCurrentNote(''); // clear the input
    };
  
    return (
      <div>
        <h2>Notes</h2>
        <textarea value={currentNote} onChange={(e) => setCurrentNote(e.target.value)}></textarea>
        <button onClick={handleAddNote}>Add Note</button>
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
    );
  }