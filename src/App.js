
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ListaDeComponentes } from './components/ListaDeComponentes/ListaDeComponentes';


function App() {
  return (
    <div >
     <NavBar/>
     <ListaDeComponentes Productos="Flores, Personalizados, Piñatas, Cajas, Burbujas"/>
     
     
     
    </div>
  );
}

export default App;
