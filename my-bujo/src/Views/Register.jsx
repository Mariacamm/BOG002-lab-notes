import React from "react";
import { registerUser } from "../Firebase/FirebaseAuth";
import { useState } from "react";


function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('')

  const rUser = (e) => {
    e.preventDefault();
    registerUser(email, password)
  }

  return (
    <>
      <div className="Register">
        <header className="SIheader">
          {/* <img src={logo} className="logo" alt="logo" /> */}
          <p>
            Esta es la vista del Registro.
          </p>
        </header>
        <form id="formRegister">
          <input type="email" id="emailRegister" name="email" placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value, email)} />

          <input type="password" id="passwordRegister" placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value, password)} />
          {console.log(email, password)}
          <button onClick= {rUser}>Registrarse</button>
          <button>Continuar con Google</button>
        </form>
      </div>
    </>
  );
}

export default Register;

// const formRegister = document.getElementById("formRegister");

// function prueba (){
//   // formRegister.addEventListener("submit", (e) => {
//     const emailRegister = document.getElementById("emailRegister");
//     const passwordRegister = document.getElementById("passwordRegister");
//     // e.preventDefault();
//     registerUser(emailRegister, passwordRegister)
//   };
// }

// formRegister.addEventListener("submit", (e) => {
//   const emailRegister = document.getElementById("emailRegister");
//   const passwordRegister = document.getElementById("passwordRegister");
//   registerUser(emailRegister, passwordRegister)
// });