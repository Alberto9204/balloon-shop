import { useState } from 'react';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from 'react-router-dom'
import {addDoc, collection, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
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

    const handelSubmit = async (e) => {
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

        const batch = writeBatch(db)    
        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'Productos')
        const q = query(productosRef, where(documentId(), 'in' , cart.map(item => item.id) ))

        const productos = await getDocs(q)
        
        const outOfStock = []

        productos.docs.forEach((doc)=>{
            const itemInCart = cart.find(item => item.id === doc.id)

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemInCart.cantidad
                })
            }else{
                outOfStock.push(itemInCart)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(()=> {
                    addDoc(ordenesRef, orden)
                        .then((doc) => {
                            setOrder(doc.id)
                            terminarCompra()
                        })
                })
        }else{
            alert("Hay algunos productos sin stock")
            
        }
            
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
                    placeholder="Introduce tu nombre completo" 
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