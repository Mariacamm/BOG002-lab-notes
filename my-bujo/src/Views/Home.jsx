import logo from '../Recursos/LogoMB.png'
// import { useHistory } from "react-router-dom";

function Home ({ history }) {
  return (
    <div className="Home">
      <header className="headerHome">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Esta es la primera vista.
        </p>
      </header>
      <section>
        <h1>Ingresa para acceder a todas tus notas y apuntes en un solo lugar.</h1>
        <button className="registroBtn" onClick= {() => { history.push("/register") }}>Regístrate</button>
        <button className="iniciarBtn" onClick= {() => { history.push("/login") }}>Inicia Sesión</button>
      </section>
    </div>
  );
}

export default Home;


// function Button() {
//   let history = useHistory();


// function handleClick() {
//     history.push("/login");
//   }

//   return (
//     <button type="button" onClick={handleClick}>
//       LOGIN
//     </button>
//   );
// }