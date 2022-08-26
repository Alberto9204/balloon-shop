import './ListaDeComponentes.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ListaDeComponentes = ( {produ = []} ) => {
  return(

    
    <div className="Container m-3 col-sm-6" >
        {produ.map((prod) =>{
            return <div key={prod.id}>
                    <Card style={{ width: '18rem', height:'500px'}} >
                      <Card.Img variant="top" src={prod.img} />
                        <Card.Body  className='primerCard'>
                          <Card.Title>{prod.name}</Card.Title>
                              <Card.Text>
                                {prod.descripcion}
                              </Card.Text>
                              <Card.Text>
                                {prod.costo}
                              </Card.Text>
                                <Button variant="dark m-2 start-50">Agregar al Carrito</Button>
                          </Card.Body>
                      </Card>
                  </div>
        })}
       
    </div>
)
}

