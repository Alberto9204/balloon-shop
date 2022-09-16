
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import {CartContext} from '../../../context/CartContext'



export const CartWidget = () => {

    const { cartQuantity } = useContext(CartContext)

  return (
   <Link to="/cart" className='icon'>
    <FontAwesomeIcon icon={faCartShopping} size="3x"/>
   <span>{cartQuantity()}</span>
   </Link>
  )
}