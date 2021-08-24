import logo from './LogoMB.png'

function First() {
  return (
    <div className="FView">
      <header className="FVheader">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Esta es la primera vista.
        </p>
      </header>
      <section>
        <h1>Ingresa para acceder a todas tus notas y apuntes en un solo lugar.</h1>
        <button className="registroBtn">Regístrate</button>
        <button className="iniciarBtn">Inicia Sesión</button>
      </section>
    </div>
  );
}

export default First;