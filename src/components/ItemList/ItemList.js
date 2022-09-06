import './Itemlist.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

export const ItemList= ( {produ = []} ) => {
  return(
    <div className="Container m-3 col-sm-6" >
        {produ.map((prod) =>{
            return <div key={prod.id} className="Container m-3 col-sm-6">
                    <Card style={{ width: '18rem'}} >
                      <Card.Img style={{ height: '18rem'}} variant="top"  src= {prod.img} alt={prod.name} />
                        <Card.Body  className='primerCard'>
                          <Card.Title>{prod.name}</Card.Title>
                                    <Link to={`/item/${prod.id}`}className='btn btn-dark my-2'>Mas Información</Link>
                          </Card.Body>
                      </Card>
                  </div>
        })}
    </div>
)
}