import React from "react";

function LogIn() {
  return (
    <div className="LogIn">
      <header className="LIheader">
        {/* <img src={logo} className="logo" alt="logo" /> */}
        <p>
          Esta es la vista del LogIn.
        </p>
      </header>
      <section>
        <form>
          <input type="email" placeholder="Correo electrónico" />
          <input type="password" placeholder="Contraseña" />
        </form>
        <button>Inicia Sesión</button>
        <button>Continuar con Google</button>
      </section>
    </div>
  );
}

export default LogIn;