   import './ItemDetail.css'
   import Card from 'react-bootstrap/Card';
   import ListGroup from 'react-bootstrap/ListGroup';
   import { ItemCount } from '../ItemCount/ItemCount';
   import { useState  } from 'react'

   export const ItemDetail = ( {detail = []} ) => {

       const [cantidad, setCantidad ] = useState(1)

       const handelAgregar = () =>{
        console.log({
          ...detail,
          cantidad
        })  
      }

     return(
       <div className="Container m-3 col-sm-6" >
           {detail.map((detail) =>{
               return (
                   <div key={detail.id} className="Container m-3 col-sm-6">
                   <Card style={{ width: '18rem' }}>
                     <Card.Img style={{ height: '18rem'}} variant="top" src={detail.img} alt={detail.name}/>
                     <Card.Body className='primerCard'>
                       <Card.Title>{detail.name}</Card.Title>
                       <Card.Text style={{ height: '6rem'}}>
                         {detail.descripcion}
                       </Card.Text>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                       <ListGroup.Item className='primerCard'><b>{detail.costo}</b></ListGroup.Item>
                       <ListGroup.Item className='primerCard'>Stock Disponible: <b>{detail.stock}</b></ListGroup.Item>
                       <ItemCount 
                            max={detail.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            handelAgregar={handelAgregar}
                       />
                     </ListGroup>
                   </Card>
                   </div>
                 );
           })}
       </div>
   )
   }   