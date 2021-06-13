import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {NavBar} from "./components/navBar/navBar";
import {ItemListContainer} from "./components/itemListContainer/itemListContainer";

function App() {

  const name= 'Mueble Store';

  const item= 'Soy el Item List Container con props';

  return (
      <>
      <NavBar store={name} />


      <ItemListContainer greeting={item} />
      </>
  )
}

export default App;
