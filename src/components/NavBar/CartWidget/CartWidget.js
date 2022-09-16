
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {CartContext} from '../../../context/CartContext'
import './CartWidget.css'


export const CartWidget = () => {

    const { cartQuantity, cart } = useContext(CartContext)

  return (
   <Link to="/cart" className={ `widget ${cart.length > 0 ? 'widget-visible' :''}`}>
    <FontAwesomeIcon icon={faCartShopping} size="3x"/>
   <span>{cartQuantity()}</span>
   </Link>
  )
}