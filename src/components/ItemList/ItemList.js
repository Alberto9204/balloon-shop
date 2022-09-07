import './Itemlist.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


export const ItemList= ( {produ = []} ) => {
  return(
    <div className="Container m-3 col-sm-6" >
        {produ.map((item) =>{
            return <div key={item.id} className="Container m-3 col-sm-6">
                    <Card style={{ width: '18rem'}} >
                      <Card.Img style={{ height: '18rem'}} variant="top"  src= {item.img} alt={item.name} />
                        <Card.Body  className='primerCard'>
                          <Card.Title>{item.name}</Card.Title>
                                    <Link to={`/item/${item.id}`}className='btn btn-dark my-2'>Mas Información</Link>
                          </Card.Body>
                      </Card>
                  </div>
        })}
    </div>
)
}