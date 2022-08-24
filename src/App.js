
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ListaDeComponentes } from './components/ListaDeComponentes/ListaDeComponentes';
import { ItemCount } from './components/ItemCount/ItemCount'

function App() {
  return (
    <div >
     <NavBar/>
     <ListaDeComponentes Productos="Flores, Personalizados, Piñatas, Cajas, Burbujas"/>
     <ItemCount/>
     
     
     
    </div>
  );
}

export default App;
