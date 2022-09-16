import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const Cart = () =>{

    const { cart, cartTotal, emptyCart } = useContext(CartContext)

    return(
    <div className="container my-5">
        <h2>Carrito de compras</h2>
        <hr/>

    { cart.map((item) =>(
        <div key={item.id}>    
        <h3>{item.name}</h3><br/>
        <p>Costo: {item.costo} </p>
        <p>Cantidad: {item.cantidad} </p>
        <hr/>
        </div>
    ))}

    <h4>Total: $ {cartTotal()}</h4>
    <button onClick={emptyCart} className="btn btn-dark">Vaciar Carrito</button>
    </div>
    )
}