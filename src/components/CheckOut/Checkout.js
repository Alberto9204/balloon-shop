import { useState } from 'react';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from 'react-router-dom'
import {addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';

 export const Checkout = () =>{

    const {cart, cartTotal, terminarCompra} =  useContext(CartContext)

    const [orderId, setOrder] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion:  '',
    })

    const handelInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
    
        const orden = {
            comprador: {
                comprador: values,
                items: cart,
                total: cartTotal()

        }
    }
   

            if (values.nombre.length <2){
                alert("Nombre invalido")
                return
            }
            if (values.direccion.length <2){
                alert("Direccion invalida")
                return
            }

        const ordenesRef = collection(db, 'ordenes')

        addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrder(doc.id)
                terminarCompra()
            })
            
    }


        if (orderId) {
            return(
                <div className='container my-5'>
                    <h2>Compra exitosa</h2>
                    <hr/>
                    <p>Tu Numero de orden es: <strong>{orderId}</strong></p>
                    <Link className="btn btn-dark m-2" to={"/"}>Regresar a Home</Link>
                </div>
            )
        }

        if(cart.length === 0) {
            return <Navigate to="/"/>
        }

    return(
        <div className='container my-5'>
            <h2>Llena tus datos</h2>
            <hr/>

            <form onSubmit={handelSubmit}>
                <input 
                    type={'text'} 
                    placeholder="Introduce tu nombre" 
                    className="my-2 form-control" 
                    name="nombre" 
                    onChange={handelInputChange} 
                    value={values.nombre}>
                </input><br/>

                <input 
                    type={'email'} 
                    placeholder="Introduce tu E-mail" 
                    className="my-2 form-control"  
                    name="email" 
                    onChange={handelInputChange} 
                    value={values.email}>
                </input><br/>

                <input  
                    type={'text'} 
                    placeholder="Introduce tu direccion" 
                    className="my-2 form-control" 
                    name="direccion" 
                    onChange={handelInputChange} 
                    value={values.direccion}>
                </input><br/>
        
                <button type="submit" className="btn btn-dark">Enviar</button>
             </form>

        </div>
    )

}