import './ItemCount.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';





export const ItemCount = ({max, counter, setCounter, handelAgregar}) => {


     const handleSumar = () =>{
        if (counter < max){ 
        setCounter(counter + 1)
        }
     }

     const handleRestar = () =>{
        if (counter > 1){ 
        setCounter(counter - 1)
        }
     }

  
    return(
        
          
                <Card.Body className='primerCard'>
                          <button onClick={handleRestar} className='btn btn-outline-dark '>-</button>
                              <span className='mx-2'> {counter} </span>
                          <button onClick={handleSumar} className='btn btn-dark '>+</button>
                          <Button onClick={handelAgregar}variant="dark m-2 start-50"> Agregar al Carrito </Button>
                 </Card.Body>
             
       
    )

}