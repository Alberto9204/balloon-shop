   import './ItemDetail.css'
   import Card from 'react-bootstrap/Card';
   import ListGroup from 'react-bootstrap/ListGroup';
   import { ItemCount } from '../ItemCount/ItemCount';
   import { useContext, useState  } from 'react'
   import { CartContext } from '../../context/CartContext';
   import { Link } from 'react-router-dom';

  

   export const ItemDetail = ( {item} ) => {

       const { cart, addToCart, isInCart} =useContext(CartContext)
       console.log(cart)
       
       const [cantidad, setCantidad ] = useState(1)
       const handelAgregar = () =>{
       const itemToCart = {
            id: item.id,
            name: item.name,
            costo: item.costo,
            img: item.img,
            cantidad
       }
       addToCart(itemToCart)

      }
       
     return(
       <div className="Container m-3 col-sm-6" >
                   <div key={item.id} className="Container m-3 col-sm-6">
                   <Card style={{ width: '18rem' }}>
                     <Card.Img style={{ height: '18rem'}} variant="top" src={item.img} alt={item.name}/>
                     <Card.Body className='primerCard'>
                       <Card.Title>{item.name}</Card.Title>
                       <Card.Text style={{ height: '6rem'}}>
                         {item.descripcion}
                       </Card.Text>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                       <ListGroup.Item className='primerCard'><b>Precio de ${item.costo}</b></ListGroup.Item>
                       <ListGroup.Item className='primerCard'>Stock Disponible: <b>{item.stock}</b></ListGroup.Item>
                    
                      {isInCart(item.id)
                      ? <Link to="/cart" className='btn btn-dark my-2'>Terminar mi compra</Link>
                      : <ItemCount 
                      max={item.stock}
                      counter={cantidad}
                      setCounter={setCantidad}
                      handelAgregar={handelAgregar}
                      />
                      }
                  
                     </ListGroup>
                   </Card>
                   </div>
       </div>
   )
   }   