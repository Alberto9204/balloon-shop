  import './ItemDetail.css'
   import Card from 'react-bootstrap/Card';
   import ListGroup from 'react-bootstrap/ListGroup';
   import { ItemCount } from '../ItemCount/ItemCount';
   
   export const ItemDetail = ( {detail = []} ) => {
     return(
       <div className="Container m-3 col-sm-6" >
           {detail.map((prod) =>{
               return (
                   <div key={prod.id} className="Container m-3 col-sm-6">
                   <Card style={{ width: '18rem' }}>
                     <Card.Img style={{ height: '18rem'}} variant="top" src={prod.img} alt={prod.name}/>
                     <Card.Body className='primerCard'>
                       <Card.Title>{prod.name}</Card.Title>
                       <Card.Text style={{ height: '6rem'}}>
                         {prod.descripcion}
                       </Card.Text>
                     </Card.Body>
                     <ListGroup className="list-group-flush">
                       <ListGroup.Item className='primerCard'><b>{prod.costo}</b></ListGroup.Item>
                       <ListGroup.Item className='primerCard'>Stock Disponible: <b>{prod.stock}</b></ListGroup.Item>
                       <ItemCount/>
                     </ListGroup>
                   </Card>
                   </div>
                 );
           })}
       </div>
   )
   }   