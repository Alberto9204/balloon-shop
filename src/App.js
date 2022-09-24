
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { ListaDeComponentes } from './components/ItemListContainer/ListaDeComponentes';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Cart } from './components/Cart/Cart'
import { CartProvider} from './context/CartContext'
import { Checkout } from './components/CheckOut/Checkout'

function App() {

 
  return (

    <CartProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={ <ListaDeComponentes/> }/>
                <Route path='/produ/:categoryId/' element={ <ListaDeComponentes/> }/>
                <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/> 
                <Route path='/cart/' element={ <Cart/> }/>
                <Route path='/checkout' element={ <Checkout/> }/>
                <Route path='*' element= { < Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
     </CartProvider>
  );
}

export default App;
