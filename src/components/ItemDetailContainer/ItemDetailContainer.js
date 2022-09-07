import { useEffect, useState  } from 'react'
import { PedirDatos } from '../../helpers/PedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import Spinner from 'react-bootstrap/Spinner';

export const ItemDetailContainer = () => {

    const [detail, setDetail]  = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    console.log(itemId)
      
       useEffect(() => {
        setLoading(true)
           PedirDatos()
           .then( (res) => {
                setDetail(res.filter((item) => item.id === Number(itemId)))  
           })
           .finally( () => {
             setLoading(false)
           })
       }, [itemId])
   
       return(
           <div>
            {
                loading
                ?
                <Spinner animation="grow" role="status">
                    <span className=" p-5 col-sm-3">Cargando</span>
                </Spinner>
                :<ItemDetail detail = { detail }/>
            }
               
           </div>
       )
   
   }


