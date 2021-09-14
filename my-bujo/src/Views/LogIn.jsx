import React from "react";
import { loginUser } from "../Firebase/FirebaseAuth";
import { useState } from "react";

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('')

  const lUser = (e) => {
    e.preventDefault();
    loginUser(email, password)
  }

  return (
    <div className="LogIn">
      <header className="LIheader">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <p>
          Esta es la vista del LogIn.
        </p>
      </header>
      <section>
        <form id="formLogin">
          <input type="email" id="emailLogin" placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value, email)} />
          
          <input type="password" id="passwordLogin" placeholder="Contraseña" 
          onChange={(e) => setPassword(e.target.value, password)} />
          <button onClick= {lUser}>Inicia Sesión</button>
          <button>Continuar con Google</button>
        </form>
      </section>
    </div>
  );
}

export default LogIn;

// const formLogin = document.getElementById("formLogin");

// formLogin.addEventListener("submit", (e) => {
//   const emailLogin= document.getElementById("emailLogin");
//   const passwordLogin = document.getElementById("passwordLogin");
//   loginUser(emailLogin, passwordLogin)
// });

// function prueba (){
//   formLogin.addEventListener("submit", (e) => {
//     const emailLogin= document.getElementById("emailLogin");
//     const passwordLogin = document.getElementById("passwordLogin");
//     loginUser(emailLogin, passwordLogin)
//   });
// }