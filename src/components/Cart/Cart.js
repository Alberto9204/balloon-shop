import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Cart.css'
import {BsTrashFill} from 'react-icons/bs'
import { Link } from "react-router-dom";



export const Cart = () =>{

    const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

        if (cart.length === 0){
            return (
                <div className="container my-5">
                <h2>Tu Carrito está vacío</h2>
                <hr/>
                <Link to='/' className="btn btn-dark">Ir a Comprar</Link>
              </div>
            )
        }

    return(
    <div className="container my-5">
        <h2>Carrito de compras</h2>
               <div className="d-flex justify-content-end">
               <button onClick={emptyCart} className="btn btn-dark">Vaciar Carrito</button>
               </div>
               <hr/>
           { cart.map((item) =>(
               <div className="container my-5" key={item.id}> 
           
           <Card className="text-center card" style={{ width: '18rem' }}>
           <Card.Header ><b>{item.name}</b></Card.Header>
           <ListGroup className="card">
               <ListGroup.Item className="card"><img className="img"style={{ height: '10rem'}}  src= {item.img} alt={item.name} /></ListGroup.Item>
               <ListGroup.Item className="card">Cant: <b> {item.cantidad}</b></ListGroup.Item>
               <ListGroup.Item className="card">Costo: <b>$ {item.costo}.00</b></ListGroup.Item>
           </ListGroup>
           <button onClick={() => removeItem(item.id)} className="btn btn-dark mx-2 m-3"><BsTrashFill/></button>
           </Card>
           
               <hr/>
               </div>
           ))}
           
           <h4 className="d-flex justify-content-end">Total: $ {cartTotal()}.00</h4> 
             
        
        </div>
        )
    }
   