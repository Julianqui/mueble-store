import './App.css';
import {NavBar} from "./components/navBar/navBar";

function App() {

  const name= 'Mueble Store';

  const handClick =  () => alert('Me apretastesss');

  return (

      <NavBar store={name} onClick={handClick}>
        <span>
          Hola como andas
        </span>
      </NavBar>

  )
}

export default App;
