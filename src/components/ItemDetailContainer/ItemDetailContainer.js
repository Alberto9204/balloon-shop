import { useEffect, useState  } from 'react'
import { PedirDatos } from '../../helpers/PedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'

export const ItemDetailContainer = () => {

    const [detail, setDetail]  = useState([])
    const { itemId } = useParams()

    console.log(itemId)
      
       useEffect(() => {
           PedirDatos()
           .then( (res) => {
                setDetail(res.filter((item) => item.id === Number(itemId)))  
           })
           .finally( () => {
               console.log("Terminamos")
           })
       }, [itemId])
   
       return(
           <div>
               <ItemDetail detail = { detail }/>
           </div>
       )
   
   }


