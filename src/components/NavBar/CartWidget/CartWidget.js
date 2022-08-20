
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




export const CartWidget = () => {
  return (
   <div className='icon'>
    <FontAwesomeIcon icon={faCartShopping} size="3x"/>
   </div>
  )
}