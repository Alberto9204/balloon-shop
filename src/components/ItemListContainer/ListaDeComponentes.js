import './ListaDeComponentes.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ListaDeComponentes = ( {produ = []} ) => {
  return(
    <div className="Container m-3 col-sm-6" >
        {produ.map((prod) =>{
            return <div key={prod.id} className="Container m-3 col-sm-6">
                    <Card style={{ width: '18rem'}} >
                      <Card.Img style={{ height: '18rem'}} variant="top" src={prod.img} />
                        <Card.Body  className='primerCard'>
                          <Card.Title>{prod.name}</Card.Title>
                                    <Button variant="dark m-2 start-50">Mas Información</Button>
                          </Card.Body>
                      </Card>
                  </div>
        })}
    </div>
)
}

