import { React, useState, useEffect } from "react";
import { getNotes } from "../Firebase/Firestore";
import Note from "../Components/Note"
import NewNote from "../Components/NewNote";
// import logo from './LogoMB.png'

function Feed() {

  const [note, setNote] = useState([]);
  const [show, setShow] = useState(false);

  const handleModalOpen = () => {
    setShow(true);
  };
  const handleModalClose = (e) => {
    setShow(false);
  };

  useEffect(() => {
    getNotes(setNote)
  }, []);

  console.log(note)

  return (
    <div className="FView">
      <header className="FVheader">
        {/* <img src={logo} className="logo" alt="logo" /> */}
      </header>
      <div className="modal-background" hidden={!show}>
        <NewNote />
        <button onClick={handleModalClose}>Cerrar</button>
      </div>
      <section>
        <button onClick={handleModalOpen}>Crear nueva nota</button>
      </section>
      <div>
      {note.map((note) =>
        <Note key={note.id} className="noteContainer" title={note.title} note={note.note} id={note.id} date={note.date} />
      )}
      </div>
    </div>
  );
}

export default Feed;