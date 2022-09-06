
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ListaDeComponentes } from './components/ItemListContainer/ListaDeComponentes';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ListaDeComponentes/> }/>
        <Route path='/produ/:categoryId/' element={ <ListaDeComponentes/> }/>
        <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/> 
        <Route path='*' element= { < Navigate to="/" />} />
          
        
      </Routes>
     
     
     
     
     </BrowserRouter>
  );
}

export default App;
