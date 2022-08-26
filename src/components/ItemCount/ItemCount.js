import './ItemCount.css'
import { useState  } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const ItemCount = () => {

     let [counter, setCounter ] = useState(1)

     const handlesumar = () =>{
        if (counter < 15){ 
        setCounter(counter + 1)
        }
     }

     const handlerestar = () =>{
        if (counter > 1){ 
        setCounter(counter - 1)
        }
     }
    return(
        <div className="container my-2">
            <Card style={{ width: '18rem' }}>
                <Card.Body className='primerCard'>
                          <button onClick={handlerestar} className='btn btn-outline-dark '>-</button>
                              <span className='mx-2'> {counter} </span>
                          <button onClick={handlesumar} className='btn btn-dark '>+</button>
                          <Button variant="dark m-2 start-50">Agregar al Carrito</Button>
                 </Card.Body>
              </Card>
        </div>
    )

}