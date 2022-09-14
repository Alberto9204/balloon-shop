import { useContext } from "react"
import { CartContext } from "../../context/CartContext"



export const Cart = () =>{

    const { cart } = useContext(CartContext)

    return(
    <div className="Container my-5">
    <h2>Aqui esta el carrito</h2>
    <hr/>
    { cart.map((item) =>(
        <div key={item.id} item={item}>
        
            <h3>{item.name}</h3>
            <p>precio{item.costo}</p>
            <p>cantidad{item.cantidad}</p>

            </div>
    ))}
    </div>
    )
}