import React from "react";
import { useState } from "react";
import { addNotes } from "../Firebase/Firestore";

function NewNote() {

  // Estados para almacenar información de las notas
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  let date = new Date().toLocaleDateString("en-GB", {
		hour: "2-digit",
		minute: "2-digit"
	})

  const valueNotes = {
    title: title,
    note: note,
    date: date,
  }

  const newNote = (e) => {
    e.preventDefault();
    addNotes(valueNotes)
  }

  return (
    <div className="newNote">
      <header className="newNoteHeader">
      </header>
      <div>
        <input 
          type="text"
          className="titleNote"
          placeholder="Titulo"
          onChange={(e) => setTitle(e.target.value, title)}
        />
        <br />
        <textarea className="contentNote" placeholder="Escribe aquí tu nota"
          onChange={(e) => setNote(e.target.value, note)}></textarea>
        <button onClick={newNote}>Guardar</button>
      </div>
    
    </div>
  );
}

export default NewNote;