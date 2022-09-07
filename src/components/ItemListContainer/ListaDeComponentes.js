import { useEffect, useState  } from 'react'
import { PedirDatos } from '../../helpers/PedirDatos'
import { ItemList } from '../ItemList/ItemList'
import './ListaDeComponentes.css'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


export const ListaDeComponentes = () => {
 const [produ, setProdu]  = useState([])
 const [loading, setLoading] = useState(true)
 const { categoryId } = useParams()

   
    useEffect(() => {
        setLoading(true)
        PedirDatos()
        .then( (res) => {
            if (!categoryId) {
              setProdu(res)
            } else{
              setProdu (res.filter((prod) => prod.category === categoryId))
            }
            
        })
        .finally( () => {
            setLoading(false)
        })
    }, [categoryId])

    return(
        <div>
            {
              loading 
              ?  
                  <Spinner animation="grow" role="status">
                    <span className=" p-5 col-sm-3">Cargando</span>
                  </Spinner>
              :<ItemList produ={produ}/>
              
            }

        </div>
    )

}
