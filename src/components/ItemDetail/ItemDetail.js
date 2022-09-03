import { useEffect, useState  } from 'react'
import { PedirDatos } from '../../helpers/PedirDatos'
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'



export const ItemDetail = () => {

    const [detail, setDetail]  = useState([])
      
       useEffect(() => {
           PedirDatos()
           .then( (res) => {
               setDetail(res)
           })
           .finally( () => {
               console.log("Terminamos")
           })
       }, [])
   
       return(
           <div>
               <ItemDetailContainer detail={detail}/>
           </div>
       )
   
   }