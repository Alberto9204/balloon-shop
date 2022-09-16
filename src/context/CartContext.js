import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(init)


    const addToCart = (item) => {
      setCart([...cart, item])
    }

    const removeItem = (id) => {
      setCart (cart.filter((item) => item.id !==id))
    }
  
    const isInCart = (id) =>{
      return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
      return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
      return cart.reduce((acc, item) => acc + item.cantidad * item.costo, 0)
    }

    const emptyCart = () => {
      Swal.fire({
        title: 'Estas seguro de Eliminar tu Carrtio',
        text: "Se perderan tus porductos seleccionados",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Borralos!'
      }).then((result) => {
        if (result.isConfirmed) {
          setCart([])
          
        }
      })
    }

    useEffect(() =>{
      localStorage.setItem('carrito', JSON.stringify(cart))
    }, [cart])

    return(
        <CartContext.Provider value={{ 
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
        }}>
                {children}

        </CartContext.Provider>
    )
}