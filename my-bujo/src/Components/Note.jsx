import { React, useState } from "react";
import { deleteNotes } from "../Firebase/Firestore";
import NewNote from "./NewNote";
// import logo from './LogoMB.png'

function Note({ title, note, date, id }) {

  const [show, setShow] = useState(false);

  const handleModalOpen = () => {
    setShow(true);
  };
  const handleModalClose = (e) => {
    setShow(false);
  };

  function deleteN() {
    deleteNotes(id)
  }

  return (
    <div className="FView">
      <header className="FVheader">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <h2>
          Titulo: {title};
        </h2>
      </header>
      <section>
        <h4>Nota: {note}</h4>
        <p>Fecha: {date},
          id: {id}</p>
        <button onClick={handleModalOpen}>Editar</button>
        <button onClick={deleteN}>Eliminar</button>
      </section>
      <div className="modal-background" hidden={!show}>
        <NewNote />
        <button onClick={handleModalClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default Note;